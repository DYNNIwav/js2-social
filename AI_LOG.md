# AI Usage Log

Log of AI use for this assignment. I used AI for things the brief allows: brainstorming, explanations of concepts, and debugging help.

## Entries

**Tool used:** Claude (Anthropic)
**Date:** 16 April 2026
**Purpose:** Brainstorming project structure for a multi-page vanilla TS social media app.
**Outcome:** Confirmed the per-page HTML + per-page script + shared helpers layout would work here. Wrote the folder structure myself afterwards.

---

**Tool used:** Claude (Anthropic)
**Date:** 16 April 2026
**Purpose:** Help setting up Vite with TypeScript (`vite.config.ts`, `tsconfig.json`), since I had not configured Vite manually before.
**Outcome:** Got the multi-page Vite config working. Understand each field in the config files.

---

**Tool used:** Claude (Anthropic)
**Date:** 19 April 2026
**Purpose:** Explanation of OOP concepts from module 4 (classes, `this`, inheritance, getters/setters, static methods, private fields).
**Outcome:** Improved understanding of the module 4 material. Wrote my own practice classes afterwards.

---

**Tool used:** Claude (Anthropic)
**Date:** 22 April 2026
**Purpose:** Asked for an explanation of why TypeScript marks `getElementById` results as possibly null, and what to do about it.
**Outcome:** Started using `if (!element) throw new Error(...)` at the top of the file so the compiler knew the element existed. Code written independently.

---

**Tool used:** Claude (Anthropic)
**Date:** 24 April 2026
**Purpose:** Explanation of `JSON.stringify` and the shape an HTTP request body needs to be in for the Noroff API.
**Outcome:** Improved understanding. Code written independently.

---

**Tool used:** Claude (Anthropic)
**Date:** 26 April 2026
**Purpose:** Debugging help with a bug where my links kept adding extra path segments and ending up like `/post/post/profile/`.
**Outcome:** Understood that relative paths are calculated from the current page, so each click added another folder. Fixed it by switching all my links to absolute paths.

---

**Tool used:** Claude (Anthropic)
**Date:** 28 April 2026
**Purpose:** Debugging help with a bug where my profile page was missing post cards I had added with `appendChild` after I set `innerHTML` lower down.
**Outcome:** Understood that `innerHTML =` replaces everything inside the element. Fixed it by building one HTML string and setting it once.
