# CV Project — CLAUDE.md

## Overview
Personal CV management project using **CareerOS** (agent-native CV builder) with a static web portfolio deployed on Netlify.

## Project Structure
```
/Volumes/Data/CV/
├── careeros/           # CareerOS (cloned repo) — CV engine
│   ├── data/           # User data (git-ignored, private)
│   │   ├── profile.yml       # Master profile config
│   │   ├── cv.master.md      # Source-of-truth CV content
│   │   ├── _profile.md       # Prose overrides
│   │   └── output/           # Generated CVs/CLs per job
│   ├── modes/          # Agent playbooks
│   ├── scripts/        # Tooling (Node.js)
│   └── templates/      # LaTeX templates
├── web/                # Static web CV (for Netlify)
├── VuManhKhieu.docx    # Legacy CV (reference only)
├── VuManhKhieu.pdf     # Legacy CV (reference only)
├── CLAUDE.md           # This file
├── package.json        # Root project config
├── netlify.toml        # Netlify deployment config
└── .gitignore
```

## CareerOS Commands
All commands run from `/Volumes/Data/CV/careeros/`:
- `/cos board` — View match board (ranked jobs)
- `/cos build-cv <job>` — Generate tailored CV for a specific job
- `/cos build-cl <job>` — Generate cover letter
- `/cos cv-lint` — Check CV for weak bullets
- `/cos gaps` — Identify skill gaps
- `/cos evaluate <job-url>` — Score a job posting

## Career Context
- **Current**: Senior Software Engineer at FPT Software (Print Core Team / KMI platform)
- **Direction**: Senior SE (C/C++, Linux, App) → Solution Architecture
- **Key strengths**: Systems programming, Linux, C/C++, cross-cultural collaboration (Japanese teams)
- **Not**: Embedded-only — focus is application-level systems software

## Web CV
- Static HTML/CSS page deployed on Netlify
- English only
- Domain: `*.netlify.app`
- Content sourced from `careeros/data/cv.master.md`

## Workflow
1. Update CV content → edit `careeros/data/cv.master.md`
2. Tailor for specific job → `/cos build-cv <job>`
3. Update web version → regenerate from master CV
4. Deploy → push to GitHub, Netlify auto-deploys

## Dependencies
- Node.js 20+
- tectonic (LaTeX compiler): `brew install tectonic`
- poppler (PDF tools): `brew install poppler`
