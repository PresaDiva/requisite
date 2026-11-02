---
layout: post
title: "ReQuisite: Monday, November 2, 2026"
date: 2026-11-02 07:30:00 -0400
infographic:
  headline: "One AI attack tool."
  highlight: "200+ targets."
  number: "200+"
  label: "organizations targeted by a China-linked group running the ARTEX AI pentesting tool"
  visual: dots
  dots_total: 200
  dots_marked: 9
  marked_label: "9 confirmed breached"
  tiles:
    - number: "2"
      label: "critical Langflow flaws, CVSS 9.8. Fix: upgrade to 1.13.0"
      section: security
    - number: "35+"
      label: "turbines at xAI's Memphis site alleged to run without air permits"
      section: environment
    - number: "$200B"
      label: "in data center projects delayed, stalled or blocked in the first half of 2026"
      section: environment
---

## Top 3 today

- Two critical Langflow flaws let unauthenticated attackers run code on servers; version 1.13.0 is the fix. ([The Hacker News](https://thehackernews.com/2026/11/critical-langflow-flaws-could-let.html))
- CrowdStrike says a China-linked group used an AI pentesting framework against more than 200 organizations. ([The Hacker News](https://thehackernews.com/2026/10/chinese-hackers-use-ai-powered-artex-to.html))
- A federal judge let the NAACP's Clean Air Act suit over xAI's Memphis data center proceed. ([TechCrunch](https://techcrunch.com/2026/10/31/judge-allows-naacp-lawsuit-over-xai-data-center-pollution-to-move-forward/))

## AI products and models

**OpenAI reportedly cuts its funding target to $20 billion**

TechCrunch, citing the Financial Times, reports OpenAI lowered its target from $30 billion to $20 billion, with the first close expected to be lower still. The Wall Street Journal reportedly says $11 billion is secured so far, with a "tepid" response from some large investors. OpenAI has not confirmed the terms, and TechCrunch did not report a response.

Why it matters: Teams building on a single AI vendor may want to track vendor finances as part of supplier risk, though these reports are unconfirmed.

Source: [TechCrunch](https://techcrunch.com/2026/10/31/openai-reportedly-lowers-funding-target-for-new-round/) (Oct 31, 2026)

## Data and analytics industry

**Databricks previews a managed warehouse for viewing MLflow traces**

In beta, users can view traces stored in Unity Catalog in the MLflow UI without choosing a SQL warehouse. MLflow creates a SQL warehouse in the workspace when supported, and uses serverless compute otherwise. Workspace admins turn it on from the Previews page.

Why it matters: Fewer setup steps for inspecting agent traces lowers the barrier for analysts and engineers who need to debug AI applications, but it is a beta feature.

Source: [Databricks release notes](https://docs.databricks.com/aws/en/release-notes/product/2026/november) (Nov 2, 2026)

## Environmental and societal impacts

**Judge lets NAACP lawsuit over xAI's Memphis data center pollution move forward**

A federal judge denied xAI's motion to dismiss. The NAACP alleges xAI ran at least 35 combustion turbines at its Colossus data center without required air permits. The judge found the plaintiffs have standing and that the turbines are not "mobile sources" under Mississippi's State Implementation Plan. This was not a finding that xAI violated the Clean Air Act. SpaceX has not commented.

Why it matters: Power sourcing for AI compute is now being tested in court, which affects how clients weigh where and with whom their AI workloads run.

Source: [TechCrunch](https://techcrunch.com/2026/10/31/judge-allows-naacp-lawsuit-over-xai-data-center-pollution-to-move-forward/) (Oct 31, 2026)

**Data centers become a midterm election issue**

TechCrunch reports a Data Watch report found nearly $200 billion in data center projects were delayed, stalled or blocked in the first half of 2026 due to political and community opposition. Pennsylvania, Georgia, Texas, New York and Virginia are considering more guardrails and transparency rules. Midterm elections are on November 3.

Why it matters: Local opposition and new state rules can delay the compute capacity that AI plans depend on, and the people living near sites are voicing concerns about who profits.

Source: [TechCrunch](https://techcrunch.com/2026/10/31/data-centers-are-now-a-midterm-issue-even-in-brooklyn/) (Oct 31, 2026)

## Security and compliance watch

**Critical Langflow flaws allow unauthenticated code execution**

What happened: IBM's bulletin lists two critical flaws (CVE-2026-93680 and CVE-2026-110186, both CVSS 9.8) in the open-source AI workflow tool Langflow, affecting versions 1.0.0 through 1.12.8. Neither is in CISA's Known Exploited Vulnerabilities catalog as of its October 30 update, and a public Metasploit module exists for one that only enumerates MCP tools.

Who could be affected and how: Anyone running self-hosted Langflow, especially internet-exposed instances with auto-login enabled (on by default in 1.12.8). The source describes remote code execution on the server.

Actions to take: Back up the database, secret key and uploaded files; check auto-login; upgrade to 1.13.0 (released October 22). IBM lists no workaround. Do not delete or reinstall Langflow, since that can permanently remove flows.

Suggested: Check whether any team has stood up Langflow outside IT, and prioritize exposed instances.

Source: [The Hacker News](https://thehackernews.com/2026/11/critical-langflow-flaws-could-let.html) (Nov 2, 2026)

**China-linked group used an AI pentesting framework against more than 200 organizations**

What happened: CrowdStrike, as reported by The Hacker News, says a group it tracks as Vapor Panda used the ARTEX framework, run on DeepSeek and another commercial LLM, in campaigns that began October 17. Post-exploitation was confirmed at nine organizations, and a human operator steered the agents.

Who could be affected and how: Targets included foreign ministries, 19 U.S. organizations in pharmaceuticals, semiconductors, defense, nuclear and finance, and telecom providers. Techniques included forged admin tokens from keys unrotated since 2022 and VPN configs pulled from email.

Actions to take: The article gives no explicit recommendations.

Suggested: Review long-lived keys and exposed VPN configs, since the techniques named point to those areas.

Source: [The Hacker News](https://thehackernews.com/2026/10/chinese-hackers-use-ai-powered-artex-to.html) (Oct 30, 2026)

**Microsoft: North Korean actors are using AI across their operations**

What happened: Microsoft Threat Intelligence rates North Korean AI adoption as high, saying actors use it to speed up and scale existing workflows. It says operations remain human-directed. Examples include one actor creating over 100 target-specific PDF lures in minutes and fake worker personas.

Who could be affected and how: Employers hiring remote staff, and crypto and DeFi firms, face tailored phishing, fake candidates and trojanized code.

Actions to take: Microsoft advises scrutinizing remote candidates (check for duplicate personas, verify identity and references by live video and phone), training users with phishing simulations, and automating patching.

Suggested: Confirm who owns identity checks in your hiring process.

Source: [Microsoft Security Blog](https://www.microsoft.com/en-us/security/blog/2026/10/29/tracking-ai-adoption-in-north-korean-threat-actor-tradecraft/) (Oct 29, 2026)

## Talking point of the day

**Is your hiring process ready for AI-built fake candidates?**

Microsoft's report says North Korean actors use AI to build fake resumes, bios and personas and to run multiple fake worker identities. Its advice is people-process, not tooling: check for duplicate personas, verify identity and references through live video and phone calls, and confirm a real digital footprint. A useful client question is who owns that verification step between HR, security and the hiring manager.

Source: [Microsoft Security Blog](https://www.microsoft.com/en-us/security/blog/2026/10/29/tracking-ai-adoption-in-north-korean-threat-actor-tradecraft/) (Oct 29, 2026)
