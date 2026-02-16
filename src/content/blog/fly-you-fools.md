---
title: "\"Fly, You Fools\": The Moat Is in Routing, Not Weights"
description: BloombergGPT spent $10M training custom weights. GPT-4 surpassed it in months. The lesson for clinical AI and everyone else.
pubDate: 2026-02-15
tags: ["ai", "orchestration", "clinical-ai", "strategy"]
---

In the Mines of Moria, the Fellowship of the Ring encountered a Balrog - a demon of shadow and flame from an older age. They ran. At the Bridge of Khazad-dûm, Gandalf turned to face it. He did not do so to win. He did so to buy time. As the bridge crumbled and the Balrog dragged him into the abyss, Gandalf's final words to his companions were not a battle cry but a strategic imperative: "Fly, you fools!"

The message was not cowardice. It was wisdom. The Balrog was not their fight. Engaging it directly meant death. The correct move was to route around the problem - to let Gandalf absorb the cost while the Fellowship continued toward the actual objective.

In December 2022, Bloomberg LP began training BloombergGPT, a 50-billion parameter large language model fine-tuned on four decades of proprietary financial data. The project reportedly cost upwards of $10 million in compute alone. Bloomberg's bet was intuitive: proprietary data creates proprietary advantage. Their terminal data, their news archives, their analyst reports: surely this corpus would create an insurmountable moat.

The paper was published in March 2023. By November 2023, GPT-4 matched or exceeded BloombergGPT on financial NLP benchmarks, having never seen Bloomberg's proprietary training data.

The Balrog won.

<figure class="float-right"><img src="/blog/bonfire.jpg" alt="Standing by the bonfire on my PI's farm" /><figcaption>Bonfire on my principal investigator's farm, 2025.</figcaption></figure>

## The Graveyard

BloombergGPT is the canonical cautionary tale, but the real story is more nuanced than the headlines suggest.

Nine researchers [1]. 512 NVIDIA A100 GPUs running for 53 days. 709 billion training tokens, 363 billion of them proprietary financial data from Bloomberg Terminal. Direct compute cost: approximately $2.7 million. All-in project cost including failed runs, personnel, data preprocessing, and infrastructure: roughly $10 million [2]. The result was a 50.6-billion parameter model that was arguably obsolete before its paper hit arXiv. GPT-4 launched sixteen days before BloombergGPT's paper was published. Li et al. at Queen's University and JP Morgan demonstrated at EMNLP 2023 that GPT-4 outperformed BloombergGPT on most financial NLP tasks, achieving 68.79% zero-shot accuracy on FinQA [3]. The PIXIU benchmark that June showed that FinMA-7B, a 7-billion parameter instruction-tuned open model, beat BloombergGPT on financial sentiment analysis at roughly $300 per training run [4]. A model costing less than a weekend conference registration outperformed one costing $10 million.

Bloomberg never open-sourced the weights, citing data leakage concerns [1]. The model was embedded quietly into Terminal infrastructure. Bloomberg has since pivoted to integrating frontier models through ASKB, a ChatGPT-style interface launched in early 2026 [5]. Ethan Mollick called BloombergGPT "one of the most consequential experiments in AI." He meant it as a warning [6].

On June 7, 2023, sitting across from Indian VCs in New Delhi, Sam Altman said the quiet part loud: "It's pretty hopeless to compete with us on training foundation models. You shouldn't try" [7]. The CEO of OpenAI told the world not to compete on weights. Then DeepSeek built R1 for $5.6 million [8], and the clip went viral as proof of how fast the frontier moves. But Altman's underlying point holds for everyone except the five labs that can actually afford the compute. If you are not OpenAI, Anthropic, Google, Meta, or xAI, training foundation models from scratch is a losing game.

The graveyard proves it.

Meta's Galactica, a 120-billion parameter model trained on 360 million scientific citations, was killed three days after public release when it hallucinated scientific papers with confident authority [9]. Chegg's stock cratered from $113.51 to $0.78, a 99.3% decline, as ChatGPT replaced its homework help business [10]. Stack Overflow's monthly questions dropped 78% year-over-year by December 2025, falling back to 2008 levels as developers migrated to AI coding assistants [11].

