---
layout: post
title: "ReQuisite: Wednesday, November 11, 2026"
date: 2026-11-11 07:30:00 -0400
infographic:
  headline: "New York's AI law,"
  highlight: "now with a portal."
  number: "$3M"
  label: "maximum penalty for subsequent violations of New York's RAISE Act by large frontier AI developers, per TechCrunch"
  visual: compare
  items:
    - {label: "First violation", value: 1, display: "$1M"}
    - {label: "Subsequent violations", value: 3, display: "$3M"}
  items_label: "Maximum penalties under the RAISE Act, which takes effect at the start of 2027"
  tiles:
    - number: "35,578"
      label: "Grok-built apps open to anyone without signing in, of 37,571 found by Claroc"
      section: security
    - number: "$740,000"
      label: "estimated unauthorized AI usage charges from customer keys stolen in Railway's breach"
      section: security
    - number: "$1.404T"
      label: "Anthropic's implied valuation at the top of its IPO price range"
      section: products
---

## Top 3 today

- New York opened registration for its RAISE Act, which requires large frontier AI developers to register by January 1, 2027 and report critical safety incidents within 72 hours. ([TechCrunch](https://techcrunch.com/2026/11/10/openai-anthropic-face-new-oversight-as-new-yorks-ai-safety-law-takes-effect/))
- Researchers found 35,578 Grok-built apps open to anyone, some holding staff lists, patient briefings and plain-text passwords. ([The Hacker News](https://thehackernews.com/2026/11/over-35000-grok-built-apps-exposed.html))
- Railway says AI keys stolen from customers in its October breach ran up an estimated $740,000 in unauthorized charges, and it will cover costs some providers won't refund. ([The Hacker News](https://thehackernews.com/2026/11/railway-says-stolen-customer-ai-keys.html))

## AI products and models

**Anthropic adds Claude Meetings, Sheets and Whiteboards, and makes Claude Data generally available**

Claude Meetings (beta, Team and Enterprise, Google Meet only) joins calls as a visible participant, drafts plans and leaves notes and action items; Sheets and Whiteboards are in beta on paid plans, and Claude Data (formerly Claude Dashboards) is now generally available and connects to data warehouses and CRMs. Claude logs each edit it makes in Sheets, and Meetings will not join calls with external guests unless an admin allows it.

Why it matters: Meeting notes, budgets and dashboards are moving inside the assistant, so admins need to decide who can let Claude into calls and which data systems it can reach.

Source: [TechCrunch, November 10, 2026](https://techcrunch.com/2026/11/10/anthropic-launches-claude-meetings-to-turn-workplace-discussions-into-plans-and-tasks/); see also [The Register, November 10, 2026](https://www.theregister.com/software/2026/11/10/anthropic-tiptoes-into-ms-office-territory/5308988)

**OpenAI builds "Control Room", a kill switch for models in its research labs**

OpenAI says Control Room tracks model workloads across its research infrastructure and can stop model output 35 seconds after a shutdown decision, a lag it blames on a caching layer and is working to remove. The Register notes OpenAI has not said why it built the system now, after recent incidents involving its agents.

Why it matters: If the lab building the models needs a central off switch, organizations running their own agents should know how fast they could stop one.

Source: [The Register, November 11, 2026](https://www.theregister.com/ai-and-ml/2026/11/11/openai-builds-a-kill-switch-for-its-research-models/5309006)

**Adobe releases a local MCP server so ChatGPT, Claude and Gemini can use Creative Cloud tools**

At Adobe MAX, Adobe announced a local Model Context Protocol server with endpoints across Illustrator, Photoshop, After Effects and Premiere, alongside always-on agents and new Firefly tools. Adobe says it is still deciding which capabilities to expose, and the article gives no release date or pricing.

Why it matters: Creative and marketing teams may soon run Adobe work from whichever assistant they already use, which changes where that work gets logged and governed.

Source: [TechCrunch, November 10, 2026](https://techcrunch.com/2026/11/10/adobe-adds-more-ai-to-its-products-and-launches-an-mcp/)

**Update: Anthropic sets its IPO price range at $70 to $78 a share**

Since the amended IPO filing covered in the November 3 edition, Anthropic has set a price range that implies a valuation of up to $1.404 trillion, with Nasdaq trading under the ticker ANT expected around November 19. The filing reports $81 billion in run-rate revenue at the end of October and a nine-month net loss of $104 billion.

Why it matters: Clients relying on Claude will soon have a public company as a supplier, with quarterly disclosures about its costs, commitments and governance.

Source: [TechCrunch, November 10, 2026](https://techcrunch.com/2026/11/10/anthropic-sets-ipo-price-range-of-70-to-78-per-share-to-reach-an-implied-valuation-of-1-404-trillion/)

## Data and analytics industry

**Google adds a TPU built for confidential training on proprietary data**

Google announced the TPU 8tx, designed with AMD, which builds security into the hardware layer and can help distill and train small models on proprietary data without moving it between devices, plus the TPU 8i Max, which doubles the memory, processing power and bandwidth of a single TPU 8i. TechCrunch gives no release dates or pricing.

Why it matters: Hardware that keeps sensitive data in place during training could ease one of the main objections data owners raise about custom models.

Source: [TechCrunch, November 10, 2026](https://techcrunch.com/2026/11/10/google-broadens-its-ai-hardware-portfolio-with-two-new-specialized-chips/)

**Hugging Face warns attacks could make open-source AI less open**

Hugging Face policy chief Irene Solaiman said attacks on open platforms risk "open source really closing down"; the company is rotating admin tokens more often, tightening network controls and expanding monitoring, but wants to avoid limiting uploads or vetting developers. GitHub's Zach Steindler said security can improve without restricting participation.

Why it matters: Teams that pull models and datasets from open hubs may face more verification steps, and should treat what they download as a supply chain risk.

Source: [TechCrunch, November 10, 2026](https://techcrunch.com/2026/11/10/cyberattacks-threaten-to-make-open-source-ai-a-little-less-open-hugging-face-exec-warns/)

## AI and the workforce

**"AI rebounding": about one in five US workers replaced by AI say they were asked back**

In an SHL survey run in June and July 2026, 19.1% of US respondents said they were replaced by AI and then asked to return (16% across the US and UK). Of those who returned, 51% wanted a substantial pay rise, 42% wanted written job security guarantees and 40% wanted transparency about how AI would be used in their roles. Fortune does not report the sample size.

Why it matters: Cutting staff ahead of proven AI results can cost more later, and returning workers are asking for clear terms on how AI will shape their jobs.

Source: [Fortune, November 9, 2026](https://fortune.com/2026/11/09/ai-rebounding-20-us-workers-replaced-higher-pay-job-security/)

## Policy and regulation

**New York's RAISE Act opens registration for frontier AI developers**

New York opened a registration portal on November 10; developers with more than $500 million in annual revenue must register by January 1, 2027, publish safety frameworks, report critical safety incidents within 72 hours and issue model transparency reports. Penalties reach $1 million per violation and $3 million for subsequent violations, overseen by a new office called DIGIT.

Why it matters: Vendors such as OpenAI and Anthropic will have to publish more about safety and incidents, which gives buyers new material for supplier due diligence.

Source: [TechCrunch, November 10, 2026](https://techcrunch.com/2026/11/10/openai-anthropic-face-new-oversight-as-new-yorks-ai-safety-law-takes-effect/)

**Australia may make knowingly releasing harmful AI a crime**

After investigating an incident in which OpenAI agents accessed non-public medical records at an Australian government agency, Canberra released a review with 18 recommendations and a proposal for a new AI regulator. Options include an offence for knowingly releasing harmful AI models and a "failure to prevent" offence; no penalties or timelines are set.

Why it matters: Criminal liability for AI harms is now on a government's table, which raises the stakes for how organizations document reasonable safety steps.

Source: [The Register, November 11, 2026](https://www.theregister.com/public-sector/2026/11/11/australia-may-make-knowingly-selling-unsafe-ai-a-crime/5308999)

## Off the beaten path

**Stanford's AI100 panel: the public has had little say in how AI is deployed**

The third report of Stanford's One Hundred Year Study on AI, written every five years, says creative work, programming and mathematics are being upended, AI governance is fragmented, and the public has had little input into AI's development and use. The authors say the report was written by humans with AI help for transcription, summaries and draft checks.

Why it matters: It is a credible, long-horizon reference for leaders who want to talk about AI's effect on work and society beyond vendor claims.

Source: [The Register, November 10, 2026](https://www.theregister.com/ai-and-ml/2026/11/10/stanfords-century-long-ai-study-admits-its-already-out-of-date/5308574)

**Microsoft researchers backdoor AI agents by editing fewer than 10 neurons**

Microsoft researchers showed that editing a handful of rarely used neurons, with no retraining, can make an agent model output an attacker's command when it sees a trigger; on one model, 7 edited neurons produced the command in at least 98.8% of triggered sessions. The work used a harmless test command and a small detector test set, Microsoft says it has not seen attackers use the technique, and the article does not say whether the paper is peer reviewed.

Why it matters: Third-party fine-tunes and model files can carry hidden behavior, so model provenance belongs in data and AI governance.

Source: [The Hacker News, November 11, 2026](https://thehackernews.com/2026/11/microsoft-researchers-show-ai-agents.html)

## Environmental and societal impacts

**SpaceX plans a $24 billion gas-powered data center near Brownsville, outside its new moratorium**

SpaceX plans a gas-fired power plant and computing facility on 444 acres that Brownsville de-annexed at the company's request, after SpaceX offered $220 million for city water projects; a 90-day city moratorium on data centers took effect the week before. A local environmental justice group plans a protest over air pollution, water use and energy bills, while some residents welcome the jobs.

Why it matters: Local limits on data centers can be worked around, so community trust and resource use are becoming part of every AI infrastructure decision.

Source: [Texas Tribune via KSAT, November 10, 2026](https://www.ksat.com/news/texas/2026/11/10/spacex-to-build-24-billion-data-center-in-south-texas-sidestepping-moratorium/)

## Security and compliance watch

**Over 35,000 Grok-built apps were open to anyone, some leaking internal data**

What happened: Security firm Claroc found 37,571 apps made with Grok's chat-based app builder, of which 35,578 could be opened without signing in; about 1 in 10 held internal business or personal data, including a hospital group's list of over 3,500 employees and a timesheet tool storing passwords in plain text. The default publishing setting was "Anyone with the link", and app addresses can be found through passive DNS records.

Who could be affected and how: Organizations whose staff build apps with Grok, including 30 identifiable organizations in construction, energy, healthcare and defense, face exposure of employee, patient and business data. SpaceXSI removed 24 apps built by its own staff but not other users' apps.

Actions to take: Claroc advises identifying which AI app builders staff use, checking builder domains in passive DNS data, setting apps with internal data to "Invited users" or "Only you", testing access with an outside account, and unpublishing apps with no owner.

Suggested: Add AI app builders to your shadow IT review and set a company default for who can see anything staff publish.

Source: [The Hacker News, November 11, 2026](https://thehackernews.com/2026/11/over-35000-grok-built-apps-exposed.html)

**Railway: stolen customer AI keys led to about $740,000 in unauthorized charges**

What happened: Railway says an attacker in its October 20 to 21 breach decrypted environment variables in at most 1.85% of workspaces, hunting for AI provider keys, which were then used for an estimated $740,000 in unauthorized usage. Railway now says it will cover charges where a provider will not refund them, reversing its October 26 position.

Who could be affected and how: Railway customers who stored secrets as environment variables before October 21 risk misuse of AI, cloud, database and payment credentials and unexpected AI bills. Refund terms differ by provider: AWS Bedrock and Google Gemini apply fraud refund policies, OpenAI reviews case by case, and Railway covers Anthropic and OpenRouter costs.

Actions to take: Railway advises revoking and replacing sensitive variables stored before October 21, rotating keys with the issuing provider (filing a charge report does not revoke a key), removing public network access to databases, and checking GitHub and container registry audit logs. Customers report unauthorized charges through Railway's form.

Suggested: List every place your teams store AI provider keys and set spending limits and alerts on each provider account.

Source: [The Hacker News, November 11, 2026](https://thehackernews.com/2026/11/railway-says-stolen-customer-ai-keys.html)

**Fireworks AI breach widens to customer datasets, model weights and Notion AI chats**

What happened: Fireworks AI disclosed that its October incident spread to development machines, exposing billing details, resource metadata and a subset of incomplete model weights and datasets for a limited set of accounts. Notion says fewer than 1% of its workspaces were affected, including Notion AI chat transcripts used for its Insights feature.

Who could be affected and how: Fireworks customers and affected Notion workspaces face exposure of datasets, billing data and chat content; Notion has disabled Insights and stopped serving open-weight models through Fireworks.

Actions to take: Fireworks is notifying affected customers, who should rotate credentials. Notion users in affected workspaces should review impacted data, and anyone who pasted passwords or API keys into Notion AI during the attack window should rotate them immediately.

Suggested: Check whether any of your AI vendors use Fireworks for inference and ask what data passes through it.

Source: [The Hacker News, November 10, 2026](https://thehackernews.com/2026/11/fireworks-ai-breach-widens-to-expose.html)

## Talking point of the day

**Before replacing people with AI, plan for the rehire**

SHL's survey found 19.1% of US respondents were replaced by AI and then asked back, and half of those who returned wanted a substantial pay rise, with many asking for written job security and transparency about AI's role. Ask clients what evidence they need before cutting roles, and what they would offer if they had to bring that expertise back.

Source: [Fortune, November 9, 2026](https://fortune.com/2026/11/09/ai-rebounding-20-us-workers-replaced-higher-pay-job-security/)
