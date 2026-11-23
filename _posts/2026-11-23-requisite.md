---
layout: post
title: "ReQuisite: Monday, November 23, 2026"
date: 2026-11-23 07:30:00 -0400
infographic:
  headline: "Private prompts,"
  highlight: "read for months."
  number: "2M"
  label: "about 2 million prompts Dragos researchers seeded with unique links and credentials to catch theft at AI inference providers, per The Hacker News"
  visual: timeline
  events:
    - {date: "Mid-July", label: "Earliest breach at an inference provider begins"}
    - {date: "Oct 21", label: "Phala's exposure window opens"}
    - {date: "Nov 1", label: "Attacker uses ARTEX to check stolen keys still work"}
    - {date: "Nov 8", label: "Phala contains its incident"}
    - {date: "Nov 22", label: "Reported: OpenRouter drops 3 providers from Zero Data Retention"}
  tiles:
    - number: "$225B"
      label: "valuation Databricks is reportedly discussing for a new funding round, per the WSJ via Silicon Republic"
      section: data
    - number: "18%"
      label: "of Gen Z white-collar employees want to build AI skills, per a Seramount survey"
      section: workforce
    - number: "14.4 GW"
      label: "of new generation Wisconsin utilities plan as data centers drive peak demand"
      section: environment
---

## Top 3 today