Jasper AI raised $125 million at a $1.5 billion valuation in October 2022, building a GPT-3 wrapper for marketing copy. Revenue reportedly fell by more than half after ChatGPT launched and offered similar capabilities at $20 per month. The CEO and CTO both departed [12]. Jasper's product was a thin layer over someone else's model, and when that someone else shipped their own interface, the layer evaporated.

Then came the acqui-hire graveyard. Inflection AI raised $1.3 billion at a $4 billion valuation; Microsoft gutted it for $650 million in licensing fees and the bulk of its 70-person staff [13]. Adept raised over $400 million, then Amazon hired 80% of the team without ever shipping a product [14]. Character.AI raised $150 million; Google paid $2.7 billion in licensing fees to bring back co-founders Noam Shazeer and Daniel De Freitas, hollowing the company into a shell [15].

On February 3, 2026, Anthropic released Claude Cowork, a suite of open-source plugins including a legal automation tool. Wall Street coined the event the "SaaSpocalypse." Approximately $285 billion in market capitalization evaporated from software stocks in a single trading session. Thomson Reuters fell 16%. LegalZoom plunged 20% [16]. The legal plugin was structured prompt engineering on top of Anthropic's own models, with no proprietary dataset. That was the point. The vertical that spent decades building knowledge moats watched a model lab replicate the core functionality as a free plugin.

The pattern is consistent. Companies that bet on weights or thin wrappers get leapfrogged the moment the next frontier model drops.

The Balrog does not slow down. It accelerates.

## Orchestration as Intelligence Amplification

This is not about saving money. It is not about compliance. It is about a more fundamental claim: orchestration produces superior *intelligence*.

Shumeet Baluja, co-founder of Poetiq and a 21-year veteran of Google/DeepMind, puts it directly: "LLMs are impressive databases that encode a vast amount of humanity's collective knowledge. They are simply not the best tools for deep reasoning. That's why efforts to improve their problem-solving skills are so slow and expensive" [17]. His thesis: the upper limit of AI reasoning is set by the orchestration layer, not the base model.

The evidence is striking. In November 2025, Poetiq (six people, founded five months earlier) topped the ARC-AGI-2 leaderboard. Gemini 3 Deep Think scored 45% on the semi-private test set at $77.16 per problem. Poetiq wrapped the same Gemini 3 in a five-step cycle (hypothesize, code, test, self-audit, refine) and hit 54% at $30.57 per problem [18]. More accuracy from the same model, at less than half the cost. When GPT-5.2 released weeks later, they adapted within hours and jumped to 75% on the public evaluation set, exceeding the human baseline of 60% [19]. No retraining. No fine-tuning. The same approach, pointed at a better engine.

Read that again. A six-person team's orchestration layer extracted more reasoning capability from Gemini 3 than Google's own Deep Think mode achieved. The model lab that built the weights could not match what a meta-system built on top of those weights produced.

Then Symbolica's Agentica went further. Three hundred and fifty lines of Python. Recursive sub-agent spawning up to nine levels deep. A persistent Python REPL where agents maintain stateful workspaces and dynamically choose between depth and breadth exploration. The result: 85.28% on ARC-AGI-2 with Opus 4.6, demolishing every previous score [20]. Different architecture than Poetiq (genuine recursive sub-agent spawning versus iterative refinement), but the same core insight. The ceiling on what a model can accomplish is set by the intelligence of the system directing it.

These are not isolated benchmark curiosities. The pattern is showing up across the market.

Harvey AI is the sharpest industry case study, because they tried both approaches. Harvey originally built a proprietary vertical legal model. Then frontier reasoning models from Google, xAI, OpenAI, and Anthropic began outperforming Harvey's custom model on Harvey's own BigLaw Bench evaluation. Harvey scrapped the proprietary model and pivoted to multi-model orchestration. The result: $195 million ARR, $8 billion valuation, 100,000 lawyers on the platform, 50 of the top AmLaw 100 firms as customers [21]. Harvey did not fight the Balrog. Harvey routed around it.

Cursor hit $1 billion ARR by November 2025, the fastest B2B SaaS company to reach that milestone in recorded history [22]. Cursor does not own a foundation model. They built a coding IDE that orchestrates Claude, GPT, and Gemini into a workflow that seven million developers pay for. The value is in the routing, the context management, the codebase indexing.

