# Project Handoff

## 1. Project identity
- Project name: Jomar Auditor cloud portfolio
- Purpose: Static portfolio site for a school activity ("Your own portfolio") and job applications for cloud support roles
- Current stage: Version 2 (redesign) written, not yet opened in a browser by the assistant
- Last updated: 2026-11-23

## 2. Goal and definition of done
- Main goal: Beautiful, distinctive portfolio using Bootstrap, showing achievements, subjects, skills and career objective
- Required outcomes: file structure plus code for each file; runs in VS Code (Live Server)
- Out of scope: backend, hosting setup

## 3. Current status
- V1 (orange/AWS look) was rendered and tested. V2 redesign followed skills: frontend-design, mobile-native, animate, emil-design-eng, beginner-student-mode
- V2 was syntax-checked (node --check on JS) but NOT rendered or screenshotted. Unverified: visual layout, Bootstrap scrollspy, Credly embeds, Google Fonts

## 4. Environment and technology
- Editor: VS Code (Live Server recommended)
- Bootstrap 5.3.3 and Bootstrap Icons 1.11.3 via CDN, Google Fonts (Bricolage Grotesque, Newsreader), plain JavaScript

## 5. Repository and important files
| Path | Purpose | Status / notes |
|---|---|---|
| index.html | All sections | Written |
| css/style.css | Tokens (Philippine flag palette), layout, dark mode | Written |
| js/script.js | Skills tabs, certificate list and filter, theme toggle, contact form | Written, syntax OK |
| images/profile.jpg | User's photo | USER MUST ADD (initials show if missing) |
| files/Jomar_Auditor_Resume.pdf | Resume download | USER MUST ADD |

## 6. Completed work
- [x] V1 portfolio built and rendered
- [x] V2 redesign written (palette, type, layout, one hero entrance animation, mobile fixes, reduced motion)

## 8. Decisions and rationale
| Decision | Reason | Status |
|---|---|---|
| Palette from Philippine flag (navy, sun yellow, small red) | Specific to the user, avoids common cream/terracotta and dark/neon looks | Final |
| Bricolage Grotesque + Newsreader | Clearly different families for headings and reading text | Final |
| No scroll fade-ins, one hero entrance only | frontend-design and animate skills | Final |
| Phone number left off the public page | Privacy | Final |
| HubSpot Email Marketing cert left off | Not cloud related (can add) | Open |

## 11. Tests and verification
- Passed: node --check js/script.js
- Not yet run: browser render of V2, mobile view, dark mode, Credly embeds

## 12. Blockers, risks, and unknowns
- Lumi description is a placeholder; HOPE Inc. CMS and NEU Library Visitor Log descriptions are short guesses from repo names/LinkedIn
- Bootstrap version used in the user's class is unknown (5.3.3 assumed)
- FlyRank internship has no dates

## 13. Next actions
1. **Next best action:** user opens index.html with Live Server and reports anything that looks wrong
2. Add profile.jpg and resume PDF
3. Write real Lumi description
4. Deploy (Netlify Drop or GitHub Pages)

## 14. Files and assets needed to resume
- Upload this HANDOFF.md and the jomar-portfolio folder (or zip)
- Secrets: none included; phone number intentionally excluded

## 16. Ready-to-paste resume prompt
"Read HANDOFF.md and the uploaded jomar-portfolio files. Summarize the state in a few lines, check the files match the handoff, then continue from the next best action. Keep code beginner-friendly (plain HTML, Bootstrap 5, simple JavaScript)."
