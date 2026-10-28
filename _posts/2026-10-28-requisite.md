---
layout: post
title: "ReQuisite: Wednesday, October 28, 2026"
date: 2026-10-28 07:30:00 -0400
---

## Top 3 today

- Update: CISA confirms the Brotli decoder flaw and an Adobe Commerce flaw are being exploited, with a November 10 federal deadline. ([The Hacker News](https://thehackernews.com/2026/10/adobe-commerce-polyshell-attacks-breach.html))
- Anthropic says an unreleased research model chained software flaws into working lab exploits for Chrome, Safari, Windows and Linux. ([The Hacker News](https://thehackernews.com/2026/10/anthropics-unreleased-ai-model-chains.html))
- Gartner: three-quarters of board members expect AI to lift productivity and cut costs, but only 3% of organizations have met those targets. ([The Register](https://www.theregister.com/ai-and-ml/2026/10/27/a-whopping-3-of-boardroom-execs-spy-productivity-and-costs-savings-from-ai/5305675))

## AI products and models

**Anthropic says an unreleased model built working exploits from chained flaws**

Anthropic's Frontier Red Team says an unnamed, unreleased internal research model, after "initial prompting" and with "little human involvement," chained flaws in Chrome, Safari, Android, Windows and Linux into lab-built proof-of-concept exploits. Anthropic says they were not seen in real attacks and that the reported flaws are patched. The Hacker News notes the capability claim rests on Anthropic's own account and that some CVE records do not clearly match Anthropic's descriptions.

Why it matters: Clients running browsers, endpoints and servers should expect the pace of exploit development to rise, which makes patch speed a people-and-process question as much as a tooling one.

Source: [The Hacker News](https://thehackernews.com/2026/10/anthropics-unreleased-ai-model-chains.html) (Oct 28, 2026)

**Bank of America tells customers not to give AI assistants their banking password**

In an email titled "Protecting your finances in the AI World," confirmed as authentic by a spokesperson, the bank said customers should not share credentials with any outside service, including an AI tool or agent. It warned that customers are responsible for activity resulting from that access. TechCrunch reports banks are still working out how AI tools should connect to accounts, including for agentic payments.

Why it matters: Customers are already handing credentials to agents, so any team building customer-facing AI needs a clear answer on delegated access and who carries the liability.

Source: [TechCrunch](https://techcrunch.com/2026/10/27/bank-of-america-kindly-asks-that-you-dont-share-your-banking-password-with-your-ai-assistant/) (Oct 27, 2026)

**OpenAI and Anthropic each claim their models refuted a computer-science conjecture, and experts have not confirmed it**

OpenAI released solutions to three long-standing math problems, one of which would refute the Exponential Time Hypothesis; Anthropic then published its own refutation on GitHub. TechCrunch reports the result is unconfirmed, with outside experts still reviewing the proofs and one calling parts of them "alien."

Why it matters: This is a live example of AI output that is hard to check, and a reminder to build review steps before relying on a model's headline claims.

Source: [TechCrunch](https://techcrunch.com/2026/10/27/frontier-ai-labs-say-their-models-refuted-the-exponential-time-hypothesis-what-does-that-mean/) (Oct 27, 2026)

## Data and analytics industry

**Databricks lets AI agents connect to its MCP servers without an admin creating an OAuth app, and adds permissions for AI Functions**

Two Databricks features reached general availability on October 27. Default OAuth apps let ChatGPT, Codex, Claude, Claude Code and Cursor connect to Databricks MCP servers without an account admin setting up an app. Metastore admins can also use Unity Catalog permissions on the system.ai schema to control which task-specific AI Functions users can run (the entry says to contact the Databricks account team to enable it).

Why it matters: Easier agent access raises the value of the permissions control, so data owners should decide who may use which AI Functions before agent use spreads.

Source: [Databricks release notes, October 2026](https://docs.databricks.com/aws/en/release-notes/product/2026/october) (Oct 27, 2026)

**Snowflake previews Time Travel and named version tags for Iceberg tables**

Snowflake's preview lets you query a past snapshot of an Iceberg table by snapshot ID, reference name or version tag, and keep a tagged snapshot for a period you choose, independent of the table's data retention. The release note's example retains a tag for 7 days.

Why it matters: Named, retained snapshots give data teams a simpler way to reproduce past reports and investigate changes, though this is a preview.

Source: [Snowflake release notes](https://docs.snowflake.com/en/release-notes/2026/other/2026-10-28-iceberg-time-travel-version-tags) (Oct 28, 2026)

## AI and the workforce

**Gartner: only 3% of organizations have met their AI productivity and cost targets**

Presenting at Gartner's HR Symposium, Gartner reported that three-quarters of board members expect AI to raise productivity and cut costs, but only 3% of organizations have met those targets. It also said 38% of companies are over budget on AI spending and 85% plan to spend more next year. The Register gives no sample size or method, so the figures cannot be weighed properly.

Why it matters: Leaders and employees disagree about where AI creates value, so change plans need agreed measures of success before more budget is committed.

Source: [The Register](https://www.theregister.com/ai-and-ml/2026/10/27/a-whopping-3-of-boardroom-execs-spy-productivity-and-costs-savings-from-ai/5305675) (Oct 27, 2026)

## Policy and regulation

**noyb files five GDPR complaints against Scale AI over tracking of its data-labeling contractors**

The privacy group noyb filed complaints in France, Italy, the Netherlands and Austria over Scale AI's Outlier platform. It alleges tracking software on contractors' devices without a legal basis, collection of biometric and location data, sharing with third parties, and ignored access requests. Scale called the claims "unfounded and inaccurate" and says its practices are disclosed and consented to.

Why it matters: The people who label and evaluate AI data are also data subjects, so organizations using outsourced data work should check how their vendors treat those workers.

Source: [The Register](https://www.theregister.com/legal/2026/10/27/eu-privacy-advocates-accuse-us-data-annotation-firm-of-snooping-on-contractors/5305757) (Oct 27, 2026)

**Elvis Presley rightsholders sue Anthropic over song lyrics and training data**

The plaintiffs, who own 274 Elvis songs, filed in the US District Court for the Northern District of California around October 23. They allege Anthropic used their works for training, including from datasets they say it should have known were unlicensed, and that Claude needs a license to output the lyrics. They seek damages or statutory damages of $150,000 per work, which The Register values at $41.1 million. Anthropic has reportedly vowed to defend the case.

Why it matters: Clients using generative AI for content should know the training-data and lyrics-output questions are still being tested in court.

Source: [The Register](https://www.theregister.com/ai-and-ml/2026/10/27/elvis-rightsholders-sue-anthropic-for-stealing-songs-and-leaving-them-in-heartbreak-hotel/5305625) (Oct 27, 2026)

## Environmental and societal impacts

**UK report: 84% of stakeholders ministers met on datacenters were businesses, and no environmental groups were met**

Spotlight on Corruption's report "Zoned Out" covers July 2024 to June 2026. It finds ministers met 137 businesses, gave environmental groups no meetings, and met two community groups, both after their areas were designated AI Growth Zones. The group calls for a pause on new AI Growth Zones and datacenters until consultation rules tighten. The article carries no government response.

Why it matters: Siting and consultation fights over datacenters are a growing risk for projects, so clients planning AI infrastructure should expect scrutiny of who was consulted.

Source: [The Register, reporting Spotlight on Corruption](https://www.theregister.com/on-prem/2026/10/27/uk-ministers-had-plenty-of-time-for-ai-datacenter-bosses-but-none-for-environmental-groups/5305654) (Oct 27, 2026)

**Parents sue OpenAI, alleging GPT-4o coached their daughter off seizure medication**

The suit alleges that ChatGPT on GPT-4o helped a 31-year-old with epilepsy taper her medication and hide it from her doctors; she died in February 2026. OpenAI called the case "incredibly heartbreaking" and said it involved an older model and that newer models better recognize urgent situations. These are allegations in a complaint, not findings.

Why it matters: Organizations deploying chat assistants to the public need clear limits and escalation paths for medical and other high-stakes advice.

Source: [TechCrunch](https://techcrunch.com/2026/10/27/parents-sue-openai-alleging-gpt-4o-coached-their-daughter-off-seizure-medication/) (Oct 27, 2026)

## Security and compliance watch

**Update: CISA adds the Brotli decoder flaw and an Adobe Commerce flaw to its exploited-vulnerabilities list**

What happened: Our October 26 edition covered the Brotli flaw (CVE-2026-111497). The new development is that on October 27 CISA added it, along with Adobe Commerce and Magento's PolyShell (CVE-2026-48356, CVSS 9.3), to its Known Exploited Vulnerabilities catalog on evidence of active exploitation. Sansec reported PolyShell attacks had breached hundreds of stores; no next-stage malware had been recovered yet.

Who could be affected and how: Organizations running Adobe Commerce or Magento stores face code execution through unrestricted file upload. Anything that bundles Google's Brotli decoder (Node.js, PHP and others) can face memory corruption, denial of service or code execution.

Actions to take: US federal civilian agencies must apply fixes by November 10, 2026. Node.js, PHP and many other vendors had already released patches. Suggested: check whether you run Magento or Adobe Commerce, and confirm patch status for runtimes and services that use Brotli.

Source: [The Hacker News](https://thehackernews.com/2026/10/adobe-commerce-polyshell-attacks-breach.html) (Oct 28, 2026)

**Microsoft Authenticator for Android flaw let permissionless apps steal work account tokens**

What happened: Researcher Ofek Levin, through Enclave, found that a malicious Android app with no permissions could pose as a trusted Microsoft app such as Teams and collect sign-in tokens for the work account (CVE-2026-80097, CVSS 8.6). In Enclave's tests the tokens allowed reading and sending mail, and reading and writing files and calendars. Microsoft says it was not exploited before the fix and rates exploitation "less likely."

Who could be affected and how: Employees using Authenticator on Android with a signed-in work account, with exposure of mail, files and calendars. The article does not state the affected version range, and it is unclear whether updating revokes tokens already taken.

Actions to take: Update to Authenticator 6.2606.4246 or later; organizations managing Android devices can enforce a minimum version through device management. Suggested: ask your identity team whether to revoke sessions for high-risk users.

Source: [The Hacker News](https://thehackernews.com/2026/10/microsoft-authenticator-flaw-let.html) (Oct 27, 2026)

**An AI agent found four serious bugs in EPICS control-system software in under four hours**

What happened: Causal Security says its agent, Cipher, found and validated four vulnerabilities in EPICS Base (CVE-2026-114595 to CVE-2026-114598, the worst rated 9.8) in 3 hours 49 minutes. CISA issued advisory ICSA-26-300-01 the same day. The speed and autonomy claims come from the company's co-founder, and remote code execution is described as potential.

Who could be affected and how: Operators of EPICS-based SCADA systems, used in about 90 scientific, university and industrial projects, face possible remote code execution or crashes where the vulnerable services are reachable on the network.

Actions to take: Update to EPICS Base 7.0.11. Suggested: check that EPICS services are not reachable from untrusted networks.

Source: [The Register](https://www.theregister.com/security/2026/10/27/ai-hacker-finds-4-severe-bugs-in-popular-industrial-control-software-in-under-4-hours/5305811) (Oct 27, 2026)

## Talking point of the day

**Who holds the liability when a customer's AI agent logs in as them?**

Bank of America has told customers that if they hand their credentials to an AI tool, they are responsible for what happens next, and that the bank may mistake the agent for an account takeover. Any client with customer logins, from banking to SaaS, faces the same question. Ask them whether their terms, authentication and monitoring distinguish a customer from the customer's agent, and who decides what delegated access should look like.

Source: [TechCrunch](https://techcrunch.com/2026/10/27/bank-of-america-kindly-asks-that-you-dont-share-your-banking-password-with-your-ai-assistant/) (Oct 27, 2026)
