export const SITE_TITLE = "James Weatherhead";
export const SITE_DESCRIPTION = "MD/PhD at UTMB. I build tools for clinical AI and publish datasets for evaluating them.";
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
    name: "ASQ-PHI",
    description: "Published benchmark dataset of 1,051 synthetic clinical queries with token-level PHI annotations, designed to evaluate de-identification systems at the LLM input boundary. Published in Data in Brief; dataset available on Mendeley Data.",
    url: "https://github.com/JamesWeatherhead/asq-phi",
    status: "published" as const,
    tags: ["hipaa", "phi", "benchmark"],
  },
  {
    name: "ehrsh",
    description: "Natural language shell for FHIR R4 EHR systems. Translates plain English commands into structured FHIR API calls (Patient, Observation, MedicationRequest endpoints) so clinicians can query records without writing REST requests.",
    url: "https://github.com/JamesWeatherhead/ehrsh",
    status: "active" as const,
    tags: ["ehr", "fhir", "cli"],
  },
  {
    name: "receipts",
    description: "npm package and Claude Code skill for citation verification. Parses manuscript text and source documents, then checks each claim against its cited reference to flag unsupported or mismatched assertions.",
    url: "https://github.com/JamesWeatherhead/receipts",
    status: "active" as const,
    tags: ["claude-code", "citations", "npm"],
  },
  {
    name: "k-anonymity-decay",
    description: "Simulation showing how individually Safe Harbor-compliant disclosures accumulate cumulative re-identification risk across multi-turn LLM conversations. Models k-anonymity degradation as quasi-identifiers compound over successive prompts.",
    url: "https://github.com/JamesWeatherhead/k-anonymity-decay",
    status: "research" as const,
    tags: ["privacy", "llm", "k-anonymity"],
  },
  {
    name: "local-phi-scrubber",
    description: "Chrome extension for on-device PHI redaction. Runs Phi-3 Mini locally via Ollama to identify and strip protected health information from text before it leaves the browser. No data sent to external servers. Oral presentation at AMIA Amplify Informatics Conference, May 2026, Denver, CO.",
    url: "https://github.com/JamesWeatherhead/local-phi-scrubber",
    status: "presentation" as const,
    tags: ["chrome-extension", "phi", "local-llm", "amia"],
  },
  {
    name: "VibeRad",
    description: "DICOM viewer for radiology education built with Google Gemini. Submitted as an entry for the Kaggle Gemini 3 competition. Supports image exploration and AI-assisted annotation of radiological studies.",
    url: "https://github.com/JamesWeatherhead/VibeRad",
    status: "competition" as const,
    tags: ["dicom", "radiology", "gemini"],
  },
];
