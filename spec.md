# Visual Design Specification

## Direction

Create a personal portfolio for a certified HTML/CSS and JavaScript developer. Use a dark, tech-forward visual language with restrained futuristic details: precise typography, thin technical rules, subtle grids, and deliberate cyan accents. Keep the resume and verified projects at the center of the content.

## Color palette

| Role       | Color          | Hex       |
| ---------- | -------------- | --------- |
| Background | Midnight Slate | `#0F172A` |
| Primary    | Electric Cyan  | `#22D3EE` |
| Secondary  | Cool Gray      | `#64748B` |
| Accent     | Off-White      | `#F4F4F4` |

Use these colors consistently across pages, components, states, and new features. Additional shades may be used only when needed for hierarchy, transparency, or accessible contrast, and should remain within the same slate/cyan/gray/off-white family.

## Usage

- Use Midnight Slate for the page background and dark surfaces.
- Use Electric Cyan for primary actions, links, focus indicators, and selected states.
- Use Cool Gray for secondary text, muted borders, and supporting UI.
- Use Off-White for primary text, icons, and high-contrast content.
- Preserve readable contrast for text and interactive controls. Do not rely on color alone to communicate status.
- Avoid introducing unrelated purple, pink, or other accent colors.
- Feature the supplied portrait at the beginning of the portfolio.
- Use scroll-triggered reveals for headings, copy, and cards. Prefer opacity and small vertical movement, with short staggered timing.
- Respect `prefers-reduced-motion`; content must remain visible and usable without animation.
- Use resume details and verified GitHub repositories only. Do not fabricate project details or career achievements.

## Implementation

The shared Tailwind theme tokens and custom styles in `src/styles/tailwind.css` are the source of truth. Prefer those tokens and shared utilities over one-off color literals. Use the existing portrait in `src/assets/Professional Corporate Picture.png`.
