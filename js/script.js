const PROJECTS = [
  {
    id: "archai",
    num: "01",
    title: "ArchitectAI",
    tagline: "AI co-pilot for system design",
    category: "AI · Product",
    tags: ["ai", "agents", "product"],
    description:
      "A planning surface where you describe a product and ArchitectAI returns a concrete system architecture — services, data flows, trade-offs — instead of a vague diagram. Built around a planner agent that grounds suggestions in component libraries and known patterns, not vibes.",
    short: "Describe a product → get a real architecture, not a vibe diagram.",
    stack: ["Next.js", "TypeScript", "OpenAI", "LangGraph", "Vercel"],
    url: "https://tryarchitectai.vercel.app/",
    status: "live",
    featured: true
  },
  {
    id: "vt",
    num: "02",
    title: "VehicleTrends",
    tagline: "Open EV adoption analytics",
    category: "Data · Public",
    tags: ["data", "product"],
    description:
      "A public dashboard for EV adoption and vehicle market dynamics — built with GW R&D and DOE-funded research. Cleans messy registration and sales data into views that survive scrutiny from policy folks.",
    short: "Public EV dashboards from DOE-funded research at GW.",
    stack: ["Python", "Django", "Postgres", "D3", "AWS"],
    url: "https://vehicletrends.us/about",
    status: "live",
    featured: false
  },
  {
    id: "medguard",
    num: "03",
    title: "MedGuard",
    tagline: "Medication safety + interaction checker",
    category: "Healthcare · LLM",
    tags: ["ai", "healthcare"],
    description:
      "Pulls a patient regimen and flags interactions, dose anomalies, and contraindications using retrieval over an indexed drug-safety corpus. Output is structured (cite-back to source), not free-form chat.",
    short: "Regimen-aware drug interaction checks with cite-back retrieval.",
    stack: ["FastAPI", "Postgres", "OpenAI", "pgvector"],
    url: "https://medguard-ru03.onrender.com/",
    status: "live",
    featured: false
  },
  {
    id: "cgmhe",
    num: "04",
    title: "CGMHE Eval Tool",
    tagline: "Multimodal AI scoring for global mental health",
    category: "Research · Eval",
    tags: ["ai", "research", "healthcare"],
    description:
      "Scoring stack for the EQUIP × OpenAI × WHO-UNICEF pilot: Whisper transcription, GPT-4o evidence extraction, deterministic Python rubrics. Bias controls and nonverbal handling are in v1, not bolted on later.",
    short: "Whisper + GPT-4o + deterministic rubrics; built for WHO-UNICEF pilot.",
    stack: ["Python", "Whisper", "GPT-4o", "FastAPI", "Docker"],
    url: "https://cgmhe-tool.duckdns.org/",
    status: "live",
    featured: false
  },
  {
    id: "claim",
    num: "05",
    title: "ClaimPilot",
    tagline: "AI-assisted insurance claims triage",
    category: "AI · Product",
    tags: ["ai", "product"],
    description:
      "Ingests claim packets, extracts the structured fields adjusters actually open, and flags suspicious patterns against a learned baseline. Designed to keep the human in the loop — every flag is explainable.",
    short: "Claim packet → structured fields + explainable suspicious flags.",
    stack: ["Next.js", "FastAPI", "OpenAI", "Postgres"],
    url: "https://claimpilot-jk2k.onrender.com/",
    status: "live",
    featured: false
  },
  {
    id: "trial",
    num: "06",
    title: "ClinicalTrial Match",
    tagline: "Patient ↔ trial eligibility matching",
    category: "Healthcare · LLM",
    tags: ["ai", "healthcare"],
    description:
      "Matches a patient profile against ClinicalTrials.gov criteria with an LLM eligibility reasoner — but the reasoner shows its work: which inclusion/exclusion criteria fired, which need clinician review.",
    short: "LLM matches patients to trials and shows which criteria fired.",
    stack: ["Python", "FastAPI", "OpenAI", "pgvector", "React"],
    url: "https://clinicaltrial-match.onrender.com/",
    status: "live",
    featured: false
  }
];

