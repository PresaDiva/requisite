---
layout: post
title: "ReQuisite: Tuesday, November 10, 2026"
date: 2026-11-10 07:30:00 -0400
infographic:
  headline: "Claude in Copilot,"
  highlight: "on by default."
  number: "29 days"
  label: "until Microsoft turns on Anthropic's Claude by default for UK Copilot tenants (December 9), with data processed in the US"
  visual: countdown
  days: 29
  deadline_label: "December 9, 2026: UK admins decide on Claude access"
  tiles:
    - number: "$3.4B"
      label: "Anthropic's reported spend on gas turbines that can produce up to 1.7 gigawatts"
      section: environment
    - number: "$1.73T"
      label: "Gartner's 2027 forecast for datacenter systems plus IaaS spending, up 48%"
      section: data
    - number: "4"
      label: "SAP flaws rated CVSS 10.0 fixed on November Patch Day, none needing a login"
      section: security
---

## Top 3 today

- Anthropic released Claude Fable 5.2 and Mythos 5.2, with API pricing of $8 and $40 per million input and output tokens. ([Anthropic](https://www.anthropic.com/claude-fable-and-mythos-5-2))
- Attackers abused Qubole's trusted AWS access to break into customer accounts and steal stored secrets and data. ([The Hacker News](https://thehackernews.com/2026/11/hackers-exploit-quboles-trusted-aws.html))
- Microsoft will switch on Claude by default for UK Copilot tenants on December 9, with processing in the US. ([The Register](https://www.theregister.com/ai-and-ml/2026/11/10/microsoft-is-giving-claude-the-keys-to-uk-copilot-tenants-by-default/5308693))

## AI products and models

**Anthropic ships Fable 5.2 and Mythos 5.2**

Anthropic says the two models share one underlying model. Fable 5.2 is available to all users, including on AWS, Google Cloud and Azure, while Mythos 5.2 goes to vetted organizations in cybersecurity and life sciences. Anthropic reports output up to 30% faster than version 5.1 and recommends starting with Opus 5.5 for most tasks. The benchmark results are Anthropic's own.

Why it matters: Anthropic's own guidance is to move up to Fable or Mythos only for the hardest work, which gives teams a reason to check which tasks really need the pricier tier.

Source: [Anthropic, November 9, 2026](https://www.anthropic.com/claude-fable-and-mythos-5-2)

**Mythos is going into Cisco and IBM security products**

Cisco says the red-teaming tools in its AI Defense suite can now call Mythos at no extra cost under existing licenses. IBM plans to add it to its Concert tool, with fixes that developers must approve. Customers get Mythos's capabilities through these products, not the model itself.

Why it matters: Teams that cannot get direct access to a restricted model may reach its capabilities through vendors they already use, which changes where the security review sits.

Source: [The Register, November 10, 2026](https://www.theregister.com/ai-and-ml/2026/11/10/anthropics-super-bug-finding-mythos-model-is-going-into-cisco-and-ibm-products/5308616)

**Meta releases Muse Ember, a lightweight model for agent work**

Meta describes Muse Ember as its lightest and most cost-efficient model, aimed at tool calls, routing, extraction and long document parsing. Input is priced at $0.10 per million tokens. The TechCrunch report gives no benchmark scores and does not say how developers can access it.

Why it matters: Cheap models for routine agent steps are one way teams are trying to control AI running costs.

Source: [TechCrunch, November 9, 2026](https://techcrunch.com/2026/11/09/meta-releases-muse-ember-a-new-lightweight-model-for-agent-execution/)

## Data and analytics industry

**Gartner forecasts datacenter systems and IaaS spending of $1.73 trillion in 2027**

Per The Next Platform's report on Gartner's November forecast, this combined category grows 48% in 2027 and passes enterprise software ($1.68 trillion, up 14.7%). The author's own rough guess is that about half of 2026 datacenter systems growth reflects price pressure rather than added capacity.

Why it matters: Infrastructure is taking a rising share of IT budgets, which raises the bar for data teams to show what that spend delivers.

Source: [The Next Platform, November 10, 2026](https://www.nextplatform.com/compute/2026/11/10/datacenter-systems-spending-to-go-through-the-roof-in-2027/5308636)

## Off the beaten path

**Google DeepMind researchers use AI agents to verify Signal's encryption code**

A DeepMind team used a multi-agent framework, AlphaProof Code, to produce 6.5 million lines of Lean proofs for Signal's post-quantum handshake and Triple Ratchet. The authors say it is the first AI-assisted proof linking protocol-level guarantees to a widely used implementation. Limits they give: it assumes perfect cryptography, and humans still had to define what to prove. The source does not say whether the paper is peer reviewed.

Why it matters: It shows AI-assisted verification moving from theory toward real software, though it took a five-person team four weeks and human direction.

Source: [The Register, November 10, 2026](https://www.theregister.com/ai-and-ml/2026/11/10/google-deepmind-melds-humans-and-ai-agents-to-vet-signals-secure-messaging-techniques/5308625)

## Environmental and societal impacts

**Anthropic reportedly buys $3.4 billion of natural gas turbines**

TechCrunch, citing the Financial Times, reports the Caterpillar turbines can produce up to 1.7 gigawatts. Supplier OnePWR had ordered them but could not secure financing. TechCrunch notes gas turbine backlogs run into the early 2030s and that gas exposes buyers to price swings.

Why it matters: Power supply is becoming a constraint on AI capacity, and buying generation directly is one way a lab is responding.

Source: [TechCrunch, November 9, 2026](https://techcrunch.com/2026/11/09/anthropic-joins-ais-natural-gas-frenzy-buys-3-4b-worth-of-turbines/)

## Security and compliance watch

**Attackers abused Qubole's trusted AWS access to breach customer accounts**

What happened: An attacker used credentials for the AWS account Qubole's platform uses to reach customer environments, assumed customer IAM roles, searched for stored secrets and copied S3 data. Wiz reported activity between October 14 and 26. How the credentials were obtained has not been disclosed.

Who could be affected and how: Customers of Qubole, the data lake platform owned by Idera, including those with unused Qubole roles that still trust its account. The source says "multiple" customers were hit and exposes stored secrets and S3 data.

Actions to take: The researchers advise rotating secrets and Lambda environment variables the roles could reach, revoking active role sessions, removing unneeded Qubole roles, narrowing trust policies to the specific principal, limiting AssumeRole by source IP or VPC endpoint, and reviewing CloudTrail logs from October 1.

Suggested: Check whether your AWS accounts have any Qubole roles, and list other vendor roles with broad access.

Source: [The Hacker News, November 9, 2026](https://thehackernews.com/2026/11/hackers-exploit-quboles-trusted-aws.html)

**SAP fixes four maximum-severity flaws, none needing a login**

What happened: SAP's November Security Patch Day fixed four CVSS 10.0 flaws in NetWeaver AS ABAP, Web Dispatcher and SAP Gateway, including two allowing remote code execution and one allowing login as any user on affected SAML setups. Researchers say they have not seen exploitation in attacks.

Who could be affected and how: Organizations running these SAP components, including out-of-maintenance kernels that may not get fixes. Attackers could run commands or sign in as privileged users.

Actions to take: SAP strongly recommends applying all four SAP Notes as a priority. Update kernels and all Web Dispatchers together. For SAML2 there is no workaround, so review trusted identity providers and audit privileged logons. Check the Gateway proxy list.

Suggested: Confirm who owns SAP patching, since SAP often feeds analytics platforms.

Source: [The Hacker News, November 10, 2026](https://thehackernews.com/2026/11/sap-patches-four-cvss-100-flaws.html)

**Microsoft turns on Claude by default for UK Copilot tenants on December 9**

What happened: Starting December 9, 2026, UK Copilot tenants whose admins have not chosen a Claude setting are opted in. Anthropic acts as a Microsoft subprocessor and processes the data in the US, and UK tenants are not covered by Microsoft's EU Data Boundary.

Who could be affected and how: UK organizations using Microsoft 365 Copilot, whose data could be processed in the US if nobody changes the setting.

Actions to take: Per the source, admins have until December 9 to decide whether US processing meets their data-handling requirements and set access accordingly. Administrators can disable access.

Suggested: Ask your IT or data protection lead who owns this setting and record the decision.

Source: [The Register, November 10, 2026](https://www.theregister.com/ai-and-ml/2026/11/10/microsoft-is-giving-claude-the-keys-to-uk-copilot-tenants-by-default/5308693)

## Talking point of the day

**Do you have an exit plan for your AI suppliers?**

Forrester's report says an AI bubble burst is not imminent, since about 90% of infrastructure funding comes from financially healthy tech firms. It still advises tracking whether projects deliver measurable value, limiting exposure to vulnerable suppliers, and stress-testing plans for end-of-support or payment defaults. It is a useful prompt for clients: which AI use cases and data would you need to move if a vendor failed? ([The Register, November 9, 2026](https://www.theregister.com/ai-and-ml/2026/11/09/the-ai-bubble-can-wait-but-your-exit-plan-cant/5308415))
