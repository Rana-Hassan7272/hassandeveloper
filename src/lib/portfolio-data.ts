export function googleDrivePreviewUrl(fileId: string) {
  return `https://drive.google.com/file/d/${fileId}/preview`;
}

export function googleDriveViewUrl(fileId: string) {
  return `https://drive.google.com/file/d/${fileId}/view?usp=sharing`;
}

export function isGoogleDriveUrl(url: string) {
  return url.includes("drive.google.com");
}

export const personalInfo = {
  name: "Muhammad Hassan Shahbaz",
  initials: "MH",
  headline: "AI/ML Engineer · LLM Systems Builder · Full-Stack AI Engineer",
  tagline:
    "Production-focused engineer building production-ready RAG systems, multi-agent AI, and MLOps platforms — plus full-stack websites and workflow automation for non-technical clients. Contributor to vLLM & LiteLLM.",
  location: "Pakistan",
  email: "ssc.shahbaz.2004@gmail.com",
  phone: "+92 312 5611348",
  availability: "Open to Work",
  resumeUrl: "/images/resume/Muhammad%20Hassan%20Shahbaz-CV.pdf",
  profileImage: "/images/profile/hassan-profile.jpg",
  aboutImage: "/images/profile/hassan-profile.jpg",
  heroImage: "/images/profile/professional-image.jpg",
  socials: {
    github: "https://github.com/Rana-Hassan7272",
    linkedin: "https://www.linkedin.com/in/muhammad-hassan-shahbaz-61b524311",
    leetcode: "https://leetcode.com/u/cZnGrMXlTO/",
    medium: "https://tinyurl.com/medium-papers",
    fiverr: "https://www.fiverr.com/hassan1830",
    huggingface: "https://huggingface.co/hassan7272",
  },
  githubUsername: "Rana-Hassan7272",
} as const;

export interface HeroStat {
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
  decimals?: number;
}

export const heroStats: HeroStat[] = [
  { value: 30, suffix: "+", label: "Projects Delivered" },
  { value: 3, suffix: "rd Place", label: "FYP · University Competition" },
  { value: 400, suffix: "+", label: "HF Model Downloads" },
  { value: 0.929, suffix: "", label: "Kaggle Leaderboard Score", decimals: 3 },
];

export const trustedByLogos = [
  { name: "CloudQuik", icon: "cloud" },
  { name: "NextGen Learners", icon: "graduation" },
  { name: "vLLM", icon: "cpu" },
  { name: "LiteLLM", icon: "layers" },
  { name: "Hugging Face", icon: "heart" },
  { name: "Kaggle", icon: "trophy" },
  { name: "Fiverr", icon: "briefcase" },
  { name: "UET Taxila", icon: "building" },
] as const;

export type ProjectCategory = "LLM Systems" | "MLOps" | "Full Stack AI" | "NLP" | "Agents";

export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  metrics: string[];
  techStack: string[];
  category: ProjectCategory;
  featured?: boolean;
  githubUrl?: string;
  liveUrl?: string;
  demoVideoUrl?: string;
  thumbnail: string;
  badge?: string;
}

