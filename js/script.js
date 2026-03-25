const portfolioData = {
  topSixFeatured: [
    {
      title: "Buildify",
      description:
        "Floor plans and building layouts with a HouseGAN++ style backbone, editing in the browser, and simple scoring so you can compare designs without squinting at CAD.",
      tags: ["React", "TypeScript", "FastAPI", "Applied AI"],
      code: "https://github.com/sarvanithin/Buildify",
      demo: "",
      image: "https://opengraph.githubassets.com/1/sarvanithin/Buildify"
    },
    {
      title: "ARES (Agentic Research & Evaluation Suite)",
      description:
        "I contribute to Martian's open ARES work around agentic eval and RL-ish environments. Good place to see how I think about benchmarks, not just demos.",
      tags: ["Open Source", "Ares", "AI Evaluation", "RL Environment"],
      code: "https://github.com/withmartian/ares",
      demo: "",
      image: "https://opengraph.githubassets.com/1/withmartian/ares"
    },
    {
      title: "EduBuddy",
      description:
        "Tutoring app idea: paths that adapt, progress you can see, and quizzes generated so teachers aren't stuck writing every variant by hand.",
      tags: ["Next.js", "TypeScript", "Azure OpenAI", "EdTech"],
      code: "https://github.com/sarvanithin/edubuddy",
      demo: "",
      image: "https://opengraph.githubassets.com/1/sarvanithin/edubuddy"
    },
    {
      title: "MindScribe",
      description:
        "Personal productivity side project: capture context, automate the annoying bits, and keep LLM help grounded in what you were actually doing.",
      tags: ["AI Product", "LLM Workflow", "Automation"],
      code: "https://github.com/sarvanithin/MindScribe",
      demo: "",
      image: "https://opengraph.githubassets.com/1/sarvanithin/MindScribe"
    },
    {
      title: "MedGuard",
      description:
        "LLM guardrails middleware: sensitive-field handling, scope control, safety checks, and surfacing when the model is probably wrong. Useful anywhere trust matters, including regulated settings.",
      tags: ["Python", "FastAPI", "LLM Safety", "OSS"],
      code: "https://github.com/sarvanithin/Medguard",
      demo: "",
      image: "media/medguard-banner.svg"
    },
    {
      title: "MedRAG Toolkit",
      description:
        "RAG toolkit built for messy, citation-heavy question answering: grounding, hallucination checks, and conservative behavior when evidence is thin. Strong fit for docs and knowledge bases, not only clinical text.",
      tags: ["Python", "RAG", "FAISS", "OSS"],
      code: "https://github.com/sarvanithin/medrag-toolkit",
      demo: "",
      image: "media/medrag-banner.svg"
    }
  ],
  topSixHealthcareAI: [
    {
      title: "MedGuard",
      description:
        "Middleware-style guardrails for clinical LLMs: strip or flag PHI, tighten scope, nudge on drug safety, and surface when the model is probably hallucinating.",
      tags: ["Python", "FastAPI", "LLM Safety", "Healthcare AI"],
      code: "https://github.com/sarvanithin/Medguard",
      demo: "",
      image: "media/medguard-banner.svg"
    },
    {
      title: "MedRAG Toolkit",
      description:
        "RAG stack tuned for clinical text: citations you can check, hallucination checks baked in, answers that fail closed when evidence is thin.",
      tags: ["Python", "RAG", "FAISS", "Medical AI"],
      code: "https://github.com/sarvanithin/medrag-toolkit",
      demo: "",
      image: "media/medrag-banner.svg"
    },
    {
      title: "ClinicalTrial Match",
      description:
        "Match patient notes or FHIR-ish inputs to ClinicalTrials.gov listings with scoring you can read, not a black box ranker.",
      tags: ["FastAPI", "NLP", "FHIR", "Healthcare AI"],
      code: "https://github.com/sarvanithin/clinicaltrial-match",
      demo: "https://clinicaltrial-match.onrender.com",
      image: "media/clinicaltrial-banner.svg"
    },
    {
      title: "Clinical De-identify",
      description:
        "Dashboard for de-ID: BioClinicalBERT plus regex for HIPAA-style PHI across notes, PDFs, and Word docs when you need something you can demo, not a one-off script.",
      tags: ["Python", "BioClinicalBERT", "HIPAA", "Healthcare NLP"],
      code: "https://github.com/sarvanithin/clinical-deidentify",
      demo: "",
      image: "media/clinical-deidentify-banner.svg"
    },
    {
      title: "MIMIC DataLoader (PyTorch)",
      description:
        "PyTorch datasets for MIMIC-IV style tasks (mortality, readmission, LOS, sepsis, phenotyping, decompensation) so you spend time on models, not CSV wrangling.",
      tags: ["PyTorch", "MIMIC-IV", "Clinical ML", "Healthcare AI"],
      code: "https://github.com/sarvanithin/mimic-dataloader",
      demo: "",
      image: "media/mimic-dataloader-banner.svg"
    },
    {
      title: "AI-Powered Mental Health Prediction",
      description:
        "Earlier healthcare ML project: predictive signals from text and structured data, aimed at decision support rather than a flashy demo only.",
      tags: ["Machine Learning", "Healthcare", "NLP"],
      code: "https://github.com/sarvanithin/Mental_health_detection",
      demo: "",
      image: "media/mental-health-banner.svg"
    }
  ],
  contributions: [
    {
      category: "Open source",
      title: "ARES (Agentic Research & Evaluation Suite)",
      detail:
        "Contributions and experiments on Martian's ARES: agentic evaluation, RL-style environments, and benchmarks that stress-test systems instead of cherry-picking demos.",
      proof: [
        { label: "Upstream repo", href: "https://github.com/withmartian/ares" },
        { label: "Pull requests", href: "https://github.com/withmartian/ares/pulls?q=is%3Apr+author%3Asarvanithin" },
        { label: "My commits", href: "https://github.com/withmartian/ares/commits?author=sarvanithin" },
        { label: "My fork", href: "https://github.com/sarvanithin/ares" }
      ]
    },
    {
      category: "Portfolio",
      title: "10+ public AI repos",
      detail:
        "Agents, planning tools, education apps, analytics, guardrails, and RAG stacks — all on one GitHub. Some are portfolio-grade, some are labs, everything is inspectable.",
      proof: [{ label: "All repos", href: "https://github.com/sarvanithin?tab=repositories" }]
    },
    {
      category: "Shipped products",
      title: "LLM tools & RAG (OSS)",
      detail:
        "MedGuard, MedRAG, ClinicalTrial Match, Clinical De-identify: example product repos spanning LLM safety, retrieval, matching, and de-ID pipelines — clone and read the implementation.",
      proof: [
        { label: "MedGuard", href: "https://github.com/sarvanithin/Medguard" },
        { label: "MedRAG", href: "https://github.com/sarvanithin/medrag-toolkit" },
        { label: "ClinicalTrial Match", href: "https://github.com/sarvanithin/clinicaltrial-match" },
        { label: "Clinical De-identify", href: "https://github.com/sarvanithin/clinical-deidentify" }
      ]
    },
    {
      category: "PyTorch OSS",
      title: "MIMIC DataLoader",
      detail:
        "PyTorch-ready datasets for structured clinical prediction tasks — useful pattern for tabular + sequence modeling and for anyone working with MIMIC-style benchmarks.",
      proof: [
        { label: "Repo", href: "https://github.com/sarvanithin/mimic-dataloader" },
        { label: "Commits", href: "https://github.com/sarvanithin/mimic-dataloader/commits?author=sarvanithin" }
      ]
    },
    {
      category: "Public writing",
      title: "Build notes (LinkedIn)",
      detail:
        "Short posts when something ships: public dashboards, research-adjacent AI, open source drops, policy-relevant eval work — faster for me than a long-running blog.",
      proof: [{ label: "LinkedIn", href: "https://www.linkedin.com/in/nithin-sarva/" }]
    }
  ]
};

