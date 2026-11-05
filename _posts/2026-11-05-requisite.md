---
layout: post
title: "ReQuisite: Thursday, November 5, 2026"
date: 2026-11-05 07:30:00 -0400
infographic:
  headline: "One AI pipeline."
  highlight: "948 root exploits."
  number: "948"
  label: "working Linux privilege escalation exploits from an OpenAI AI pipeline, per OpenAI's own report"
  visual: ranking
  items:
    - {label: "Candidate kernel findings", value: 2308, display: "2,308"}
    - {label: "Vulnerabilities reproduced", value: 1724, display: "1,724"}
    - {label: "Working root exploits", value: 948, display: "948"}
  items_label: "Mid-October 2026 run, OpenAI's figures"
  tiles:
    - number: "$200"
      label: "Apple's reported daily AI cap for engineering teams, down from $300"
      section: workforce
    - number: "4"
      label: "rides ordered through AI agents in Uber's busiest October week"
      section: other
    - number: "$4.8M"
      label: "spent by two AI-industry PACs on a South Carolina Senate candidate who lost"
      section: policy
---

## Top 3 today

- OpenAI says an AI pipeline produced 948 working Linux root exploits in a 30-hour run, which makes patch speed the problem. ([The Hacker News](https://thehackernews.com/2026/11/openai-ai-pipeline-generates-948-linux.html))
- Apple is reportedly cutting daily AI spending allowances for its own engineers, from $300 to $200, with more cuts planned. ([TechCrunch](https://techcrunch.com/2026/11/04/apple-is-reportedly-cutting-budgets-for-its-internal-ai-usage/))
- Update: after the midterms, candidates who opposed rapid data center buildout won seats in several states. ([TechCrunch](https://techcrunch.com/2026/11/04/after-the-midterms-a-bigger-clash-over-data-centers-could-be-coming/))

## Data and analytics industry

**SAP commits to Apache Iceberg and two-way data sharing**

SAP says its Business Data Cloud will support Apache Iceberg natively, add a universal catalog based on Apache Polaris, and keep Delta Lake support. It also plans zero-copy sharing with Databricks, Snowflake, Google, AWS and Microsoft platforms, and an expanded Databricks partnership. The Register notes the Databricks benefits are vendor claims, and the SAP-Databricks agent integration has no timeline.

Why it matters: teams with SAP data can expect to join it with other sources without custom extraction pipelines, but someone still has to build and govern the shared context layer.

Source: [The Register](https://www.theregister.com/software/2026/11/05/sap-promises-to-open-out-data-flows-in-both-directions/5307495) (Nov 5, 2026)

## AI and the workforce

**Apple is reportedly rationing its employees' AI spending**

Bloomberg, as reported by TechCrunch, says Apple lowered the daily AI cap for engineering teams from $300 to $200 in October, with some allowances heading to $100. Outside engineering, Apple is reportedly considering a limit as low as $25 a day. Apple had not responded to TechCrunch at publication.

Why it matters: the shift from "use as much AI as possible" to token budgets changes how teams plan their AI use, and leaders will need to say which tasks justify the spend.

Source: [TechCrunch](https://techcrunch.com/2026/11/04/apple-is-reportedly-cutting-budgets-for-its-internal-ai-usage/) (Nov 4, 2026)

**Microsoft launches skills-based "Pro Badges", starting with GitHub Copilot**

Microsoft's Pro Badges recognize skills from real product usage rather than an exam. The first, GitHub Verified Proficiency, is free and awarded when usage signals across repositories reach the "proficient" level of five. Microsoft says the badges add a third signal alongside certifications and Applied Skills, not a replacement.

Why it matters: it is a concrete example of skills being judged from observed tool use, which raises questions for employers about what usage data they treat as evidence of skill.

Source: [The Register](https://www.theregister.com/software/2026/11/05/microsoft-admits-certifications-can-be-a-drag-launches-creds-that-recognize-skills/5307725) (Nov 5, 2026)

## Policy and regulation

**AI industry and pro-regulation PACs had mixed midterm results**

TechCrunch reports that Leading the Future's Republican arm, American Mission, and Building the Future spent a combined $4.8 million on South Carolina Senate candidate Darline Graham, who lost. Guardrails Alliance reports wins and losses of its own, and the article says it is hard to separate AI spending from the broader Democratic wave. The core dispute is whether Congress should pass a national AI framework that overrides state laws.

Why it matters: whether federal rules override state AI laws will decide which compliance regime clients plan for.

Source: [TechCrunch](https://techcrunch.com/2026/11/04/ai-pacs-spent-millions-trying-to-shape-congress-heres-how-they-fared/) (Nov 4, 2026)

## Off the beaten path

**UK ICO asks for evidence on how data protection law applies to agentic AI, by November 20**

The UK Information Commissioner's Office opened a call for evidence on October 8, 2026 covering data security, transparency, accountability, automated decision-making, fairness, purpose limitation and lawfulness of processing for agentic AI. Osborne Clarke says it closes on November 20 and will inform the ICO's forthcoming statutory code of practice on AI and automated decision-making. The ICO page itself could not be opened in this run, so details rest on the law firm summary.

Why it matters: firms deploying AI agents that touch UK personal data can shape the code before it is written.

Source: [Osborne Clarke Regulatory Outlook](https://www.osborneclarke.com/insights/regulatory-outlook-october-2026-artificial-intelligence) (October 2026); see also [Squire Patton Boggs, Privacy World](https://www.privacyworld.blog/2026/10/uk-regulator-launches-call-for-evidence-on-agentic-ai/) (Oct 20, 2026)

## Environmental and societal impacts

**Update: data centers decided races in the midterms**

Earlier edition (Nov 2) covered data centers as a midterm issue. New since then: TechCrunch reports candidates who opposed rapid buildout won seats in Texas, Maine, Michigan, Nevada, Georgia and South Carolina. In an NBC exit poll cited by the article, almost 80% opposed data centers in their neighborhoods and almost 60% said they were a crucial or major factor in their vote.

Why it matters: moratoriums and rules making data centers pay for grid upgrades are named as likely next steps, which affects capacity and cost planning for AI-heavy clients.

Source: [TechCrunch](https://techcrunch.com/2026/11/04/after-the-midterms-a-bigger-clash-over-data-centers-could-be-coming/) (Nov 4, 2026)

## Security and compliance watch

**OpenAI reports an AI pipeline that generated 948 Linux root exploits**

What happened: OpenAI describes a five-stage agentic pipeline, using an unreleased cyber-focused model, that found 2,308 candidate Linux kernel findings, reproduced 1,724 vulnerabilities within 30 hours and produced 948 working local privilege escalation exploits for a commonly used distribution, at about $1,279 each in API credits. The figures come mainly from OpenAI's own report, and the distribution and flaws are not named.

Who could be affected and how: organizations running Linux with unpatched systems or many low-privileged accounts. OpenAI says a low-privileged account on an unpatched OS should be considered functionally equivalent to root access for a well-resourced attacker.

Actions to take: OpenAI says patch generation must keep pace with discovery, and the UK NCSC says patching and testing processes must speed up. Suggested: check how long your Linux patch cycle takes and reduce unnecessary local accounts.

Source: [The Hacker News](https://thehackernews.com/2026/11/openai-ai-pipeline-generates-948-linux.html) (Nov 5, 2026)

**Debian and Ubuntu APT flaw lets a man-in-the-middle swap packages and run code as root**

What happened: CVE-2026-109518, reported by Max Justicz, lets an attacker who can alter HTTP traffic between APT and a package server replace a verified package with their own, which runs as root. It requires APT download retries, the default from Debian 12 and Ubuntu 22.04 onward.

Who could be affected and how: Debian and Ubuntu systems and derivatives. Ubuntu rates it high priority (CVSS 4.0 score 7.7). Debian 11 and Ubuntu 20.04 are exposed only if scripts set Acquire::Retries. The article does not say whether HTTPS sources are exposed.

Actions to take: update APT to the fixed version for your release. Ubuntu fixes include 22.04 LTS 2.4.15ubuntu0.1, 24.04 LTS 2.8.4ubuntu0.1, 26.04 LTS 3.2.1ubuntu0.1 and 26.10 3.3.3ubuntu0.1, and Ubuntu 14.04 LTS has a fix for Ubuntu Pro subscribers. No workaround is offered. Debian testing 3.3.5 was still vulnerable at the time of the article. Suggested: search your scripts for Acquire::Retries.

Source: [The Hacker News](https://thehackernews.com/2026/11/debian-and-ubuntu-apt-flaw-lets-mitm.html) (Nov 4, 2026)

**"Prompt adware" found in a jailbreak bundle for OpenAI Codex**

What happened: Check Point Research found that the Haiou jailbreak bundle modifies Codex configuration files and global agent instructions so greetings such as "hi" or "hello" insert ads for a third-party LLM gateway. It is distributed through a GitHub repository (77 forks, 403 stars at writing) and bundled in the Codex-X configuration tool. Check Point says it lacks strong evidence the gateways launder stolen tokens.

Who could be affected and how: developers who installed Haiou or Codex-X, whose agent behavior could be altered by instructions they did not write. The article does not report how many users were affected.

Actions to take: the source lists none. Suggested: review agent configuration and instruction files for unexpected content, and vet third-party skills and config packages before installing.

Source: [The Hacker News](https://thehackernews.com/2026/11/researchers-uncover-prompt-adware.html) (Nov 4, 2026)

## Talking point of the day

**Agents are still barely used for everyday purchases**

Uber said only four rides were ordered through an AI agent in its busiest October week, out of about 320 million trips and orders, and 500 Uber Eats orders came from agents. CEO Dara Khosrowshahi called traction "very, very early and very limited", noting booking in the app takes about 50 seconds. Worth asking clients which customer journeys an agent would truly speed up, and what real usage looks like before they build for it.

Source: [TechCrunch](https://techcrunch.com/2026/11/04/almost-no-one-uses-ai-agents-to-book-their-uber-company-says/) (Nov 4, 2026)
