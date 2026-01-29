---
description: How to add or edit donor cards on the TAF website
---

This workflow describes how to efficiently and precisely add or edit donor cards in the Acts 20:35 Circle.

### 1. Prepare Assets
- If adding a corporate champion, ensure you have their logo (PNG or JPG).
- Place logos in `public/images/logos/`.

### 2. Update the Donor interface (if needed)
- The `Donor` interface is located in `components/DonorWall.tsx`.
- It currently supports:
    - `id`: Unique string
    - `name`: Donor name (string)
    - `isAnonymous`: Boolean
    - `city`: Optional city (string)
    - `badgeLevel`: 'supporter' | 'family-sponsor' | 'community-builder' | 'philadelphia-champion'
    - `message`: Optional message (string)
    - `logoUrl`: Optional logo path (string, e.g., `/images/logos/filename.png`)
    - `website`: Optional website URL (string)
    - `createdAt`: ISO date string (e.g., `2024-01-20`)

### 3. Edit Donor Lists
Donors are currently hardcoded in two locations:
1. `app/page.tsx`: In the `sampleDonors` array.
2. `app/acts-2035-circle/page.tsx`: In the `donors` array.

**Precise Placement Rules:**
- Corporate Champions (`philadelphia-champion`) should be placed at the top of the array for maximum visibility.
- Ensure the `id` is unique (e.g., `corp-1`, `corp-2`).

### 4. Verification
- Run `npm run dev` to preview changes locally.
- Verify that:
    - The logo renders correctly (transparent backgrounds preferred).
    - The "Philadelphia Champion" badge is displayed.
    - If a website is provided, the card is clickable and points to the correct URL.
    - The "Visit Website" CTA appears on hover.

### 5. Finalize
- Commit changes and push to GitHub.