const PROJECT_FILTERS = [
  { id: "all", label: "All" },
  { id: "ai", label: "AI / LLM" },
  { id: "healthcare", label: "Healthcare" },
  { id: "data", label: "Data" },
  { id: "product", label: "Product" },
  { id: "research", label: "Research" }
];

const contributionsData = [
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
];

function escapeHtml(text) {
  return String(text)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

const ARROW_OUT_SVG = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>`;
const GITHUB_SVG = `<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.1.79-.25.79-.56v-2c-3.2.7-3.87-1.37-3.87-1.37-.52-1.34-1.28-1.69-1.28-1.69-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.71 1.26 3.37.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.28 1.18-3.09-.12-.29-.51-1.46.11-3.04 0 0 .97-.31 3.18 1.18.92-.26 1.91-.39 2.89-.39.98 0 1.97.13 2.89.39 2.21-1.49 3.18-1.18 3.18-1.18.62 1.58.23 2.75.11 3.04.74.81 1.18 1.83 1.18 3.09 0 4.42-2.69 5.39-5.25 5.68.41.36.78 1.06.78 2.13v3.16c0 .31.21.67.8.56C20.21 21.39 23.5 17.08 23.5 12 23.5 5.65 18.35.5 12 .5z"/></svg>`;

function hostOf(url) {
  try { return new URL(url).host.replace(/^www\./, ""); } catch (_) { return url; }
}

// ---------- Per-project visualizations (CSS only) ----------
const VIZ = {
  archai: () => `
    <div class="browser">
      <div class="browser-bar">
        <div class="dot"></div><div class="dot"></div><div class="dot"></div>
        <div class="url">tryarchitectai.vercel.app</div>
      </div>
      <div class="browser-body">
        <div class="viz viz-arch">
          <div class="viz-label">SYSTEM_DESIGN.GRAPH</div>
          <div class="arch-line" style="top:38%;left:24%;width:20%;height:1px"></div>
          <div class="arch-line" style="top:38%;left:56%;width:20%;height:1px"></div>
          <div class="arch-line" style="top:38%;left:50%;width:1px;height:28%"></div>
          <div class="arch-line" style="top:66%;left:24%;width:52%;height:1px"></div>
          <div class="arch-node" style="top:30%;left:12%">Web App</div>
          <div class="arch-node accent" style="top:30%;left:42%">API Gateway</div>
          <div class="arch-node" style="top:30%;left:72%">Auth</div>
          <div class="arch-node" style="top:60%;left:12%">Postgres</div>
          <div class="arch-node" style="top:60%;left:42%">Queue</div>
          <div class="arch-node" style="top:60%;left:72%">Vector DB</div>
        </div>
      </div>
    </div>`,

  vt: () => {
    const bars = [42, 58, 51, 73, 68, 82, 91, 88, 95, 102, 118, 134];
    const max = 140;
    return `
      <div class="browser">
        <div class="browser-bar">
          <div class="dot"></div><div class="dot"></div><div class="dot"></div>
          <div class="url">vehicletrends.us / EV adoption · monthly</div>
        </div>
        <div class="browser-body">
          <div class="viz viz-vt">
            <div class="viz-label">EV_REG.MONTHLY (k)</div>
            <div class="vt-bars">
              ${bars.map((b, i) => `<div class="vt-bar ${i < 6 ? "faded" : ""}" style="height:${(b / max) * 100}%"></div>`).join("")}
            </div>
            <div class="vt-axis">
              <span>JAN</span><span>APR</span><span>JUL</span><span>OCT</span><span>DEC</span>
            </div>
          </div>
        </div>
      </div>`;
  },

  medguard: () => `
    <div class="browser">
      <div class="browser-bar">
        <div class="dot"></div><div class="dot"></div><div class="dot"></div>
        <div class="url">medguard / regimen check</div>
      </div>
      <div class="browser-body">
        <div class="viz viz-med">
          <div class="viz-label">INTERACTION SCAN</div>
          <div class="med-row"><span class="t">metformin</span><span class="b" style="--w:20%"></span><span>ok</span></div>
          <div class="med-row"><span class="t">lisinopril</span><span class="b" style="--w:35%"></span><span>ok</span></div>
          <div class="med-row warn"><span class="t">warfarin</span><span class="b" style="--w:78%"></span><span>flag</span></div>
          <div class="med-row warn"><span class="t">ibuprofen</span><span class="b" style="--w:88%"></span><span>flag</span></div>
          <div class="med-row"><span class="t">atorvastatin</span><span class="b" style="--w:45%"></span><span>ok</span></div>
        </div>
      </div>
    </div>`,

  cgmhe: () => {
    const matrix = [
      [4, 3, 4, 2, 3, 4, 3],
      [3, 4, 2, 4, 3, 2, 4],
      [4, 2, 3, 3, 4, 3, 2],
      [2, 3, 4, 4, 2, 4, 3],
      [3, 4, 3, 2, 4, 3, 4]
    ];
    const labels = ["empathy", "clarity", "safety", "engage", "rubric"];
    return `
      <div class="browser">
        <div class="browser-bar">
          <div class="dot"></div><div class="dot"></div><div class="dot"></div>
          <div class="url">cgmhe-tool / WHO-UNICEF pilot · 17 sessions</div>
        </div>
        <div class="browser-body">
          <div class="viz viz-cg">
            ${matrix.map((row, ri) => `
              <div class="cg-l">${labels[ri]}</div>
              ${row.map((v) => `<div class="cg-cell" data-v="${v}"></div>`).join("")}
            `).join("")}
          </div>
        </div>
      </div>`;
  },

  claim: () => `
    <div class="browser">
      <div class="browser-bar">
        <div class="dot"></div><div class="dot"></div><div class="dot"></div>
        <div class="url">claimpilot / claim #A-2024-1187</div>
      </div>
      <div class="browser-body">
        <div class="viz viz-cp">
          <div class="viz-label">EXTRACTED FIELDS</div>
          <div class="cp-line add"><span class="k">claimant</span><span class="v">+ J. Mendoza</span></div>
          <div class="cp-line add"><span class="k">date_of_loss</span><span class="v">+ 2024-09-12</span></div>
          <div class="cp-line add"><span class="k">est_amount</span><span class="v">+ $14,420.00</span></div>
          <div class="cp-line sus"><span class="k">prior_claims</span><span class="v">⚑ 4 in 18mo</span></div>
          <div class="cp-line"><span class="k">policy_id</span><span class="v">PL-77821-A</span></div>
          <div class="cp-line sus"><span class="k">vendor_match</span><span class="v">⚑ network anomaly</span></div>
        </div>
      </div>
    </div>`,

  trial: () => `
    <div class="browser">
      <div class="browser-bar">
        <div class="dot"></div><div class="dot"></div><div class="dot"></div>
        <div class="url">clinicaltrial-match / NCT05823841</div>
      </div>
      <div class="browser-body">
        <div class="viz viz-ct">
          <div class="viz-label">ELIGIBILITY REASONER</div>
          <div class="ct-step on"><div class="b">1</div>patient profile parsed · 14 fields</div>
          <div class="ct-arrow"></div>
          <div class="ct-step on"><div class="b">2</div>retrieved 23 candidate trials</div>
          <div class="ct-arrow"></div>
          <div class="ct-step on"><div class="b">3</div>criteria scored · inclusion 8/8</div>
          <div class="ct-arrow"></div>
          <div class="ct-step"><div class="b">4</div>clinician review · 2 exclusion flags</div>
        </div>
      </div>
    </div>`
};

// ---------- State + rendering ----------
let currentFilter = "all";

function projectMatchesFilter(p, f) {
  return f === "all" || p.tags.includes(f);
}

function countsByFilter() {
  const c = { all: PROJECTS.length };
  PROJECT_FILTERS.slice(1).forEach((f) => {
    c[f.id] = PROJECTS.filter((p) => p.tags.includes(f.id)).length;
  });
  return c;
}

function renderFilters() {
  const host = document.getElementById("proj-filter-row");
  if (!host) return;
  const counts = countsByFilter();
  host.innerHTML =
    `<span class="label">filter</span>` +
    PROJECT_FILTERS.map(
      (f) => `<button type="button" class="chip ${currentFilter === f.id ? "on" : ""}" data-filter="${escapeHtml(f.id)}">${escapeHtml(f.label)}<span class="count">${counts[f.id] || 0}</span></button>`
    ).join("");

  host.querySelectorAll(".chip").forEach((btn) => {
    btn.addEventListener("click", () => {
      currentFilter = btn.getAttribute("data-filter") || "all";
      renderFilters();
      renderFeatured();
      renderGrid();
    });
  });
}

function renderFeatured() {
  const host = document.getElementById("featured-project");
  if (!host) return;
  const featured = PROJECTS.find((p) => p.featured);
  if (!featured || currentFilter !== "all") {
    host.innerHTML = "";
    return;
  }
  const vizFn = VIZ[featured.id];
  const vizHtml = vizFn ? vizFn() : "";
  host.innerHTML = `
    <article class="featured">
      <div class="featured-media">${vizHtml}</div>
      <div class="featured-body">
        <div class="featured-meta">
          <span>FEATURED · ${escapeHtml(featured.num)}</span>
          ${featured.status === "live" ? `<span class="live">live</span>` : ""}
        </div>
        <h3 class="featured-title">${escapeHtml(featured.title)}</h3>
        <div class="featured-tag">${escapeHtml(featured.tagline)}</div>
        <p class="featured-desc">${escapeHtml(featured.description)}</p>
        <div class="pill-row">
          ${featured.stack.map((s) => `<span class="pill">${escapeHtml(s)}</span>`).join("")}
        </div>
        <div class="actions">
          <a class="proj-btn proj-btn-primary" href="${escapeHtml(featured.url)}" target="_blank" rel="noopener noreferrer">visit live ${ARROW_OUT_SVG}</a>
          <a class="proj-btn proj-btn-ghost" href="https://github.com/sarvanithin" target="_blank" rel="noopener noreferrer">${GITHUB_SVG} github</a>
        </div>
      </div>
    </article>`;
}

function renderGrid() {
  const grid = document.getElementById("projects-grid");
  if (!grid) return;
  const featured = PROJECTS.find((p) => p.featured);
  const hideFeaturedFromGrid = currentFilter === "all" && featured;
  const items = PROJECTS.filter((p) => projectMatchesFilter(p, currentFilter)).filter(
    (p) => !(hideFeaturedFromGrid && p.id === featured.id)
  );

  grid.innerHTML = items
    .map((p) => {
      const vizFn = VIZ[p.id];
      const vizHtml = vizFn ? vizFn() : "";
      const visible = p.stack.slice(0, 3);
      const extra = p.stack.length - visible.length;
      return `
        <a class="proj-card" href="${escapeHtml(p.url)}" target="_blank" rel="noopener noreferrer">
          <div class="card-media">${vizHtml}</div>
          <div class="card-body">
            <div class="card-head">
              <h3 class="card-title">${escapeHtml(p.title)}</h3>
              <span class="card-num">${escapeHtml(p.num)}</span>
            </div>
            <div class="card-tag">${escapeHtml(p.category)}</div>
            <p class="card-desc">${escapeHtml(p.short)}</p>
            <div class="card-foot">
              <div class="card-pills">
                ${visible.map((s) => `<span class="pill">${escapeHtml(s)}</span>`).join("")}
                ${extra > 0 ? `<span class="pill">+${extra}</span>` : ""}
              </div>
              <span class="card-link">visit ${ARROW_OUT_SVG}</span>
            </div>
          </div>
        </a>`;
    })
    .join("");
}

// ---------- Contributions (unchanged) ----------
function renderContributions() {
  const container = document.getElementById("contributions-list");
  if (!container) return;

  container.innerHTML = contributionsData
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

// ---------- Shared UI wiring ----------
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

function setupExperienceSlider() {
  const slider = document.getElementById("experience-slider");
  const prev = document.getElementById("exp-prev");
  const next = document.getElementById("exp-next");
  if (!slider || !prev || !next) return;

  const step = 360;
  prev.addEventListener("click", () => slider.scrollBy({ left: -step, behavior: "smooth" }));
  next.addEventListener("click", () => slider.scrollBy({ left: step, behavior: "smooth" }));
}

function setDynamicDates() {
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());
}

document.addEventListener("DOMContentLoaded", () => {
  renderFilters();
  renderFeatured();
  renderGrid();
  renderContributions();
  setupThemeToggle();
  setupMenuToggle();
  setupExperienceSlider();
  setDynamicDates();
});
