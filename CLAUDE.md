# Claude Code Reference - OBxChat Agents

This document provides essential information for Claude Code when working with the OBxChat Agents repository.

## Project Overview

**OBxChat Agents** is a collection of specialized AI agents for digital marketing workflows, built on the Lobe Chat agents index framework. These agents are designed and maintained by OuterBox for internal use and client services.

## Technology Stack

- **Runtime**: Bun (v1.2.23+)
- **Language**: TypeScript
- **Package Manager**: npm/bun
- **Framework**: Lobe Chat Agents Index

## Critical Commands

### 1. Build Command
**Purpose**: Compiles all agent JSON definitions and generates localized versions across 18 languages.

```bash
bun run build
# or directly:
bun scripts/build.ts
```

**What it does**:
- Collects all agent definitions from `src/` directory
- Validates JSON schema
- Generates locale-specific versions (ar, bg-BG, zh-TW, en-US, ru-RU, ja-JP, zh-CN, ko-KR, fr-FR, tr-TR, es-ES, pt-BR, de-DE, it-IT, nl-NL, pl-PL, vi-VN, fa-IR)
- Outputs compiled agents to `public/` directory

**Expected Output**:
```
✔ build success
ℹ collected 74 agents (for each locale)
✔ build [locale]
```

### 2. Format Command
**Purpose**: Validates and formats all JSON agent configuration files for consistency.

```bash
bun run format
# or directly:
bun scripts/format.ts
```

**What it does**:
- Reads all JSON files in `src/` directory
- Validates against agent schema
- Formats with consistent spacing and structure
- Writes formatted versions back to source files

**Expected Output**:
```
✔ format success
```

**Important**: Requires `OPENAI_API_KEY` environment variable for some formatting operations.

### 3. Awesome Command
**Purpose**: Runs build and updates the agent showcase/listing.

```bash
bun run awesome
# or directly:
bun scripts/build.ts && bun scripts/updateAwesome.ts
```

**What it does**:
- Executes full build process
- Updates README with agent listings
- Generates agent showcase documentation

## Environment Variables

```bash
OPENAI_API_KEY=sk-xxxxxx...xxxxxx  # Required for format script
OPENAI_PROXY_URL=-                  # Optional proxy configuration
```

## File Structure Reference

```
obx-chat-agents/
├── src/                              # Source agent definitions (JSON)
│   ├── seo-performance-report.json
│   ├── obxchat-manus-assistant.json
│   └── [74 total agent files]
├── locales/                          # Translated metadata per agent
│   └── [agent-name]/
│       ├── index.ar.json
│       ├── index.zh-CN.json
│       └── [18 locale files]
├── public/                           # Built/compiled output
│   ├── index.json                    # Main agent index
│   └── agents.{locale}.json          # Locale-specific indexes
├── scripts/                          # Build tooling
│   ├── build.ts                      # Main build script
│   ├── format.ts                     # JSON formatter
│   └── updateAwesome.ts              # README updater
├── .i18nrc.js                        # i18n configuration
├── package.json                      # Project manifest
└── README.md                         # Project documentation
```

## Common Workflows

### Adding a New Agent
1. Create new JSON file in `src/` based on `agent-template.json`
2. Run `bun run format` to validate structure
3. Run `bun run build` to compile with locales
4. Commit changes including generated locale files

### Modifying an Existing Agent
1. Edit JSON file in `src/` directory
2. Run `bun run format` to validate changes
3. Run `bun run build` to recompile
4. Review and commit changes

### Full Rebuild Process
```bash
bun run format    # Validate and format all agents
bun run awesome   # Build and update documentation
```

## Agent Schema Structure

Each agent JSON file contains:
- `author`: "OuterBox"
- `config.systemRole`: The agent's system prompt
- `createdAt`: Creation date (YYYY-MM-DD)
- `homepage`: OuterBox website URL
- `identifier`: Unique agent ID (kebab-case)
- `meta`: Agent metadata
  - `avatar`: Emoji representation
  - `description`: Brief agent description
  - `tags`: Array of category tags
  - `title`: Agent display name

## Troubleshooting

### Bun Not Found
If Bun is not installed:
```bash
# Windows (PowerShell)
powershell -c "irm bun.sh/install.ps1|iex"

# macOS/Linux
curl -fsSL https://bun.sh/install | bash
```

### Dependencies Missing
```bash
npm install
```

### Build Failures
- Check JSON syntax in `src/` files
- Ensure `.i18nrc.js` is properly configured
- Verify all required dependencies are installed

## Notes for Claude Code

- Always run `bun run format` before committing agent changes
- The build process generates ~74 agents across 18 locales (1,332 total files)
- Agent modifications in `src/` require rebuild to update `public/` output
- Locale files in `locales/` are auto-generated, don't edit manually
- The project uses Bun for better TypeScript performance, but npm fallback is available
