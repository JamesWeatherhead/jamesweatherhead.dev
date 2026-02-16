---
title: "\"Fly, You Fools\": The Moat Is in Routing, Not Weights"
description: BloombergGPT spent $10M training custom weights. GPT-4 surpassed it in months. The lesson for clinical AI and everyone else.
pubDate: 2026-02-15
tags: ["ai", "orchestration", "clinical-ai", "strategy"]
heroImage: "/blog/bonfire.jpg"
---

In the Mines of Moria, the Fellowship of the Ring encountered a Balrog - a demon of shadow and flame from an older age. They ran. At the Bridge of Khazad-dûm, Gandalf turned to face it. He did not do so to win. He did so to buy time. As the bridge crumbled and the Balrog dragged him into the abyss, Gandalf's final words to his companions were not a battle cry but a strategic imperative: "Fly, you fools!"

The message was not cowardice. It was wisdom. The Balrog was not their fight. Engaging it directly meant death. The correct move was to route around the problem - to let Gandalf absorb the cost while the Fellowship continued toward the actual objective.

In December 2022, Bloomberg LP began training BloombergGPT, a 50-billion parameter large language model fine-tuned on four decades of proprietary financial data. The project reportedly cost upwards of $10 million in compute alone. Bloomberg's bet was intuitive: proprietary data creates proprietary advantage. Their terminal data, their news archives, their analyst reports: surely this corpus would create an insurmountable moat.

The paper was published in March 2023. By November 2023, GPT-4 matched or exceeded BloombergGPT on financial NLP benchmarks, having never seen Bloomberg's proprietary training data.

The Balrog won.

![Watching it burn](/blog/bonfire.jpg)

## The Graveyard

BloombergGPT is the canonical cautionary tale, but the real story is more nuanced than the headlines suggest.

Nine researchers. 512 NVIDIA A100 GPUs running for 53 days. 709 billion training tokens, 363 billion of them proprietary financial data from Bloomberg Terminal. Direct compute cost: approximately $2.7 million. All-in project cost including failed runs, personnel, data preprocessing, and infrastructure: roughly $10 million. The result was a 50.6-billion parameter model that was arguably obsolete before its paper hit arXiv. GPT-4 launched sixteen days before BloombergGPT's paper was published. Li et al. at Queen's University and JP Morgan demonstrated at EMNLP 2023 that GPT-4 outperformed BloombergGPT on most financial NLP tasks, achieving 68.79% zero-shot accuracy on FinQA.

To be honest about the nuance: GPT-4 did not win everything. BloombergGPT held advantages on named entity recognition and certain structured extraction tasks. And the comparison was structurally unfair: a 50.6B-parameter model against GPT-4's estimated 1.7 trillion parameters in a mixture-of-experts architecture. That is not a fair fight on raw capability.

But the lesson is not simply "bigger is better." The PIXIU benchmark in June 2023 showed that FinMA-7B, a 7-billion parameter instruction-tuned open model, beat BloombergGPT on financial sentiment analysis. Cost per training run: approximately $300. The lesson is that pre-training a domain-specific model from scratch was the wrong approach entirely. Fine-tuning existing models, retrieval-augmented generation, and prompt engineering all proved cheaper and more effective.

BloombergGPT was never open-sourced, never clearly deployed as a standalone product. Bloomberg still embeds it somewhere in the Terminal infrastructure, and they have legitimate data privacy reasons for not routing to external APIs. But the moat thesis that launched it is dead. Ethan Mollick called it "one of the most consequential experiments in AI." He meant that as a warning.

The graveyard extends well beyond finance. Meta's Galactica, a 120-billion parameter model trained on 360 million scientific citations, was killed three days after public release when it hallucinated scientific papers with confident authority. Chegg's stock cratered from $113.51 to $0.78 (a 99.3% decline) as ChatGPT replaced its homework help business. Stack Overflow's monthly questions dropped 78% year-over-year by December 2025, falling back to 2008 levels as developers migrated to AI coding assistants.

