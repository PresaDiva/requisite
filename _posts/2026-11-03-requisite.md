---
layout: post
title: "ReQuisite: Tuesday, November 3, 2026"
date: 2026-11-03 07:30:00 -0400
infographic:
  headline: "One job in ten,"
  highlight: "blamed on AI."
  number: "10%"
  label: "of SUSE's global workforce to be cut, with the CEO citing automation and AI"
  visual: ring
  percent: 10
  ring_label: "about one in ten of roughly 1,900 staff"
  tiles:
    - number: "2028"
      label: "year the UK cyber chief expects AI cyberattacks on critical infrastructure"
      section: security
    - number: "30B+"
      label: "web pages in the index the New York Times says Brave built"
      section: policy
    - number: "5-6x"
      label: "Gartner's practical cost saving of open models over frontier models"
      section: products
---

## Top 3 today

- Anthropic's amended IPO filing says it may "imminently" meet its own definition of AI-accelerated AI development, though no current model is designated as past that threshold. ([TechCrunch](https://techcrunch.com/2026/11/02/anthropic-warns-that-its-very-close-to-rsi-capability-aka-self-building-ai/))
- SUSE will cut about 10% of its workforce, with its CEO citing "automation and AI". ([The Register](https://theregister.com/software/2026/11/02/suse-to-cut-one-in-ten-employees-because-of-ai/5306950))
- Attackers accessed environment variables of some customers of the Trigger.dev AI workflow platform. ([The Register](https://www.theregister.com/security/2026/11/02/thieves-pilfer-environment-variables-from-trigger-ai-workflow-tool/5306998))

## AI products and models

**Anthropic tells the SEC it may soon meet its threshold for AI-accelerated AI development**

In an amended IPO filing, Anthropic says its internal estimates indicate it "may imminently meet" the Responsible Scaling Policy definition of dramatically accelerated progress attributable to AI. It also says it has not designated any current model as exceeding that threshold and is still assessing the data. TechCrunch notes that skeptics see an S-1 as both disclosure and marketing, and it did not check the original SEC document.

Why it matters: Leaders who rely on a frontier lab can expect more disclosure about how fast these labs are changing, and clients may ask what that means for vendor risk and oversight.

Source: [TechCrunch, November 2, 2026](https://techcrunch.com/2026/11/02/anthropic-warns-that-its-very-close-to-rsi-capability-aka-self-building-ai/)

**OpenAI merges the Chat and Work tabs in ChatGPT, with one shared token allowance for ChatGPT and Codex**

OpenAI is combining the two tabs in the ChatGPT desktop app, starting with select users before a broad rollout. ChatGPT and Codex will draw from the same allowance pool, and OpenAI says most users will not be affected, though some may wait for resets more often.

Why it matters: Teams that budget by tool or seat may need to track one combined usage pool, since heavy coding use can now use up the same allowance as everyday chat.

Source: [TechCrunch, November 2, 2026](https://techcrunch.com/2026/11/02/openai-is-finally-merging-chatgpts-chat-and-work-tabs/)

## AI and the workforce

**SUSE to cut about one in ten employees, citing automation and AI**

SUSE, which has about 1,900 staff, told employees on November 2 that it will cut about 10% of its global workforce. CEO Dirk-Peter van Leeuwen said the need for some roles has greatly diminished and others will evolve over the next few years. Affected staff will be told by November 4, and the fiscal 2027 strategy is due on November 16. The article says the specific roles were not disclosed.

Why it matters: This is a named company tying a layoff directly to AI and flatter team structures, which is the kind of change leaders will be asked to explain to their own teams.

Source: [The Register, November 2, 2026](https://theregister.com/software/2026/11/02/suse-to-cut-one-in-ten-employees-because-of-ai/5306950)

## Policy and regulation

**India proposes a framework in which AI models are trained on data where it sits**

India's IT ministry (MeitY) proposes the Data Empowerment and Protection Architecture (DEPA) for AI Training. Data providers such as hospitals and banks would keep data in hardware-based secure environments, with anonymization, encryption, differential privacy and audit logging, and model builders would send models to the data instead of copying data out.

Why it matters: It is a government-backed design for sharing sensitive data for AI training without moving it, a pattern data teams in regulated sectors may want to follow.

Source: [The Register, November 2, 2026](https://www.theregister.com/public-sector/2026/11/02/india-floats-ai-plan-under-which-the-model-travels-to-the-data-rather-than-the-data-travelling-to-the-model/5306872)

**New York Times and other publishers sue Brave over alleged scraping for AI companies**

The Times filed suit in federal court in Manhattan on November 2, alleging Brave scraped copyrighted content and supplied it to customers the suit names as Anthropic, Perplexity, Mistral, xAI and Cohere. The Daily News, Chicago Tribune and Orlando Sentinel filed a similar suit. The Times seeks an injunction and damages, and Brave had not responded to a request for comment. These are allegations, not findings.

Why it matters: The case targets a data supplier rather than the AI developers themselves, which raises questions about where licensed and scraped data come from in any AI supply chain.

Source: [TechCrunch, November 2, 2026](https://techcrunch.com/2026/11/02/new-york-times-and-other-outlets-sue-web-browser-brave-over-alleged-content-scraping)

## Off the beaten path

**Legal scholars report using LLMs to find exploitable gaps in German law (informal, not peer reviewed)**

Felix Ringe (Stanford Law School's liftlab) and Linus Folkerts say they used LLMs to find inconsistencies in German law, and shared only examples they judged could not cause serious harm. The Register describes only a blog post, not a peer-reviewed paper, and does not verify the legal examples. Legal scholar Eric Goldman says AI-flagged gaps need careful human review.

Why it matters: It is an early signal that organizations drafting policies, contracts and rules may soon face AI tools that probe them for inconsistencies, which makes review of governance documents more important.

Source: [The Register, November 2, 2026](https://www.theregister.com/ai-and-ml/2026/11/02/ai-could-break-legal-systems-by-finding-previously-hidden-loopholes/5307066)

## Security and compliance watch

**Trigger.dev discloses that attackers accessed customer environment variables**

What happened: Trigger.dev, a hosted platform for building AI agents and workflows, disclosed a security incident on November 1. It says its investigation found "exposure across a subset of organizations", with unauthorized access to their environment variables, and that the exploit has been blocked.

Who could be affected and how: Customers of the hosted Trigger.dev service. Trigger has not said how many organizations were affected or named them, and The Register reports that affected customers have been notified.

Actions to take: Trigger says affected customers have been notified of steps to take and has promised a full incident report. The article does not describe those steps.

Suggested: Check whether any of your workflows run on hosted Trigger.dev. If so, consider reviewing which secrets sit in its environment variables, since The Register's own analysis notes these can expose connected services.

Source: [The Register, November 2, 2026](https://www.theregister.com/security/2026/11/02/thieves-pilfer-environment-variables-from-trigger-ai-workflow-tool/5306998)

**UK cyber chief warns of AI-enabled attacks on critical infrastructure by 2028**

What happened: Richard Horne, head of the UK's National Cyber Security Centre, said at the release of the agency's annual report on November 3 that the UK will likely face AI-enabled attacks on critical infrastructure by 2028. The report says AI will most likely make existing hacking methods faster and more widespread rather than uncover entirely new vulnerabilities.

Who could be affected and how: Operators of automated systems such as electricity switching, water controls and factory lines. Horne warned that organizations that have "got away with tech on the cheap" could face disruption if they do not invest in security or update old technology.

Actions to take: The NCSC urged basic measures: keep devices updated, limit administrator access, and back up important data. No deadline was given.

Suggested: Confirm who owns patching of older systems in your organization.

Source: [Manila Times (Associated Press), November 3, 2026](https://www.manilatimes.net/2026/11/03/world/americas-emea/uk-cyber-chief-says-the-uk-will-face-ai-cyberattacks-on-critical-infrastructure-by-2028/2460205)

## Talking point of the day

**Does your agent design send routine data to a frontier API when it does not need to?**

Gartner's paper "Open-Weight Models Will Run 90% of Enterprise Agentic Workflow Steps" argues that about nine in ten agent steps are routine, such as classification, tool calling and data validation, and open-weight models can handle them. Gartner puts the saving at as little as a twentieth of frontier cost in the best case, closer to 5 to 6 times in practice, and says the main benefit is control over data and workflow history. Worth raising with clients who are planning agents and have not yet decided which steps need a frontier model.

Source: [The Register, November 3, 2026](https://www.theregister.com/ai-and-ml/2026/11/03/open-models-can-do-90-percent-of-agentic-work-at-a-twentieth-of-the-cost-of-a-frontier-llm-gartner/5307132)
