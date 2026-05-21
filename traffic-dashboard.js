(function () {
  const config = window.RDG_TRAFFIC_CONFIG || {};
  const app = document.getElementById("app");
  const eventKey = "rdg_traffic_events_v1";

  function isAuthed() {
    return sessionStorage.getItem(config.dashboardSessionKey || "rdg_traffic_console_auth_v1") === "true";
  }

  async function sha256(text) {
    if (!window.crypto || !crypto.subtle) return sha256Fallback(text);
    const data = new TextEncoder().encode(text);
    const hash = await crypto.subtle.digest("SHA-256", data);
    return Array.from(new Uint8Array(hash))
      .map((byte) => byte.toString(16).padStart(2, "0"))
      .join("");
  }

  function sha256Fallback(text) {
    const rightRotate = (value, amount) => (value >>> amount) | (value << (32 - amount));
    const mathPow = Math.pow;
    const maxWord = mathPow(2, 32);
    const lengthProperty = "length";
    const ascii = unescape(encodeURIComponent(text));
    const words = [];
    let hash = sha256Fallback.h;
    let k = sha256Fallback.k;
    let result = "";
    let primeCounter = 0;
    const isComposite = {};

    if (!hash) {
      hash = sha256Fallback.h = [];
      k = sha256Fallback.k = [];
      for (let candidate = 2; primeCounter < 64; candidate += 1) {
        if (!isComposite[candidate]) {
          for (let multiple = 0; multiple < 313; multiple += candidate) {
            isComposite[multiple] = candidate;
          }
          if (primeCounter < 8) hash[primeCounter] = (mathPow(candidate, 0.5) * maxWord) | 0;
          k[primeCounter] = (mathPow(candidate, 1 / 3) * maxWord) | 0;
          primeCounter += 1;
        }
      }
    }

    let message = `${ascii}\x80`;
    const bitLength = ascii[lengthProperty] * 8;
    while ((message[lengthProperty] % 64) - 56) message += "\x00";
    for (let index = 0; index < message[lengthProperty]; index += 1) {
      const charCode = message.charCodeAt(index);
      words[index >> 2] |= charCode << (((3 - index) % 4) * 8);
    }
    words[words[lengthProperty]] = (bitLength / maxWord) | 0;
    words[words[lengthProperty]] = bitLength;

    for (let block = 0; block < words[lengthProperty];) {
      const w = words.slice(block, (block += 16));
      const oldHash = hash.slice(0);
      hash = hash.slice(0, 8);
      for (let index = 0; index < 64; index += 1) {
        const a = hash[0];
        const e = hash[4];
        if (index >= 16) {
          const s0 = rightRotate(w[index - 15], 7) ^ rightRotate(w[index - 15], 18) ^ (w[index - 15] >>> 3);
          const s1 = rightRotate(w[index - 2], 17) ^ rightRotate(w[index - 2], 19) ^ (w[index - 2] >>> 10);
          w[index] = (w[index - 16] + s0 + w[index - 7] + s1) | 0;
        }

        const ch = (e & hash[5]) ^ (~e & hash[6]);
        const maj = (a & hash[1]) ^ (a & hash[2]) ^ (hash[1] & hash[2]);
        const sigma0 = rightRotate(a, 2) ^ rightRotate(a, 13) ^ rightRotate(a, 22);
        const sigma1 = rightRotate(e, 6) ^ rightRotate(e, 11) ^ rightRotate(e, 25);
        const temp1 = (hash[7] + sigma1 + ch + k[index] + w[index]) | 0;
        const temp2 = (sigma0 + maj) | 0;

        hash = [(temp1 + temp2) | 0].concat(hash);
        hash[4] = (hash[4] + temp1) | 0;
      }
      for (let index = 0; index < 8; index += 1) {
        hash[index] = (hash[index] + oldHash[index]) | 0;
      }
    }

    for (let index = 0; index < 8; index += 1) {
      for (let byte = 3; byte + 1; byte -= 1) {
        result += ((hash[index] >> (byte * 8)) & 255).toString(16).padStart(2, "0");
      }
    }
    return result;
  }

  function renderLogin() {
    app.innerHTML = `
      <main class="es-login">
        <section class="es-login-card">
          <p class="es-kicker">PRIVATE TRAFFIC CONSOLE</p>
          <h1>网站流量统计登录</h1>
          <p class="es-muted">这个页面会部署在 GitHub Pages，但需要密码才能查看统计面板。</p>
          <form class="es-login-form" id="loginForm">
            <input class="es-input" id="passwordInput" type="password" autocomplete="current-password" placeholder="输入统计页面密码" />
            <button class="es-button es-button-primary" type="submit">登录</button>
            <div class="es-error" id="loginError"></div>
          </form>
        </section>
      </main>
    `;
    document.getElementById("loginForm").addEventListener("submit", async (event) => {
      event.preventDefault();
      const password = document.getElementById("passwordInput").value;
      let hashed = "";
      try {
        hashed = await sha256(password);
      } catch (error) {
        document.getElementById("loginError").textContent = "登录组件加载失败，请刷新页面后重试。";
        return;
      }
      if (!config.dashboardPasswordHash || hashed !== config.dashboardPasswordHash) {
        document.getElementById("loginError").textContent = "密码不正确。";
        return;
      }
      sessionStorage.setItem(config.dashboardSessionKey || "rdg_traffic_console_auth_v1", "true");
      renderShell();
    });
  }

  function readLocalEvents() {
    try {
      const events = JSON.parse(localStorage.getItem(eventKey) || "[]");
      return Array.isArray(events) ? events : [];
    } catch {
      return [];
    }
  }

  async function fetchRemoteEvents() {
    if (!config.endpoint) return null;
    const url = new URL(config.endpoint);
    url.searchParams.set("mode", "events");
    url.searchParams.set("siteId", config.siteId || window.location.hostname);
    if (config.endpointMode === "jsonp") {
      return fetchJsonp(url);
    }
    const response = await fetch(url.toString(), { cache: "no-store" });
    if (!response.ok) throw new Error(`Analytics endpoint returned ${response.status}`);
    const data = await response.json();
    return Array.isArray(data) ? data : data.events || [];
  }

  function fetchJsonp(url) {
    return new Promise((resolve, reject) => {
      const callbackName = `rdgTrafficJsonp_${Date.now()}_${Math.random().toString(36).slice(2)}`;
      const script = document.createElement("script");
      const timer = window.setTimeout(() => {
        cleanup();
        reject(new Error("Analytics JSONP endpoint timed out"));
      }, 12000);

      function cleanup() {
        window.clearTimeout(timer);
        delete window[callbackName];
        script.remove();
      }

      window[callbackName] = (data) => {
        cleanup();
        resolve(Array.isArray(data) ? data : data.events || []);
      };

      url.searchParams.set("callback", callbackName);
      script.src = url.toString();
      script.onerror = () => {
        cleanup();
        reject(new Error("Analytics JSONP endpoint failed"));
      };
      document.head.appendChild(script);
    });
  }

  function formatNumber(value) {
    return new Intl.NumberFormat("en-US").format(value || 0);
  }

  function formatDuration(seconds) {
    if (!seconds) return "0s";
    if (seconds < 60) return `${seconds}s`;
    return `${Math.floor(seconds / 60)}m ${seconds % 60}s`;
  }

  function dayKey(date) {
    return date.toISOString().slice(0, 10);
  }

  function getRangeDays(days) {
    const list = [];
    const today = new Date();
    for (let i = days - 1; i >= 0; i -= 1) {
      const date = new Date(today);
      date.setDate(today.getDate() - i);
      list.push(dayKey(date));
    }
    return list;
  }

  function groupCount(items, getKey) {
    return items.reduce((acc, item) => {
      const key = getKey(item) || "unknown";
      acc[key] = (acc[key] || 0) + 1;
      return acc;
    }, {});
  }

  function getFilteredEvents(events) {
    const range = document.getElementById("rangeFilter")?.value || "7";
    const page = document.getElementById("pageFilter")?.value || "all";
    const since = Date.now() - Number(range) * 24 * 60 * 60 * 1000;
    return events.filter((event) => {
      const time = new Date(event.timestamp).getTime();
      const eventPath = event.path || event.page || "/";
      const pageMatch = page === "all" || eventPath === page;
      return time >= since && pageMatch;
    });
  }

  function lineChart(values) {
    const width = 680;
    const height = 220;
    const pad = 28;
    const max = Math.max(...values.map((item) => item.value), 1);
    const step = (width - pad * 2) / Math.max(values.length - 1, 1);
    const points = values
      .map((item, index) => {
        const x = pad + step * index;
        const y = height - pad - (item.value / max) * (height - pad * 2);
        return `${x},${y}`;
      })
      .join(" ");
    return `
      <svg viewBox="0 0 ${width} ${height}" role="img" aria-label="Daily page views line chart">
        <line x1="${pad}" y1="${height - pad}" x2="${width - pad}" y2="${height - pad}" stroke="#00000026" />
        <polyline points="${points}" fill="none" stroke="#5B8FF9" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
        ${values
          .map((item, index) => {
            const x = pad + step * index;
            const y = height - pad - (item.value / max) * (height - pad * 2);
            return `<circle cx="${x}" cy="${y}" r="4" fill="#1667FF"><title>${item.label}: ${item.value}</title></circle>`;
          })
          .join("")}
        ${values
          .map((item, index) => {
            const x = pad + step * index;
            return `<text class="es-axis" x="${x}" y="${height - 4}" text-anchor="middle">${item.label.slice(5)}</text>`;
          })
          .join("")}
      </svg>
    `;
  }

  function barChart(items) {
    const max = Math.max(...items.map((item) => item.value), 1);
    return items
      .map((item) => {
        const width = Math.max(3, Math.round((item.value / max) * 100));
        return `
          <div style="display:grid;grid-template-columns:120px 1fr 42px;gap:12px;align-items:center;margin:12px 0;">
            <span class="es-axis">${item.label}</span>
            <span style="height:12px;border-radius:9999px;background:#0000000F;overflow:hidden;">
              <span style="display:block;width:${width}%;height:100%;background:#5B8FF9;"></span>
            </span>
            <strong>${item.value}</strong>
          </div>
        `;
      })
      .join("");
  }

  function donutChart(items) {
    const total = items.reduce((sum, item) => sum + item.value, 0) || 1;
    let offset = 25;
    const circles = items
      .map((item, index) => {
        const colors = ["#5B8FF9", "#30BF78", "#FAAD14", "#F5222D"];
        const dash = (item.value / total) * 100;
        const circle = `<circle cx="85" cy="85" r="56" fill="none" stroke="${colors[index % colors.length]}" stroke-width="18" stroke-dasharray="${dash} ${100 - dash}" stroke-dashoffset="-${offset}" pathLength="100" />`;
        offset += dash;
        return circle;
      })
      .join("");
    return `
      <svg viewBox="0 0 170 170" role="img" aria-label="Language split donut chart">
        <circle cx="85" cy="85" r="56" fill="none" stroke="#0000000F" stroke-width="18" />
        ${circles}
        <text x="85" y="80" text-anchor="middle" font-size="24" font-weight="500">${total}</text>
        <text x="85" y="102" text-anchor="middle" class="es-axis">events</text>
      </svg>
    `;
  }

  const timezoneLocations = {
    UTC: { label: "UTC / Unknown", lat: 0, lon: 0 },
    "Africa/Cairo": { label: "Egypt", lat: 26.8, lon: 30.8 },
    "Africa/Johannesburg": { label: "South Africa", lat: -30.6, lon: 22.9 },
    "Africa/Lagos": { label: "Nigeria", lat: 9.1, lon: 8.7 },
    "Africa/Nairobi": { label: "Kenya", lat: 0.1, lon: 37.9 },
    "America/Bogota": { label: "Colombia", lat: 4.6, lon: -74.1 },
    "America/Chicago": { label: "Central US", lat: 41.9, lon: -87.6 },
    "America/Denver": { label: "Mountain US", lat: 39.7, lon: -104.9 },
    "America/Los_Angeles": { label: "West US", lat: 34.1, lon: -118.2 },
    "America/Mexico_City": { label: "Mexico", lat: 19.4, lon: -99.1 },
    "America/New_York": { label: "East US", lat: 40.7, lon: -74 },
    "America/Phoenix": { label: "Southwest US", lat: 33.4, lon: -112.1 },
    "America/Sao_Paulo": { label: "Brazil", lat: -23.5, lon: -46.6 },
    "America/Toronto": { label: "Canada", lat: 43.7, lon: -79.4 },
    "Asia/Bangkok": { label: "Thailand", lat: 13.8, lon: 100.5 },
    "Asia/Dubai": { label: "UAE", lat: 25.2, lon: 55.3 },
    "Asia/Ho_Chi_Minh": { label: "Vietnam", lat: 10.8, lon: 106.7 },
    "Asia/Hong_Kong": { label: "Hong Kong", lat: 22.3, lon: 114.2 },
    "Asia/Jakarta": { label: "Indonesia", lat: -6.2, lon: 106.8 },
    "Asia/Kolkata": { label: "India", lat: 28.6, lon: 77.2 },
    "Asia/Manila": { label: "Philippines", lat: 14.6, lon: 121 },
    "Asia/Seoul": { label: "South Korea", lat: 37.6, lon: 127 },
    "Asia/Shanghai": { label: "China", lat: 31.2, lon: 121.5 },
    "Asia/Singapore": { label: "Singapore", lat: 1.3, lon: 103.8 },
    "Asia/Taipei": { label: "Taiwan", lat: 25, lon: 121.6 },
    "Asia/Tokyo": { label: "Japan", lat: 35.7, lon: 139.7 },
    "Australia/Melbourne": { label: "Australia", lat: -37.8, lon: 145 },
    "Australia/Sydney": { label: "Australia", lat: -33.9, lon: 151.2 },
    "Europe/Amsterdam": { label: "Netherlands", lat: 52.4, lon: 4.9 },
    "Europe/Berlin": { label: "Germany", lat: 52.5, lon: 13.4 },
    "Europe/London": { label: "United Kingdom", lat: 51.5, lon: -0.1 },
    "Europe/Madrid": { label: "Spain", lat: 40.4, lon: -3.7 },
    "Europe/Moscow": { label: "Russia", lat: 55.8, lon: 37.6 },
    "Europe/Paris": { label: "France", lat: 48.9, lon: 2.4 },
    "Europe/Rome": { label: "Italy", lat: 41.9, lon: 12.5 },
    "Europe/Warsaw": { label: "Poland", lat: 52.2, lon: 21 },
    "Pacific/Auckland": { label: "New Zealand", lat: -36.8, lon: 174.8 },
  };

  function inferLocation(event) {
    const timezone = event.timezone || "";
    if (timezoneLocations[timezone]) return timezoneLocations[timezone];
    if (timezone.startsWith("America/")) return { label: "Americas", lat: 25, lon: -80 };
    if (timezone.startsWith("Europe/")) return { label: "Europe", lat: 50, lon: 10 };
    if (timezone.startsWith("Asia/")) return { label: "Asia", lat: 30, lon: 105 };
    if (timezone.startsWith("Africa/")) return { label: "Africa", lat: 2, lon: 20 };
    if (timezone.startsWith("Australia/")) return { label: "Australia", lat: -25, lon: 133 };
    if (timezone.startsWith("Pacific/")) return { label: "Pacific", lat: -18, lon: 170 };
    if (/^zh/i.test(event.language || "")) return timezoneLocations["Asia/Shanghai"];
    return timezoneLocations.UTC;
  }

  function geoDistribution(events) {
    const pageViews = events.filter((event) => event.type === "page_view");
    const buckets = pageViews.reduce((acc, event) => {
      const location = inferLocation(event);
      const key = `${location.label}|${location.lat}|${location.lon}`;
      if (!acc[key]) acc[key] = { ...location, count: 0 };
      acc[key].count += 1;
      return acc;
    }, {});
    return Object.values(buckets).sort((a, b) => b.count - a.count);
  }

  function geoMapPanel(items) {
    const topItems = items.slice(0, 6);
    return `
      <div class="es-map-layout">
        <div class="es-map-frame" id="geoMap">
          <div class="es-map-loading">Loading world map...</div>
        </div>
        <div class="es-map-list">
          ${topItems
            .map(
              (item, index) => `
                <div class="es-map-row">
                  <span class="es-map-rank">${index + 1}</span>
                  <span>${item.label}</span>
                  <strong>${item.count}</strong>
                </div>
              `,
            )
            .join("") || `<div class="es-empty">暂无地区数据。</div>`}
        </div>
      </div>
    `;
  }

  function renderGeoMap(items) {
    const container = document.getElementById("geoMap");
    if (!container) return;
    if (!window.echarts) {
      container.innerHTML = `<div class="es-empty">ECharts 地图资源加载失败，请刷新页面后重试。</div>`;
      return;
    }

    const max = Math.max(...items.map((item) => item.count), 1);
    const chart = echarts.init(container, null, { renderer: "canvas" });
    const values = items.map((item) => ({
      name: item.label,
      value: [item.lon, item.lat, item.count],
    }));

    chart.setOption({
      backgroundColor: "transparent",
      tooltip: {
        trigger: "item",
        formatter(params) {
          if (params.seriesType !== "effectScatter") return params.name || "";
          return `${params.name}<br/>Page views: ${params.value[2]}`;
        },
      },
      geo: {
        map: "world",
        roam: true,
        zoom: 1.12,
        top: 18,
        bottom: 12,
        itemStyle: {
          areaColor: "#DCE8F8",
          borderColor: "rgba(22, 103, 255, 0.24)",
          borderWidth: 0.8,
        },
        emphasis: {
          itemStyle: {
            areaColor: "#C7DAF6",
          },
          label: {
            show: false,
          },
        },
      },
      series: [
        {
          name: "Page views",
          type: "effectScatter",
          coordinateSystem: "geo",
          data: values,
          symbolSize(value) {
            return Math.max(8, Math.min(26, 8 + Math.sqrt(value[2] / max) * 18));
          },
          rippleEffect: {
            brushType: "stroke",
            scale: 3.4,
          },
          itemStyle: {
            color: "#1667ff",
            shadowBlur: 12,
            shadowColor: "rgba(22, 103, 255, 0.42)",
          },
          label: {
            show: true,
            formatter: "{b}",
            position: "right",
            color: "#1f1f1f",
            fontSize: 11,
          },
          emphasis: {
            scale: true,
          },
        },
      ],
    });

    window.setTimeout(() => chart.resize(), 0);
    if (!renderGeoMap.resizeBound) {
      window.addEventListener("resize", () => {
        const current = document.getElementById("geoMap");
        const instance = current && echarts.getInstanceByDom(current);
        if (instance) instance.resize();
      });
      renderGeoMap.resizeBound = true;
    }
  }

  function summarize(events) {
    const filtered = getFilteredEvents(events);
    const pageViews = filtered.filter((event) => event.type === "page_view");
    const leaves = filtered.filter((event) => event.type === "page_leave");
    const interactions = filtered.filter((event) => event.type === "interaction");
    const sessions = new Set(filtered.map((event) => event.sessionId).filter(Boolean));
    const visitors = new Set(filtered.map((event) => event.visitorId).filter(Boolean));
    const avgDuration = leaves.length
      ? Math.round(leaves.reduce((sum, event) => sum + (event.payload?.durationSeconds || 0), 0) / leaves.length)
      : 0;
    const pages = groupCount(pageViews, (event) => event.path || event.page);
    const languages = groupCount(pageViews, (event) => event.language || event.payload?.language || "unknown");
    const days = getRangeDays(Number(document.getElementById("rangeFilter")?.value || "7"));
    const byDay = groupCount(pageViews, (event) => dayKey(new Date(event.timestamp)));
    const topReferrers = groupCount(pageViews, (event) => event.referrer || "direct");
    const geoItems = geoDistribution(pageViews);
    return {
      filtered,
      pageViews,
      interactions,
      sessions,
      visitors,
      avgDuration,
      pages,
      languages,
      topReferrers,
      geoItems,
      dayValues: days.map((day) => ({ label: day, value: byDay[day] || 0 })),
    };
  }

  function metricCard(label, value, trend) {
    return `
      <article class="es-card es-card-padding">
        <div class="es-metric-label">${label}</div>
        <div class="es-metric-value">${value}</div>
        <div class="es-trend">${trend}</div>
      </article>
    `;
  }

  async function loadEvents() {
    try {
      const remote = await fetchRemoteEvents();
      if (remote) return { events: remote, source: "remote" };
    } catch (error) {
      return { events: readLocalEvents(), source: "local", error: error.message };
    }
    return { events: readLocalEvents(), source: config.endpoint ? "remote-empty" : "local" };
  }

  function renderShell() {
    app.innerHTML = `
      <div class="es-shell">
        <aside class="es-sidebar">
          <div class="es-logo">
            <span class="es-logo-mark">RD</span>
            <strong>Traffic Console</strong>
            <span>Endogenous Security UI dashboard</span>
          </div>
          <a class="es-side-link" href="./index.html#overview">返回网站首页</a>
          <a class="es-side-link" href="./blog/realm-defense-guide.html">查看博客页</a>
          <button class="es-side-link" type="button" id="logoutButton" style="border:0;width:100%;text-align:left;color:#fff;">退出登录</button>
          <p class="es-side-note">前端密码门禁用于隐藏入口；GitHub Pages 无法提供真正的服务器级权限控制。</p>
        </aside>
        <main class="es-content">
          <header class="es-header">
            <div>
              <p class="es-kicker">ONLINE ANALYTICS</p>
              <h1>网站流量统计</h1>
              <p class="es-muted">监测线上访客、页面浏览、点击、语言、滚动深度和停留时间。</p>
            </div>
            <div class="es-actions">
              <select class="es-select" id="rangeFilter" aria-label="Range filter">
                <option value="7">Last 7 days</option>
                <option value="14">Last 14 days</option>
                <option value="30">Last 30 days</option>
              </select>
              <select class="es-select" id="pageFilter" aria-label="Page filter">
                <option value="all">All pages</option>
              </select>
              <button class="es-button" type="button" id="seedData">示例数据</button>
              <button class="es-button es-button-primary" type="button" id="refreshData">刷新</button>
            </div>
          </header>
          <div id="dashboard"></div>
        </main>
      </div>
    `;

    document.getElementById("logoutButton").addEventListener("click", () => {
      sessionStorage.removeItem(config.dashboardSessionKey || "rdg_traffic_console_auth_v1");
      renderLogin();
    });
    document.getElementById("rangeFilter").addEventListener("change", drawDashboard);
    document.getElementById("pageFilter").addEventListener("change", drawDashboard);
    document.getElementById("refreshData").addEventListener("click", drawDashboard);
    document.getElementById("seedData").addEventListener("click", seedData);
    drawDashboard();
  }

  function setupNotice(source, error) {
    if (config.endpoint && !error) return "";
    const message = error
      ? `远程统计接口读取失败，当前展示浏览器缓存数据。错误：${error}`
      : "还没有配置线上统计 endpoint。发布到 GitHub 后，页面会加载，但互联网访客数据需要先接入一个可写入的统计接口。";
    return `<section class="es-setup" style="margin-bottom:16px;">${message}</section>`;
  }

  async function drawDashboard() {
    const { events, source, error } = await loadEvents();
    const pages = [...new Set(events.map((event) => event.path || event.page).filter(Boolean))];
    const pageFilter = document.getElementById("pageFilter");
    const selected = pageFilter.value;
    pageFilter.innerHTML = `<option value="all">All pages</option>${pages
      .map((page) => `<option value="${page}">${page || "/"}</option>`)
      .join("")}`;
    pageFilter.value = pages.includes(selected) ? selected : "all";

    const summary = summarize(events);
    const pageItems = Object.entries(summary.pages)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 6)
      .map(([label, value]) => ({ label: label || "/", value }));
    const languageItems = Object.entries(summary.languages).map(([label, value]) => ({ label, value }));
    const referrerItems = Object.entries(summary.topReferrers)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 6)
      .map(([label, value]) => ({ label: label === "direct" ? "direct" : new URL(label, window.location.origin).hostname, value }));
    const recent = summary.filtered
      .slice(-14)
      .reverse()
      .map(
        (event) => `
          <tr>
            <td>${new Date(event.timestamp).toLocaleString()}</td>
            <td><span class="es-tag">${event.type}</span></td>
            <td>${event.path || event.page || "/"}</td>
            <td>${event.payload?.label || event.payload?.section || event.payload?.percent || event.language || ""}</td>
          </tr>
        `,
      )
      .join("");

    document.getElementById("dashboard").innerHTML = `
      ${setupNotice(source, error)}
      <section class="es-grid es-metrics">
        ${metricCard("Page views", formatNumber(summary.pageViews.length), source === "remote" ? "线上统计接口" : "浏览器缓存数据")}
        ${metricCard("Visitors", formatNumber(summary.visitors.size), "按访客 ID 去重")}
        ${metricCard("Sessions", formatNumber(summary.sessions.size), "30 分钟内连续访问")}
        ${metricCard("Avg duration", formatDuration(summary.avgDuration), "页面平均停留")}
      </section>
      <section class="es-grid es-charts" style="margin-top:16px;">
        <article class="es-card es-card-padding">
          <h2>Daily page views</h2>
          <div class="es-chart">${lineChart(summary.dayValues)}</div>
          <div class="es-legend"><span><i class="es-dot"></i>Page view events</span></div>
        </article>
        <article class="es-card es-card-padding">
          <h2>Language split</h2>
          <div class="es-chart" style="display:grid;place-items:center;">${donutChart(languageItems.length ? languageItems : [{ label: "none", value: 0 }])}</div>
          <div class="es-legend">${languageItems.map((item) => `<span><i class="es-dot"></i>${item.label}: ${item.value}</span>`).join("") || "No language events yet"}</div>
        </article>
      </section>
      <section class="es-card es-card-padding" style="margin-top:16px;">
        <h2>Global visitor distribution</h2>
        <p class="es-muted" style="margin:8px 0 0;">按浏览器时区估算地区分布，不采集精确 IP 地址。</p>
        <div class="es-chart es-map-chart">${geoMapPanel(summary.geoItems)}</div>
      </section>
      <section class="es-grid es-charts" style="margin-top:16px;">
        <article class="es-card es-card-padding">
          <h2>Top pages</h2>
          ${pageItems.length ? barChart(pageItems) : `<div class="es-empty">暂无页面浏览数据。</div>`}
        </article>
        <article class="es-card es-card-padding">
          <h2>Top referrers</h2>
          ${referrerItems.length ? barChart(referrerItems) : `<div class="es-empty">暂无来源数据。</div>`}
        </article>
      </section>
      <section class="es-card es-card-padding" style="margin-top:16px;">
        <h2>Recent events</h2>
        <div class="es-table-wrap">
          <table class="es-table">
            <thead><tr><th>Time</th><th>Type</th><th>Page</th><th>Detail</th></tr></thead>
            <tbody>${recent || `<tr><td colspan="4">暂无事件。</td></tr>`}</tbody>
          </table>
        </div>
      </section>
    `;
    renderGeoMap(summary.geoItems);
  }

  function seedData() {
    const now = Date.now();
    const pages = ["/index.html", "/index.html#heroes", "/index.html#levels", "/blog/realm-defense-guide.html"];
    const types = ["page_view", "interaction", "section_view", "page_leave"];
    const timezones = ["Asia/Shanghai", "America/New_York", "Europe/London", "Asia/Tokyo", "America/Los_Angeles", "Australia/Sydney"];
    const events = [];
    for (let i = 0; i < 90; i += 1) {
      const timestamp = new Date(now - Math.random() * 7 * 24 * 60 * 60 * 1000).toISOString();
      const page = pages[Math.floor(Math.random() * pages.length)];
      const type = types[Math.floor(Math.random() * types.length)];
      events.push({
        type,
        page,
        path: page.split("#")[0],
        hash: page.includes("#") ? `#${page.split("#")[1]}` : "",
        title: "Realm Defense Guide Database",
        visitorId: `visitor_demo_${Math.floor(Math.random() * 24)}`,
        sessionId: `session_demo_${Math.floor(i / 5)}`,
        timestamp,
        referrer: Math.random() > 0.55 ? "direct" : "https://www.google.com/",
        language: Math.random() > 0.35 ? "en" : "zh",
        timezone: timezones[Math.floor(Math.random() * timezones.length)],
        viewport: { width: 390 + Math.floor(Math.random() * 900), height: 844 },
        payload: {
          label: ["Heroes", "Stages", "Lineups", "Open the Guide"][Math.floor(Math.random() * 4)],
          section: ["heroes", "levels", "towers", "builds"][Math.floor(Math.random() * 4)],
          durationSeconds: 12 + Math.floor(Math.random() * 160),
          percent: 20 + Math.floor(Math.random() * 80),
        },
      });
    }
    localStorage.setItem(eventKey, JSON.stringify(readLocalEvents().concat(events).slice(-2500)));
    drawDashboard();
  }

  if (isAuthed()) {
    renderShell();
  } else {
    renderLogin();
  }
})();
