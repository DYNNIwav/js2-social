# AI Usage Log

This log documents AI use for this assignment in line with the course AI policy. AI was used for the permitted purposes listed in the brief: brainstorming, explaining concepts, and debugging help.

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
**Purpose:** Explanation of TypeScript narrowing for `getElementById`, in particular why the return type is `HTMLElement | null` and how to satisfy the compiler.
**Outcome:** Settled on an `if (!element) throw` guard pattern. Code written independently.

---

**Tool used:** Claude (Anthropic)
**Date:** 24 April 2026
**Purpose:** Explanation of `JSON.stringify` and the shape an HTTP request body needs to be in for the Noroff API.
**Outcome:** Improved understanding. Code written independently.

---

**Tool used:** Claude (Anthropic)
**Date:** 26 April 2026
**Purpose:** Debugging help describing a bug where relative paths compounded across pages (URLs like `/post/post/profile/`).
**Outcome:** Understood the root cause (relative paths resolve from the current location). Fixed the code myself by switching to absolute paths.

---

**Tool used:** Claude (Anthropic)
**Date:** 28 April 2026
**Purpose:** Debugging help describing a bug where setting `innerHTML` was overwriting elements I had previously added with `appendChild`.
**Outcome:** Understood the root cause and rewrote the function to build one HTML string and apply it once. Fixed the code myself.

---

**Tool used:** Claude (Anthropic)
**Date:** 29 April 2026
**Purpose:** Pre-submission review. Ran `tsc --noEmit` and asked for help understanding the resulting "possibly null" errors in `feed.ts` and `post.ts` (the throw-guard pattern at the top of the file did not narrow the type inside async functions).
**Outcome:** Understood that TypeScript does not always carry narrowing into nested function scopes, even for `const` variables. Fixed the errors myself by using the `!` non-null assertion inside the functions, matching the pattern I already had in `profile.ts`.