export const projects: Project[] = [
  {
    id: "finguard",
    title: "FinGuard AI",
    tagline: "Pakistan's first fully-automated personal finance platform",
    description:
      "End-to-end platform: live SMS/notification/Gmail/OCR capture, 7-layer merchant intelligence, BERT categorization, LSTM forecasting, Isolation-Forest fraud, and multi-agent Finni advisor with Islamic finance (Zakat/Halal).",
    metrics: [
      "BERT F1 88.7%",
      "Parser 91.1% pass rate",
      "LSTM MAE < 25% on 20/21 cats",
      "Fraud AP 95.1%",
    ],
    techStack: [
      "FastAPI", "LangGraph", "Celery", "Supabase", "BERT", "LSTM",
      "LangChain", "FAISS", "Expo", "Kotlin", "Groq", "MLflow",
    ],
    category: "Full Stack AI",
    featured: true,
    githubUrl: "https://github.com/Rana-Hassan7272/Pakistan-First-Automated-Personal-Finance-Platfrom",
    demoVideoUrl: googleDrivePreviewUrl("1IgNAHpZPRxmnMZ4-S_DDHkLz1BHDV-A5"),
    thumbnail: "/images/projects/finguard.png",
    badge: "FYP · 3rd Place",
  },
  {
    id: "llm-systems",
    title: "LLM Inference Engineering",
    tagline: "NanoGPT from scratch + production inference optimization",
    description:
      "Built GPT from first principles (BPE, RoPE, SwiGLU, GQA, LoRA rank-sweep) then optimized inference at scale: KV-cache scaling, vLLM PagedAttention, adaptive quantization router, SSE streaming server.",
    metrics: [
      "10.25× KV-cache speedup @1K ctx",
      "3.51× vLLM vs manual",
      "Router 88.9% acc / F1 0.89",
      "0% failure @ 20 users",
    ],
    techStack: [
      "PyTorch", "vLLM", "HuggingFace", "BitsAndBytes", "FastAPI",
      "MLflow", "Locust", "React", "Docker", "CUDA",
    ],
    category: "LLM Systems",
    featured: true,
    githubUrl: "https://github.com/Rana-Hassan7272/llm-inference-optimization",
    demoVideoUrl: googleDrivePreviewUrl("1S48Srfu0g9MRXprIkI2hNIWYpKRwLjdw"),
    thumbnail: "/images/projects/llm-inference.png",
  },
  {
    id: "pulmoai",
    title: "PulmoAI Doctor Assistant",
    tagline: "10-agent LangGraph pulmonology workflow",
    description:
      "Multi-agent diagnostic pipeline: intake → triage → tests → RAG diagnosis → treatment → PDF report. WebSocket streaming, JWT auth, EfficientNet X-ray + XGBoost spirometry + voting-ensemble CBC.",
    metrics: [
      "X-ray F1 87.0% / Acc 87.8%",
      "CBC 99.83% accuracy",
      "94 tests · 96.6% pass",
      "10 specialized agents",
    ],
    techStack: [
      "FastAPI", "LangGraph", "React", "TypeScript", "WebSockets",
      "PyTorch", "EfficientNet", "XGBoost", "FAISS", "Neon", "Gemini",
    ],
    category: "Agents",
    featured: true,
    githubUrl: "https://github.com/Rana-Hassan7272/PulmoAI-Assistant-Doctor",
    liveUrl: "https://pulmo-ai-assistant-doctor.vercel.app",
    demoVideoUrl: googleDrivePreviewUrl("1nX-wmZMaZQXqKc6Zufvc0Qj4R9-kTwmB"),
    thumbnail: "/images/projects/pulmoai.png",
    badge: "Live",
  },
  {
    id: "finance-rag",
    title: "UrduFinance RAG",
    tagline: "Multilingual financial advisory RAG (Urdu / Roman Urdu / English)",
    description:
      "Fine-tuned multilingual embedder, dual FAISS+BM25 indexes, language-weighted RRF, MMR + cross-encoder rerank, adaptive confidence gate, 2-level semantic cache. Deployed to HF Spaces.",
    metrics: [
      "93.9% Acc@1 (+21pts vs baseline)",
      "MRR@10 0.966 · NDCG 0.975",
      "400+ HF model downloads",
      "80%+ test coverage",
    ],
    techStack: [
      "FAISS", "BM25", "Sentence-Transformers", "LlamaIndex", "Groq",
      "Gradio", "HuggingFace", "LangChain", "Python",
    ],
    category: "NLP",
    featured: true,
    githubUrl: "https://github.com/Rana-Hassan7272/UrduFinance-Advisory-RAG-system",
    demoVideoUrl: googleDrivePreviewUrl("190hXPPAVvdzthzlwKYJ5RVxgsMLrhXUV"),
    thumbnail: "/images/projects/finance-multilingual-rag.png",
  },
  {
    id: "mlops-suite",
    title: "MLOps Pipeline Suite",
    tagline: "End-to-end platform: training → serving → monitoring → auto-retrain",
    description:
      "Production ML platform across 3 tasks (spam / segmentation / fraud). Scratch algorithms, MLflow registry, Prometheus + Grafana + Alertmanager, Prefect retraining, Terraform-provisioned AWS Lambda serverless stack.",
    metrics: [
      "AWS serverless live",
      "K8s + kustomize + HPA",
      "CI/CD ~4m 47s",
      "Drift-triggered auto-retrain",
    ],
    techStack: [
      "FastAPI", "MLflow", "Prefect", "Prometheus", "Grafana",
      "Docker", "Kubernetes", "Terraform", "AWS Lambda", "GitHub Actions",
    ],
    category: "MLOps",
    featured: true,
    githubUrl: "https://github.com/Rana-Hassan7272/MLOps-Design",
    demoVideoUrl: googleDrivePreviewUrl("1TRi0rLuKI_xk_9mhtHTsASbMocFF49j-"),
    thumbnail: "/images/projects/mlops.png",
  },
  {
    id: "nanogpt-lab",
    title: "NanoGPT Lab",
    tagline: "GPT built from mathematical first principles",
    description:
      "Pure-PyTorch transformer: BPE tokenizer, RoPE / ALiBi, RMSNorm pre-norm, SwiGLU, GQA, FlashAttention SDPA, weight tying, LoRA rank-sweep, MLflow tracking, React inference dashboard.",
    metrics: [
      "LoRA r=8: 925 ppl @ 0.9% params",
      "Baseline 599 ppl (LR=3e-4 optimal)",
      "4 decoding strategies (SSE)",
      "MLflow reproducible runs",
    ],
    techStack: [
      "PyTorch", "MLflow", "FastAPI", "React", "Vite",
      "Recharts", "Docker", "Python",
    ],
    category: "LLM Systems",
    githubUrl: "https://github.com/Rana-Hassan7272/nano-gpt-lab",
    demoVideoUrl: googleDrivePreviewUrl("1KC9hG-RKpoWHoZUbYemOgGN5CrU1hAKo"),
    thumbnail: "/images/projects/nanogpt.png",
  },
  {
    id: "forex-mcp",
    title: "Forex Trading MCP Server",
    tagline: "Conversational trading journal via FastMCP + Gemini function calling",
    description:
      "Live deployed: 6 MCP tools (auth, trade save/close, insights, 10-pattern risk monitor). Gemini primary + Groq fallback, JSON-RPC 2.0 over SSE, per-user SQLite with salted auth.",
    metrics: [
      "6 live MCP tools",
      "10-pattern risk monitor",
      "Frontend Vercel · Backend FastMCP",
      "SHA-256 salted auth",
    ],
    techStack: [
      "FastMCP", "Gemini", "Groq", "React 18", "Vite",
      "SQLite", "JSON-RPC 2.0", "SSE", "Python",
    ],
    category: "Agents",
    githubUrl: "https://github.com/Rana-Hassan7272/forex_trading_mcp-server",
    liveUrl: "https://forex-trading-mcp-server.vercel.app/",
    demoVideoUrl: googleDrivePreviewUrl("1x5wMHgDHuduFeux_-AvfH0fxohw8akcz"),
    thumbnail: "/images/projects/forex-trading-assistant-mcp.png",
  },
  {
    id: "signal-draft",
    title: "SignalDraft",
    tagline: "Human-in-the-loop social media automation",
    description:
      "6-agent LangGraph pipeline: research live HN + RSS news → AI-draft tweet → human approval gate → publish to X. Gemini + Groq fallback, OAuth 2.0 PKCE, Fernet-encrypted tokens, Neon PostgreSQL.",
    metrics: [
      "6-agent LangGraph pipeline",
      "Human approval gate",
      "27 pytest tests passing",
      "Live on Streamlit Cloud",
    ],
    techStack: [
      "LangGraph", "Streamlit", "Gemini", "Groq", "SQLAlchemy",
      "Neon", "OAuth 2.0", "Fernet", "Python",
    ],
    category: "Agents",
    githubUrl: "https://github.com/Rana-Hassan7272/SignalDraft",
    liveUrl: "https://signaldraft.streamlit.app",
    demoVideoUrl: googleDrivePreviewUrl("1xBgpoMGPBnnwNNbLPcZ0E2MG9i_UtgTL"),
    thumbnail: "/images/projects/socialmedia-automation.png",
    badge: "Live",
  },
  {
    id: "aws-transformation",
    title: "AWS Cloud Transformation",
    tagline: "Full AWS serverless infrastructure & cloud solutions",
    description:
      "End-to-end AWS cloud architecture: Lambda container serving, API Gateway, ECR, S3 model storage, DynamoDB logging, EventBridge drift checks, SNS alerts, Terraform-provisioned infrastructure.",
    metrics: [
      "Serverless stack live",
      "Terraform IaC",
      "ECR + Lambda deploy",
      "API Gateway + DynamoDB",
    ],
    techStack: [
      "AWS Lambda", "API Gateway", "Terraform", "ECR", "S3",
      "DynamoDB", "EventBridge", "SNS", "Docker",
    ],
    category: "MLOps",
    demoVideoUrl: googleDrivePreviewUrl("19gokOnMP4eFBOA1xZU7BIAhBwGU6PEZE"),
    thumbnail: "/images/projects/aws.png",
  },
];

