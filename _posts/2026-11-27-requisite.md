---
layout: post
title: "ReQuisite: Friday, November 27, 2026"
date: 2026-11-27 07:30:00 -0400
infographic:
  headline: "SAP rethinks its workforce"
  highlight: "for the AI era."
  number: "10,000+"
  label: "jobs SAP is weighing cutting as it reshapes its software business for AI, out of more than 110,000 staff, according to Bloomberg's sources"
  visual: bar
  bar_value: 10000
  bar_max: 110000
  bar_label: "At least 10,000 of more than 110,000 SAP employees"
  tiles:
    - number: "24 hours"
      label: "Swiss advice: install critical updates on internet-facing systems within a day of release"
      section: security
    - number: "40%"
      label: "faster that GPT-6.2 Astra users now hit usage limits after OpenAI fixed a billing error"
      section: products
    - number: "39,000+"
      label: "signatures on a UK petition for a national consultation on AI datacenters, which the government rejected"
      section: environment
---

## Top 3 today

- SAP is weighing cuts of at least 10,000 jobs as it reshapes its software business for AI, Bloomberg reports; SAP says no decisions have been made. ([CNBC](https://www.cnbc.com/2026/11/27/sap-job-cuts-ai-restructuring.html))
- Switzerland's National Cyber Security Centre confirmed five attacks using AI agents, four of which broke into systems, including two successful intrusions at critical infrastructure operators. ([The Hacker News](https://thehackernews.com/2026/11/switzerland-confirms-ai-assisted.html))
- The UK government rejected a petition for a national consultation on the environmental impact of AI datacenters, saying individual projects should go through planning. ([The Register](https://www.theregister.com/off-prem/2026/11/27/uk-government-rejects-national-consultation-on-ai-datacenters/5312501))

## AI products and models

**OpenAI fixes a GPT-6.2 billing error, so usage limits now run out faster**

A billing bug during the GPT-6.2 rollout gave most users incorrect discounts; with it fixed, GPT-6.2 Astra users hit limits 40% faster than last week and Sol users 25% faster, though quotas still last longer than on GPT-6 Astra and GPT-6.1 Sol. OpenAI will not charge retroactively, and Go, Plus, Pro and Business subscribers get an extra saved reset, with free Fast Mode for Business users through the end of the year.

Why it matters: Teams that sized their AI work around last week's limits may find people running out sooner, which is worth flagging before it looks like a productivity drop.

Source: [The Decoder, November 26, 2026](https://the-decoder.com/gpt-6-2-astra-users-now-hit-limits-40-faster-after-openai-patched-a-pricing-error/)

**Z.ai ships a 750-billion-parameter model as Chinese labs report slower progress**

Z.ai released GLM-5.4, a 750-billion-parameter model it describes as its first large model built on a loop transformer, and claims performance comparable to models with 2 to 3 trillion parameters (no independent benchmarks are given). Citing Reuters' anonymous sources, The Decoder reports that Z.ai's roughly 3-trillion-parameter GLM-5.5 is likely to slip to Q1 2027 and that Moonshot AI's next major model, Kimi K4, may move to mid-2027 because of US chip curbs and blocks on distillation.

Why it matters: Organizations that use or plan to use Chinese open models should expect release timelines to be less predictable while access to compute and training data tightens.

Source: [The Decoder, November 23, 2026](https://the-decoder.com/z-ai-follows-openai-into-loop-transformer-territory-with-its-new-750b-flagship-model/) and [The Decoder, November 26, 2026](https://the-decoder.com/after-openai-and-anthropic-shut-the-door-on-their-data-a-chinese-ai-developer-is-turning-to-google-and-meta-instead/)

## Data and analytics industry

**BigQuery can now query AWS, Azure and Salesforce Data 360 from any region**

Google made cross-cloud connections generally available, letting BigQuery query data in AWS, Azure and Salesforce Data 360 from all BigQuery regions, with broader feature availability than standard BigQuery Omni connections. A day earlier, Google made the ML.TREND, ML.SEASONALITY, ML.DETECT_CHANGE_POINTS and ML.CORRELATION functions generally available in the query editor and in conversational analytics.

Why it matters: Analysts can reach data held in other clouds without first copying it, and trend and change-point analysis is now built into the tools business users already query with.

Source: [Google Cloud BigQuery release notes, November 24 and 25, 2026](https://docs.cloud.google.com/bigquery/docs/release-notes)

**BigQuery Storage API v1beta1 will shut down on August 31, 2027**

Google deprecated the BigQuery Storage API v1beta1; access was limited on November 20, 2026 to projects that used it between March 1 and August 31, 2026, and after shutdown calls will fail with a NOT_FOUND error. Google recommends moving to the backward-compatible v1 and updating connectors, client libraries and custom code.

Why it matters: Older connectors and in-house pipelines can depend on this endpoint without anyone noticing, so data teams have a clear date to find and update them.

Source: [Google Cloud BigQuery release notes, November 25, 2026](https://docs.cloud.google.com/bigquery/docs/release-notes)

## AI and the workforce

**SAP weighs cutting at least 10,000 jobs to reshape for AI**

Bloomberg reports, citing people familiar with the matter, that SAP is weighing cuts of at least 10,000 positions, with all departments asked to identify possible cuts and a focus on product, engineering and sales; SAP employs more than 110,000 people. SAP told CNBC it is "continuously reviewing how our organization and workforce need to evolve" and that "no decisions have been made regarding any further measures."

Why it matters: One of the largest enterprise software vendors is tying workforce plans directly to AI, which will shape how its customers' own leaders talk about AI and jobs.

Source: [CNBC, November 27, 2026](https://www.cnbc.com/2026/11/27/sap-job-cuts-ai-restructuring.html)

## Policy and regulation

**India weighs AI systems that link family data across agencies**

Uttar Pradesh issued a 178-page tender for an "AI Stack" that would use its Family ID household identifier to link data across agencies for about a dozen uses, including social media monitoring of grievances and a police knowledge assistant, using self-hosted open-weight models and anonymized datasets. Prime Minister Narendra Modi also outlined an app collecting data on children from age three to steer study and career paths; the Internet Freedom Foundation says the systems are not explicitly authorized by any law.

Why it matters: Public-sector AI built on linked citizen records raises the governance questions about purpose, consent and oversight that data leaders face anywhere, at the scale of a state with more than 240 million residents.

Source: [The Register, November 26, 2026](https://www.theregister.com/public-sector/2026/11/26/indias-government-ponders-cradle-to-grave-ai-oversight/5312275)

**UK privacy regulator faces an independent review of its workplace culture**

Karon Monaghan KC will lead a review, commissioned by DCMS, of the Information Commission's culture and governance, including whether staff could raise concerns, following former Information Commissioner John Edwards' resignation in June 2026. Findings are expected in the first quarter of 2027 and will go to Parliament; the review will not reopen the Edwards investigation or assess enforcement decisions.

Why it matters: The body that oversees how UK organizations handle personal data, including in AI, is itself under scrutiny on how it treats its own people.

Source: [The Register, November 26, 2026](https://www.theregister.com/public-sector/2026/11/26/uk-privacy-watchdog-faces-probe-into-its-workplace-culture/5312380)

## Off the beaten path

**Preprint: firms more exposed to AI agents are slowing hiring for non-senior roles**

Economists Nicola Borri, Anton Cheremukhin, Yukun Liu and Aleh Tsyvinski combined OpenRouter data on about two quadrillion AI tokens with 34.8 million US job postings from public firms, and found a one-standard-deviation rise in a firm's exposure to agentic AI predicts 2.11% lower posting growth over six months and 3.20% over nine, concentrated in non-senior roles. Exposure is a market-based measure, not a count of agents a firm uses, and the paper is a preprint that has not been peer reviewed.

Why it matters: It points to entry-level and junior hiring as where agents show up first, which matters for talent pipelines and how teams train the next generation.

Source: [arXiv, submitted November 20, revised November 23, 2026](https://arxiv.org/abs/2611.27210)

**Forrester: November's outages came from technical debt, not a conspiracy**

Forrester analysts Lauren Nelson and Mark Moccia say a seven-day stretch of failures across Microsoft 365, US air traffic control, banking and other services stems from technical debt, complex interdependent systems, concentrated risk and underinvestment in operations, calling the cause "tragically mundane." They urge organizations to map dependencies, test failure and recovery under realistic conditions, and learn from near misses.

Why it matters: Spending has favored visible projects such as AI over the core systems they run on, and resilience work is a people and budget decision as much as a technical one.

Source: [The Register, November 26, 2026](https://www.theregister.com/research/2026/11/26/techs-outage-problem-needs-maintenance-not-conspiracy-theories/5312180)

## Environmental and societal impacts

**UK rejects a national consultation on AI datacenters' environmental impact**

The government rejected a Protect the Wild petition, which passed 10,000 signatures in three days and had more than 39,000 when reported, asking for a UK-wide consultation on AI datacenters' environmental impact. It said individual projects should be handled through planning, pointed to a consultation on draft datacenter planning policy open until January 8, 2027, and to its Data Centre Covenant, though it has not defined which "strategic" sites must meet it or how it will be enforced.

Why it matters: People who want a say on local datacenter builds will need to use the planning consultation and individual applications rather than a national review.

Source: [The Register, November 27, 2026](https://www.theregister.com/off-prem/2026/11/27/uk-government-rejects-national-consultation-on-ai-datacenters/5312501)

**AI boom leaves network operators waiting up to 18 months for optical kit**

A report from network operator RETN says optical networking equipment prices have risen about 50% since the start of 2026, and kit that once arrived within three months now takes 12 to 15 months, with some orders taking up to 18. Developers building outside established hubs may need to involve carriers two to five years before opening.

Why it matters: AI demand is squeezing the network capacity everyone else relies on, which can delay connectivity upgrades and raise costs for ordinary enterprises.

Source: [The Register, November 27, 2026](https://www.theregister.com/networks/2026/11/27/ai-boom-leaves-network-operators-waiting-up-to-18-months-for-kit/5312366)

## Security and compliance watch

**Switzerland confirms AI agents broke into critical infrastructure operators**

What happened: Switzerland's National Cyber Security Centre confirmed five attacks using "agentic offensive frameworks," with AI agents breaking into systems in four; three targeted critical infrastructure operators and two of those succeeded, with no major disruptions reported. The agents typically scan for known, unpatched weaknesses and switch methods when defenses respond.

Who could be affected and how: Critical infrastructure operators and small and medium-sized companies (both were among the unnamed victims), and any organization with unpatched internet-facing systems.

Actions to take: The Swiss advice is to install critical security updates on internet-facing systems within 24 hours of release, reduce internet exposure with geo-blocking, allow lists and authentication in front of services, require MFA or passkeys with least privilege, and watch for unusual behavior and data volumes.

Suggested: Check whether your patch process can actually meet a 24-hour window for internet-facing systems, and name who decides when it cannot.

Source: [The Hacker News, November 27, 2026](https://thehackernews.com/2026/11/switzerland-confirms-ai-assisted.html)

**Update: Microsoft names Chinese and North Korean state groups using the ARTEX AI framework**

What happened: Since the November 20 edition covered the ARTEX-assisted attack on the European Commission, Microsoft has reported that state-backed groups including Salt Typhoon and North Korea's Onyx Sleet and Pearl Sleet are using ARTEX, with some campaigns reaching privileged access in under three hours. Microsoft says the tool adds no new techniques but chains known ones at machine speed; a ConnectWise-related compromise enabled attempted sign-ins to more than 2,250 Microsoft 365 tenants.

Who could be affected and how: Cloud environments and IT software users, financial institutions, telecoms and government systems, which the report names among targets.

Actions to take: The source gives no specific fixes. It notes the UK NCSC's observation that AI-driven tools are noisy and easier to spot in network logs.

Suggested: Ask your security team or provider whether they are alerting on the bursts of automated activity these tools produce.

Source: [The Register, November 26, 2026](https://www.theregister.com/security/2026/11/26/microsoft-hackers-in-china-n-korea-using-artex-ai-tool-to-break-into-global-tech-systems/5312433)

**North Korea-linked campaign poisoned more than 7,600 GitHub repositories**

What happened: Apiiro counts 7,609 repositories owned by 2,330 accounts carrying a hidden loader that runs when a repository is cloned, forked or built, often tucked into a utils package or conftest.py; attackers use stolen GitHub tokens to rewrite past commits while keeping the original author and date. The campaign also uses fake recruitment take-home assessments and tampers with GitHub Desktop, Cursor and VS Code.

Who could be affected and how: Developers and data scientists who clone unfamiliar repositories or take coding tests from unsolicited recruiters, with environment secrets, browser passwords, cookies and wallet data at risk.

Actions to take: The source gives no formal recommendations.

Suggested: Treat take-home coding tests from unsolicited job offers as high risk and run them in an isolated environment, and rotate GitHub tokens on any machine that may be compromised.

Source: [The Hacker News, November 26, 2026](https://thehackernews.com/2026/11/north-korea-linked-polinrider-poisons.html)

## Talking point of the day

**Can you patch in 24 hours?**

Switzerland's advice after confirmed AI-agent intrusions is blunt: install critical updates on internet-facing systems within 24 hours of release. Most organizations' change processes were built for weeks, not a day, and the agents are winning on old, unpatched weaknesses rather than new tricks. A useful client question is "who can approve an emergency patch tonight, and what breaks if they do," because that is a people and process answer before it is a technical one.

Source: [The Hacker News, November 27, 2026](https://thehackernews.com/2026/11/switzerland-confirms-ai-assisted.html)