Jasper AI raised $125 million at a $1.5 billion valuation in October 2022, building a GPT-3 wrapper for marketing copy. Revenue reportedly fell by more than half after ChatGPT launched and offered similar capabilities at $20 per month. The CEO and CTO both departed. The company attempted a pivot to enterprise features, but the damage was existential. Jasper's product was a thin layer over someone else's model, and when that someone else shipped their own interface, the layer evaporated.

Then came the acqui-hire graveyard. Inflection AI raised $1.3 billion at a $4 billion valuation, then got gutted by Microsoft for $650 million in licensing fees and the bulk of its 70-person staff. Adept raised over $400 million at roughly $1 billion, then Amazon hired 80% of the team without shipping a product. Character.AI raised $150 million at a $1 billion valuation; Google paid $2.7 billion in licensing fees to bring back co-founders Noam Shazeer and Daniel De Freitas, hollowing the company into a shell.

On February 3, 2026, Anthropic released Claude Cowork, a suite of open-source plugins including a legal automation tool. Wall Street coined the event the "SaaSpocalypse." Approximately $285 billion in market capitalization evaporated from software stocks in a single trading session. Thomson Reuters fell 16%. RELX dropped 14%. LegalZoom plunged 20%. The legal plugin was not magic. It was structured prompt engineering on top of Anthropic's own models, with no proprietary dataset. That was the point. The vertical that spent decades building knowledge moats watched a model lab replicate the core functionality as a free plugin.

The pattern is consistent. Companies that bet on weights or thin wrappers get leapfrogged the moment the next frontier model drops.

The Balrog does not slow down. It accelerates.

## The Orchestration Thesis

Some companies looked at the Balrog and chose not to fight it.

Harvey AI is the clearest case study because they tried both approaches. Harvey originally built a proprietary legal model. Then frontier reasoning models from Google, xAI, OpenAI, and Anthropic began outperforming Harvey's custom model on Harvey's own BigLaw Bench evaluation. Harvey scrapped the proprietary model and pivoted to multi-model orchestration, chaining different frontier LLMs for document analysis, legal research, and contract drafting. The result: $195 million ARR, $8 billion valuation, 100,000 lawyers on the platform, 50 of the top AmLaw 100 firms as customers. Harvey did not fight the Balrog. Harvey routed around it.

In November 2025, a six-person team called Poetiq (co-founders from DeepMind, 72 combined years at Google) topped the ARC-AGI-2 leaderboard at 54% accuracy on the semi-private test set, beating Gemini 3 Deep Think's 45% at less than half the cost: $30.57 per problem versus $77.16. They raised $45.8 million in seed funding in January 2026. Here is the part that matters: Poetiq does not train models. They build a meta-system that orchestrates existing frontier LLMs, generating specialized agents and recursively improving them. Their system used Gemini 3 as its underlying model and beat Gemini 3 Deep Think's native performance by wrapping it in something smarter.

Important caveats: Poetiq's ARC-AGI-2 results have already been surpassed by Symbolica's Agentica framework (85.28% with Opus 4.6), and Poetiq has no commercial traction yet. Benchmark supremacy is fleeting. But the architectural lesson holds. A six-person orchestration team extracted more performance from an existing model than the model lab itself achieved.

Cursor hit $1 billion ARR by November 2025, confirmed by CNBC. The fastest B2B SaaS company ever to reach that milestone. Cursor does not own a foundation model. They built a coding IDE that orchestrates Claude, GPT, and Gemini into a workflow that seven million developers pay for. The value is in the routing, the context management, the codebase indexing.

Perplexity processes 780 million queries per month with model-agnostic routing across Sonar, GPT, Claude, Gemini, Grok, and Mistral. When one provider raises prices, Perplexity reroutes. When another has an outage, queries flow elsewhere. Their "Model Council" feature fires queries to three frontier models in parallel, then a fourth synthesizes the answers. The architecture itself is the product, valued at $20 billion.

