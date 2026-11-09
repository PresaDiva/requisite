---
layout: post
title: "ReQuisite: Monday, November 9, 2026"
date: 2026-11-09 07:30:00 -0400
infographic:
  headline: "Secrets saved in plain text,"
  highlight: "then pushed to GitHub."
  number: "1,122"
  label: "public copies of a Claude Code settings file that contain at least one secret, per Apiiro"
  visual: timeline
  events:
    - {date: "Aug 2025", label: "Bug report #5544 filed"}
    - {date: "Jan 2026", label: "Closed as not planned by an automated bot"}
    - {date: "Nov 6, 2026", label: "Apiiro publishes its findings"}
  tiles:
    - number: "Nov 20"
      label: "CISA deadline for US federal agencies to patch the exploited SonicOS MFA bypass"
      section: security
    - number: "1.5%"
      label: "growth in AI token spend across August and September combined, per Ramp"
      section: products
    - number: "90,000+"
      label: "files on the server of an attacker who ran AI agents against targets in at least 11 countries, per Acronis"
      section: security
---

## Top 3 today

- Apiiro found 1,122 public copies of a Claude Code settings file containing secrets such as database passwords and cloud keys. ([The Hacker News](https://thehackernews.com/2026/11/claude-codes-dont-ask-again-file.html))
- Ramp data shows business AI spending stalling, which it ties to price cuts and cost controls rather than weak demand. ([TechCrunch](https://techcrunch.com/2026/11/06/ramp-data-shows-ai-spending-stalling-just-as-anthropic-nears-its-ipo/))
- Acronis says one attacker used a set of AI agents to pull Taipei emergency dispatch records and reach about 10 organizations. ([The Hacker News](https://thehackernews.com/2026/11/taiwan-based-hacker-used-bossai-ai.html))

## AI products and models

**Ramp: business AI spending flattened as prices fell and companies added cost controls**

Ramp data shows token spend grew 1.5% across August and September combined, after a 42% jump in July, and then rose 8.9% between September 23 and October 23. Ramp economist Ara Kharazian points to API price cuts, cheaper open and Meta or Nvidia models, default settings that limit expensive models, employee budgets and routing tasks to cheaper models. He says it is not a demand problem. The article does not describe Ramp's sample or method.

Why it matters: If your clients' AI bills are flat, it may mean they are managing cost, not using less, so ask how model choice and budgets are set.

Source: [TechCrunch, November 6, 2026](https://techcrunch.com/2026/11/06/ramp-data-shows-ai-spending-stalling-just-as-anthropic-nears-its-ipo/)

**OpenAI launches GPT-6 Cyber, a security research model it rates "Critical"**

OpenAI says the model is better at finding and fixing vulnerabilities and at staying inside researcher-defined boundaries. It is initially available through the API and Codex to select Daybreak Red customers, and OpenAI classes it as Critical for cybersecurity under its Preparedness Framework. The report cites 81 previously unknown high-severity Firefox vulnerabilities found.

Why it matters: Security teams that rely on data and AI platforms should expect faster vulnerability discovery, which raises the pace of patching they will need to keep up with.

Source: [The Hacker News, November 6, 2026](https://thehackernews.com/2026/11/openai-launches-gpt-6-cyber-after-ai.html)

**PyTorch 2.15 aims to stop one bad GPU from restarting a whole training job**

The release rewrites the NCCL backend to improve fault diagnosis and recovery, lets an orchestrator swap out a crashed or slow GPU, and adds a "flight recorder" for post-failure inspection. The old backend stays as a rollback in 2.15 and is slated for removal in 2.16. The release has 3,117 commits from 583 contributors.

Why it matters: Teams training or fine-tuning models in-house lose less compute to hardware faults, and should plan for the old backend's removal.

Source: [The Register, November 6, 2026](https://www.theregister.com/devops/2026/11/06/pytorch-215-tackles-the-one-bad-gpu-problem/5308227)

**Cloudflare says some customers want AI agents blocked, and it is selling controls**

On its third-quarter earnings call, CEO Matthew Prince said some customers see AI agents as harmful to their business and want to block them. Cloudflare offers products to block agents, limit their cost and traffic impact, and let organizations monetize AI traffic. Prince claimed about 5% of the web has opted into its content protection products since July 1, and reported 39% year-on-year revenue growth.

Why it matters: Anyone publishing data or content to the web now has to decide whether AI agents are customers or a cost, and the figures here are the company's own claims.

Source: [The Register, November 6, 2026](https://www.theregister.com/networks/2026/11/06/ai-agents-are-a-bane-for-some-website-operators-says-cloudflare/5308022)

## Policy and regulation

**US Justice Department says its "Super Intelligence Task Force" is up and running**

According to The Register, the DoJ announced the task force on November 5, following a presidential memo of October 13, 2026. Its stated job is to protect US AI leadership from foreign abuse, organize AI-related DoJ cases, recommend enforcement priorities on AI misuse and feed into legislative proposals aimed at preventing "burdensome regulation". Pentagon CTO Emil Michael is vice chair, and he said details of its view of the AI regulatory landscape would follow later in November. "Affirmative measures" is not defined.

Why it matters: US enforcement priorities on AI misuse are being set centrally, so firms with US exposure should watch the details due this month.

Source: [The Register, November 6, 2026](https://www.theregister.com/ai-and-ml/2026/11/06/dojs-super-intelligence-task-force-up-and-running/5308074)

## Off the beaten path

**Linus Torvalds relays a claim that, in one Linux subsystem, AI-prompted fixes now outpace new bug reports**

In his weekly kernel update for Linux 7.4 rc2, Torvalds passed on a claim from eBPF lead developer Alexei Starovoitov that fixes are arriving faster than new bug reports on the eBPF side, saying it "sounds lovely if true". Starovoitov said most other kernel areas have not reached that point and told readers not to "hold your breath". The "peaked" framing is The Register's headline, not Torvalds' statement.

Why it matters: It is an early practitioner signal on whether AI-found bugs can be cleared, which matters for any team facing a growing patch backlog.

Source: [The Register, November 9, 2026](https://www.theregister.com/security/2026/11/09/linus-torvalds-sees-signs-ai-prompted-patch-flood-has-peaked/5308345)

## Environmental and societal impacts

**Crusoe sells a troubled Wyoming data center project to Google**

Crusoe confirmed the sale of an unfinished Wyoming campus it announced in 2025 with Tallgrass, planned to scale to 10 gigawatts. Google had not signed on as a customer, then reportedly raised concerns about cost and timeline and is taking over development. Google has announced plans to invest $17 billion in the campus, and the price it paid was not disclosed.

Why it matters: It shows how hard it is for independent developers to deliver huge AI sites on time and budget, which affects where capacity will actually be available.

Source: [TechCrunch, November 6, 2026](https://techcrunch.com/2026/11/06/crusoe-sells-troubled-wyoming-data-center-project-to-google/)

## Security and compliance watch

**Claude Code's "don't ask again" approvals can save secrets to a file that ends up in public GitHub repos**

What happened: Apiiro reports that choosing "Yes, and don't ask again" can save the approved command word for word, including any password or token typed into it, in plain text in `.claude/settings.local.json`. It found 104,185 copies in 103,617 public repositories, with 1,122 copies holding at least one secret (1,379 secrets in total, including 379 database passwords, 43 SSH logins, 42 GitHub, GitLab or npm tokens and 23 AWS keys). Apiiro did not test whether the secrets still work, and Anthropic has not replied to the researchers.

Who could be affected and how: Developers and organizations using Claude Code who typed credentials into approved commands. Apiiro found 63 organizations, mostly software companies, and exposed credentials can give direct access to servers and databases.

Actions to take: Apiiro advises searching repositories and git history for the `.claude/` settings files, rotating every secret they have held before cleaning up, running `git rm --cached .claude/settings.local.json` and adding it to `.gitignore`, referencing secrets as variables from a secrets manager, approving command patterns rather than single exact commands, and extending pre-commit and CI scanning to catch passwords inside commands.

Suggested: Confirm which teams use Claude Code, and add the settings file to your organization's `.gitignore` template.

Source: [The Hacker News, November 7, 2026](https://thehackernews.com/2026/11/claude-codes-dont-ask-again-file.html)

**Acronis: a lone attacker used AI agents to reach emergency services and other organizations**

What happened: Acronis's Threat Research Unit says one attacker, believed to be in Taiwan, used a set of AI agents ("BOSSAI") against hundreds of organizations in at least 11 countries, pulling Taipei emergency dispatch records and gaining data access or system access at about 10 organizations across Taiwan, Mexico and Thailand. The attacker's misconfigured server held over 90,000 files. The agents mostly ran on local models with safety training removed, made errors such as invented CVEs, and relied on simple weaknesses such as default credentials, missing login and SQL injection.

Who could be affected and how: Organizations with internet-facing APIs, admin panels or patient and dispatch data that lack authentication, use default credentials or have SQL injection flaws. The reported consequences were exposed case records, patient platform data and phone records.

Actions to take: The article does not list recommendations or say whether the affected organizations were notified.

Suggested: Check your exposed systems for default credentials and unauthenticated data endpoints, and fix known SQL injection and patching gaps.

Source: [The Hacker News, November 9, 2026](https://thehackernews.com/2026/11/taiwan-based-hacker-used-bossai-ai.html)

**CISA adds a SonicWall SonicOS MFA bypass to its exploited-flaws list**

What happened: CISA added CVE-2026-19868, a flaw in the SonicOS SSL-VPN service, to its Known Exploited Vulnerabilities catalog on November 6 after reports of possible exploitation. It can let a user with valid credentials for an alternate method bypass SAML authentication controls, which may bypass SAML-enforced MFA. SonicWall said it investigated a report of potential exploitation but gave no details.

Who could be affected and how: Organizations using SonicWall SonicOS SSL-VPN with SAML-enforced MFA, where MFA could be bypassed. Affected versions are not stated in the article.

Actions to take: Update SonicOS to the latest version and review SAML and MFA enforcement on SSL-VPN. CISA's patch deadline for US federal civilian agencies is November 20, 2026.

Suggested: Check whether you run SonicWall SSL-VPN, and who owns the patch.

Source: [The Hacker News, November 9, 2026](https://thehackernews.com/2026/11/cisa-flags-sonicwall-sonicos-mfa-bypass.html)

## Talking point of the day

**Do you know how your teams choose which AI model runs which task?**

Ramp's data suggests spending flattened not because demand fell, but because companies set default limits on expensive models, gave employees budgets and routed tasks to cheaper models. That makes model choice a governance and budgeting question as much as a technical one. Ask clients who sets those defaults, and whether anyone measures what each task costs and delivers. The sample and method behind Ramp's figures are not described in the article.

Source: [TechCrunch, November 6, 2026](https://techcrunch.com/2026/11/06/ramp-data-shows-ai-spending-stalling-just-as-anthropic-nears-its-ipo/)
