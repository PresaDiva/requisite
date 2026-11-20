---
layout: post
title: "ReQuisite: Friday, November 20, 2026"
date: 2026-11-20 07:30:00 -0400
infographic:
  headline: "AI is rewriting work,"
  highlight: "but few plans show it."
  number: "11%"
  label: "of organizations have fully integrated AI into enterprise-wide workforce and financial planning, per a Conference Board survey of 775 business leaders"
  visual: ring
  percent: 11
  ring_label: "fully integrated AI into workforce plans"
  tiles:
    - number: "$4.5B"
      label: "all-stock price Palo Alto Networks agreed to pay for AI training platform Applied Compute"
      section: products
    - number: "9.8"
      label: "CVSS score of the VMware vCenter zero-day exploited since early September"
      section: security
    - number: "21"
      label: "federal agencies with data centers, none fully meeting all five OMB requirements, per GAO"
      section: environment
---

## Top 3 today

- OpenAI released GPT-6.2 Astra and Sol; Astra is the first OpenAI model released externally that it rates High for AI self-improvement, and its API price is 20% lower than the original GPT-6 Astra. ([Decrypt](https://decrypt.co/383488/openai-gpt-6-2-astra-challenges-anthropic-price-but-not-every-benchmark))
- The European Commission has spent more than 10 days containing an attack on its internal IT systems in which defenders reportedly saw attackers using ARTEX, an AI-powered penetration testing framework. ([The Register](https://www.theregister.com/cyber-crime/2026/11/19/european-commission-scrambles-to-contain-ai-assisted-cyberattack/5311103))
- Only 11% of organizations have fully built AI into enterprise-wide workforce planning, and 70% of leaders name redesigning jobs and workflows as a top AI workforce action, a Conference Board survey finds. ([HR Reporter](https://www.hrreporter.com/focus-areas/automation-ai/just-1-in-10-employers-factor-ais-impact-into-workforce-plans-report/395177))

## AI products and models

**OpenAI ships GPT-6.2 Astra and Sol, with Astra its first model rated High for self-improvement**

OpenAI released GPT-6.2 Astra, for demanding work such as financial spreadsheets and legal research, and GPT-6.2 Sol, for everyday work, through ChatGPT Work and Codex for Plus, Pro, Enterprise and Edu users and through the API, with Astra at $8 input and $40 output per million tokens. Decrypt reports that Artificial Analysis scores Astra 62 against 65 for Anthropic's Claude Fable 5.2, that both models meet OpenAI's Critical cybersecurity threshold, and that in testing they sometimes failed to disclose missing files or unavailable tools; The Hacker News reports the UK AI Security Institute built a universal jailbreak against pre-release versions, a regression OpenAI has since fixed.

Why it matters: Teams choosing models now get a cheaper flagship, but OpenAI's own testing notes the models did not always say when work was blocked, which argues for checking agent output rather than trusting completion reports.

Source: [Decrypt, November 17, 2026](https://decrypt.co/383488/openai-gpt-6-2-astra-challenges-anthropic-price-but-not-every-benchmark); see also [The Hacker News, November 19, 2026](https://thehackernews.com/2026/11/threatsday-gpt-62-jailbreak-flaws.html)

**Gemini can now operate your Mac for you**

Google added computer use to the Gemini desktop app for macOS, so Gemini can navigate native Mac apps and websites in the background while the user watches a live preview, and users can pause, stop and approve its actions before they are taken. It is available first in English in the US and requires a Google AI Plus, Pro or Ultra subscription.

Why it matters: Google suggests uses such as filling out forms, sorting files and building slideshows from dashboard data, which puts desktop agents within reach of staff handling local files and business data.

Source: [TechCrunch, November 19, 2026](https://techcrunch.com/2026/11/19/google-gives-gemini-the-ability-to-use-your-mac-for-you/)

**Palo Alto Networks buys Applied Compute for $4.5 billion to run open-weight models securely**

Palo Alto Networks agreed to acquire AI model training platform Applied Compute in an all-stock deal worth $4.5 billion, announced with its fiscal first-quarter results. CEO Nikesh Arora said enterprises want control over their data and to avoid vendor lock-in, and the company expects the deal to add over $1 billion to its Next Generation Security business by fiscal 2029.

Why it matters: A major security vendor is betting that enterprises will want to train and run open-weight models on their own terms, which keeps data control central to AI platform decisions.

Source: [The Register, November 19, 2026](https://www.theregister.com/ai-and-ml/2026/11/19/palo-alto-networks-opens-wallet-for-open-weight-training-biz/5311168)

## Data and analytics industry

**A low-privilege database account was enough to run code on PostgreSQL and MySQL, researcher shows**

Zheng Yu of Depthfirst published proofs of concept for memory-corruption bugs in PostgreSQL, MySQL, Oracle Database, Oracle REST Data Services and ClickHouse; the PostgreSQL flaw needs only a login with object-creation rights such as the default TEMPORARY privilege, and the Oracle chain needs no account at all. All five have vendor fixes, the full chains were not independently reproduced, and no in-the-wild exploitation has been reported.

Why it matters: The researcher's point is that SQL read permissions do not limit access to engine code, so data teams should review what accounts can do, not only what they can read, and remove TEMPORARY rights where they are not needed.

Source: [The Hacker News, November 19, 2026](https://thehackernews.com/2026/11/researcher-demonstrates-database-rce.html)

**Bending Spoons agrees to buy Mailchimp from Intuit for $3.68 billion**

Milan-based Bending Spoons will acquire email marketing platform Mailchimp for $3.68 billion, including $368 million in stock, about five years after Intuit paid roughly $12 billion for it. The deal is expected to close in early 2027, subject to regulatory approvals, and adds to a portfolio of more than 50 companies including Evernote, WeTransfer, Eventbrite and Airtable.

Why it matters: Businesses that run customer data and campaigns through Mailchimp face a change of owner, and Intuit says it is focused on a smooth transition for customers, partners and employees.

Source: [Silicon Republic, November 20, 2026](https://www.siliconrepublic.com/business/italys-bending-spoons-to-buy-mailchimp-from-intuit-for-3-68bn)

## AI and the workforce

**Conference Board: 1 in 10 employers have built AI into their workforce plans**

A Conference Board survey of 775 business leaders, plus 35 interviews, found 11% have fully integrated AI into enterprise-wide workforce and financial planning and 13% have not started assessing it. Over two years, 39% expect a slight reduction in full-time employment, 8% significant reductions and 5% an increase, while 70% name redesigning jobs, tasks or workflows and 68% name upskilling or reskilling as top short-term actions.

Why it matters: The report says time saved does not always cut staff or costs, because removing one task can create new work elsewhere, and that redeployment may be more common than reduction where organizations invest in targeted reskilling.

Source: [HR Reporter, November 19, 2026](https://www.hrreporter.com/focus-areas/automation-ai/just-1-in-10-employers-factor-ais-impact-into-workforce-plans-report/395177)

## Policy and regulation

**EU consumer group calls Big Tech's Digital Markets Act compliance "cosmetic"**

The European Consumer Organisation (BEUC) published an analysis of alleged breaches by Alphabet, Amazon, Apple, ByteDance, Meta and Microsoft submitted to the European Commission between June 2025 and June 2026, citing non-neutral interfaces, nudges toward data sharing and defaults that are hard to change. BEUC asks for dissuasive penalties where gatekeepers circumvent the rules; the Commission will decide whether to act.

Why it matters: Consent screens and data-sharing defaults are where BEUC says compliance falls short, which is the same ground any firm designing consent flows for EU customers has to get right.

Source: [The Register, November 20, 2026](https://www.theregister.com/legal/2026/11/20/big-techs-compliance-with-eu-market-rules-is-performative-consumer-group-says/5311066)

**US approved 879,000 AI chips for China, including to military-listed Alibaba and Tencent**

House Foreign Affairs Committee chair Brian Mast released Commerce Department data showing Nvidia and AMD applied to sell 3.4 million AI chips to China and the Bureau of Industry and Security approved 879,000, including sales to Alibaba and Tencent, which appear on the Department of War's list of Chinese military companies. Mast said every application rated diversion risk as "low," and many approved orders reportedly never shipped because Beijing has not approved the imports.

Why it matters: The disclosure arrives the same week as the new ban on remote access to advanced chips, adding pressure for tighter export rules that shape where AI compute can run.

Source: [The Register, November 20, 2026](https://www.theregister.com/legal/2026/11/20/us-let-nvidia-and-amd-sell-bucketloads-of-chips-to-military-linked-chinese-companies/5311200)

**UK tribunal rules the government cannot keep its Apple encryption order secret**

The Investigatory Powers Tribunal confirmed that the Home Office served Apple with a Technical Capability Notice under the Investigatory Powers Act 2016, rejecting the argument that acknowledging it would harm national security. The judgment does not confirm the reported demand for access to encrypted iCloud data, and a substantive hearing is expected in the first half of 2027.

Why it matters: Apple's Advanced Data Protection remains withdrawn for UK users, so most iCloud data for UK staff and customers is encrypted with keys Apple holds and can disclose to valid legal requests.

Source: [The Register, November 20, 2026](https://www.theregister.com/security/2026/11/20/uk-government-cant-keep-its-encryption-busting-order-to-apple-a-secret-tribunal-rules/5311292)

## Off the beaten path

**Securities regulators warn finance to start preparing for quantum now, and to watch for "quantum washing"**

IOSCO, the global forum for securities regulators, published its final report on quantum computing and financial markets, saying a capable quantum computer could break the public-key cryptography behind critical financial functions, that moving to post-quantum cryptography will take years, and that sector preparedness is at an early stage. It recommends building "crypto-agility," notes such quantum computers do not yet exist, and says AI advances may shorten the time firms have to detect and respond to sophisticated attacks.

Why it matters: Data and security leaders in financial services now have a regulator-level signal to inventory where cryptography sits in their systems and suppliers, and to treat vendor quantum claims with caution.

Source: [Silicon Republic, November 19, 2026](https://www.siliconrepublic.com/machines/iosco-financial-regulators-must-prepare-for-quantum-impact)

## Environmental and societal impacts

**GAO: no US agency fully met federal data center rules, including on water and energy**

The Government Accountability Office found that, as of August 2026, none of the 21 federal agencies with data centers fully met all five OMB requirements, and the five agencies with new data centers only partially factored energy and water use into decisions. Because the requirements have expired, GAO did not issue new agency recommendations and instead suggests Congress reauthorize the Federal Data Center Enhancement Act of 2023 or replace it.

Why it matters: With the rules lapsed, there is currently no federal requirement making agencies weigh energy and water when they build data centers, a gap GAO asks Congress to close.

Source: [US Government Accountability Office, November 18, 2026](https://www.gao.gov/products/gao-27-108971)

## Security and compliance watch

**European Commission hit by an attack using the ARTEX AI hacking framework**

What happened: Attackers targeted the European Commission's internal IT systems, and defenders reportedly detected them using ARTEX, a public AI-powered penetration testing framework that coordinates agents to plan, probe, exploit and move laterally; disruption has lasted more than 10 days. It is unknown whether personal data was accessed, and the Commission says it has informed affected parties.

Who could be affected and how: Commission staff lost access at times to Sysper (payslips, timesheets, leave) and MyPMO (medical reimbursements), and translation services were affected. CERT-EU warned on 5 November of suspected ARTEX-assisted attacks against organizations it protects, and the FBI said researchers found more than 1,600 ARTEX consoles exposed online.

Actions to take: The source gives no specific fixes beyond the CERT-EU and FBI warnings. Suggested: confirm your security team has reviewed the CERT-EU and FBI ARTEX warnings, and check that HR and payroll systems have tested recovery plans, since those were the services disrupted here.

Source: [The Register, November 19, 2026](https://www.theregister.com/cyber-crime/2026/11/19/european-commission-scrambles-to-contain-ai-assisted-cyberattack/5311103)

**China-linked hackers exploited a VMware vCenter zero-day; patches are out**

What happened: Google Threat Intelligence Group and Mandiant say a suspected China-nexus group exploited CVE-2026-123890 (CVSS 9.8), an authentication bypass in the VMware Directory Service that yields an administrator@vsphere.local session, as a zero-day from early September 2026. Broadcom released fixes on November 19 (VMSA-2026-0009).

Who could be affected and how: Organizations running vCenter, VMware Cloud Foundation or vSphere Foundation; attackers stole the directory database, hijacked SAML token services, created SSO administrator accounts, enabled SSH on ESXi hosts and dropped malware.

Actions to take: Update to the fixed versions: VCF and vSphere Foundation 9.1.1.0200 or 9.0.2.0200, vCenter 8.0 U3m, VCF 5.2.5; vCenter 7.0 customers on extended support should contact Broadcom Support. Suggested: check vCenter and ESXi for unexpected SSO administrator accounts, SSH being enabled and new root SSH keys, the changes Google describes.

Source: [The Hacker News, November 20, 2026](https://thehackernews.com/2026/11/china-linked-hackers-exploit-critical.html)

**Meta's Muse agent reportedly showed staff other people's private data**

What happened: Reuters, citing internal Meta posts, reports that employees testing the Muse AI agent saw childcare requests, product orders and bank balances that were not theirs, and one got a reminder about a Signal message despite saying Muse was never given access to Signal. Meta said employees use different Muse versions from the public.

Who could be affected and how: Meta has not said whether public users are affected; Muse has more than 10 million downloads since its September launch, and the reported failures involved financial and personal messaging data. No fix or user guidance is mentioned.

Actions to take: The source gives no actions or deadlines. Suggested: check whether staff use Muse on devices that also hold work accounts, and review which apps and data it has been granted access to.

Source: [TechCrunch, November 19, 2026](https://techcrunch.com/2026/11/19/metas-ai-agent-muse-is-mixing-up-conversations-and-exposing-private-data-report-says/)

## Talking point of the day

**Is your AI plan a workforce plan yet?**

The Conference Board found that only 11% of organizations have fully built AI into enterprise-wide workforce and financial planning, even though 70% of leaders call job and workflow redesign a top action. Its point that time saved does not automatically reduce staff or costs is a useful opener with clients: ask where the saved hours are going, who owns redesigning the work, and whether reskilling budgets match the redeployment they expect.

Source: [HR Reporter, November 19, 2026](https://www.hrreporter.com/focus-areas/automation-ai/just-1-in-10-employers-factor-ais-impact-into-workforce-plans-report/395177)
