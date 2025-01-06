### **Color Palette:**

**Primary Palette:**

- **Primary Color (Accent):**
  - Light Mode: Soft Blue (#3B82F6)
  - Dark Mode: Bright Cyan (#38BDF8)
- **Secondary Color (Complementary):**
  - Light Mode: Warm Amber (#F59E0B)
  - Dark Mode: Rich Orange (#F97316)

**Neutral Palette:**

- **Background:**
  - Light Mode: White (#FFFFFF)
  - Dark Mode: Near Black (#121212 or #1A1A1A)
- **Card/Container Backgrounds:**
  - Light Mode: Very Light Gray (#F3F4F6)
  - Dark Mode: Dark Gray (#252525 or #2E2E2E)
- **Text:**
  - Light Mode: Charcoal Gray (#1F2937)
  - Dark Mode: Light Gray (#D1D5DB)

**Utility Colors:**

- **Success:**
  - Light Mode: Green (#10B981)
  - Dark Mode: Emerald (#22C55E)
- **Warning:**
  - Light Mode: Yellow (#EAB308)
  - Dark Mode: Goldenrod (#FACC15)
- **Error:**
  - Light Mode: Red (#EF4444)
  - Dark Mode: Rose Red (#F87171)

---

### **Typography:**

- **Font Family:**

  - **Primary**: `Inter` for body and headings (Modern sans-serif font with clean lines).
  - **Secondary**: `Roboto` or `Poppins` for alternative text (if necessary, or for secondary info).

- **Text Styling**:

  - **Title**: Bold, using Primary color (Soft Blue or Bright Cyan) in Light Mode and Rich Orange in Dark Mode.
  - **Tagline**: Regular, secondary color (Amber in Light Mode, Orange in Dark Mode).
  - **Body text**: Charcoal Gray for Light Mode, Light Gray for Dark Mode.
  - **Text Alignments**:
    - Title: Left-aligned (for a more natural feel).
    - Tagline: Left-aligned (in alignment with title).
    - Body Text: Left-aligned, but responsive (if needed).

- **Font Size**:
  - **Main Title**: Large (3-5rem depending on screen size).
  - **Tagline**: Medium (1.5-2rem).
  - **Body Text**: Regular (1rem).

---

### **Visual Wireframe Summary:**

**1. Home Page:**

- **Hero Section**:

  - Background image (seats with spotlight or cinematic-style images).
  - Title and tagline in left-aligned, centered.
  - Search bar centered horizontally, with input field and a button.
  - **Hero Shrinking Behavior**: As the user types, the hero shrinks, but the background remains visible. When the input is cleared and no typing occurs for a few seconds, the hero will reappear.

- **Section Below Hero**:

  - Title: "Trending Movies" or other content titles (left-aligned).
  - Infinite scroll grid displaying movie cards.

- **Footer**:
  - Appears on all pages, likely with a simple copyright message.

**2. Card Interaction:**

- **Modal Behavior**: When a user clicks on a movie card, a modal will pop up showing details of the movie. The modal should have actions for viewing more details or liking the movie.
- **Dedicated Page**: When the user clicks "view more details", they’ll be directed to a dedicated page with full details of the movie. This page will have a breadcrumb ("Home > Movie Title") for easy navigation.
- **No Navbar**: No navigation bar is used, instead, breadcrumb navigation is employed.

**3. Dark Mode:**

- Dark theme toggle positioned at the **absolute bottom-right** of the page.

---

### **Home Page Layout:**

```
---------------------------------------------------
|                   Hero Section                  |
| (Background Image - Seats with spotlight)       |
|                                                 |
|     Title: "SceneIt"                            |
|     Tagline: "Explore Your Favorite Movies"      |
|                                                 |
|     [Search Bar]                                |
|     (Centered, Input Field + Button)            |
---------------------------------------------------

---------------------------------------------------
|               Trending Movies Title             |
|          (Left-aligned with light padding)      |
---------------------------------------------------

---------------------------------------------------
|                Movie Grid (Infinite Scroll)     |
|   [Card] [Card] [Card] [Card] [Card] [Card]     |
|   [Card] [Card] [Card] [Card] [Card] [Card]     |
|   [Card] [Card] [Card] [Card] [Card] [Card]     |
|     (Grid with responsive cards, infinite scroll)|
---------------------------------------------------

---------------------------------------------------
|                    Footer                      |
|         (Simple Copyright or Footer Content)    |
---------------------------------------------------
```

### **Dedicated Movie Page Layout:**

```
---------------------------------------------------
|               Breadcrumb (Top of the Page)      |
|            Home > Movie Title                   |
---------------------------------------------------

---------------------------------------------------
|               Movie Details (Full Page)         |
|   Movie Title, Description, Genre, Year, etc.   |
|   Button to go back to the grid or home         |
---------------------------------------------------

---------------------------------------------------
|                    Footer                      |
|         (Simple Copyright or Footer Content)    |
---------------------------------------------------
```

---

### **Key Layout Details:**

1. **Hero Section**:

   - Full-screen height or around 50-60vh with background image.
   - Title, tagline, and search box centered both horizontally and vertically.
   - Search box width around 40-60% of the screen, centered.

2. **Trending Movies Section**:

   - Title ("Trending Movies") left-aligned and padded.
   - Movie grid with infinite scroll displaying cards.

3. **Modal (When Clicking on Card)**:

   - A modal will pop up showing movie details like title, poster, description, and additional info.
   - Action buttons such as "Like", "Show More", or "View More Details".

4. **Dedicated Movie Page**:

   - Shows detailed movie information.
   - Breadcrumb at the top ("Home > Movie Title").
   - Footer present across all pages.

5. **Dark Mode Toggle**:
   - Positioned at the **bottom-right** of the page (absolute position).

---