Perplexity processes 780 million queries per month with model-agnostic routing across Sonar, GPT, Claude, Gemini, Grok, and Mistral [23]. When one provider raises prices, Perplexity reroutes. When another has an outage, queries flow elsewhere. Their "Model Council" fires queries to three frontier models in parallel, then a fourth synthesizes the answers. The architecture itself is the product, valued at $20 billion.

The theoretical case has hardened. Andrew Chen at a16z published "Revenge of the GPT Wrappers" in February 2025, arguing that AI model moats have collapsed (state-of-the-art leads open source by roughly six months) and that network effects and distribution will determine winners, just as they did when "database wrappers" became the trillion-dollar companies of Web 2.0 [24]. The NBER paper "Old Moats for New Models" by Azoulay, Krieger, and Nagaraj (MIT and Harvard Business School, 2024) reached a similar conclusion through rigorous economic analysis: defensibility comes from complementary assets, network effects, and switching costs, not from weights [25].

Now for the uncomfortable truths.

Cursor spends approximately 100% of its revenue on AI compute, primarily payments to Anthropic for Claude API access [26]. Perplexity spent 164% of its revenue on compute in 2024 [27]. Even Anthropic itself spent $2.66 billion on AWS against $2.55 billion in revenue through September 2025. The entire orchestration stack is subsidized by venture capital. The strategic thesis is sound, but the unit economics remain unproven. Every company in this section is growing fast and losing money.

And benchmark leads are fleeting. Poetiq held ARC-AGI-2 SOTA for weeks before Symbolica surpassed them. Poetiq has no commercial traction yet, no public revenue, no deployed enterprise product. The benchmark results validate the architectural principle, not any particular company's durability.

The winning formula is not pure orchestration. It is orchestration combined with at least one durable advantage: a proprietary data flywheel, deep workflow integration, network effects, or targeted proprietary models that reduce dependency on supplier pricing. Pure thin wrappers (Jasper) die. Hybrid approaches (Cursor, Perplexity, Harvey) survive. The question is whether survival converts to profitability before the venture capital runs out.

## Fly, You Fools

The Balrog keeps getting stronger. GPT-5 surpasses GPT-4. Claude 5 surpasses Claude 4. The frontier labs will keep pouring billions into training runs that obsolete yesterday's weights. That is their fight. It is not yours.

Build the orchestration layer. That is where intelligence compounds, where a six-person team outreasons a model lab, where 350 lines of Python unlock reasoning a trillion-dollar company's native interface could not.

Fly, you fools.

---

## References