function openGraphImageFromRepo(repoUrl) {
  const m = String(repoUrl).match(/github\.com\/([^/]+)\/([^/?#]+)/);
  if (!m) return "";
  return `https://opengraph.githubassets.com/1/${m[1]}/${m[2]}`;
}

function renderProjects(list) {
  const grid = document.getElementById("projects-grid");
  if (!grid) return;

  grid.innerHTML = list
    .map((project) => {
      const ogFallback = openGraphImageFromRepo(project.code);
      const src = escapeHtml(project.image);
      const alt = escapeHtml(`${project.title} preview`);
      const ogEsc = ogFallback ? escapeHtml(ogFallback) : "";
      return `
    <article class="card project-card">
      <div class="project-image-wrap">
        <img src="${src}" alt="${alt}" loading="lazy" decoding="async" data-og-fallback="${ogEsc}">
      </div>
      <h3>${escapeHtml(project.title)}</h3>
      <p>${escapeHtml(project.description)}</p>
      <div class="tags">${project.tags.map((tag) => `<span class="tag">${escapeHtml(tag)}</span>`).join("")}</div>
      <div class="project-links">
        <a href="${escapeHtml(project.code)}" target="_blank" rel="noopener noreferrer">Repo</a>
        ${project.demo ? `<a href="${escapeHtml(project.demo)}" target="_blank" rel="noopener noreferrer">Live demo</a>` : ""}
      </div>
    </article>
  `;
    })
    .join("");

  grid.querySelectorAll(".project-image-wrap img").forEach((img) => {
    img.addEventListener("error", function onImgErr() {
      const fb = this.getAttribute("data-og-fallback");
      if (!fb || this.dataset.fallbackApplied === "1") {
        this.removeEventListener("error", onImgErr);
        return;
      }
      this.dataset.fallbackApplied = "1";
      this.src = fb;
    });
  });
}

function setProjectFilter(filter) {
  const featuredBtn = document.getElementById("filter-featured");
  const healthcareBtn = document.getElementById("filter-healthcare");

  if (filter === "healthcare") {
    renderProjects(portfolioData.topSixHealthcareAI);
    featuredBtn?.classList.remove("active");
    healthcareBtn?.classList.add("active");
  } else {
    renderProjects(portfolioData.topSixFeatured);
    featuredBtn?.classList.add("active");
    healthcareBtn?.classList.remove("active");
  }
}

function escapeHtml(text) {
  return String(text)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function renderContributions() {
  const container = document.getElementById("contributions-list");
  if (!container) return;

  container.innerHTML = portfolioData.contributions
    .map((item) => {
      const proof =
        item.proof && item.proof.length
          ? `<div class="contrib-proof" role="group" aria-label="Links to verify this item">
          <span class="contrib-proof-label">Links</span>
          <div class="contrib-proof-links">
            ${item.proof
              .map(
                (p) =>
                  `<a class="proof-link" href="${escapeHtml(p.href)}" target="_blank" rel="noopener noreferrer">${escapeHtml(p.label)}</a>`
              )
              .join("")}
          </div>
        </div>`
          : "";

      return `
    <article class="contrib-card">
      <div class="contrib-card-top">
        <span class="contrib-category">${escapeHtml(item.category)}</span>
      </div>
      <h3>${escapeHtml(item.title)}</h3>
      <p class="contrib-detail">${escapeHtml(item.detail)}</p>
      ${proof}
    </article>`;
    })
    .join("");
}

function setupThemeToggle() {
  const button = document.getElementById("theme-toggle");
  const body = document.body;
  const saved = localStorage.getItem("portfolio-theme") || "light";
  body.setAttribute("data-theme", saved);
  if (button) button.textContent = saved === "dark" ? "🌙" : "☀️";

  button?.addEventListener("click", () => {
    const current = body.getAttribute("data-theme") || "light";
    const next = current === "dark" ? "light" : "dark";
    body.setAttribute("data-theme", next);
    localStorage.setItem("portfolio-theme", next);
    button.textContent = next === "dark" ? "🌙" : "☀️";
  });
}

function setupMenuToggle() {
  const menuButton = document.getElementById("menu-toggle");
  const nav = document.getElementById("main-nav");
  menuButton?.addEventListener("click", () => nav?.classList.toggle("open"));

  nav?.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => nav.classList.remove("open"));
  });
}

function setupProjectFilters() {
  const featuredBtn = document.getElementById("filter-featured");
  const healthcareBtn = document.getElementById("filter-healthcare");

  featuredBtn?.addEventListener("click", () => setProjectFilter("featured"));
  healthcareBtn?.addEventListener("click", () => setProjectFilter("healthcare"));
}

function setupExperienceSlider() {
  const slider = document.getElementById("experience-slider");
  const prev = document.getElementById("exp-prev");
  const next = document.getElementById("exp-next");
  if (!slider || !prev || !next) return;

  const step = 360;
  prev.addEventListener("click", () => {
    slider.scrollBy({ left: -step, behavior: "smooth" });
  });
  next.addEventListener("click", () => {
    slider.scrollBy({ left: step, behavior: "smooth" });
  });
}

function setDynamicDates() {
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());
}

document.addEventListener("DOMContentLoaded", () => {
  setProjectFilter("featured");
  renderContributions();
  setupThemeToggle();
  setupMenuToggle();
  setupProjectFilters();
  setupExperienceSlider();
  setDynamicDates();
});