export const skillGroups = [
  {
    name: "LLM / GenAI",
    skills: [
      "LangChain", "LangGraph", "LlamaIndex", "RAG", "Multi-Agent", "MCP",
      "FAISS", "BM25", "RRF", "Reranking", "LoRA / QLoRA", "LLM Eval",
      "Prompt Engineering", "vLLM", "Groq", "OpenAI", "Gemini", "Transformers",
    ],
  },
  {
    name: "ML / DL",
    skills: [
      "PyTorch", "scikit-learn", "BERT", "LSTM", "EfficientNet", "XGBoost",
      "Isolation Forest", "NLP", "Feature Engineering", "Time-Series",
      "Sentence-Transformers", "MLflow",
    ],
  },
  {
    name: "MLOps / Cloud",
    skills: [
      "Docker", "Kubernetes", "Terraform", "AWS Lambda", "AWS ECR",
      "MLflow", "Prefect", "Airflow", "Prometheus", "Grafana",
      "GitHub Actions", "CI/CD", "HF Spaces", "Vercel", "Railway",
    ],
  },
  {
    name: "Backend",
    skills: [
      "FastAPI", "Next.js", "Node.js", "WebSockets", "SSE", "Celery",
      "Redis", "PostgreSQL", "Supabase", "Neon", "SQLAlchemy", "Pydantic",
    ],
  },
  {
    name: "Web / Full Stack",
    skills: [
      "React", "Next.js", "Node.js", "MERN", "TypeScript", "Tailwind CSS",
      "REST APIs", "SEO", "Performance", "Docker", "CI/CD", "Vercel", "AWS",
      "GitHub Actions", "Nginx", "Linux", "DevOps",
    ],
  },
  {
    name: "Languages",
    skills: ["Python", "TypeScript", "JavaScript", "SQL", "Kotlin", "Bash"],
  },
] as const;

