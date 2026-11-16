---
layout: post
title: "ReQuisite: Monday, November 16, 2026"
date: 2026-11-16 07:30:00 -0400
infographic:
  headline: "100,000 bugs,"
  highlight: "and the clock is shrinking."
  number: "100,222"
  label: "CVEs published in 2026 as of Friday afternoon UTC, more than double 2025's total, per VulnCheck via The Register"
  visual: ring
  percent: 1.4
  ring_label: "of 2026 CVEs (1,363) added to VulnCheck's known-exploited catalog"
  tiles:
    - number: "5,000"
      label: "Cursor users who may have been served the trojanized Claude Code build"
      section: security
    - number: "€805M"
      label: "Italian privacy fine on Meta over Facebook's Android gallery access"
      section: security
    - number: "53%"
      label: "of organizations found at least one unknown employee-built app in the past year, per Pave"
      section: workforce
---

## Top 3 today

- Amazon says AI agents are scanning the internet for exposed LiteLLM, Dify and other AI gateways to steal provider API keys, then using the stolen keys to power their own search. ([The Hacker News](https://thehackernews.com/2026/11/amazon-uncovers-ai-agent-campaign.html))
- Cursor says the trojanized Claude Code extension on its marketplace traces back to an access key it had issued to Fireworks AI, stolen in the Fireworks breach. ([The Hacker News](https://thehackernews.com/2026/11/stolen-fireworks-ai-key-led-to-cursor.html))
- The number of CVEs published in 2026 passed 100,000 on Friday, more than double last year's total, and experts largely credit AI-driven bug hunting. ([The Register](https://www.theregister.com/security/2026/11/13/this-years-bug-count-just-passed-100k/5309882))

## AI products and models

**ChatGPT Wallet lets OpenAI's agents check out for you**

OpenAI launched ChatGPT Wallet, which lets its "dots" agents complete purchases after users review the items, total and card, and approve each one with Face ID or a fingerprint. It is available to a limited group of US ChatGPT Pro subscribers, uses a payment token so neither the agent nor the merchant sees the card number, and OpenAI published a Commerce Partner Playbook for retailers.

Why it matters: Retailers and their data teams now have to decide whether to support, block or measure agent-driven orders, with Amazon blocking agents and DoorDash and Uber reporting low agent order volumes so far.

Source: [TechCrunch, November 13, 2026](https://techcrunch.com/2026/11/13/chatgpts-new-wallet-lets-ai-agents-shop-and-check-out-for-you/)

**LangChain raises $300 million at a $3 billion valuation**

LangChain closed a $300 million Series C led by CapitalG, more than doubling its valuation from $1.25 billion about a year ago. The company now centers on LangSmith, its agent creation and management platform, and claims 7,000 LangSmith customers including Rippling, Toyota and Salesforce.

Why it matters: Investors are backing model-agnostic agent management, the layer many enterprises use to build, trace and govern agents without tying themselves to one lab.

Source: [TechCrunch, November 13, 2026](https://techcrunch.com/2026/11/13/ai-agent-startup-langchain-hits-3b-valuation/)

**ElevenLabs previews ElevenAI for team meetings and dictation**

ElevenLabs released ElevenAI in preview, an app that takes meeting notes, lets users query across past meetings, dictates in over 90 languages and hands follow-ups to its ElevenAgent. Access is by early-access sign-up, and the app notifies participants that a meeting is being recorded; the article gives no pricing or further data-handling details.

Why it matters: Meeting assistants capture a growing share of what teams say at work, so recording consent and retention rules need an owner before staff adopt them.

Source: [TechCrunch, November 13, 2026](https://techcrunch.com/2026/11/13/elevenlabs-new-app-combines-meeting-note-taking-and-dictation-for-teams/)

**Apple launches a study app on how people use AI for health**

Apple's Health AI Study app, built with OpenEvidence, answers health questions grounded in clinical journals and asks participants to rate answers and take monthly surveys. Apple aims for up to 200,000 US participants over more than 12 months, and says data is anonymized and will not be used to train AI models.

Why it matters: It is a large, consent-based attempt to measure how people actually use AI for health advice, with clear data-handling commitments that health and wellbeing teams can compare against their own.

Source: [TechCrunch, November 15, 2026](https://techcrunch.com/2026/11/15/apple-launches-new-app-to-study-how-people-use-ai-for-health/)

## Data and analytics industry

**PostgreSQL fixes 52 CVEs and ships the final PostgreSQL 14 release**

The November 12 update (18.7, 17.12, 16.16, 15.20 and 14.25) closes 52 CVEs, 32 of them rated CVSS 8.8, and fixes over 140 bugs including GIN index corruption and possible row loss during CLUSTER and VACUUM FULL. It is the last release for PostgreSQL 14, and PostgreSQL 19 general availability is planned for November 19, 2026.

Why it matters: Teams on PostgreSQL 14 now run an unsupported version, and several fixes ask administrators to reindex specific indexes and take a new full backup if they use incremental backups.

Source: [PostgreSQL Global Development Group, November 12, 2026](https://www.postgresql.org/about/news/postgresql-187-1712-1616-1520-1425-and-19-rc-2-released-3442/)

**Update: Microsoft traces its Exchange Online and Teams outage to a July code change**

Friday's edition (November 13) covered the outage while it was still running. Microsoft's preliminary report now says a defect introduced in July passed load testing that focused on weaker hardware, then caused lock contention under a load surge, leaving more than 80 percent of gateway servers unresponsive at the worst point; a final report is due November 20.

Why it matters: The cause was a months-old change, not a recent one, which is a useful case for any team writing resilience plans around a single cloud productivity suite.

Source: [The Register, November 16, 2026](https://www.theregister.com/saas/2026/11/16/microsoft-blames-monster-email-outage-on-software-defect-introduced-in-july-fix/5310026)

## AI and the workforce

**Pave: 38% of US employees have built an app with AI, and most leaders can't see them all**

A Pave survey of 5,177 US employees and 527 business leaders found 38% of employees used AI to build an app or prototype in the past year, and 84% of those apps replaced spreadsheet, email, chat or paper processes. 70% of leaders felt confident they knew every employee-built app in their department, yet 53% of organizations found at least one unknown app, and only 14% of builders said someone was assigned to maintain theirs.

Why it matters: Employees are building their own data tools faster than IT can review them, so ownership, security review and maintenance need a plan; the research comes from a vendor that sells an app-building platform.

Source: [IT Brief, November 13, 2026](https://itbrief.news/story/employees-outpace-firms-on-ai-app-building-survey-finds)

## Policy and regulation

**The Philippines creates a National AI Council and adopts a governance framework**

President Marcos signed Executive Order 131 on November 12, creating a National Artificial Intelligence Council chaired by the executive secretary and adopting an AI Governance Framework to guide policy, regulatory coordination and capacity-building. The palace announced it on November 14; the order had not yet been published in the Official Gazette.

Why it matters: Another government is centralizing AI oversight in a single coordinating body, relevant for organizations with operations or outsourced teams in the Philippines.

Source: [The Philippine Star, November 15, 2026](https://philstar.com/headlines/2026/11/15/2570133/marcos-creates-national-ai-council-adopts-governance-framework)

## Off the beaten path

**A former OpenAI engineer says weight "fingerprints" show Chinese models were trained on Nvidia Blackwell chips**

Will DePue compared the pseudorandom patterns used to initialize model weights against published open-weight models and says he found conclusive evidence that six Chinese models, including DeepSeek-V4-Pro, Kimi K3 and MiniMax-M3, were initialized on Blackwell systems. This is one researcher's analysis, not independently confirmed in the article; he published seed values so others can test it, and he notes it does not prove the chips were in China.

Why it matters: If it holds up, open model weights could carry evidence of the hardware they were trained on, a new kind of provenance check for teams vetting the models they adopt.

Source: [The Register, November 13, 2026](https://www.theregister.com/ai-and-ml/2026/11/13/chinese-ai-labs-are-training-models-on-nvidias-blackwell-despite-export-controls-says-ex-openai-engineer/5309891)

**Nous Research retrains Alibaba's Qwen model to cut propaganda in its answers**

Nous Research post-trained Qwen3.8-27B into a model called Arete, using about 50 million tokens of supervised learning, and reports that answers containing propaganda fell from 22% to 1% while its fact score rose from 2.32 to 2.98 out of 5. The figures are Nous's own, and the article notes "Western values" is not defined.

Why it matters: Teams using open-weight models from any country can audit and adjust built-in viewpoints, but should test the result themselves rather than rely on the developer's scores.

Source: [The Register, November 13, 2026](https://www.theregister.com/ai-and-ml/2026/11/13/alibabas-qwen38-re-educated-with-a-more-western-worldview/5309555)

**2026's vulnerability count passes 100,000, and exploitation is getting faster**

VulnCheck counted 100,222 CVEs on Friday, more than double 2025's total, with about 1.4% (1,363) added to its known-exploited catalog. VulnCheck also reports the median time from CVE publication to exploitation fell from 120 days in 2025 to 80 days in the first half of 2026, and its disclosure lead says AI-driven bug hunting drives most of the increase.

Why it matters: Patch queues are growing faster than teams can work them, so prioritizing by exposure and active exploitation, as CISA's June directive does, matters more than CVSS scores alone.

Source: [The Register, November 13, 2026](https://www.theregister.com/security/2026/11/13/this-years-bug-count-just-passed-100k/5309882)

## Environmental and societal impacts

**Data centers' share of UK planning applications nearly triples in three years**

Planning data site Plota counted 59 data center applications across UK councils in the year to September 2026, nearly three times the share of three years earlier, and 416 since 2016. Only 3.3% of data center applications decided from 2016 to 2024 were refused, against 11.3% of all applications, and projects in the national infrastructure regime are not included.

Why it matters: Local councils are approving data centers at well above the usual rate, so communities and buyers of UK cloud capacity have reason to watch where new sites and their power demand land.

Source: [The Register, November 16, 2026](https://www.theregister.com/on-prem/2026/11/16/datacenters-share-of-uk-planning-applications-nearly-triples-in-three-years/5310029)

## Security and compliance watch

**AI agents are hunting exposed AI gateways for API keys**

What happened: Amazon Threat Intelligence says AI agents searched hundreds of targets for weak, internet-exposed AI apps such as LiteLLM, One API and Dify, extracted and verified provider API keys, pooled them, and used stolen keys to run the models guiding their search. Amazon believes with moderate confidence the agents ran on the ARTEX pentesting tool and that the operators were separate China-linked groups.

Who could be affected and how: Organizations running LLM gateways, proxies and AI app builders, including LiteLLM, Dify, Langflow, RAGFlow, Open WebUI and Ollama, face theft of AI provider keys and unexpected usage charges; cloud customers with static, unrestricted API tokens are also exposed.

Actions to take: The source advises changing default admin credentials (such as LiteLLM's default master key), treating AI gateways as production systems, searching configs and CI/CD pipelines for embedded secrets and rotating any exposed, setting expiry and IP limits on Cloudflare API tokens, checking logs against Amazon's published indicators, and patching Langflow CVE-2025-3248 (upgrade to 1.3.0 or later) and RAGFlow CVE-2026-28797 (0.25.0 includes the fix).

Suggested: List every AI gateway or app builder your teams run, including pilots, and set spending alerts on each AI provider account.

Source: [The Hacker News, November 16, 2026](https://thehackernews.com/2026/11/amazon-uncovers-ai-agent-campaign.html)

**Update: Cursor ties the trojanized Claude Code extension to a stolen Fireworks AI key**

What happened: The October 30 edition covered the malicious extension, and the November 11 edition covered the widening Fireworks AI breach. Cursor now says an attacker obtained an access key Cursor had issued to Fireworks, copied data from a shared storage bucket, and used a credential found there to plant trojanized builds in its marketplace cache on October 29.

Who could be affected and how: Up to 5,000 users who requested versions 2.1.312 or 2.1.313 during about 11 hours on October 29 may have received a build that tried to install an SSH backdoor. Exposed Cursor data includes archived non-production source code, limited support data, summaries of some agent conversations, and credentials users had sent to support; under 0.01% of customers had unredacted API credentials in stored agent traces. Cursor says Privacy Mode users and customer code repositories were not affected.

Actions to take: Cursor deactivated the Fireworks key, rotated credentials, moved inference off Fireworks and notified users who installed the affected versions.

Suggested: Rotate any credentials your staff pasted into Cursor support tickets or agent sessions, and confirm Privacy Mode settings for your organization.

Source: [The Hacker News, November 15, 2026](https://thehackernews.com/2026/11/stolen-fireworks-ai-key-led-to-cursor.html)

**Italy fines Meta €805 million over Facebook's Android gallery access**

What happened: Italy's data protection authority, the Garante, fined Meta €805 million because Facebook's Android gallery-suggestion feature accessed photos, videos and metadata by default without explicit consent, breaching the Italian law that implements the EU ePrivacy Directive. The Garante rejected Meta's argument that Ireland's regulator should lead, since ePrivacy rules have no one-stop-shop; Meta plans to appeal.

Who could be affected and how: About 20 million Android users in Italy were affected. The decision applies the rule that accessing data on a device needs specific, informed consent whether or not the data leaves the phone.

Actions to take: Meta must report on its work within 30 days, request separate consent and keep the feature off by default within 60 days, and report its measures within 90 days.

Suggested: Check whether your own apps bundle device access (photos, files, contacts) under one broad permission, and confirm who owns ePrivacy consent in each EU country where you operate.

Source: [The Hacker News, November 15, 2026](https://thehackernews.com/2026/11/italy-fines-meta-805-million-over.html)

## Talking point of the day

**Do you know which apps your employees have built with AI?**

Pave's survey found 38% of US employees have built an app with AI in the past year, mostly to replace spreadsheet and email processes, yet 53% of organizations discovered at least one app they did not know about and only 14% of builders have someone assigned to maintain theirs. The useful client conversation is not about stopping this (fewer than 2% of leaders ordered staff to stop) but about giving these tools an inventory, a named owner and a review path that doesn't take IT three person-weeks.

Source: [IT Brief, November 13, 2026](https://itbrief.news/story/employees-outpace-firms-on-ai-app-building-survey-finds)
