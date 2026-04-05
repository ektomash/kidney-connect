# Project Instructions

## CRITICAL RULE: Persistent Memory — `.memory/` Protocol

**`.memory/` is the project's persistent cross-session knowledge base.**

### Session Start (MANDATORY)

**First action in every session:** Read `.memory/working-context.md`.

If the current task touches a specific domain — also read the relevant file from `.memory/domains/`.

### During Session (write incrementally)

| Event | Action |
|-------|--------|
| Completed a task | Update `.memory/working-context.md` — rewrite "In Progress" and "Next Up" |
| Made an architectural decision | Create `.memory/decisions/DEC-NNN.md` + add row to `INDEX.md` |
| Found a non-obvious bug | Create `.memory/bugs/BUG-NNN.md` + add row to `INDEX.md` |
| Learned domain knowledge worth preserving | Update or create `.memory/domains/*.md` |

### Session End

Add one row to `.memory/recent-sessions.md` with date, topic, and result.

### File Rules

| File | Strategy | Max Size |
|------|----------|----------|
| `working-context.md` | **Full rewrite** on every update (not append) | 30 lines |
| `recent-sessions.md` | **Rolling window** — add new row, drop oldest if >15 rows | 15 rows |
| `decisions/DEC-NNN.md` | One file per decision, immutable after creation | 40 lines |
| `bugs/BUG-NNN.md` | One file per bug, update status field when fixed | 30 lines |
| `domains/*.md` | Reference docs, update when knowledge changes | 100 lines |

### Never

- Append to `working-context.md` — always rewrite it entirely
- Let `working-context.md` grow beyond 30 lines — move detail to domain files
- Create decisions/bugs without adding to their INDEX.md
- Store secrets, API keys, or credentials in `.memory/`
