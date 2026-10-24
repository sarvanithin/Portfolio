const PROJECTS = [
  {
    id: "archai",
    num: "01",
    title: "ArchitectAI",
    tagline: "AI co-pilot for system design",
    category: "AI · Product",
    tags: ["ai", "agents", "product"],
    description:
      "A planning surface where you describe a product and ArchitectAI returns a concrete system architecture (services, data flows, trade-offs) instead of a vague diagram. Built around a planner agent that grounds suggestions in component libraries and known patterns, not vibes.",
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
      "Open-source, DOE-funded data product I built and shipped in Dr. John Helveston's Technology Change Lab: 169M+ new and used vehicle listings (2018–2025) distilled into trends in miles traveled by powertrain, depreciation, dealer inventory, and market concentration. Ships with the companion {vehicletrends} R package. Featured by GW Engineering at the 2026 R&D Showcase.",
    short: "169M+ vehicle listings → open EV-market dashboard for policymakers. DOE-funded.",
    stack: ["R", "Quarto", "Arrow", "R package", "GitHub Pages"],
    url: "https://vehicletrends.us",
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
    title: "Mental Health AI Eval",
    tagline: "Evaluation framework for mental health AI · OpenAI grant",
    category: "Healthcare · Eval",
    tags: ["ai", "eval", "healthcare"],
    description:
      "Evaluation framework for mental health AI, funded by OpenAI's AI and Mental Health Grant Program. Uses ChatGPT to generate and rate helper responses against WHO–UNICEF EQUIP competencies across six languages, in text and audio, then measures how well ChatGPT and fine-tuned models agree with trained human raters, so AI can help assess both AI and human helpers.",
    short: "Scores mental health AI on WHO–UNICEF standards in 6 languages; AI raters vs. humans.",
    stack: ["Python", "Whisper", "OpenAI API", "Fine-tuning", "FastAPI"],
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
      "Ingests claim packets, extracts the structured fields adjusters actually open, and flags suspicious patterns against a learned baseline. Designed to keep the human in the loop: every flag is explainable.",
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
      "Matches a patient profile against ClinicalTrials.gov criteria with an LLM eligibility reasoner that shows its work: which inclusion/exclusion criteria fired, which need clinician review.",
    short: "LLM matches patients to trials and shows which criteria fired.",
    stack: ["Python", "FastAPI", "OpenAI", "pgvector", "React"],
    url: "https://clinicaltrial-match.onrender.com/",
    status: "live",
    featured: false
  },
  {
    id: "chunkkv",
    title: "ChunkKV",
    tagline: "Non-prefix KV-cache reuse for RAG & agents",
    category: "LLM infra",
    tags: ["ai", "infra", "eval"],
    description:
      "Reuses KV cache for retrieved chunks even when they don't share a prefix: CacheBlend-style selective recompute, re-RoPE, provenance-keyed storage, and a reuse gate that escalates when deviation is too high. On Qwen2.5-7B, RAG time-to-first-token drops ~2x while accuracy holds at 95.7% with 30% recompute. Also found and documented why LMCache's blend path breaks on vLLM 0.32.",
    short: "~2x faster RAG time-to-first-token on Qwen2.5-7B, 95.7% accuracy kept.",
    stack: ["Python", "PyTorch", "MLX", "CUDA", "Transformers"],
    url: "https://github.com/sarvanithin/chunkkv",
    status: "oss",
    featured: false
  },
  {
    id: "typestub",
    title: "TypeStub",
    tagline: "Typed interfaces for MCP tool outputs",
    category: "Agents · Dev tools",
    tags: ["ai", "infra"],
    description:
      "Records real MCP tool responses, infers schemas, and generates TypeScript/Python stubs so code-mode agents stop guessing at output shapes. 99.4% field accuracy on the mock server; 40-task benchmark across Claude models with a token budget for stubs. CI-tested monorepo, MIT licensed.",
    short: "Record MCP outputs → infer schemas → typed stubs for code-mode agents.",
    stack: ["TypeScript", "MCP", "Python", "Claude"],
    url: "https://github.com/sarvanithin/typestub",
    status: "oss",
    featured: false
  },
  {
    id: "cab",
    title: "ClinicalAgent-Bench",
    tagline: "Evaluation suite for healthcare AI agents",
    category: "Healthcare · Eval",
    tags: ["ai", "healthcare", "eval"],
    description:
      "400 agentic scenarios across 12 operational domains (billing, triage, prior auth, documentation, care navigation) with refusal scored as a first-class F1 metric and 15 demographic-equity scenarios. Built to cover the operations work that MedAgentBench and HealthBench leave out.",
    short: "400 agentic scenarios, 12 domains, refusal F1 + bias checks.",
    stack: ["Python", "Pydantic", "LLM-as-judge", "pytest"],
    url: "https://github.com/sarvanithin/clinicalagent-bench",
    status: "oss",
    featured: false
  },
  {
    id: "pharmaos",
    title: "pharma-os",
    tagline: "Agentic workflows for pharma R&D documents",
    category: "AI · Product",
    tags: ["ai", "healthcare", "product"],
    description:
      "Multilingual ingestion (English, Chinese, French) of CSRs, INDs, and patents into structured fields with per-field verbatim source quotes; a cited RAG data room; replayable agent runs with human-approval pause/resume; and a hash-chained audit log. Multi-tenant with row-level security on every table.",
    short: "Multilingual R&D docs → cited answers, agent runs, tamper-evident audit.",
    stack: ["Next.js", "Supabase", "Claude", "Voyage", "Inngest"],
    url: "https://pharma-os-gilt.vercel.app",
    status: "live",
    featured: false
  },
  {
    id: "medrag",
    title: "MedRAG Toolkit",
    tagline: "Production medical RAG with enforced citations",
    category: "Healthcare · LLM",
    tags: ["ai", "healthcare"],
    description:
      "Hybrid BM25 + FAISS retrieval fused with RRF over PubMed and OpenFDA/RxNorm, mandatory [PMID]/[Drug] citations, and a hallucination detector that rejects unsupported claims. Ships as a FastAPI service, CLI, and Docker image.",
    short: "Hybrid retrieval + mandatory PMID citations + hallucination checks.",
    stack: ["Python", "FAISS", "BM25", "FastAPI", "Docker"],
    url: "https://github.com/sarvanithin/medrag-toolkit",
    status: "oss",
    featured: false
  },
  {
    id: "openrole",
    title: "OpenRole Intelligence",
    tagline: "Verified U.S. jobs with explainable H-1B evidence",
    category: "Data · Public",
    tags: ["data", "product"],
    description:
      "Pulls openings straight from employer career sites, keeps only fresh U.S. roles, and grades sponsorship from the posting's own words: Tier A only for an explicit offer, and a current denial overrides employer history. Every result shows its source and evidence.",
    short: "Employer-sourced U.S. jobs with sponsorship evidence you can inspect.",
    stack: ["Python", "FastAPI", "Postgres", "Vercel"],
    url: "https://openrole-intelligence.vercel.app",
    status: "live",
    featured: false
  },
  {
    id: "mindscribe",
    title: "MindScribe",
    tagline: "Conversational screening + clinical notes",
    category: "Healthcare · LLM",
    tags: ["ai", "healthcare", "product"],
    description:
      "Runs PHQ-9 and GAD-7 as an adaptive conversation, maps free-text answers to item scores, and always flags any positive suicidal-ideation response. Generates DAP, SOAP, or BIRP notes with ICD-10 and CPT suggestions.",
    short: "PHQ-9/GAD-7 as conversation → scored, safety-flagged clinical notes.",
    stack: ["React", "FastAPI", "Groq", "Recharts"],
    url: "https://mind-scribe-six.vercel.app",
    status: "live",
    featured: false
  },
  {
    id: "buildify",
    title: "Buildify",
    tagline: "AI residential floor-plan generator",
    category: "AI · Product",
    tags: ["ai", "product"],
    description:
      "A Mixture-of-Experts network sizes rooms, HouseGAN++ proposes the spatial topology, and a constraint packer lays them edge-to-edge on a 2 ft grid that meets IRC minimums. Returns three distinct, buildable plan variants in seconds.",
    short: "Beds, baths, sqft → three code-compliant floor plans in seconds.",
    stack: ["Python", "PyTorch", "HouseGAN++", "React"],
    url: "https://buildify-six.vercel.app",
    status: "live",
    featured: false
  },
  {
    id: "replayfix",
    title: "ReplayFix",
    tagline: "Session replays → tested code fixes",
    category: "Agents · Dev tools",
    tags: ["ai", "infra"],
    description:
      "Parses PostHog-style session replays, detects UX anomalies with rules plus IsolationForest, retrieves the relevant code with FAISS, and runs a triage → review → fix chain of Claude agents that drafts a GitHub PR.",
    short: "Replay events → anomaly → retrieved code → multi-agent draft PR.",
    stack: ["Python", "Claude", "FAISS", "scikit-learn"],
    url: "https://github.com/sarvanithin/replayfix",
    status: "oss",
    featured: false
  }

];

