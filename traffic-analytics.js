(function () {
  const config = window.RDG_TRAFFIC_CONFIG || {};
  if (config.enabled === false) return;

  const dashboardPath = config.dashboardPath || "/traffic.html";
  if (window.location.pathname.endsWith(dashboardPath)) return;

  const eventKey = "rdg_traffic_events_v1";
  const queueKey = "rdg_traffic_queue_v1";
  const visitorKey = "rdg_traffic_visitor_v1";
  const sessionKey = "rdg_traffic_session_v1";
  const maxStoredEvents = config.maxStoredEvents || 2500;
  const startedAt = Date.now();
  const page = `${window.location.pathname}${window.location.hash || ""}` || "/";
  const title = document.title || "Realm Defense Guide";

  function makeId(prefix) {
    return `${prefix}_${Math.random().toString(36).slice(2, 10)}_${Date.now().toString(36)}`;
  }

  function readJson(key, fallback) {
    try {
      const parsed = JSON.parse(localStorage.getItem(key) || "null");
      return parsed === null ? fallback : parsed;
    } catch {
      return fallback;
    }
  }

  function writeJson(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  function getVisitorId() {
    let visitorId = localStorage.getItem(visitorKey);
    if (!visitorId) {
      visitorId = makeId("visitor");
      localStorage.setItem(visitorKey, visitorId);
    }
    return visitorId;
  }

  function getSessionId() {
    const now = Date.now();
    let session = null;
    try {
      session = JSON.parse(sessionStorage.getItem(sessionKey) || "null");
    } catch {
      session = null;
    }
    if (!session || now - session.lastSeen > 30 * 60 * 1000) {
      session = { id: makeId("session"), createdAt: now, lastSeen: now };
    }
    session.lastSeen = now;
    sessionStorage.setItem(sessionKey, JSON.stringify(session));
    return session.id;
  }

  const visitorId = getVisitorId();
  const sessionId = getSessionId();

  function storeEvent(event) {
    const events = readJson(eventKey, []);
    if (!Array.isArray(events)) return;
    events.push(event);
    writeJson(eventKey, events.slice(-maxStoredEvents));
  }

  function queueEvent(event) {
    const queue = readJson(queueKey, []);
    if (!Array.isArray(queue)) return;
    queue.push(event);
    writeJson(queueKey, queue.slice(-120));
  }

  function flushQueue(useBeacon) {
    if (!config.endpoint) return;
    const queue = readJson(queueKey, []);
    if (!Array.isArray(queue) || !queue.length) return;

    const payload = {
      mode: "collect",
      siteId: config.siteId || window.location.hostname,
      events: queue.slice(0, 20),
    };
    const body = JSON.stringify(payload);

    if (useBeacon && navigator.sendBeacon) {
      const ok = navigator.sendBeacon(config.endpoint, new Blob([body], { type: "text/plain;charset=UTF-8" }));
      if (ok) writeJson(queueKey, queue.slice(payload.events.length));
      return;
    }

    fetch(config.endpoint, {
      method: "POST",
      mode: "no-cors",
      keepalive: true,
      headers: { "Content-Type": "text/plain;charset=UTF-8" },
      body,
    })
      .then(() => {
        const latest = readJson(queueKey, []);
        writeJson(queueKey, Array.isArray(latest) ? latest.slice(payload.events.length) : []);
      })
      .catch(() => {});
  }

  function track(type, payload = {}) {
    const event = {
      type,
      payload,
      page,
      title,
      visitorId,
      sessionId,
      path: window.location.pathname,
      hash: window.location.hash,
      referrer: document.referrer || "direct",
      language: document.documentElement.lang || navigator.language || "unknown",
      timestamp: new Date().toISOString(),
      timezone: Intl.DateTimeFormat().resolvedOptions().timeZone || "",
      userAgent: navigator.userAgent,
      viewport: {
        width: window.innerWidth,
        height: window.innerHeight,
      },
    };
    storeEvent(event);
    queueEvent(event);
    flushQueue(false);
  }

  track("page_view");

  const sectionObserver = "IntersectionObserver" in window
    ? new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            if (entry.target.dataset.trafficTracked === "true") return;
            entry.target.dataset.trafficTracked = "true";
            const section = entry.target.id || entry.target.getAttribute("aria-label") || entry.target.className || "unknown";
            track("section_view", { section });
          });
        },
        { threshold: 0.45 },
      )
    : null;

  if (sectionObserver) {
    document.querySelectorAll("main section[id], main article, footer").forEach((node) => sectionObserver.observe(node));
  }

  document.addEventListener("click", (event) => {
    const target = event.target.closest("a, button, input, select");
    if (!target) return;
    const label = (target.textContent || target.getAttribute("aria-label") || target.id || target.name || "control")
      .replace(/\s+/g, " ")
      .trim()
      .slice(0, 120);
    track("interaction", {
      tag: target.tagName.toLowerCase(),
      label,
      href: target.getAttribute("href") || "",
      id: target.id || "",
      className: typeof target.className === "string" ? target.className : "",
    });
  });

  document.addEventListener("change", (event) => {
    const target = event.target;
    if (!(target instanceof HTMLInputElement || target instanceof HTMLSelectElement)) return;
    track("input_change", {
      id: target.id || target.name || target.type,
      value: target.type === "search" ? "search-used" : target.value,
    });
  });

  let maxScroll = 0;
  let scrollTimer = 0;
  window.addEventListener(
    "scroll",
    () => {
      const height = Math.max(document.documentElement.scrollHeight - window.innerHeight, 1);
      maxScroll = Math.max(maxScroll, Math.round((window.scrollY / height) * 100));
      window.clearTimeout(scrollTimer);
      scrollTimer = window.setTimeout(() => {
        track("scroll_depth", { percent: Math.min(100, Math.max(0, maxScroll)) });
      }, 1000);
    },
    { passive: true },
  );

  function trackLeave() {
    track("page_leave", {
      durationSeconds: Math.max(1, Math.round((Date.now() - startedAt) / 1000)),
      maxScrollPercent: Math.min(100, Math.max(0, maxScroll)),
    });
    flushQueue(true);
  }

  document.addEventListener("visibilitychange", () => {
    if (document.visibilityState === "hidden") trackLeave();
  });
  window.addEventListener("pagehide", trackLeave);
  window.setInterval(() => flushQueue(false), 15000);
})();
