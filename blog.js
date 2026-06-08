const blogLangButtons = document.querySelectorAll(".language-option[data-lang]");
const blogLangPanels = document.querySelectorAll("[data-blog-lang]");
const blogLabels = {
  en: {
    brandSub: "Guide Database",
    heroes: "Heroes",
    stages: "Stages",
    towers: "Towers",
    lineups: "Lineups",
    tournament: "Tournament",
    blog: "Blog",
    home: "Home",
    about: "About",
    privacy: "Privacy",
  },
  zh: {
    brandSub: "攻略资料库",
    heroes: "英雄",
    stages: "关卡",
    towers: "防御塔",
    lineups: "阵容",
    tournament: "锦标赛",
    blog: "博客",
    home: "首页",
    about: "关于",
    privacy: "隐私",
  },
};

function updateBlogNavigation(lang) {
  const labels = blogLabels[lang];
  const brandSub = document.querySelector(".brand small");
  if (brandSub) brandSub.textContent = labels.brandSub;

  document.querySelectorAll(".nav a, footer a").forEach((link) => {
    const href = link.getAttribute("href") || "";
    if (href.endsWith("heroes.html")) link.textContent = labels.heroes;
    if (href.endsWith("stages.html")) link.textContent = labels.stages;
    if (href.endsWith("towers.html")) link.textContent = labels.towers;
    if (href.endsWith("lineups.html")) link.textContent = labels.lineups;
    if (href.endsWith("tournament.html")) link.textContent = labels.tournament;
    if (href === "./" || href === "./index.html" || href.endsWith("/blog/") || href.endsWith("blog/index.html")) link.textContent = labels.blog;
    if (href.endsWith("../index.html")) link.textContent = labels.home;
    if (href.endsWith("about.html")) link.textContent = labels.about;
    if (href.endsWith("privacy.html")) link.textContent = labels.privacy;
  });
}

function setBlogLanguage(lang) {
  const nextLang = lang === "zh" ? "zh" : "en";
  document.documentElement.lang = nextLang === "zh" ? "zh-CN" : "en";
  updateBlogNavigation(nextLang);
  blogLangButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.lang === nextLang);
  });
  blogLangPanels.forEach((panel) => {
    panel.hidden = panel.dataset.blogLang !== nextLang;
  });
}

blogLangButtons.forEach((button) => {
  button.addEventListener("click", () => setBlogLanguage(button.dataset.lang));
});

setBlogLanguage("en");