// Display order; numbers are assigned from position.
const PROJECT_ORDER = ["archai", "cgmhe", "chunkkv", "typestub", "cab", "pharmaos", "medrag", "vt", "medguard", "claim", "trial", "openrole", "mindscribe", "buildify", "replayfix"];
// Grid cards shown under the featured project before "Show all".
const PROJECTS_INITIAL = 6;
PROJECTS.sort((a, b) => PROJECT_ORDER.indexOf(a.id) - PROJECT_ORDER.indexOf(b.id));
PROJECTS.forEach((p, i) => { p.num = String(i + 1).padStart(2, "0"); });

const PROJECT_FILTERS = [
  { id: "all", label: "All" },
  { id: "ai", label: "AI / LLM" },
  { id: "healthcare", label: "Healthcare" },
  { id: "infra", label: "LLM infra" },
  { id: "data", label: "Data" },
  { id: "product", label: "Product" },
  { id: "eval", label: "Evals" }
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
      "Agents, planning tools, education apps, analytics, guardrails, and RAG stacks, all on one GitHub. Some are portfolio-grade, some are labs, everything is inspectable.",
    proof: [{ label: "All repos", href: "https://github.com/sarvanithin?tab=repositories" }]
  },
  {
    category: "Shipped products",
    title: "LLM tools & RAG (OSS)",
    detail:
      "MedGuard, MedRAG, ClinicalTrial Match, Clinical De-identify: example product repos spanning LLM safety, retrieval, matching, and de-ID pipelines. Clone them and read the implementation.",
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
      "PyTorch-ready datasets for structured clinical prediction tasks. A useful pattern for tabular + sequence modeling and for anyone working with MIMIC-style benchmarks.",
    proof: [
      { label: "Repo", href: "https://github.com/sarvanithin/mimic-dataloader" },
      { label: "Commits", href: "https://github.com/sarvanithin/mimic-dataloader/commits?author=sarvanithin" }
    ]
  },
  {
    category: "Public writing",
    title: "Thinking out loud (X + LinkedIn)",
    detail:
      "Takes on agents, evals, RAG failure modes, and healthcare AI on X; ship notes on LinkedIn when something lands. Faster for me than a long-running blog.",
    proof: [
      { label: "X", href: "https://x.com/NithinSarva" },
      { label: "LinkedIn", href: "https://www.linkedin.com/in/nithinsarva/" }
    ]
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
          <div class="url">mh-eval / openai grant · EQUIP competencies</div>
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
    </div>`,

  chunkkv: () => `
    <div class="browser">
      <div class="browser-bar">
        <div class="dot"></div><div class="dot"></div><div class="dot"></div>
        <div class="url">chunkkv / rag · qwen2.5-7b · L40S</div>
      </div>
      <div class="browser-body">
        <div class="viz viz-med">
          <div class="viz-label">RAG ACCURACY vs RECOMPUTE</div>
          <div class="med-row"><span class="t">blend 15%</span><span class="b" style="--w:92%"></span><span>92.2</span></div>
          <div class="med-row"><span class="t">blend 30%</span><span class="b" style="--w:96%"></span><span>95.7</span></div>
          <div class="med-row"><span class="t">blend 50%</span><span class="b" style="--w:98%"></span><span>98.3</span></div>
          <div class="med-row"><span class="t">full prefill</span><span class="b" style="--w:100%"></span><span>100</span></div>
          <div class="med-row warn"><span class="t">TTFT speedup</span><span class="b" style="--w:50%"></span><span>~2x</span></div>
        </div>
      </div>
    </div>`,

  typestub: () => `
    <div class="browser">
      <div class="browser-bar">
        <div class="dot"></div><div class="dot"></div><div class="dot"></div>
        <div class="url">typestub / gen-ts · github.d.ts</div>
      </div>
      <div class="browser-body">
        <div class="viz viz-cp">
          <div class="viz-label">INFERRED STUB</div>
          <div class="cp-line"><span class="k">interface</span><span class="v">PullRequest {</span></div>
          <div class="cp-line add"><span class="k">number</span><span class="v">+ number</span></div>
          <div class="cp-line add"><span class="k">title</span><span class="v">+ string</span></div>
          <div class="cp-line add"><span class="k">labels</span><span class="v">+ Label[]</span></div>
          <div class="cp-line sus"><span class="k">merged</span><span class="v">⚑ always false</span></div>
          <div class="cp-line"><span class="k">field acc</span><span class="v">99.4%</span></div>
        </div>
      </div>
    </div>`,

  cab: () => `
    <div class="browser">
      <div class="browser-bar">
        <div class="dot"></div><div class="dot"></div><div class="dot"></div>
        <div class="url">clinicalagent-bench / report</div>
      </div>
      <div class="browser-body">
        <div class="viz viz-med">
          <div class="viz-label">DOMAIN SCORES</div>
          <div class="med-row"><span class="t">billing</span><span class="b" style="--w:82%"></span><span>pass</span></div>
          <div class="med-row"><span class="t">triage</span><span class="b" style="--w:74%"></span><span>pass</span></div>
          <div class="med-row"><span class="t">prior auth</span><span class="b" style="--w:68%"></span><span>pass</span></div>
          <div class="med-row warn"><span class="t">refusal F1</span><span class="b" style="--w:55%"></span><span>flag</span></div>
          <div class="med-row warn"><span class="t">equity</span><span class="b" style="--w:60%"></span><span>flag</span></div>
        </div>
      </div>
    </div>`,

  pharmaos: () => `
    <div class="browser">
      <div class="browser-bar">
        <div class="dot"></div><div class="dot"></div><div class="dot"></div>
        <div class="url">pharma-os-gilt.vercel.app / ingest</div>
      </div>
      <div class="browser-body">
        <div class="viz viz-ct">
          <div class="viz-label">INGESTION PIPELINE</div>
          <div class="ct-step on"><div class="b">1</div>patent_CN.pdf · language: zh</div>
          <div class="ct-arrow"></div>
          <div class="ct-step on"><div class="b">2</div>classified · patent · 12 fields</div>
          <div class="ct-arrow"></div>
          <div class="ct-step on"><div class="b">3</div>each field quoted from source</div>
          <div class="ct-arrow"></div>
          <div class="ct-step"><div class="b">4</div>audit hash-chain · verified</div>
        </div>
      </div>
    </div>`,

  medrag: () => `
    <div class="browser">
      <div class="browser-bar">
        <div class="dot"></div><div class="dot"></div><div class="dot"></div>
        <div class="url">medrag / query</div>
      </div>
      <div class="browser-body">
        <div class="viz viz-ct">
          <div class="viz-label">RETRIEVAL → ANSWER</div>
          <div class="ct-step on"><div class="b">1</div>BM25 + FAISS · top 40</div>
          <div class="ct-arrow"></div>
          <div class="ct-step on"><div class="b">2</div>RRF fusion · top 8</div>
          <div class="ct-arrow"></div>
          <div class="ct-step on"><div class="b">3</div>answer with [PMID:38291044]</div>
          <div class="ct-arrow"></div>
          <div class="ct-step"><div class="b">4</div>unsupported claim rejected</div>
        </div>
      </div>
    </div>`,

  openrole: () => `
    <div class="browser">
      <div class="browser-bar">
        <div class="dot"></div><div class="dot"></div><div class="dot"></div>
        <div class="url">openrole-intelligence.vercel.app</div>
      </div>
      <div class="browser-body">
        <div class="viz viz-cp">
          <div class="viz-label">SPONSORSHIP EVIDENCE</div>
          <div class="cp-line add"><span class="k">ML Engineer</span><span class="v">+ Tier A · explicit offer</span></div>
          <div class="cp-line add"><span class="k">Data Scientist</span><span class="v">+ Tier A · explicit offer</span></div>
          <div class="cp-line"><span class="k">Platform Eng</span><span class="v">Tier C · ambiguous</span></div>
          <div class="cp-line sus"><span class="k">AI Researcher</span><span class="v">⚑ Tier E · denied</span></div>
          <div class="cp-line"><span class="k">source</span><span class="v">employer careers page</span></div>
        </div>
      </div>
    </div>`,

  mindscribe: () => `
    <div class="browser">
      <div class="browser-bar">
        <div class="dot"></div><div class="dot"></div><div class="dot"></div>
        <div class="url">mind-scribe / phq-9</div>
      </div>
      <div class="browser-body">
        <div class="viz viz-med">
          <div class="viz-label">PHQ-9 ITEM SCORES</div>
          <div class="med-row"><span class="t">interest</span><span class="b" style="--w:33%"></span><span>1</span></div>
          <div class="med-row"><span class="t">mood</span><span class="b" style="--w:66%"></span><span>2</span></div>
          <div class="med-row"><span class="t">sleep</span><span class="b" style="--w:66%"></span><span>2</span></div>
          <div class="med-row"><span class="t">energy</span><span class="b" style="--w:33%"></span><span>1</span></div>
          <div class="med-row warn"><span class="t">item 9</span><span class="b" style="--w:33%"></span><span>flag</span></div>
        </div>
      </div>
    </div>`,

  buildify: () => `
    <div class="browser">
      <div class="browser-bar">
        <div class="dot"></div><div class="dot"></div><div class="dot"></div>
        <div class="url">buildify-six.vercel.app · 3 bd / 2 ba</div>
      </div>
      <div class="browser-body">
        <div class="viz viz-arch">
          <div class="viz-label">PLAN · VARIANT B</div>
          <div class="arch-node" style="top:28%;left:10%">Garage</div>
          <div class="arch-node accent" style="top:28%;left:38%">Living</div>
          <div class="arch-node" style="top:28%;left:66%">Kitchen</div>
          <div class="arch-node" style="top:60%;left:10%">Bed 1</div>
          <div class="arch-node" style="top:60%;left:38%">Bath</div>
          <div class="arch-node" style="top:60%;left:66%">Bed 2</div>
        </div>
      </div>
    </div>`,

  replayfix: () => `
    <div class="browser">
      <div class="browser-bar">
        <div class="dot"></div><div class="dot"></div><div class="dot"></div>
        <div class="url">replayfix / session 8f2c</div>
      </div>
      <div class="browser-body">
        <div class="viz viz-ct">
          <div class="viz-label">AGENT CHAIN</div>
          <div class="ct-step on"><div class="b">1</div>rage-click on #checkout · sev 0.91</div>
          <div class="ct-arrow"></div>
          <div class="ct-step on"><div class="b">2</div>retrieved 3 code chunks</div>
          <div class="ct-arrow"></div>
          <div class="ct-step on"><div class="b">3</div>triage → review → fix</div>
          <div class="ct-arrow"></div>
          <div class="ct-step"><div class="b">4</div>draft PR opened</div>
        </div>
      </div>
    </div>`
};

// ---------- State + rendering ----------
let currentFilter = "all";
let showAllProjects = false;

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
  const matching = PROJECTS.filter((p) => projectMatchesFilter(p, currentFilter)).filter(
    (p) => !(hideFeaturedFromGrid && p.id === featured.id)
  );
  const collapsed = currentFilter === "all" && !showAllProjects && matching.length > PROJECTS_INITIAL;
  const items = collapsed ? matching.slice(0, PROJECTS_INITIAL) : matching;
  renderShowAll(currentFilter === "all" && matching.length > PROJECTS_INITIAL);

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
              <span class="card-link">${p.status === "live" ? "visit" : "code"} ${ARROW_OUT_SVG}</span>
            </div>
          </div>
        </a>`;
    })
    .join("");
}

function renderShowAll(visible) {
  const btn = document.getElementById("proj-show-all");
  if (!btn) return;
  btn.hidden = !visible;
  btn.setAttribute("aria-expanded", String(showAllProjects));
  btn.textContent = showAllProjects ? "Show fewer projects" : `Show all ${PROJECTS.length} projects`;
}

function setupShowAll() {
  const btn = document.getElementById("proj-show-all");
  btn?.addEventListener("click", () => {
    showAllProjects = !showAllProjects;
    renderGrid();
    if (!showAllProjects) document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  });
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
  setupShowAll();
  renderContributions();
  setupThemeToggle();
  setupMenuToggle();
  setupExperienceSlider();
  setDynamicDates();
});
