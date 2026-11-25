---
layout: post
title: "ReQuisite: Wednesday, November 25, 2026"
date: 2026-11-25 07:30:00 -0400
infographic:
  headline: "AI toys get a timeout"
  highlight: "in New York."
  number: "90 days"
  label: "until New York's five-year ban on toys with built-in AI chatbots takes effect, counted from the November 24 signing, per the Governor's office"
  visual: countdown
  days: 90
  deadline_label: "Ban takes effect 90 days after signing"
  tiles:
    - number: "15.7%"
      label: "of AI agent attempts on everyday tasks failed at least one safety requirement in the ShellBench benchmark"
      section: products
    - number: "9.8"
      label: "CVSS score of a new VMware vCenter authentication bypass, fixed by Broadcom"
      section: security
    - number: "1.9 gal"
      label: "water tied to $25 a month of frontier AI use, about 90% of it at power plants, per Enverus"
      section: environment
---

## Top 3 today

- The UK's National Cyber Security Centre says it has seen a "marked rise" in AI-driven attacks, with autonomous hacking tools causing intrusions and downtime since September by exploiting old, unfixed weaknesses. ([TechCrunch](https://techcrunch.com/2026/11/24/uk-warns-ai-driven-cyberattacks-are-exposing-years-of-weak-security/))
- In a new benchmark of everyday personal tasks, even the most advanced AI agents failed more than a third of the time, and 15.7% of all attempts broke at least one safety requirement. ([TechCrunch](https://techcrunch.com/2026/11/24/even-the-best-ai-agents-struggle-with-everyday-life/))
- New York Governor Kathy Hochul signed a five-year ban on making, distributing and selling toys with built-in AI chatbots, with fines of up to $15,000 per day per violation. ([New York State Governor's office](https://www.governor.ny.gov/news/consumers-begin-their-holiday-shopping-season-governor-hochul-signs-five-year-ban-ai-chatbot))

## AI products and models

**Best AI agents still fail everyday tasks more than a third of the time**

ShellBench, built with researchers at The OpenClaw Foundation, Parsewave, Hugging Face, Red Hat and UC Berkeley, tested agents from OpenAI, Anthropic and Meta on multi-step personal tasks such as email, calendars and receipts: the top models failed more than a third of the time, and 15.7% of attempts failed at least one safety requirement (for example, 40.3% recommended duplicate or incorrect invoice payments). Results also shifted with the harness used to run the model, and the researchers did not test the companies' own consumer apps, so results may differ there.

Why it matters: For teams handing routine admin to agents, the software wrapped around a model affects reliability as much as the model, so pilots should test the exact setup staff will use.

Source: [TechCrunch, November 24, 2026](https://techcrunch.com/2026/11/24/even-the-best-ai-agents-struggle-with-everyday-life/)

**Anthropic's MCP passes 700 million monthly SDK downloads and adds background tasks**

Anthropic says the Model Context Protocol, its standard for connecting AI to other tools and data, now has more than 700 million monthly SDK downloads and over 10,000 connectors for Claude. Background "Tasks" and "Elicitation" (pausing to ask the user for missing details) are now generally available, Skills over MCP is in public beta, and admins can approve servers once so employees connect automatically.

Why it matters: Agents that run longer jobs against company systems put more weight on who approves each connector and what data it can reach.

Source: [The Decoder, November 24, 2026](https://the-decoder.com/anthropic-tops-700-million-monthly-mcp-sdk-downloads-and-expands-the-protocol-for-more-autonomous-ai-agents/)

## Data and analytics industry

**Microsoft brings serverless PostgreSQL into Fabric**

Microsoft put HorizonDB, its PostgreSQL service, into public preview inside Microsoft Fabric, routing transactional and analytical queries from one endpoint and mirroring operational data into OneLake as Delta Parquet tables in near real time. Analysts quoted called it well suited to AI agent workloads, while one called it "a watered-down version" of the Azure service and another warned of lock-in risk.

Why it matters: Fabric customers get another way to put live operational data next to analytics, and data leaders should weigh the convenience against portability.

Source: [The Register, November 24, 2026](https://www.theregister.com/databases/2026/11/24/microsoft-brings-serverless-postgresql-into-fabric-to-bridge-transactions-and-analytics/5311841)

**Most Asia-Pacific firms say AI pays off, but only 12% can measure it with confidence**

A Strand Partners survey of 9,750 business leaders in 10 Asia-Pacific markets for AWS found 58% of AI-using businesses say their investments already exceed initial costs, but only 12% are very confident they can accurately measure AI return on investment. Only 19% have a formal, comprehensive AI strategy, and 48% cite a shortage of AI and digital skills as an obstacle.

Why it matters: The gap between claimed and measurable returns is a data problem, and it is where analytics teams can help leaders prove value.

Source: [CNBC, November 24, 2026](https://www.cnbc.com/2026/11/24/aws-asia-gains-roi.html)

## AI and the workforce

**OpenAI will pay local consultants up to $8,000 a month to help small businesses adopt AI**

OpenAI's OpenWorks pilot recruits AI-savvy individuals and small teams in 20 US communities to give independently owned businesses four full days a month of free, in-person help plus a community workshop, for a monthly stipend of up to $8,000. Participating businesses get three months of ChatGPT Business at no cost; venture-backed, private-equity-owned and software firms are excluded.

Why it matters: It treats hands-on, local support, not just software, as the missing piece in small business adoption, which is useful framing for anyone advising on AI change.

Source: [Decrypt, November 23, 2026](https://decrypt.co/383848/openai-will-pay-8k-preach-ai-gospel-small-businesses)

## Policy and regulation

**New York bans AI chatbot toys for five years**

Governor Hochul signed S.9408A/A.11144B, a five-year moratorium on manufacturing, distributing and selling toys with embedded or integrated AI chatbots, such as talking stuffed animals, dolls and robots. It takes effect 90 days after signing and is enforced by the Attorney General, with civil penalties of up to $15,000 per day for each violation.

Why it matters: Products that put conversational AI in front of children now face outright bans, not just disclosure rules, in some US states.

Source: [New York State Governor's office, November 24, 2026](https://www.governor.ny.gov/news/consumers-begin-their-holiday-shopping-season-governor-hochul-signs-five-year-ban-ai-chatbot)

**Oregon and Virginia sue SpaceX over Grok deepfakes**

The Oregon and Virginia attorneys general filed separate suits alleging SpaceX, which owns xAI's Grok and X, failed to put safeguards in place against harmful deepfake images, including alleged AI-generated child sexual abuse material, and falsely presented the products as generally safe. They cite state consumer protection laws and seek injunctions, civil penalties and disgorgement.

Why it matters: States are using existing consumer protection law to hold AI providers to their own safety claims, which raises the stakes on how any company describes its AI safeguards.

Source: [CNBC, November 23, 2026](https://www.cnbc.com/2026/11/23/oregon-virginia-spacex-grok-deepfake-lawsuits.html)

## Off the beaten path

**A five-point plan to support workers displaced by AI, whatever caused the job loss**

Jacob Leibenluft and Gene Sperling, for Georgetown's Economic Dignity Lab and the Washington Center for Equitable Growth, propose universal adjustment help for all displaced workers (no need to prove AI was the cause), scaling proven training, wider wage insurance, automatic scale-ups when job losses cluster, and a $20 billion fund for work-sharing and redeployment. They note US spending on job placement is less than one-tenth of the OECD average as a share of GDP.

Why it matters: It gives employers and policymakers a concrete menu for the people side of AI change, including options to redeploy staff instead of laying them off.

Source: [Washington Center for Equitable Growth, November 23, 2026](https://equitablegrowth.org/research-paper/five-policy-planks-to-prepare-u-s-workers-for-dislocation-caused-by-artificial-intelligence/)

## Environmental and societal impacts

**Most of AI's water footprint is at the power plant, Enverus says**

Enverus Intelligence Research estimates about 90% of the water tied to AI inference is used at power plants, not data centers, and puts $25 a month of frontier AI use at about 1.9 gallons of water, against about 308 gallons for the same spend on almond milk. These are the firm's base-case estimates, and its researcher notes that water figures quoted elsewhere "rarely have a consistent basis."

Why it matters: When judging AI's water impact, the electricity source matters more than the data center itself, which shapes both siting debates and sustainability reporting.

Source: [World Oil, November 24, 2026](https://www.worldoil.com/news/2026/11/24/most-of-ai-s-water-footprint-comes-from-the-power-plant-not-the-data-center-enverus-says/)

**EU plans to triple data centre capacity while climate and worker rules lag**

The European Commission wants to triple EU data centre capacity within five to seven years, but its proposed Cloud and AI Development Act sets no specific labour-rights conditions, and its new efficiency label grades performance without setting a minimum. EU data centres used 68 TWh in 2024, projected to reach 114 TWh by 2030, and in Ireland they took 23% of metered electricity in 2025; a consultation on binding minimum standards is open until December 14.

Why it matters: Irish and EU organizations planning AI capacity face fast-track permits now and tighter reporting later, with open questions about construction workers' protections.

Source: [Euronews, November 25, 2026](https://euronews.com/2026/11/25/eu-data-centres-tripling-capacity-but-climate-and-worker-laws-lag-behind)

## Security and compliance watch

**UK NCSC: AI hacking tools are exploiting years of technical debt**

What happened: The National Cyber Security Centre says it has seen a "marked rise" in AI-driven attacks, with several incidents since September involving autonomous hacking tools that caused intrusions and downtime. The tools scan for exposed internet-facing systems, try weak passwords and abuse developer API endpoints; none of the weaknesses are new, but AI finds and exploits them much faster.

Who could be affected and how: Any organization with exposed systems, weak credentials or unsecured APIs; the NCSC calls these "unmitigated weaknesses that are often the result of years of technical debt."

Actions to take: The NCSC says AI "does not make established cyber security controls obsolete," and the report says many of these attacks are preventable with basic defenses.

Suggested: Review internet-facing systems, password policies and API endpoints first, and ask who owns fixing long-known weaknesses.

Source: [TechCrunch, November 24, 2026](https://techcrunch.com/2026/11/24/uk-warns-ai-driven-cyberattacks-are-exposing-years-of-weak-security/)

**New critical VMware vCenter flaw, separate from last week's zero-day**

What happened: Broadcom patched 23 vulnerabilities across VMware ESX, vCenter, Workstation, Fusion and Avi Load Balancer, including CVE-2026-123903 (CVSS 9.8), which lets an attacker with network access to vCenter bypass authentication. Broadcom does not report in-the-wild exploitation of the new flaws.

Who could be affected and how: Organizations running vCenter, VMware Cloud Foundation or vSphere Foundation, which risk unauthorized access to the system that manages their virtual infrastructure. No fixed version is listed for vCenter 7.0.

Actions to take: Apply the updates: vCenter 8.0 U3m, VCF and vSphere Foundation 9.1.2 or 9.0.2.0300, VCF 5.2.5; vCenter 7.0 customers on extended support should contact Broadcom Support.

Suggested: Confirm your vCenter version and whether the earlier zero-day patch has also been applied.

Source: [The Hacker News, November 24, 2026](https://thehackernews.com/2026/11/vmware-vcenter-hit-by-another-critical.html)

**Abandoned ASP.NET anti-CSRF library exploited, with no patch coming**

What happened: CVE-2026-131914 (CVSS 9.3), an insecure deserialization flaw in Idunno.AntiCsrf, a WebForms module not updated since 2008, is being actively exploited, according to Google's Mandiant. There is no official patch.

Who could be affected and how: Organizations running legacy ASP.NET WebForms applications that use versions 0.9.1.0 or 0.9.1 Beta, which are exposed to server compromise.

Actions to take: The guidance is to stop using the library and replace it with a supported alternative, audit Web.config files and bin/ folders for references, review IIS logs for unusual POST requests to .aspx pages, rotate secrets such as machineKey values and database credentials if exploitation is suspected, and use WAF rules as a stopgap.

Suggested: Ask application owners for an inventory of legacy WebForms apps, since this dependency may not appear in recent records.

Source: [The Hacker News, November 23, 2026](https://thehackernews.com/2026/11/hackers-exploit-critical-aspnet-anti.html)

## Talking point of the day

**Test the agent you will actually run, not the model on the leaderboard**

ShellBench found that the same model could score very differently depending on the harness running it (Meta's Muse Wonder Full scored 56% in one and 38.1% in another), and about 10% of otherwise correct attempts still broke a safety rule. For clients piloting agents on admin work, the angle is simple: evaluate the full setup staff will use, define the safety checks that matter for each task, and keep a human sign-off where mistakes cost money, such as payments.

Source: [TechCrunch, November 24, 2026](https://techcrunch.com/2026/11/24/even-the-best-ai-agents-struggle-with-everyday-life/)
