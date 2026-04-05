# Working Context

Last updated: 2026-04-05

## In Progress

- (no active tasks)

## Blocked

- (nothing blocked)

## Next Up

- Check mascot proportions in UI on Kids Zone and Kids Lesson pages.
- Optionally tune speech rate/pitch per age group (younger vs older).
- Decide whether quiz completion should auto-navigate to next lesson or keep manual navigation links.

## Recent Decisions

- Mascot style switched to user-provided dual-kidney SVG aesthetic.
- Pose system kept (idle/talking/thinking/celebrating/encouraging) via class-based animation.
- Speech synthesis tuned for naturalness: ranks Natural/Neural voices first and applies punctuation-based prosody for more expressive intonation.
- Lesson 1 (younger) step 1 image URL replaced with a known working Unsplash image to avoid empty first slide.
- Kids lesson URLs now use slug (with id fallback), and quiz button now appears on final lesson step.
- Kids lesson stage now uses consistent height so Back/Next controls stay at stable vertical position across slides.
- Repository now tracks CLAUDE.md and .memory markdown/index files, while .memory/.obsidian is ignored.
