# IntelleadGen Responsive Design Standards

This document outlines the mandatory criteria for ensuring all web buildouts are robustly responsive, stable, and visually premium across all aspect ratios and viewports.

## 1. Grid & Stacking Strategy
- **Conservative Stacking**: Avoid "fighting for space." Elements should stack vertically earlier (typically at the `lg` breakpoint—1024px) if they are large or complex (like Hero counters/images).
- **Breakpoint Safety**: Always test the "in-between" sizes (e.g., small tablets at 768px and large tablets at 1024px) where side-by-side grids often fail.
- **Grid Gap Hygiene**: Use aggressive gaps (`gap-24` to `gap-32`) on large screens to prevent content visually "bleeding" into adjacent columns.

## 2. Fluid Typography & Elements
- **Responsive Sizing**: Heading sizes must never be static. Use a step-down approach (e.g., `text-4xl sm:text-5xl lg:text-6xl`) to ensure text remains legible and restrained.
- **Max-Width Constraints**: Complex headers must have a `max-w-*` constraint to force early line wrapping, preventing them from colliding with floated or grid-aligned secondary elements.

## 3. Dynamic Scaling (The "Counter" Rule)
- **Transform scaling**: For complex components (counters, cards, widgets) that have a fixed internal aspect ratio, use CSS transforms (`scale-90`, `scale-95`) on medium viewports to prevent them from becoming oversized relative to the grid.
- **Internal Optimization**: Component padding, icon sizes, and label typography should scale down proportionally on smaller screens to maintain a premium, compact aesthetic.

## 4. Header & Navigation Clearance
- **Fixed Header Buffer**: Sections moving into "fullHeight" or "hero" status must have a guaranteed top-padding buffer (minimum `pt-32` or `pt-40`) to clear fixed navigation bars.
- **Vertical Alignment**: Ensure `flex items-center` doesn't push content into the navigation bar on short, wide screens.

## 5. Hydration & Stability
- **IsMounted Pattern**: Any component performing client-side calculations (Date, Math.random, window size) MUST implement a hydration check (`isMounted` state) to prevent the "Application error: a client-side exception has occurred" crash during server/client mismatch.

---
*Created on 2026-01-26 for The Acts Foundation Codebase.*
