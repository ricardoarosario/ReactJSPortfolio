# Design Decisions

## 2026-11-03 — Adopt a dark tech palette

**Decision:** Use Midnight Slate (`#0F172A`) as the background, Electric Cyan (`#22D3EE`) as the primary color, Cool Gray (`#64748B`) as the secondary color, and Off-White (`#F4F4F4`) as the accent.

**Context:** Establish a consistent, futuristic dark-mode visual identity for the site and future UI work.

**Consequences:** Shared Tailwind theme tokens should express these roles. New UI should use the palette consistently and maintain accessible contrast. See [`spec.md`](./spec.md) for usage guidance.

## 2026-11-03 — Reframe the site as a developer portfolio

**Decision:** Replace the AI SaaS marketing experience with a single-page personal portfolio based on the provided resume and verified public GitHub projects. Feature the supplied portrait in the hero and use lightweight Intersection Observer scroll reveals that honor reduced-motion preferences.

**Context:** The site should present Ricardo's certifications, projects, professional and military experience, recognition, and career transition accurately.

**Consequences:** Avoid unverified claims and template content. Use CSS and browser APIs for UI motion; Remotion targets programmatic video, so it is not added as a web-animation dependency.