export const experience = [
  {
    company: "CloudQuik Pvt Ltd",
    role: "AI/ML Engineer Intern",
    location: "Onsite · Pakistan",
    period: "Jul 2026 – Sep 2026",
    proofImage: "/images/acheivements/cloudquick.jpg",
    bullets: [
      "Built full-stack AI solutions: MERN, ML/DL workflows, and GenAI/LLM applications integrated end-to-end.",
      "Fine-tuned embedding models shipped to HuggingFace with 400+ downloads.",
      "Reduced document processing time ~40% via API + cloud optimization and production-grade FastAPI services on AWS.",
    ],
  },
  {
    company: "Freelance · Fiverr Level 2",
    role: "AI/ML & Full-Stack Engineer",
    location: "Remote · Global",
    period: "2023 – Present",
    proofImage: "/images/acheivements/fiverr.png",
    bullets: [
      "30+ delivered projects across MERN, ML/DL, chatbots, AI-integrated websites, automation, and DevOps. 5/5 rating, 10/10 success score.",
      "Shipped production sites: gulfteachers.com, kayicom.com, escortedmoroccotours.com — scalable, SEO-optimized, performance-tuned.",
      "Built workflow automation for non-technical clients — turning manual, repetitive tasks into reliable systems that save hours every week.",
      "Contributed 4 months as full-stack developer on staging.trainingx.ai: infrastructure improvements, critical bug fixes, AI feature integration.",
    ],
  },
  {
    company: "NextGen Learners",
    role: "Machine Learning Intern",
    location: "Remote",
    period: "May 2026 – Jun 2026",
    proofImage: "/images/acheivements/nextgen.jpg",
    bullets: [
      "Completed structured ML internship applying theoretical ML to real-world problem sets.",
      "Recognized for punctuality, initiative, and consistent professional communication.",
    ],
  },
  {
    company: "Open Source · vLLM + LiteLLM",
    role: "Contributor",
    location: "Global",
    period: "2026 – Present",
    bullets: [
      "vLLM PR #42557 (40K★): Fixed silent-zero benchmark failure on reasoning models (Qwen3 / DeepSeek-R1); added --disable-thinking + --extra-request-body CLI flags.",
      "LiteLLM PR #27998 (25K★): Fixed 3-root-cause $0 cost bug in Anthropic batch API — endpoint routing, JSONL translation, model_info fallback; added 4 unit tests.",
    ],
  },
] as const;

