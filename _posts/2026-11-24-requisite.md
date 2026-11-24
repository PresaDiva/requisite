---
layout: post
title: "ReQuisite: Tuesday, November 24, 2026"
date: 2026-11-24 07:30:00 -0400
infographic:
  headline: "AI customer service,"
  highlight: "valued at double."
  number: "$30B"
  label: "Sierra's valuation after a $1.75 billion Series F, double the $15 billion of its previous round less than six months earlier, per TechCrunch"
  visual: scale
  units: 30
  unit_label: "Each square = $1 billion"
  units_marked: 15
  marked_label: "previous valuation"
  tiles:
    - number: "355,051"
      label: "unique school staff and pupil email addresses exposed at UK supplier Bromcom, per Have I Been Pwned"
      section: security
    - number: "3.6 months"
      label: "how often the length of tasks AI models can handle doubles, per METR"
      section: offbeat
    - number: "6,000 MW"
      label: "power draw of SpaceX's planned Arizona AI campus at full build-out, per Fortune"
      section: environment
---

## Top 3 today

- Anthropic launched Claude Ship, agents that review, fix and can approve routine code changes under rules a team writes, with human escalation left up to each team. ([TechCrunch](https://techcrunch.com/2026/11/23/anthropic-launches-claude-ship-letting-ai-agents-review-fix-and-approve-code-changes/))
- Sierra raised $1.75 billion at a $30 billion valuation, double its last round, as its AI customer service agents reach almost half the Fortune 50. ([TechCrunch](https://techcrunch.com/2026/11/23/sierra-doubles-valuation-to-30b-within-six-months-as-demand-for-ai-in-cx-takes-off/))
- Update: the European Commission confirmed personal data of people outside the EU institutions was stolen in its AI-assisted cyberattack. ([The Register](https://www.theregister.com/cyber-crime/2026/11/24/european-commission-confirms-personal-data-stolen-in-ai-assisted-cyberattack/5311834))

## AI products and models

**Anthropic's Claude Ship lets agents approve code, if your team says so**

Claude Ship bundles Code Review (generally available), PR Steward (beta), which fixes failing checks and merge conflicts and explains how to roll back each push, and Claude Approvals (beta), which signs off on changes under a natural-language policy file kept in the repository. It is rolling out to Claude Team and Enterprise plans on GitHub, and Anthropic suggests starting in observe-only mode on a single repository.

Why it matters: Teams now have to write down, as policy, which changes a person must see, which turns code review into a governance decision rather than a habit.

Source: [TechCrunch, November 23, 2026](https://techcrunch.com/2026/11/23/anthropic-launches-claude-ship-letting-ai-agents-review-fix-and-approve-code-changes/)

**Google's AI Mode in Search can now read your Drive and Wallet**

Google is extending Personal Intelligence in Search's AI Mode to Google Drive, Google Wallet and the Gemini app, adding to existing links with Gmail, Calendar and Photos. Connecting is optional, Wallet access is read-only, and Google says a "Personalization" icon showing which context was used is coming soon.

Why it matters: Work files in personal Drive accounts can now feed a search assistant, which is worth a line in any acceptable-use or data-handling guidance.

Source: [TechCrunch, November 23, 2026](https://techcrunch.com/2026/11/23/google-searchs-ai-mode-can-now-tap-into-drive-and-wallet-for-more-personalized-responses/)

**Cisco and OpenAI release Shirudo, open-source "shields" for unpatched Linux flaws**

Shirudo uses agents to scan infrastructure and tools such as OpenAI's Codex to write eBPF programs that block exploits in the Linux kernel before a patch is applied, with people expected to review each shield before production. It is open source and built on Tetragon; the companies say more than 100,000 software flaws were reported this year.

Why it matters: Security and platform teams facing a surge of AI-found bugs get a free option for buying time between disclosure and patching, though it adds AI-written code to the kernel path that someone must review.

Source: [The Register, November 24, 2026](https://www.theregister.com/security/2026/11/24/cisco-and-openai-pitch-ebpf-kernel-plugins-as-the-way-to-tame-the-patchpocalypse/5311795)

**Amazon reportedly pays $7.5 billion for Decart's chip-optimization tech and team**

Amazon is acquiring the technology behind the Decart Optimization Stack, which helps models run efficiently on Nvidia, Amazon and Google hardware, plus Decart's founders and researchers; the price is from Bloomberg and neither company commented. TechCrunch links the deal to Amazon preparing to sell its Trainium chips to customers.

Why it matters: More credible alternatives to Nvidia hardware could change the cost and vendor choices behind AI workloads that data teams run on AWS.

Source: [TechCrunch, November 23, 2026](https://techcrunch.com/2026/11/23/amazon-snaps-up-decarts-ai-optimization-tech-for-7-5b-as-it-prepares-to-sell-trainium-chips/)

## AI and the workforce

**Sierra doubles to a $30 billion valuation on AI customer service demand**

Sierra raised $1.75 billion in a Series F led by Greenoaks and Lightspeed, says it serves almost 50% of the Fortune 50, and reports run-rate revenue doubled to $400 million in five months under outcome-based pricing. Co-founder Clay Bavor has argued most customers reassign contact center staff rather than replace them; that is the company's claim, not an independent finding.

Why it matters: Contact centers are where AI agents are scaling fastest, so leaders need their own evidence on what happens to the people in those roles, not just the vendor's.

Source: [TechCrunch, November 23, 2026](https://techcrunch.com/2026/11/23/sierra-doubles-valuation-to-30b-within-six-months-as-demand-for-ai-in-cx-takes-off/)

**Workhuman plans more than $60 million of 2027 R&D for workforce AI, including a tool that predicts future leaders**

The Dublin-based company, with over 500 of its 1,000-plus staff in Dublin, spent $65 million on R&D in 2025. Its AI suite includes Future Leaders, launched in 2026, which aims to predict which employees will move into leadership roles within three to five years; 2025 turnover fell to $1.13 billion.

Why it matters: AI that scores employees for leadership potential raises fairness, transparency and data protection questions that HR and data teams will need to answer together.

Source: [Silicon Republic, November 24, 2026](https://www.siliconrepublic.com/business/workhuman-to-invest-60m-plus-in-rd-in-2027-in-workforce-ai-push)

## Policy and regulation

**UK ICO and CMA set out what consumers should check before handing tasks to AI agents**

The ICO reminded developers of consumer agentic AI to build privacy in from the start, show ongoing compliance, and engage regulators before launch, saying it will act if products reach market without considering privacy risks. With the CMA it advised users to start in an agent's most restricted mode, review permissions regularly and check whether data trains models; ICO guidance is expected in spring 2027.

Why it matters: Any organization building or deploying agents for UK customers now has a clear statement of what the regulator expects at launch.

Source: [ICO, November 24, 2026](https://ico.org.uk/about-the-ico/media-centre/news-and-blogs/2026/11/developers-creating-agentic-ai-services-for-consumers-reminded-to-meet-their-data-protection-responsibilities)

**Trump says he won't let US companies build datacenters abroad, threatening a "tremendous tax"**

Speaking after the APEC summit, Trump said firms that build overseas would face a "tremendous tax" and cited a planned facility in Finland. No formal policy has been reported, and Trump said he had not yet told his own administration.

Why it matters: Organizations relying on US cloud regions in Europe for data residency should watch for any follow-through, but for now this is a statement, not a rule.

Source: [The Register, November 23, 2026](https://www.theregister.com/off-prem/2026/11/23/trump-says-he-wont-allow-us-companies-to-build-datacenters-abroad/5311640)

## Off the beaten path

**METR: AI is improving faster than experts can reliably test it**

The AI research organization METR compared leading models with human professionals on research and computational tasks and found the length of tasks models can handle doubles every 3.6 months, with models beating experienced professionals most of the time on well-defined tasks with direct feedback. METR notes models still struggle with open-ended judgment, and that easy-to-run tests may overstate real-world performance.

Why it matters: Benchmarks that look impressive may not predict how a model does on the messy, judgment-heavy work inside real teams, so local testing still matters.

Source: [The Decoder, November 22, 2026](https://the-decoder.com/ai-is-getting-better-faster-than-experts-can-reliably-test-whether-new-systems-are-safe-metr-warns/)

**Every search API tested handed coding agents malicious results at least once**

AIR Research Lab sent 4,719 developer-style searches to eight search APIs used by AI agents and found all eight served known-malicious content at least once, at rates of 0.8% to 2.2%, highest on install and package searches. The queries were model-generated, the results are a point-in-time snapshot, and the authors work for a security vendor.

Why it matters: Coding agents that search the web and install what they find can pull bad packages into data pipelines without a person ever seeing the link.

Source: [The Hacker News (contributed research), November 23, 2026](https://thehackernews.com/expert-insights/2026/11/ai-coding-agents-are-getting-malicious.html)

## Environmental and societal impacts

**SpaceX's $74 billion AI campuses raise the question of who pays for the power**

SpaceX plans a roughly $50 billion Arizona site drawing 6,000 MW at full build-out, nearly two-thirds of Arizona Public Service's all-time peak demand, and a $24 billion-plus Texas site powered by 35 gas turbines. SpaceX says the projects will pay their own way, while Arizona's attorney general has asked the county to delay its December 9 vote and APS is seeking a 14% to 16% residential rate increase.

Why it matters: Local communities are now testing whether AI infrastructure costs land on residents' power bills and water, a question that will shape where future capacity gets built.

Source: [Fortune, November 22, 2026](https://fortune.com/2026/11/22/spacex-74-billion-ai-data-centers-texas-arizona-who-pays/)

## Security and compliance watch

**Update: European Commission confirms personal data was stolen in its AI-assisted attack**

What happened: Our November 20 edition reported the attack with data access unknown; the Commission has now confirmed attackers stole names and email addresses of people outside the EU institutions, including from its EU Academy learning platform, and that an AI-assisted hacking tool was used. It does not yet know how many people are affected and has not said whether the attackers have been removed.

Who could be affected and how: People and organizations that used EU Academy or other affected Commission systems, who face a higher risk of targeted phishing; the Commission posted a general notice rather than contacting people directly, and the EDPS has been informed.

Actions to take: The Commission advises being alert to spearphishing, impersonation and spam, and not sharing personal information with anyone claiming to be involved in EU Academy activities. The platform is offline until January 14, 2027, and users must re-register.

Suggested: Warn staff who took EU Academy courses to expect convincing phishing that uses their name and course history.

Source: [The Register, November 24, 2026](https://www.theregister.com/cyber-crime/2026/11/24/european-commission-confirms-personal-data-stolen-in-ai-assisted-cyberattack/5311834)

**Update: CISA adds the AI-found MONAI Label flaw and an N-able MailAssure bug to its must-patch list**

What happened: Our November 23 edition covered the MONAI Label zero-day found by AI agents; on November 23 CISA added it (CVE-2026-133968, CVSS 9.8) to its Known Exploited Vulnerabilities catalog, along with an N-able MailAssure server-side request forgery flaw (CVE-2026-134624, CVSS 9.3) linked to N-able's November breach.

Who could be affected and how: Research and healthcare organizations running MONAI Label, where an unauthenticated attacker can write files and potentially run code, and users of N-able MailAssure and SpamExperts Hosted Cloud.

Actions to take: US federal civilian agencies must apply the latest fixes by November 26, 2026. The source gives no patch version numbers.

Suggested: Treat the federal deadline as your own, and confirm with N-able and the MONAI project which versions contain the fix.

Source: [The Hacker News, November 24, 2026](https://thehackernews.com/2026/11/hackers-exploit-n-able-mailassure-flaw.html)

**355,051 school email addresses exposed through a forgotten login system at Bromcom**

What happened: Attackers scripted their way into a legacy single sign-on registration component at UK education software supplier Bromcom that was still running because an internal system depended on it, taking staff and pupil email addresses and SSO registration reference numbers. Bromcom says no passwords or tokens were taken and its management information system was not accessed.

Who could be affected and how: Schools and multi-academy trusts using Bromcom (it serves more than 5,000 schools), whose staff and pupils may face phishing; Bromcom has not said how many schools were affected.

Actions to take: Bromcom has removed the old component, tightened authorization checks and added security logging, and reports no evidence of account hijacking. Staff and parents can check addresses on Have I Been Pwned, where the breach was added on November 23.

Suggested: Ask every education or HR software supplier which legacy components are still live and why.

Source: [The Register, November 24, 2026](https://www.theregister.com/cyber-crime/2026/11/24/education-software-suppliers-legacy-login-system-left-355000-school-email-addresses-exposed/5311622)

## Talking point of the day

**Who signs off when the agent signs off?**

Claude Ship asks teams to write an approval policy in plain language and decide which changes still go to a person. That same question applies well beyond code: customer service, reporting and data pipelines are all getting agents that can act on their own. A good client conversation starts with "show me where your human sign-off rules are written down," because if they are not written, the agent's defaults become the policy.

Source: [TechCrunch, November 23, 2026](https://techcrunch.com/2026/11/23/anthropic-launches-claude-ship-letting-ai-agents-review-fix-and-approve-code-changes/)
