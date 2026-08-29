# Perler Palette

Please design a modern, clean, and warm mobile web application called "Perler Master" (拼豆大师). It is an app for perler bead (pixel art) enthusiasts to convert photos into bead patterns, manage their bead inventory, and share their artworks in a community.

**Visual Style & Design System:**

- **Background**: Soft warm white/off-white (e.g., #F6F5F2) to feel friendly and craft-oriented.

- **Primary Color**: Coral/Vibrant Orange (e.g., #F4573B) for main buttons and active states.

- **Secondary Colors**: Soft pastels (amber, blue, green, rose) for icon backgrounds and tags.

- **Components**: High border-radius (e.g., 20px-24px for cards), very soft and large drop shadows (like 0 4px 20px rgba(0,0,0,0.05)), and clean sans-serif typography. No harsh black lines; use light gray/beige borders if needed.

**Core Pages Required (Mobile Layout):**

1. **Community (首页 - 社区)**:

   - A sticky top header with a compact search bar.

   - A horizontal scrollable row of category pills (All, Animals, Anime, Food, etc.). The active pill should have a dark/contrasting background.

   - A masonry-style (or 2-column) grid of artwork cards. Each card contains a lovely pixel art image, a title, the creator's mini avatar + name, and a small heart icon with the like count.

2. **Tools (工具箱)**:

   - A clean layout showcasing the main utilities.

   - A primary prominent card for "Convert Photo to Pattern (照片转图纸)", featuring an AI sparkle icon or magic wand.

   - Smaller tool cards or a grid for: "My Inventory (豆仓)", "Missing Colors Calculator (缺色计算)", "Pattern Library (图纸库)".

   - Use colorful, soft background blobs or icons for these tool cards to make them pop.

3. **Profile (我的)**:

   - A beautiful top profile section with a coral gradient background, showing the user's avatar, name, and a "Settings" gear.

   - A floating statistics card overlapping the header slightly, showing 4 columns: Works (作品), Likes (获赞), Bookmarks (收藏), Shares (分享).

   - A clean vertical list menu for features like "Material List", "History", "Favorites".

   - A "Recent Works" section at the bottom showing a 2-column grid of their past bead patterns.

4. **Convert/Editor Workspace (转换页)**:

   - A workspace to upload a photo.

   - A preview area showing a grid-based pixelated bead pattern (with axis lines and numbers like a real bead pegboard).

   - A sticky bottom sheet or panel showing the exact color palette (list of required bead colors and exact quantities).

   - Advanced UI toggles for: "AI Enhancement", "Remove Background", "Dithering".

Please build this with standard modern UI frameworks (like Tailwind), ensuring it looks premium, native-app-like, and heavily focuses on the mobile user experience.

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://bead-boss-studio.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/801405f6-6e1a-4ce2-abe0-98234d1d81cd).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