export const openSourcePRs = [
  {
    repo: "vllm-project/vllm",
    stars: "40k+",
    prNumber: "#42557",
    title: "Fix silent benchmark failure on reasoning models",
    summary:
      "Reasoning models consumed the entire max_tokens budget on thinking phases, producing zero output tokens and meaningless throughput numbers. Added --disable-thinking convenience flag + --extra-request-body JSON passthrough, plus warning on p50=0.",
    url: "https://github.com/vllm-project/vllm/pull/42557",
  },
  {
    repo: "BerriAI/litellm",
    stars: "25k+",
    prNumber: "#27998",
    title: "Fix $0 cost on Anthropic batch API",
    summary:
      "Three root causes: msgbatch_* IDs routed to wrong endpoint, Anthropic JSONL format not translated to OpenAI shape, model_info fallback returning empty dict instead of None. Fixed all three across 3 files + 4 unit tests.",
    url: "https://github.com/BerriAI/litellm/pull/27998",
  },
] as const;

export const achievements = [
  {
    title: "NSCT 2026",
    value: 92.2,
    suffix: " percentile",
    subtitle: "Top 8% nationwide · HEC Pakistan",
    detail: "Problem Solving 17/20 · Web Dev 8/10 · AI/ML 7/10",
    url: "https://tinyurl.com/nsct-result",
    image: "/images/acheivements/nsct-result.jpg",
  },
  {
    title: "FYP Competition",
    value: 3,
    suffix: "rd Place",
    subtitle: "University Final Year Project · FinGuard AI",
    detail: "3rd place among competing final-year projects",
    url: "https://github.com/Rana-Hassan7272/Pakistan-First-Automated-Personal-Finance-Platfrom",
    image: "/images/acheivements/3rdplacefyp.jpeg",
  },
  {
    title: "BirdCLEF+ 2026",
    value: 0.929,
    suffix: " LB Score",
    subtitle: "4,000+ teams · Kaggle",
    detail: "PERCH ONNX + ProtoSSM + ResidualSSM ensemble · ~1 min inference",
    url: "https://www.kaggle.com/competitions/birdclef-2025",
    image: "/images/acheivements/kaggle-rank.png",
  },
  {
    title: "Kaggle Python Coder",
    value: 1,
    suffix: "",
    displayText: "Earned",
    subtitle: "Verified skill badge · Kaggle",
    detail: "Python Coder certification earned on Kaggle",
    url: "https://www.kaggle.com/Rana-Hassan7272",
    image: "/images/acheivements/kaggle-pythoncoder.png",
  },
  {
    title: "LeetCode",
    value: 101,
    suffix: " solved",
    subtitle: "97.2% acceptance · Beats 80.3%",
    detail: "Easy 34 · Medium 50 · Hard 17 · Includes 40 SQL",
    url: "https://leetcode.com/u/cZnGrMXlTO/",
    image: "/images/acheivements/leetcode-stats.jpg",
  },
  {
    title: "Hugging Face",
    value: 400,
    suffix: "+ downloads",
    subtitle: "urdu-finance-embeddings",
    detail: "Fine-tuned multilingual model + open dataset (CC-BY-4.0)",
    url: "https://huggingface.co/hassan7272",
    image: "/images/acheivements/huggingface.png",
  },
  {
    title: "Fiverr",
    value: 30,
    suffix: "+ projects",
    subtitle: "Level 2 · Top 10% Globally",
    detail: "5/5 rating · 10/10 success score",
    url: "https://www.fiverr.com/hassan1830",
    image: "/images/acheivements/fiverr.png",
  },
] as const;