[1] Wu et al., "BloombergGPT: A Large Language Model for Finance," arXiv, March 2023. [Link](https://arxiv.org/abs/2303.17564)

[2] HPCwire, "Bloomberg Uses 1.3 Million Hours of GPU Time for Homegrown Large Language Model," April 2023. [Link](https://www.hpcwire.com/2023/04/06/bloomberg-uses-1-3-million-hours-of-gpu-time-for-homegrown-large-language-model/)

[3] Li et al., "Are ChatGPT and GPT-4 General-Purpose Solvers for Financial Text Analytics?," EMNLP 2023 Industry Track. [Link](https://aclanthology.org/2023.emnlp-industry.39/)

[4] Xie et al., "PIXIU: A Large Language Model, Instruction Data and Evaluation Benchmark for Finance," arXiv, June 2023. [Link](https://arxiv.org/abs/2306.05443)

[5] Institutional Investor, "The Bloomberg Terminal Just Got a ChatGPT-Style Upgrade," November 2025. [Link](https://www.institutionalinvestor.com/article/2bsts3kce1udcfcy33z7k/portfolio/the-bloomberg-terminal-just-got-a-chatgpt-style-upgrade)

[6] Mollick, E., Threads post, March 24, 2024. [Link](https://www.threads.com/@ethan_mollick/post/C46AfItO8RS?hl=en)

[7] Altman, S., "ET Conversations," Economic Times, June 7, 2023. [Link](https://economictimes.indiatimes.com/news/international/world-news/totally-hopeless-to-compete-with-us-sam-altmans-old-video-comes-to-bite-him-amid-deepseeks-rise/videoshow/117652495.cms)

[8] Tom's Hardware, "Sam Altman said startups with only $10 million were 'totally hopeless' competing with OpenAI. DeepSeek's disruption says otherwise," January 2025. [Link](https://www.tomshardware.com/tech-industry/artificial-intelligence/sam-altman-said-startups-with-only-usd10-million-were-totally-hopeless-competing-with-openai-deepseeks-disruption-says-otherwise)

[9] MIT Technology Review, "Meta's large language model only survived three days," November 2022. [Link](https://www.technologyreview.com/2022/11/18/1063487/meta-large-language-model-ai-only-survived-three-days-gpt-3-science/)

[10] Macrotrends, "Chegg Stock Price History." [Link](https://www.macrotrends.net/stocks/charts/CHGG/chegg/stock-price-history)

[11] DevClass, "Dramatic drop in Stack Overflow questions as devs look elsewhere for help," January 2026. [Link](https://www.devclass.com/ai-ml/2026/01/05/dramatic-drop-in-stack-overflow-questions-as-devs-look-elsewhere-for-help/4079575)

[12] Turing Post, "Jasper AI: A Dilemma of a Thin Wrapper." [Link](https://www.turingpost.com/p/jasperai)

[13] Bloomberg, "Microsoft to Pay Inflection AI $650 Million After Scooping Up Most of Staff," March 2024. [Link](https://www.bloomberg.com/news/articles/2024-03-21/microsoft-to-pay-inflection-ai-650-million-after-scooping-up-most-of-staff)

[14] killedbyllm.com, "Adept AI." [Link](https://killedbyllm.com/)

[15] Reuters, "Character.AI lays off at least 5% of staff," August 2024. [Link](https://www.reuters.com/technology/characterai-lays-off-least-5-its-staff-information-reports-2024-08-30/)

[16] Fast Company, "Why one Anthropic update wiped billions off software stocks," February 2026. [Link](https://www.fastcompany.com/91487960/why-one-anthropic-update-wiped-billions-off-software-stocks)

[17] Operator Collective, "Poetiq: The Meta-System Making AI Actually Reason," January 2026. [Link](https://www.operatorcollective.com/blog-posts/poetiq-the-meta-system-making-ai-actually-reason)

[18] Poetiq, "ARC-AGI-2 SOTA at Half the Cost," December 2025. [Link](https://poetiq.ai/posts/arcagi_verified/)

[19] PR Newswire, "Poetiq Raises $45.8M for AI Meta-System, Surpasses Top LLMs on Industry Benchmark," January 2026. [Link](https://www.prnewswire.com/news-releases/poetiq-raises-45-8m-for-ai-meta-system-surpasses-top-llms-on-industry-benchmark-302674571.html)

[20] Symbolica, "SotA ARC-AGI-2 Results with REPL Agents," February 2026. [Link](https://www.symbolica.ai/blog/arcgentica)

[21] TechCrunch, "Legal AI startup Harvey confirms $8B valuation," December 2025. [Link](https://techcrunch.com/2025/12/04/legal-ai-startup-harvey-confirms-8b-valuation/)

[22] SaaStr, "Cursor Hit $1B ARR in 24 Months," November 2025. [Link](https://www.saastr.com/cursor-hit-1b-arr-in-17-months-the-fastest-b2b-to-scale-ever-and-its-not-even-close/)

[23] DemandSage, "Perplexity AI Statistics 2026." [Link](https://www.demandsage.com/perplexity-ai-statistics/)

[24] Chen, A., "Revenge of the GPT Wrappers," Substack, February 2025. [Link](https://andrewchen.substack.com/p/revenge-of-the-gpt-wrappers-defensibility)

[25] Azoulay, Krieger, and Nagaraj, "Old Moats for New Models," NBER Working Paper 32474, 2024. [Link](https://www.nber.org/papers/w32474)

[26] Where's Your Ed At, "This Is How Much Anthropic and Cursor Spend on AWS." [Link](https://www.wheresyoured.at/costs/)

[27] Where's Your Ed At, "Why Everybody Is Losing Money On AI." [Link](https://www.wheresyoured.at/why-everybody-is-losing-money-on-ai/)
