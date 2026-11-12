---
layout: post
title: "ReQuisite: Thursday, November 12, 2026"
date: 2026-11-12 07:30:00 -0400
infographic:
  headline: "One stolen login list,"
  highlight: "thousands of repos."
  number: "4,837"
  label: "hijacked GitHub accounts used to plant a CI secret stealer, per Aikido Security as reported by The Hacker News"
  visual: ranking
  items:
    - {label: "Repos sent a test pull request", value: 61764, display: "61,764"}
    - {label: "Repos with malicious commits (SafeDep count)", value: 8093, display: "8,093"}
    - {label: "Repos where the stealer ran (at least)", value: 1806, display: "1,806"}
  items_label: "Reported repository counts for the campaign that began November 10"
  tiles:
    - number: "19%"
      label: "average yearly growth in power fed to US data campuses since 2000, against about 2% for grid capacity, per Howden"
      section: environment
    - number: "$10B+"
      label: "OpenAI's reported third-quarter revenue, per Bloomberg's anonymous sources"
      section: products
    - number: "9.5"
      label: "CVSS score of the pre-authentication MongoDB flaw CVE-2026-118383"
      section: security
---

## Top 3 today

- An attacker used 4,837 hijacked GitHub accounts to plant a script that steals CI secrets, and it ran in at least 1,806 repositories. ([The Hacker News](https://thehackernews.com/2026/11/4837-hijacked-github-accounts-ran-ci.html))
- Europe's data protection regulators picked AI-driven automated decision-making in recruitment as their joint enforcement topic for 2027. ([EDPB](https://www.edpb.europa.eu/news/edpb-adopts-statement-on-review-of-the-republic-of-korea-adequacy-processor-bcr_en))
- Howden says US data center power demand is growing about 10 times faster than grid capacity. ([The Register](https://www.theregister.com/systems/2026/11/11/us-bit-barn-boom-sees-energy-needs-grow-10x-as-fast-as-grid-capacity/5309191))

## AI products and models

**OpenAI's quarterly revenue reportedly topped $10 billion for the first time**

Bloomberg, citing anonymous sources, reports OpenAI passed $10 billion in third-quarter revenue, up from about $6.7 billion in the second quarter (a WSJ figure), with adjusted operating margin improving from -150% to -109%. OpenAI has not confirmed the figures; TechCrunch notes Anthropic separately reported $17 billion in Q3 revenue, and the two companies calculate annualized revenue differently.

Why it matters: Losses are narrowing but still deep, which is useful context when negotiating multi-year AI contracts and judging how stable today's pricing will be.

Source: [TechCrunch, November 11, 2026](https://techcrunch.com/2026/11/11/openais-quarterly-revenue-reportedly-crosses-10b-for-the-first-time/)

**Nvidia's board is reportedly preparing to oust CEO Jensen Huang**

The Wall Street Journal reports Nvidia's board could meet as soon as Wednesday to decide Huang's future, after he admitted on Sunday to an affair with a woman US intelligence reportedly believes is a Chinese spy; Bloomberg reports Nvidia is working with an outside firm on CEO candidates. Shares fell about 8% after hours on Wednesday, and TechCrunch says the company has no obvious successor; no board decision had been reported at publication.

Why it matters: The world's main AI chip supplier is facing a leadership crisis with no clear succession plan, a reminder that key-person risk sits deep in the AI supply chain.

Source: [TechCrunch, November 11, 2026](https://techcrunch.com/2026/11/11/nvidias-stock-drops-as-board-reportedly-preps-to-oust-ceo-jensen-huang/)

**UK chip startup Fractile raises $720 million to build inference hardware**

Fractile's Series C, led by Thrive Capital, Founders Fund, Lightspeed and Redpoint with backing from Britain's Sovereign AI Fund, values it at "over £5 billion" according to the UK government. The company pairs chips with stacked DRAM and its own compiler to speed up large language models, and plans to ship its first chips and systems in 2027.

Why it matters: Public money backing a domestic AI chipmaker shows the UK pursuing compute sovereignty, though the hardware is still a year away.

Source: [TechCrunch, November 11, 2026](https://techcrunch.com/2026/11/11/with-720m-round-britains-fractile-gets-a-leg-up-in-the-race-for-ai-chips/)

## Data and analytics industry

**Databricks pitches Genie as an always-on agent for business leaders**

Databricks updated its Genie agent to handle multistep jobs that take extended work, drawing context from customer data on the platform through an ontology Databricks built. CEO Ali Ghodsi said he used it to analyze a low-scoring employee survey and review a sales pitch, and that companies can set usage limits and swap in cheaper open-weight models through Unity Gateway; TechCrunch gives no release date or pricing.

Why it matters: The pitch is that an agent sitting on governed company data can answer leadership questions directly, which puts data modeling and access controls at the center of whether its answers can be trusted.

Source: [TechCrunch, November 11, 2026](https://techcrunch.com/2026/11/11/databricks-new-ai-agent-tells-ceo-ali-ghodsi-the-unvarnished-truth/)

**AWS releases a free local emulator of its APIs**

AWS Emulator serves an AWS API endpoint on a laptop, server or CI runner so code can be tested without calling the cloud or paying for it, and covers services with published API models. It does not evaluate IAM policies like AWS does, runs as a single account with no cross-Region behavior, and comes with a skill that lets AI coding agents check which operations it can reliably handle.

Why it matters: Data engineering teams can test pipelines locally and in CI without cloud bills, as long as they remember that permission checks still need testing in AWS.

Source: [The Register, November 12, 2026](https://www.theregister.com/off-prem/2026/11/12/aws-distills-its-cloud-into-a-local-emulator-that-runs-on-your-pc/5309251)

**Microsoft says October's update can leave SQL Server linked-server connections open**

After the October 13 update (KB5126646), SQL Server linked-server queries using OLE DB providers, with PostgreSQL and Oracle named as examples, can leave external connections open until performance degrades. Workarounds are closing idle connections or restarting the service, both of which can interrupt work; Microsoft has given no fix date.

Why it matters: Reporting and integration jobs that join SQL Server to other databases may slow down or stall, so platform owners should watch for it now.

Source: [The Register, November 12, 2026](https://www.theregister.com/databases/2026/11/12/microsoft-admits-sql-servers-might-wobble-after-october-update/5309349)

**CoreWeave raised prices and is funding growth with customer prepayments**

CoreWeave reported third-quarter revenue of $3.66 billion, up 168%, and a net loss of $709 million. It raised prices about 25% in July and another 10% later in the quarter, expects about $9 billion in customer prepayments and deposits over the next three months, and its CEO said it will not use unsecured debt at current yields.

Why it matters: GPU capacity is getting more expensive and is increasingly paid for up front, which affects budgets for any team renting compute for AI workloads.

Source: [TechCrunch, November 11, 2026](https://techcrunch.com/2026/11/11/coreweave-turns-to-customer-prepayments-shorter-contracts-to-fund-ai-growth/)

## AI and the workforce

**Two-thirds of Australian frontline workers use AI, but almost half got no guidance**

In a survey of 501 healthcare, hospitality and retail workers commissioned by workforce software firm Humanforce and run by Zoho in Q3 2026, 65% had used AI at work in the past year, 46% had received no employer training, briefing or written rules on it, and 13% had comprehensive training. Among AI users, 24% said their employer did not allow it or they did not know (36% in healthcare), and 49% wanted a person to review important AI decisions.

Why it matters: AI use is running ahead of policy on the front line, especially in healthcare, so the governance gap is not limited to office work. (Vendor-commissioned survey released as a press release.)

Source: [Humanforce via PR Newswire (The Manila Times), November 12, 2026](https://manilatimes.net/2026/11/12/tmt-newswire/pr-newswire/65-of-australian-frontline-workers-are-using-ai-but-almost-half-have-had-no-employer-guidance/2468078)

## Policy and regulation

**EU data protection regulators will target AI screening in recruitment in 2027**

The European Data Protection Board chose automated decision-making, "including AI-driven ADM, in recruitment," as its next coordinated enforcement action, focused on the right not to be subject to solely automated decisions and the related right of access when automated candidate screening tools are used. The action "will be launched in the course of 2027."

Why it matters: Employers using AI to screen candidates in the EU should expect national regulators to ask how human review works and what candidates are told.

Source: [EDPB, November 11, 2026](https://www.edpb.europa.eu/news/edpb-adopts-statement-on-review-of-the-republic-of-korea-adequacy-processor-bcr_en)

**New York launches a state AI safety testing center ahead of the RAISE Act**

Governor Kathy Hochul launched the New York Center for AI Responsibility and Research at SUNY Binghamton on November 10, with more than 80 scientists, a $30 million philanthropic gift and an initial $25 million SUNY investment. It will help the state review the safety frameworks frontier developers must publish under the RAISE Act, but researchers will only see publicly disclosed information, not companies' internal models.

Why it matters: The state is building its own technical capacity to check what AI vendors publish, which gives those disclosures more weight in buyer due diligence.

Source: [PYMNTS, November 11, 2026](https://www.pymnts.com/news/artificial-intelligence/2026/new-york-launches-ai-safety-center-ahead-of-raise-act-deadline/)

## Off the beaten path

**Study: AI exposure is shrinking young, non-graduate hiring, not total jobs**

A revised preprint by Jacob Dominski, Tyler Boes and Yong Suk Lee, using US Current Population Survey data from January 2023 to June 2026, finds no change in employment or unemployment in occupations with bigger rises in AI exposure. The number of workers under 30 in those jobs fell about 8% per standard deviation of exposure change, concentrated among those without a degree, which the authors read as fewer new entrants rather than more exits. It is an arXiv preprint and not peer reviewed.

Why it matters: If the early effect is on who gets hired rather than how many, entry-level pipelines and training routes are where leaders should look first.

Source: [arXiv 2507.08244, revised November 10, 2026](https://arxiv.org/abs/2507.08244)

**FreeBSD developers want a written AI policy with disclosure and human review**

In a survey of 140 FreeBSD developers in the project's Q3 2026 status report, 88% wanted a project policy on AI-assisted code, 84% wanted AI use disclosed, and 78% asked for mandatory human review; 16% favored rejecting AI-assisted code outright. Accountability, meaning a human stays responsible, was the most selected principle (91%).

Why it matters: A long-running engineering community has landed on disclosure plus named human accountability, a practical template for teams writing their own AI use rules.

Source: [The Register, November 12, 2026](https://www.theregister.com/os-platforms/2026/11/12/the-latest-freebsd-report-is-here-and-the-ai-debate-is-ongoing/5309206)

## Environmental and societal impacts

**US data center power demand is growing about 10 times faster than grid capacity**

Insurance broker Howden, analyzing EIA and S&P Global data, says power fed to data campuses has grown 19% a year on average since 2000 against about 2% for grid capacity, taking data centers from 0.1% to about 5% of US grid capacity in 2025. It projects data centers could need up to 58% of their power from off-grid sources by 2030 to hold that share, which it considers unlikely.

Why it matters: Grid limits push more AI capacity toward on-site generation, which affects the emissions and cost profile behind the cloud services organizations buy.

Source: [The Register, November 11, 2026](https://www.theregister.com/systems/2026/11/11/us-bit-barn-boom-sees-energy-needs-grow-10x-as-fast-as-grid-capacity/5309191)

## Security and compliance watch

**Hijacked GitHub accounts planted a CI secret stealer in at least 1,806 repositories**

What happened: Starting Tuesday, an attacker used stolen credentials for 4,837 GitHub accounts to add a script that steals secrets and cloud credentials reachable by CI workflows, often reverting the change within minutes and deleting run logs. Aikido Security and SafeDep found test pull requests in 61,764 repositories and, in SafeDep's count, malicious commits in 8,093.

Who could be affected and how: Owners of repositories where the stealer ran (every secret and cloud role the workflows could reach should be treated as compromised), anyone who ran npm install on an affected commit, users of Packagist package digitalelvis/neuronai-studio v3.14.3, and at least 50 compromised publishers on npm, Go, Packagist, PyPI and crates.

Actions to take: The researchers advise checking repositories for the wfx-docs branch and the pull request title "docs: dependency audit notes", revoking the commit author's tokens, OAuth grants, SSH keys and sessions, rotating every secret the repository can read, blocking v3.14.3 and pinning v3.14.2 or earlier, and looking for backdoors such as Entra ID federated credentials named wfx-ci-* or AWS sessions named wfx-*.

Suggested: Ask whoever owns your GitHub organization to run these checks today, including on repositories that hold data pipeline and analytics code.

Source: [The Hacker News, November 12, 2026](https://thehackernews.com/2026/11/4837-hijacked-github-accounts-ran-ci.html)

**Critical pre-authentication MongoDB flaw can crash replica set members**

What happened: CVE-2026-118383 (CVSS 9.5) lets an unauthenticated attacker crash a MongoDB member that later wins an election while lagging; MongoDB says code execution is possible under certain conditions and it knows of no exploitation attempts. Datadog Security Labs reproduced the crash in a lab.

Who could be affected and how: Replica set members and sharded cluster shard and config servers on affected branches; standalone mongod instances are not affected. The 8.2 branch is end of life and gets no security fixes.

Actions to take: Upgrade every replica set member to a fixed release (8.0.37 is confirmed fixed) and verify versions afterward; Atlas customers who deferred maintenance should apply it as soon as possible; restrict network access to the database until upgrades are done; move off 8.2.

Suggested: Check whether any team runs self-managed MongoDB behind applications or analytics workloads, since those are often outside central patching.

Source: [The Hacker News, November 12, 2026](https://thehackernews.com/2026/11/critical-pre-auth-mongodb-flaw-cve-2026.html)

**Open-source AI pentesting tool AntiFox used in attacks that reached AWS production secrets**

What happened: Arctic Wolf Labs says attackers used AntiFox, an open-source AI-driven penetration testing platform, to chain web exploitation, web shells, credential checks and AWS enumeration, and in at least one case read a production secret. Some intrusions started from a compromised IIS server, others from a valid AWS credential obtained by unknown means.

Who could be affected and how: Organizations with internet-facing IIS applications and the AWS environments behind them, and any organization whose IAM credentials have been exposed; the article says tools like this make such attacks faster and easier for less-skilled actors.

Actions to take: The source gives no formal guidance.

Suggested: Check web.config files and connection strings for stored credentials and move them to a managed secrets store, and review CloudTrail for bursts of calls across many services or unexpected GetSecretValue requests.

Source: [The Hacker News, November 11, 2026](https://thehackernews.com/2026/11/antifox-ai-pentesting-platform-linked.html)

## Talking point of the day

**Can you show a regulator where the human sits in your AI hiring process?**

The EDPB has made AI-driven decision-making in recruitment its 2027 coordinated enforcement topic, focused on solely automated decisions and candidates' right of access. For clients using screening tools, the useful question now is not whether the vendor is compliant, but whether they can document who reviews which decisions, with what authority, and what candidates are told. Starting that map before national regulators send questionnaires is far cheaper than reconstructing it afterward.

Source: [EDPB, November 11, 2026](https://www.edpb.europa.eu/news/edpb-adopts-statement-on-review-of-the-republic-of-korea-adequacy-processor-bcr_en)