export const services = [
  {
    title: "Multi-Agent AI Systems",
    description:
      "LangGraph orchestration, custom agent pipelines with typed state, RAG-grounded specialists, and streaming SSE UIs.",
    tags: ["LangGraph", "MCP", "RAG", "Pydantic", "SSE"],
  },
  {
    title: "LLM Integration & Fine-Tuning",
    description:
      "LoRA/QLoRA adapters, embedding fine-tunes, evaluation harnesses, prompt engineering, and multi-provider gateways with failover.",
    tags: ["LoRA", "QLoRA", "Embeddings", "Eval", "vLLM"],
  },
  {
    title: "Full-Stack AI SaaS",
    description:
      "FastAPI + Next.js / Expo backends and mobile, Supabase / Postgres, Docker + CI/CD, deployed to AWS / Railway / HF Spaces.",
    tags: ["FastAPI", "Next.js", "Supabase", "Docker", "AWS"],
  },
] as const;

export const testimonials = [
  {
    name: "Verified Client",
    country: "United States",
    rating: 5,
    text: "Exceptional work on our RAG chatbot integration. Delivered ahead of schedule with production-quality code and clear documentation.",
    date: "2026",
    image: "/images/reviews/review1.jpeg",
  },
  {
    name: "Verified Client",
    country: "United Kingdom",
    rating: 5,
    text: "Hassan built a complete AI-integrated website with SEO optimization. Site loads fast, ranks well, and the ML features work flawlessly.",
    date: "2026",
    image: "/images/reviews/review2.jpeg",
  },
  {
    name: "Verified Client",
    country: "UAE",
    rating: 5,
    text: "Top-tier engineer. Migrated our LLM stack to a multi-provider gateway with fallback — cut costs 30% with zero downtime.",
    date: "2025",
    image: "/images/reviews/review3.jpeg",
  },
  {
    name: "Verified Client",
    country: "Global",
    rating: 5,
    text: "Outstanding full-stack AI development. Professional communication, on-time delivery, and exceeded expectations on every milestone.",
    date: "2025",
    image: "/images/reviews/review4.jpeg",
  },
] as const;

export interface CertCourse {
  title: string;
  pdfUrl?: string;
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  detail: string;
  courseCount: number;
  mainCertPdf?: string;
  mainCertImage?: string;
  courses: CertCourse[];
}

