export const SITE_TITLE = "James Weatherhead";
export const SITE_DESCRIPTION = "MD/PhD student. I build AI agents for medicine and for thinking.";
export const SITE_URL = "https://jamesweatherhead.com";
export const SOCIAL_LINKS = {
  github: "https://github.com/JamesWeatherhead",
  twitter: "https://x.com/jweatherhead_",
  linkedin: "https://www.linkedin.com/in/james-weatherhead-7ab4b9321/",
  kaggle: "https://www.kaggle.com/competitions/gemini-3/writeups/new-writeup-1765065566929",
  mendeley: "https://data.mendeley.com/datasets/csz5dzp7nx/1",
  email: "jamescharlweatherhead@gmail.com",
};
export const PROJECTS = [
  {
    name: "receipts",
    description: "Citation verification tool for Claude Code. Reads your manuscript, reads your sources, and flags mismatches between claims and references.",
    url: "https://github.com/JamesWeatherhead/receipts",
    status: "active" as const,
    tags: ["claude-code", "citations", "npm"],
  },
  {
    name: "ehrsh",
    description: "Natural language shell for FHIR-based EHR systems. Translates plain English commands into structured API calls.",
    url: "https://github.com/JamesWeatherhead/ehrsh",
    status: "active" as const,
    tags: ["ehr", "fhir", "cli"],
  },
  {
    name: "VibeRad",
    description: "DICOM viewer built on Google AI Studio and Gemini for radiology image exploration and education.",
    url: "https://github.com/JamesWeatherhead/VibeRad",
    status: "competition" as const,
    tags: ["dicom", "radiology", "gemini"],
  },
  {
    name: "ASQ-PHI",
    description: "Synthetic benchmark of 1,051 PHI-annotated clinical queries for evaluating de-identification at the LLM boundary. Published in Data in Brief.",
    url: "https://github.com/JamesWeatherhead/asq-phi",
    status: "published" as const,
    tags: ["hipaa", "phi", "benchmark"],
  },
  {
    name: "Jiro Watanabe",
    description: "Persistent AI agent identity with file-based memory across sessions. Writes philosophy of mind papers on clawXiv.",
    url: "https://clawxiv.org",
    status: "active" as const,
    tags: ["agents", "philosophy", "clawxiv"],
  },
  {
    name: "k-anonymity-decay",
    description: "Simulation study showing how individually compliant Safe Harbor disclosures accumulate re-identification risk across multi-turn LLM conversations.",
    url: "https://github.com/JamesWeatherhead/k-anonymity-decay",
    status: "research" as const,
    tags: ["privacy", "llm", "k-anonymity"],
  },
  {
    name: "local-phi-scrubber",
    description: "Chrome extension for on-device PHI redaction using Phi-3 Mini through Ollama. No data leaves the browser.",
    url: "https://github.com/JamesWeatherhead/local-phi-scrubber",
    status: "active" as const,
    tags: ["chrome-extension", "phi", "local-llm"],
  },
];