The theoretical case has hardened. Andrew Chen at a16z published "Revenge of the GPT Wrappers" in February 2025, arguing that AI model moats have collapsed (state-of-the-art leads open source by roughly six months) and that network effects and distribution will determine winners, just as they did when "database wrappers" became the trillion-dollar companies of Web 2.0. The NBER paper "Old Moats for New Models" by Azoulay, Krieger, and Nagaraj (MIT and Harvard Business School, 2024) reached a similar conclusion through rigorous economic analysis: defensibility comes from complementary assets, network effects, and switching costs. Not from weights.

Now for the uncomfortable truth. Cursor spends approximately 100% of its revenue on AI compute, primarily payments to Anthropic for Claude API access. Perplexity spent 164% of its revenue on compute in 2024. Even Anthropic itself spent $2.66 billion on AWS against $2.55 billion in revenue through September 2025. The entire orchestration stack is subsidized by venture capital. The strategic thesis is sound, but the unit economics remain unproven. Every company in this section is growing fast and losing money. That tension is real, and anyone building in this space should be clear-eyed about it.

The winning formula is not pure orchestration. It is orchestration combined with at least one durable advantage: a proprietary data flywheel, deep workflow integration, network effects, or targeted proprietary models that reduce dependency on supplier pricing. Pure thin wrappers die. Hybrid approaches survive. The question is whether survival converts to profitability before the venture capital runs out.

## Why This Matters for Clinical AI

I am an MD/PhD student at UTMB. I spend my days inside a hospital system where the gap between "impressive AI demo" and "deployable clinical tool" is a canyon filled with regulatory lava.

You cannot fine-tune your way out of HIPAA compliance.

Every interaction with protected health information requires an audit trail: who accessed what, when, and why. Orchestration layers provide this natively. Fine-tuned model weights do not. HIPAA's data minimization principle requires ephemeral processing, where patient data is handled then pushed to the EHR, not retained for training. Fine-tuning requires storing and reprocessing PHI, creating retention risk. Worse, fine-tuned language models can memorize training data within their weights. In healthcare, that means a model could potentially reproduce patient data in responses. That is not a theoretical concern. It is a regulatory time bomb.

Protocol enforcement lives in the orchestration layer. When a clinical workflow requires that a diagnosis be supported by at least three peer-reviewed citations before surfacing to a clinician, that logic belongs in the routing, not in the weights. When a query contains PHI that should never leave the institutional network, the routing layer makes that decision before the model ever sees it. When a specific model version gets flagged for a safety issue, the orchestration layer swaps it out. The compliance logic is decoupled from the model.

This is why every clinical AI tool I build is an orchestration layer. ehrsh routes natural language to FHIR APIs, translating what a clinician says into structured API calls that pull the right data, enforce access controls, and log every interaction. The diagnostic evidence pipeline routes queries to PubMed, chains retrieval and reasoning into auditable citation-backed outputs. The semantic search platform routes clinician questions to relevant clinical content without sending patient context to external services. None of these require training a single weight. All of them require careful routing, protocol enforcement, tool dispatch, and audit trails.

Abridge offers a useful reference point for what this looks like at scale. Valued at $5.3 billion, Abridge became the first ambient AI tool integrated into Epic's EHR, now deployed across 150-plus health systems including Kaiser Permanente and Mayo Clinic. Their approach is hybrid: purpose-built models for clinical documentation, frontier models for adjacent capabilities. But the core value is not the model. It is the Epic integration, the clinical data flywheel across 55 specialties, and the regulatory infrastructure that makes deployment possible.

In healthcare, the application layer is the product. The model is interchangeable. When frontier models update (and they will, every few months), the orchestration layer stays. Your compliance does not break. Your audit trails do not disappear. Your workflow integrations do not need to be rebuilt from scratch.

The moat in clinical AI is not a better model. It is the bridge between the model and the patient record.

## Fly, You Fools

The Balrog keeps getting stronger. GPT-5 will surpass GPT-4. Claude 5 will surpass Claude 4. The frontier labs will keep pouring billions into training runs that obsolete yesterday's weights. That is their fight. It is not yours.

Build the bridge. Build the routing, the orchestration, the compliance layer that makes whatever model is strongest today actually useful where the stakes are real. Let the Balrogs fight each other.

Fly, you fools.