export const certifications: Certification[] = [
  {
    id: "mlops",
    title: "MLOps Specialization",
    issuer: "Duke University",
    detail: "4-course specialization",
    courseCount: 4,
    mainCertPdf: "/images/certifications/mlops-specialization.pdf",
    courses: [
      { title: "MLOps Specialization Certificate", pdfUrl: "/images/certifications/mlops-specialization.pdf" },
      { title: "Course 1", pdfUrl: "/images/certifications/mlops-firstcert.pdf" },
      { title: "Course 2", pdfUrl: "/images/certifications/mlops-secondcert.pdf" },
      { title: "Course 3", pdfUrl: "/images/certifications/mlops-thirdcert.pdf" },
    ],
  },
  {
    id: "genai",
    title: "Generative AI with LLMs",
    issuer: "DeepLearning.AI × AWS",
    detail: "Advanced LLM systems",
    courseCount: 1,
    mainCertPdf: "/images/certifications/generative-ai-with%20llm%20cert.pdf",
    courses: [
      { title: "Generative AI with LLMs", pdfUrl: "/images/certifications/generative-ai-with%20llm%20cert.pdf" },
    ],
  },
  {
    id: "deeplearning",
    title: "Deep Learning Specialization",
    issuer: "DeepLearning.AI",
    detail: "5-course specialization",
    courseCount: 5,
    mainCertPdf: "/images/certifications/deeplearning-specialization.pdf",
    courses: [
      { title: "Deep Learning Specialization", pdfUrl: "/images/certifications/deeplearning-specialization.pdf" },
      { title: "Course 1", pdfUrl: "/images/certifications/deeplearning-firstcert.pdf" },
      { title: "Course 2", pdfUrl: "/images/certifications/deeplearning-secondcert.pdf" },
      { title: "Course 3", pdfUrl: "/images/certifications/deeplearning-thirdcert.pdf" },
      { title: "Course 4", pdfUrl: "/images/certifications/deeplearning-fourthcert.pdf" },
      { title: "Course 5", pdfUrl: "/images/certifications/deeplearning-fifthcert.pdf" },
    ],
  },
  {
    id: "aws",
    title: "AWS Cloud Solutions Architect",
    issuer: "Amazon Web Services",
    detail: "4-course specialization",
    courseCount: 4,
    mainCertPdf: "/images/certifications/aws-maincert.pdf",
    courses: [
      { title: "AWS Cloud Solutions Architect", pdfUrl: "/images/certifications/aws-maincert.pdf" },
      { title: "Course 1", pdfUrl: "/images/certifications/aws-firstcert.pdf" },
      { title: "Course 2", pdfUrl: "/images/certifications/aws-secondcert.pdf" },
      { title: "Course 3", pdfUrl: "/images/certifications/aws-thirdcert.pdf" },
    ],
  },
  {
    id: "ibm",
    title: "AI Fundamentals",
    issuer: "IBM",
    detail: "Credential: PWID-B0133500",
    courseCount: 1,
    mainCertImage: "/images/certifications/ibm-ai.png",
    courses: [
      { title: "AI Fundamentals", pdfUrl: "/images/certifications/ibm-ai.png" },
    ],
  },
];

export const blogs = [
  {
    title: "Beyond Retrieval: What It Actually Takes to Build RAG That Works",
    summary:
      "A research-grade analysis of why production RAG systems fail despite strong benchmark scores. Six failure modes analyzed against FinGuard's multilingual pipeline: retrieval–answerability misalignment, context sufficiency, Roman Urdu representation, hard-negative trade-offs, relevance vs utility, and hallucination despite retrieval.",
    tags: ["RAG", "LLM", "Multilingual NLP", "Research"],
    url: "https://tinyurl.com/rag-paper",
  },
  {
    title: "KV-Cache Inference Optimization for Transformer Models",
    summary:
      "First-principles derivation of autoregressive attention complexity, analytical latency models, and cache-crossover thresholds — validated on Tesla T4 GPU. Connects theory to vLLM, FlashAttention, and PagedAttention.",
    tags: ["Transformers", "Inference", "vLLM", "GPU"],
    url: "https://tinyurl.com/kv-cache-paper",
  },
] as const;

export const education = [
  {
    school: "University of Engineering & Technology (UET), Taxila",
    degree: "Bachelor of Science in Computer Science",
    period: "Sep 2022 – Jul 2026 (Expected)",
    score: "CGPA: 3.42 / 4.0",
    coursework: [
      "Artificial Intelligence",
      "Neural Networks",
      "Natural Language Processing",
      "Computer Vision",
      "Data Structures & Algorithms",
      "Databases",
      "Software Engineering",
      "Distributed Systems",
    ],
  },
  {
    school: "The Scholars Science College, Wah Cantt",
    degree: "F.Sc Pre-Engineering",
    period: "Aug 2020 – Jul 2022",
    score: "925 / 1100 marks (85%)",
    coursework: [],
  },
] as const;
