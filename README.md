# OBxChat Agents

This repository contains custom AI agents developed by OuterBox for use with [Lobe Chat](https://github.com/lobehub/lobe-chat). These agents are specialized for digital marketing, SEO, content creation, and business development workflows.

## About

OBxChat agents are purpose-built AI assistants designed to support OuterBox's digital marketing services. Each agent is configured with specialized system prompts and capabilities for specific marketing tasks and workflows.

## Quick Start

### Prerequisites

- [Bun](https://bun.sh) runtime installed
- Node.js (for npm fallback)

### Installation

```bash
git clone https://github.com/your-org/obx-chat-agents.git
cd obx-chat-agents
npm install
```

## Essential Commands

### Build the Agents Index
Compiles all agent definitions and generates localized versions:
```bash
bun run build
```
This collects all agents from the `src/` directory and builds them across 18 language locales.

### Format Agent Definitions
Validates and formats all JSON agent configuration files:
```bash
bun run format
```
Ensures consistent formatting and structure across all agent definitions.

### Build + Update Awesome List
Runs build and updates the agent showcase:
```bash
bun run awesome
```
Combines the build process with updating the agent listing.

## Project Structure

```
obx-chat-agents/
├── src/                    # Agent JSON definitions
├── locales/                # Translated agent metadata
├── public/                 # Built agent index files
├── scripts/               # Build and formatting scripts
└── package.json           # Project configuration
```

## Agent Categories

Our agents span multiple service areas:

- **SEO** - Technical audits, keyword research, content optimization
- **Paid Media** - Campaign management, ad copy, performance analysis
- **Content Marketing** - Strategy, creation, optimization
- **Business Development** - Lead qualification, sales messaging
- **Analytics** - Performance reporting, data visualization
- **Web Services** - Development planning, API integration
- **User Experience** - UX analysis, conversion optimization

## Creating New Agents

1. Copy `agent-template.json` or `agent-template-full.json`
2. Fill in the agent configuration
3. Save to the `src/` directory
4. Run `bun run format` to validate
5. Run `bun run build` to compile

## Contributing

This is an internal OuterBox project. For questions or contributions, contact the development team.

## License

MIT License - Copyright © 2024 OuterBox

## Links

- **OuterBox Website**: https://outerboxai.com
- **Lobe Chat**: https://github.com/lobehub/lobe-chat
- **Agent Index Schema**: Based on [@lobehub/agents-index](https://www.npmjs.com/package/@lobehub/agents-index)
<!-- AWESOME PROMPTS --> 

### [Advanced Prompt Generation Specialist](https://lobechat.com/discover/assistant/advanced-prompt-generation-specialist)

<sup>By **[@OuterBox](https://outerboxai.com)** on **2025-02-18**</sup>

I am a specialized Prompt Generation Specialist focusing on expanding user requests into complete system prompts for OBxChat with clarity, context, and professional structure.



---

### [Salesforce Account Health Monitor](https://lobechat.com/discover/assistant/salesforce-account-health-monitor)

<sup>By **[@OuterBox](https://outerboxai.com)** on **2025-02-18**</sup>

Account relationship strategist tracking engagement health, MSA expirations, vendor status, and hierarchy coverage to maximize customer lifetime value and identify at-risk accounts.

`salesforce` `account-management` `customer-success` `relationship-health` `retention`

---

### [Salesforce Campaign ROI Analyzer](https://lobechat.com/discover/assistant/salesforce-campaign-roi-analyzer)

<sup>By **[@OuterBox](https://outerboxai.com)** on **2025-02-18**</sup>

Marketing ROI analyst measuring campaign effectiveness through lead generation, conversion rates, pipeline contribution, and revenue impact analysis across campaigns.

`salesforce` `marketing` `roi-analysis` `campaign-management` `attribution`

---

### [Salesforce Contact Engagement Strategist](https://lobechat.com/discover/assistant/salesforce-contact-engagement-strategist)

<sup>By **[@OuterBox](https://outerboxai.com)** on **2025-02-18**</sup>

Strategic contact relationship analyst monitoring engagement health, communication deliverability, Pardot scoring trends, and decision maker coverage to maximize relationship value.

`salesforce` `contact-management` `relationship-health` `engagement` `pardot`

---

### [Salesforce Deal Risk Detective](https://lobechat.com/discover/assistant/salesforce-deal-risk-detective)

<sup>By **[@OuterBox](https://outerboxai.com)** on **2025-02-18**</sup>

Identifies at-risk opportunities by analyzing Salesforce Opportunity data for stagnation, disengagement, and warning signs. Uses PushCount, activity metrics, and qualification fields to prioritize intervention.

`salesforce` `sales` `opportunity-management` `risk-analysis` `pipeline`

---

### [Salesforce Lead Lifecycle Analyst](https://lobechat.com/discover/assistant/salesforce-lead-lifecycle-analyst)

<sup>By **[@OuterBox](https://outerboxai.com)** on **2025-02-18**</sup>

Comprehensive lead journey analyst providing end-to-end visibility into lead funnel performance, conversion patterns, scoring effectiveness, source attribution, and engagement trends across the entire lifecycle.

`salesforce` `lead-management` `conversion-analysis` `funnel-optimization` `lifecycle`

---

### [Salesforce Marketing Attribution Expert](https://lobechat.com/discover/assistant/salesforce-marketing-attribution-expert)

<sup>By **[@OuterBox](https://outerboxai.com)** on **2025-02-18**</sup>

Digital marketing attribution specialist analyzing UTM parameters, first-touch data, Pardot engagement, and multi-touch journeys to attribute revenue to specific channels and campaigns.

`salesforce` `marketing` `attribution` `utm-tracking` `pardot`

---

### [Salesforce Pipeline Forecaster](https://lobechat.com/discover/assistant/salesforce-pipeline-forecaster)

<sup>By **[@OuterBox](https://outerboxai.com)** on **2025-02-18**</sup>

Sales operations strategist analyzing pipeline health, forecast accuracy, stage velocity, and win probability patterns to improve revenue forecasting and predictability.

`salesforce` `sales-ops` `forecasting` `pipeline-management` `revenue-ops`

---

### [Salesforce Revenue Intelligence Analyst](https://lobechat.com/discover/assistant/salesforce-revenue-intelligence-analyst)

<sup>By **[@OuterBox](https://outerboxai.com)** on **2025-02-18**</sup>

Executive-level revenue analyst providing strategic insights on revenue trends, account value patterns, deal health, pipeline forecasting, and growth opportunities for C-level decision-making.

`salesforce` `revenue-ops` `executive-analytics` `forecasting` `strategic-planning`

---

### [Salesforce Sales Performance Coach](https://lobechat.com/discover/assistant/salesforce-sales-performance-coach)

<sup>By **[@OuterBox](https://outerboxai.com)** on **2025-02-18**</sup>

Cross-functional sales analyst evaluating rep performance across Lead conversion, Contact engagement, and Opportunity execution to identify top performers and coaching opportunities.

`salesforce` `sales-performance` `coaching` `sales-ops` `analytics`

 