- Researchers found attackers inside three AI inference providers for months, reading prompts that included some flagged Zero Data Retention; OpenRouter has removed 3 providers and 125 endpoints from that program. ([The Hacker News](https://thehackernews.com/2026/11/openrouter-drops-3-providers-after.html))
- Norway's National Security Authority linked attacks on energy firms to a critical flaw in Azure API Management Classic that exposed stored secrets; Microsoft says it is patched, and admins are told to rotate secrets. ([The Register](https://www.theregister.com/security/2026/11/23/norway-links-energy-firm-cyberattacks-to-critical-azure-api-management-flaw/5311598))
- US governors set out bipartisan AI principles asking the incoming Congress for a federal framework that keeps a clear role for states and support for displaced workers. ([National Governors Association](https://www.nga.org/news/press-releases/governors-call-for-ai-action/))

## AI products and models

**Signal starts blocking screenshots on phones, citing AI agents built into operating systems**

Signal is adding screenshot restrictions to its Android and iOS apps, following an earlier default block on Windows; users can switch it off. President Meredith Whittaker said OS-level AI agents that read screen content undermine Signal's ability to guarantee privacy, and called the fix "incomplete."

Why it matters: Agents that "see" the screen can capture whatever staff and customers are viewing, so organizations rolling out desktop or phone agents need to know which apps and data those agents can read.

Source: [TechCrunch, November 21, 2026](https://techcrunch.com/2026/11/21/signal-restricts-mobile-screenshots-as-it-confronts-existential-threat-of-ai-surveillance/)

**OpenAI's chief scientist proposes a shared "perplexity" cap on AI progress**

Jakub Pachocki suggested AI companies use perplexity (how well a model predicts the next token) as a common measure of general intelligence and agree not to go past a threshold until they can understand and monitor model behavior to a set standard. Sam Altman called the post "the most important thing OpenAI has published in a while."

Why it matters: It is a proposal, not a policy, but it signals that the major labs are now discussing concrete, measurable limits that could shape what capabilities reach business users and when.

Source: [TechCrunch, November 22, 2026](https://techcrunch.com/2026/11/22/openais-chief-scientist-has-thoughts-on-how-to-limit-ai-development/)

## Data and analytics industry

**Databricks reportedly in talks at a $225 billion valuation**

The Wall Street Journal reports Databricks is in early talks to raise several billion dollars at a $225 billion valuation, nearly 20% above its $190 billion valuation in August; terms could change and Databricks has not commented. In August the company said its revenue run-rate had passed $7 billion.

Why it matters: Investors are still paying up for the data platform layer under AI, which supports Databricks' push into agents and analytics tools for business users.

Source: [Silicon Republic, November 23, 2026](https://www.siliconrepublic.com/business/wsj-databricks-in-talks-to-raise-new-funding-at-225bn-valuation)

**Airbus is leaving Microsoft Office, except for 36,000 defense staff**

Airbus expects its move to Google Workspace to finish in two to three years, but about 22% of its roughly 165,000 employees, the Defence division, will stay on Microsoft Office because their sensitive data must stay on-premise. Google's larger Sheets limits and better watermarking compatibility helped shrink the remaining Microsoft user base.

Why it matters: Data residency rules, not features, decided which tools 36,000 people will use, a reminder that sensitive data requirements shape platform choices for entire teams.

Source: [The Register, November 23, 2026](https://www.theregister.com/applications/2026/11/23/airbus-may-be-leaving-microsoft-office-but-for-its-36000-defense-staff-office-isnt-leaving-them/5311325)

## AI and the workforce

**Only 18% of Gen Z office workers want to build AI skills, survey finds**

A Seramount survey of more than 1,800 US white-collar employees (via NORC's AmeriSpeak panel, June 2026) found 18% of Gen Z want to build AI skills, against 36% to 46% of older groups, and 22% of Gen Z worry AI use will make others question their skills. Wharton's Jessica Reif cites her PNAS study, in which employees described as getting AI help were seen as less competent.

Why it matters: Early-career staff may hide or avoid AI because they fear it hurts their reputation, so leaders who want adoption need to make AI use visible, credited and safe to admit.

Source: [Fortune, November 21, 2026](https://fortune.com/2026/11/21/gen-z-workers-ai-skills-seramount-survey)

## Policy and regulation

**US governors ask Congress for a federal AI framework that keeps states in the game**

The National Governors Association released six bipartisan principles: innovation with public protection, support for displaced workers, the federal government handling national and international risks while states govern AI use, evidence-based safeguards, fewer conflicting rules, and competition that does not favor large companies. The principles are meant to inform the incoming Congress.

Why it matters: Organizations operating across US states should expect state AI rules to persist alongside any federal law, and worker support is now on the governors' formal agenda.

Source: [National Governors Association, November 22, 2026](https://www.nga.org/news/press-releases/governors-call-for-ai-action/)

## Off the beaten path

**Under $1 of GPT-5.1 tokens found new ways around national internet censors**

Researchers from UMass Amherst, CU Boulder and Great Firewall Report presented CircumVolve at the ACM CCS conference: a system that has an LLM write and iteratively test packet-manipulation programs against censorship systems modeled on China, Iran, Pakistan and Kazakhstan. The median cost to a first working evasion was under $1. The authors call it "a first step," and the report does not give success rates or how long the evasions last.

Why it matters: The same cheap generate-and-test loop that helps researchers can be pointed at any network control, so security teams should assume rule-based defenses will be probed faster and more cheaply.

Source: [The Register, November 23, 2026](https://www.theregister.com/security/2026/11/23/1-of-gpt-51-tokens-finds-new-ways-around-chinas-great-firewall/5311532)

**A Riemann hypothesis proof built with Claude compiles in Lean, but no one can yet explain it**

Anthropic mathematician Levent Alpöge posted a claimed proof of the Riemann hypothesis developed while working with Claude, written in the Lean proof language; several mathematicians say it compiles and TechCrunch says independent sources have checked it. Alpöge has not yet produced a human-readable explanation. A separate, human-only proof by a Stanford postdoc is not in Lean, and it is too early to say whether it holds.

Why it matters: Machine-checked results that humans cannot yet explain raise a practical question for any team using AI: verifying that an output is correct is not the same as understanding it.

Source: [TechCrunch, November 20, 2026](https://techcrunch.com/2026/11/20/ai-claimed-a-solution-to-the-167-year-old-riemann-hypothesis-and-a-human-did-too/)

## Environmental and societal impacts

**Data centers drive more than 70% of Wisconsin's projected peak demand growth**

Wisconsin regulators approved the state's 2026 to 2032 energy assessment, which expects peak demand to grow by more than 40% by 2032, with over 70% of that growth tied to data center projects; utilities plan 14.4 GW of new generation, including more than 5 GW of natural gas. The commission chair said the report gathers data and is not a plan the commission endorses.

Why it matters: AI infrastructure is now driving new gas plant plans at state level, which affects local emissions, energy bills and the climate claims companies make about their AI use.

Source: [WPR, November 23, 2026](https://wpr.org/news/report-peak-electricity-demand-spike-data-centers)

## Security and compliance watch

**Attackers read prompts at three AI inference providers for months, including "Zero Data Retention" traffic**

What happened: Dragos researchers seeded about 2 million prompts with unique links and credentials between July and November and found attackers inside three inference providers, some reading requests flagged Zero Data Retention; OpenRouter removed 3 providers and 125 endpoints from that program. Phala and Together AI disclosed incidents (Together AI's began when an AI coding agent committed a credential to a public GitHub repository), and a Chinese AI lab fetched secret links from more than half of seeded prompts sent to its models.

Who could be affected and how: Any organization sending prompts through AI gateways, routers or low-cost inference providers; prompts containing credentials were the most exposed, and some data was read by humans, according to Dragos's HD Moore.

Actions to take: Phala advises rotating every key, token, password or other secret in exposed requests. The report recommends choosing upstream providers yourself rather than a default pool, avoiding reseller marketplaces, seeding canary tokens in prompts, and filtering known credential formats out of prompts.

Suggested: Check whether any team routes prompts through OpenRouter or similar gateways, and confirm which providers actually receive your traffic.

Source: [The Hacker News, November 22, 2026](https://thehackernews.com/2026/11/openrouter-drops-3-providers-after.html)

**Azure API Management Classic flaw linked to attacks on Norwegian energy firms**

What happened: Microsoft identified a critical issue in Azure API Management Classic tiers (not v2) on November 18 and applied an automatic mitigation on November 19; Norway's NSM linked attacks on energy companies, including Equinor and Skagerak Energi, to it. Attackers took secrets such as named values, OpenID Connect client secrets, subscription keys and management API tokens.

Who could be affected and how: Organizations running API Management Classic instances, especially those that store secrets in APIM rather than Azure Key Vault or did not follow Microsoft's network guidance; stolen credentials may work against services behind APIM.

Actions to take: NSM advises checking each instance's runtime version against Microsoft's patch thresholds, assuming secrets were exposed and rotating them, investigating for compromise before the mitigation, and moving secrets into Azure Key Vault.

Suggested: Look for forgotten development and test APIM instances, which the report says may also be exposed.

Source: [The Register, November 23, 2026](https://www.theregister.com/security/2026/11/23/norway-links-energy-firm-cyberattacks-to-critical-azure-api-management-flaw/5311598)

**AI agents found a zero-day in medical-imaging server MONAI Label; no patched release yet**

What happened: Amazon Threat Intelligence reports suspected China-linked attackers used autonomous AI agents to find a path-traversal flaw (CVE-2026-133968, CVSS 9.8) in MONAI Label 0.8.5 and earlier and gained root on a university server. A source fix was merged October 19, but no patched version has been released.

Who could be affected and how: Research and healthcare organizations running MONAI Label in its default setup, which has no login; Amazon says a second university was likely hit but has not confirmed it, and it has no evidence patient data was taken.

Actions to take: The source gives no official release date for a fix; the maintainers' fix exists only in source code as of the report.

Suggested: Find any MONAI Label servers, take them off the internet or turn on authentication, and track the project for a patched release.

Source: [The Hacker News, November 21, 2026](https://thehackernews.com/2026/11/attackers-ai-agents-found-zero-day-in.html)

## Talking point of the day

**A privacy flag only binds the first hop**

Many teams pick an AI gateway or cheap inference provider and tick "no data retention," assuming that settles it. The Dragos findings show prompts passing through routers and resellers were read for months anyway, so the real questions are which companies actually receive your prompts, what secrets are in them, and how you would know if they leaked.

Source: [The Hacker News, November 22, 2026](https://thehackernews.com/2026/11/openrouter-drops-3-providers-after.html)
