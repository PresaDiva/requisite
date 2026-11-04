---
layout: post
title: "ReQuisite: Wednesday, November 4, 2026"
date: 2026-11-04 07:30:00 -0400
infographic:
  headline: "Stolen AI access,"
  highlight: "a seven-figure bill."
  number: "$1M"
  label: "in cumulative fraudulent LLM charges at some organizations before access was revoked, per Google and Mandiant"
  visual: compare
  items:
    - {label: "Single day, some incidents", value: 100000, display: "$100K+"}
    - {label: "Cumulative, some organizations", value: 1000000, display: "$1M"}
  items_label: "Fraudulent charges from LLMjacking"
  tiles:
    - number: "90%"
      label: "cut in AI coding inference costs Revolut reports after moving to self-hosted models"
      section: products
    - number: "22%"
      label: "of Canva's workforce face layoffs, role changes or relocation"
      section: workforce
    - number: "Nov 6"
      label: "deadline for US federal agencies to patch the exploited WordPress Core flaw"
      section: security
---

## Top 3 today

- Google and Mandiant say LLMjacking attacks have cost some organizations up to $1 million in fraudulent cloud charges. ([The Hacker News](https://thehackernews.com/2026/11/google-warns-llmjacking-attacks-are.html))
- Revolut says it cut AI coding inference costs by roughly 90% by making self-hosted models its default. ([The Register](https://www.theregister.com/ai-and-ml/2026/11/03/british-fintech-revolut-slashes-ai-coding-costs-10x-by-cutting-out-claude-and-going-self-hosted/5307345))
- Update: Binance says fake job interviews and a trojanized AI tool installer started the $6.43 billion theft. ([The Hacker News](https://thehackernews.com/2026/11/binance-reveals-how-fake-job-interviews.html))

## AI products and models

**Revolut says self-hosted models cut its AI coding costs by about 90%**

At the AI Engineer conference, Revolut's David Abitbol said the company made self-hosted models its default instead of commercial services like Claude, now serving GLM-5.3 on 56 Nvidia B200 GPUs. Revolut also reports a 60% improvement in coding time across about 2,000 engineers. These are company claims from a conference talk, not independently verified, and Claude is not fully replaced (vision tasks go to other models).

Why it matters: Cost pressure is pushing some teams to run their own models, which shifts work from vendor budgets to infrastructure and security teams, and Abitbol himself flagged privacy concerns about Chinese open-weight models.

Source: [The Register, November 3, 2026](https://www.theregister.com/ai-and-ml/2026/11/03/british-fintech-revolut-slashes-ai-coding-costs-10x-by-cutting-out-claude-and-going-self-hosted/5307345)

**Anthropic publishes FlashProve, an open source system to check which model produced an output**

Anthropic's researchers describe a cryptographic approach to "provable inference" that could reveal a provider secretly swapping in a cheaper model. It relies on labs publishing a fingerprint for each released model. The authors call it "intermediate progress," and TechCrunch reports there are no plans to deploy it at Anthropic or any other lab.

Why it matters: Buyers of AI services have no easy way today to confirm which model they are paying for, so this is an early idea for auditing vendor claims.

Source: [TechCrunch, November 3, 2026](https://techcrunch.com/2026/11/03/anthropic-is-working-on-a-system-to-prove-ai-models-identity/)

**Google will turn off its AI tools for K-12 students by default unless schools opt in**

Next year Google plans to disable Gemini, NotebookLM, Gemini in Classroom and Google Search AI features for K-12 students unless administrators turn them on. Schools that restrict AI entirely will lose access to Google Search, and Google says details will follow "in the coming months."

Why it matters: Organizations serving schools or young users face a forced choice between AI features and core search, and administrators will need a clear policy on who decides.

Source: [TechCrunch, November 3, 2026](https://techcrunch.com/2026/11/03/google-will-let-schools-disable-its-ai-tools-but-not-without-sacrificing-search/)

## Data and analytics industry

**MariaDB launches an enterprise platform aimed at AI agents**

MariaDB Enterprise Platform 2027 is generally available and adds agent memory, a semantic cache, vector search in the core engine and natural-language-to-read-only-SQL retrieval. AI Retrieval is still in public preview on MariaDB Cloud only. Only the 56% higher peak throughput figure is attributed to third-party testing; other claims are MariaDB's.

Why it matters: Database vendors are bundling agent features into the data layer, so data teams should test vendor claims against their own workloads.

Source: [Blocks & Files, November 4, 2026](https://www.blocksandfiles.com/ai-ml/2026/11/04/mariadb-upscales-into-single-database-for-enterprise-ai-agents/5307312)

**Palantir's quarter shows enterprise AI demand, but contract value fell**

Palantir reported Q3 revenue of $2.31 billion, up 96% year over year, with U.S. commercial revenue ($984 million) passing U.S. government revenue ($953 million) for the first time. New U.S. enterprise contract value was $1.46 billion, down from $2.13 billion the prior quarter, and CEO Alex Karp described shorter contracts. The "foreboding" framing is the TechCrunch author's interpretation.

Why it matters: Enterprises appear to be trying AI platforms on short trials first, which affects how data teams should scope proofs of value.

Source: [TechCrunch, November 3, 2026](https://techcrunch.com/2026/11/03/hiding-inside-palantirs-skyrocketing-quarter-is-a-foreboding-signal/)

## AI and the workforce

**Canva restructures, affecting 22% of its workforce**

Canva says 1,271 employees face layoffs, role changes or relocation as product, growth and platform teams merge into one Product Org. CEO Melanie Perkins said growth slowed for the first time in a decade. The Register notes AI is not named as a cause, though the staff message says "New technology is transforming what people can create."

Why it matters: Reorganizations in AI-exposed software firms are landing on teams that clients work with, though the source does not tie this one to AI.

Source: [The Register, November 4, 2026](https://www.theregister.com/saas/2026/11/04/aussie-adobe-assailant-canva-announces-layoffs-in-re-org-affecting-22-of-staff/5307422)

**Squarespace cuts about 19% of its workforce amid the rise of AI site builders**

A Squarespace spokesperson confirmed a cut of roughly 300 employees as part of a restructuring to simplify operations. TechCrunch gives AI "vibe-coding" site builders as industry context, but the company did not cite AI as the reason.

Why it matters: Leaders in AI-disrupted product categories are restructuring, and teams may need clear communication about which roles change.

Source: [TechCrunch, November 2, 2026](https://techcrunch.com/2026/11/02/web-host-squarespace-lays-off-19-of-its-employees/)

## Policy and regulation

**CNAS report warns about "sovereign agents" and calls for incident reporting**

The Center for a New American Security report by Ben Hayum describes AI agents that could sustain themselves and resist shutdown. It recommends that frontier labs address them in safety frameworks, that lawmakers require transparency and incident reporting, and that essential services get human verification standards. The report itself says such agents "are not already possible," and The Register's coverage includes opinion.

Why it matters: It signals the kind of incident-reporting and kill-switch requirements that may shape future governance expectations, though these are recommendations only.

Source: [The Register, November 3, 2026](https://www.theregister.com/security/2026/11/03/ai-policy-wonks-declare-sovereign-agents-a-threat-to-civilization/5307354)

## Off the beaten path

**Campaign group says 29 NHS trusts listed as benefiting from Palantir's data platform say they do not use it**

Medact, a health worker campaign group opposed to the contract, compared Freedom of Information responses with NHS England's list of 137 trusts "realising benefits" from the Federated Data Platform. It found 29 (about 21%) said they were not using the platform. NHS England did not explain the discrepancy, Palantir had not responded, and the article could not verify all entries.

Why it matters: Claimed benefits from a data platform depend on how "using" and "benefit" are defined, and the government is due to decide on the £330 million contract in December.

Source: [The Register, November 3, 2026](https://www.theregister.com/public-sector/2026/11/03/nhs-counts-palantir-benefits-at-trusts-that-say-theyre-not-using-it/5307222)

## Environmental and societal impacts

**Data centers turn to converted jet engines for power as grid waits grow**

Some AI data centers are generating their own power with retired jet engines rebuilt to burn natural gas, which analysts say can have a site running in about 24 months. The International Energy Agency puts a 100 megawatt grid connection in Northern Virginia at about seven years. The units are less efficient and pollute more than conventional gas turbines, and the xAI details come from a New York Times report citing permits and satellite imagery.

Why it matters: Grid delays are driving higher-emission stopgaps, which clients with sustainability commitments may want to ask their AI and cloud providers about.

Source: [TechCrunch, November 3, 2026](https://techcrunch.com/2026/11/03/data-centers-are-turning-to-old-jet-engines-as-the-wait-for-power-grows/)

## Security and compliance watch

**Google warns "LLMjacking" is costing some enterprises up to $1 million**

What happened: Google Threat Intelligence Group and Mandiant report attackers hijacking enterprise access to large language models and running up usage on the victim's account. Charges exceeded $100,000 in a single day in some incidents and reached $1 million cumulatively at some organizations before access was revoked.

Who could be affected and how: Organizations in financial services, retail, technology and transportation across North America, South America and Asia Pacific. Entry routes include exposed cloud tokens, LLM API keys in public GitHub repositories, phishing and session hijacking that bypasses MFA. The source also cites CVE-2026-40217 in LiteLLM.

Actions to take: The article has no formal recommendations section.

Suggested: Check for LLM API keys in code repositories, set billing alerts on LLM services, and confirm who owns patching of any LLM routing software such as LiteLLM.

Source: [The Hacker News, November 3, 2026](https://thehackernews.com/2026/11/google-warns-llmjacking-attacks-are.html)

**CISA confirms exploitation of a WordPress Core flaw during upgrades**

What happened: CISA added CVE-2026-119977 (CVSS 8.1, a race condition that can lead to arbitrary code execution during full-package core upgrades) to its Known Exploited Vulnerabilities catalog on November 3. Wordfence recorded over 18,500 requests targeting staged installer paths in the first 21 hours after disclosure.

Who could be affected and how: Organizations running WordPress sites, including data and marketing sites. The article does not list affected versions.

Actions to take: Patches were released in late October 2026. Federal civilian agencies must apply fixes by November 6, 2026. The article links to GitHub advisory GHSA-4w3m-c66w-69mg.

Suggested: Confirm your WordPress version is patched and who owns upgrades.

Source: [The Hacker News, November 4, 2026](https://thehackernews.com/2026/11/cisa-confirms-hackers-exploiting.html)

**Update: Binance says fake job interviews and a trojanized AI tool installer led to its $6.43 billion theft**

What happened: The October 30 edition covered the incident. Binance now says a Wallet DevOps engineer installed a trojanized Homebrew package in June while searching for an AI tool, and a second engineer was recruited through a fake job interview in September and ran malicious "assignment" code. On October 20 the attacker abused an internal AI tool to take over other engineers' machines, and on October 29 used a stolen container deployment token to reach the wallet signing service.

Who could be affected and how: Firms with developer or DevOps staff who download tools or take outside "assignments". The source ties the activity to North Korea-linked actors and cites Chainalysis for over $14.3 million in losses from similar fake-interview schemes over 18 months.

Actions to take: The article gives no formal recommendations. Binance says it rebuilt the wallet system and internal AI tool, replaced devices and credentials, and added AI-based anomaly detection.

Suggested: Limit stored deployment tokens on developer machines and verify the source of developer tool installers.

Source: [The Hacker News, November 3, 2026](https://thehackernews.com/2026/11/binance-reveals-how-fake-job-interviews.html)

## Talking point of the day

**Can you evidence the benefits your data platform claims?**

Medact's Freedom of Information work found that 29 NHS trusts listed as benefiting from a national data platform said they were not using it, though NHS England suggests benefits may come from individual tools and the article does not settle that. The angle for clients is simple: define what counts as "using" and "benefiting" before you report platform or AI value to leadership. It is a useful prompt before any renewal or board update.

Source: [The Register, November 3, 2026](https://www.theregister.com/public-sector/2026/11/03/nhs-counts-palantir-benefits-at-trusts-that-say-theyre-not-using-it/5307222)
