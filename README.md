# Video Editor Portfolio

A premium, cinematic video editor portfolio built with React + Vite. Inspired by the [Midnight Liquid Glass](https://github.com/maruf-pfc/niloy-bhowmick) aesthetic — dark theme, glassmorphism, smooth animations, and inline YouTube video playback.

## Features

- **Midnight Liquid Glass UI** — Dark theme with frosted glass cards, neon accents, and smooth animations
- **Easy Video Updates** — Edit one JSON file to add/remove/update all your videos
- **YouTube Integration** — Click-to-play videos with thumbnails, no hosting needed
- **Category Filters** — Filter projects by Long video, Short video, or AI video
- **Fully Responsive** — Looks great on desktop, tablet, and mobile
- **Vercel Ready** — Deploy in minutes with zero config

---

## Quick Start (Local Development)

### Prerequisites

- [Node.js](https://nodejs.org/) 18 or higher
- npm (comes with Node.js)

### Steps

```bash
# 1. Navigate to the project folder
cd "D:\Jeet work\VE"

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev
```

Open **http://localhost:5173** in your browser.

---

## How to Update Videos (Easy!)

All your portfolio content lives in **one file**:

```
src/data/portfolio.json
```

### Add a New Video

Open `src/data/portfolio.json` and add an entry to the `"videos"` array.

You have **3 media options**:

#### Option 1: YouTube (easiest — no file hosting)

```json
{
  "id": "YOUR_YOUTUBE_VIDEO_ID",
  "title": "My Awesome Edit",
  "description": "A brief description of this project.",
  "youtubeId": "YOUR_YOUTUBE_VIDEO_ID",
  "category": ["Long video"],
  "duration": "5:30",
  "client": "Client Name",
  "date": "2025-08-27",
  "software": ["DaVinci Resolve", "After Effects"],
  "featured": true
}
```

**YouTube ID:** from `https://youtube.com/watch?v=dQw4w9WgXcQ` → `dQw4w9WgXcQ`

#### Option 2: Local Video Clip (MP4 / WebM — no YouTube)

1. Copy your video file into `public/media/` (e.g. `public/media/brand-promo.mp4`)
2. Add to `portfolio.json`:

```json
{
  "id": "brand-promo-01",
  "title": "Brand Promo Reel",
  "description": "Client work not published on YouTube.",
  "mediaType": "video",
  "src": "/media/brand-promo.mp4",
  "thumbnail": "/media/brand-promo-thumb.jpg",
  "category": ["Short video"],
  "duration": "0:45",
  "client": "Client Name",
  "date": "2025-08-27",
  "software": ["DaVinci Resolve"],
  "featured": true,
  "loop": false
}
```

**Tips for local videos:**
- Use **MP4 (H.264)** for best browser support
- Keep clips under **10–20 MB** for fast loading on Vercel
- Add a `thumbnail` JPG for the preview before play (optional but recommended)
- Export at 1080p max for portfolio use

#### Option 3: GIF (auto-plays on card)

1. Copy your GIF into `public/media/` (e.g. `public/media/motion-preview.gif`)
2. Add to `portfolio.json`:

```json
{
  "id": "motion-gif-01",
  "title": "Motion Graphics Snippet",
  "description": "Short animated preview of my motion work.",
  "mediaType": "gif",
  "src": "/media/motion-preview.gif",
  "category": ["Short video"],
  "duration": "0:05",
  "client": "Client Name",
  "date": "2025-08-27",
  "software": ["After Effects"],
  "featured": false
}
```

**Tips for GIFs:**
- Keep under **5 MB** (use [ezgif.com](https://ezgif.com/optimize) to compress)
- Ideal for 3–10 second motion snippets
- GIFs loop automatically on the portfolio card

### Remove a Video

Delete the video object from the `"videos"` array in `portfolio.json`.

### Update Your Profile

Edit the `"profile"` section in the same file:

```json
"profile": {
  "name": "Your Name",
  "title": "Cinematic Video Editor",
  "tagline": "Your tagline here...",
  "email": "your@email.com",
  "bio": "Your bio...",
  "social": {
    "youtube": "https://youtube.com/@yourchannel",
    "instagram": "https://instagram.com/yourhandle"
  }
}
```

### Add a New Category

Add the category name to the `"categories"` array (must be one of: `Long video`, `Short video`, `AI video`):

```json
"categories": ["All", "Long video", "Short video", "AI video"]
```

Then tag videos with that category in their `"category"` field.

---

## Deploy to Vercel (Step-by-Step)

### Step 1: Push to GitHub

```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit
git commit -m "Initial video editor portfolio"

# Create a new repo on GitHub (github.com → New Repository)
# Then connect and push:
git remote add origin https://github.com/YOUR_USERNAME/video-editor-portfolio.git
git branch -M main
git push -u origin main
```

### Step 2: Deploy on Vercel

1. Go to **[vercel.com](https://vercel.com)** and sign up / log in (use your GitHub account)
2. Click **"Add New Project"**
3. Select your **video-editor-portfolio** repository from the list
4. Vercel auto-detects Vite — keep these settings:
   - **Framework Preset:** Vite
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
5. Click **"Deploy"**
6. Wait ~1 minute — your site is live at `https://your-project.vercel.app`

### Step 3: Custom Domain (Optional)

1. In Vercel dashboard → your project → **Settings** → **Domains**
2. Add your domain (e.g., `yourname.com`)
3. Follow Vercel's DNS instructions to point your domain

### Updating After Deployment

Every time you edit `portfolio.json` (or any file) and push to GitHub:

```bash
git add .
git commit -m "Added new video project"
git push
```

Vercel automatically rebuilds and deploys your site in ~1 minute. No manual steps needed.

---

## Project Structure

```
├── public/
│   ├── favicon.svg
│   └── media/               # ⭐ DROP YOUR .mp4 / .webm / .gif FILES HERE
├── src/
│   ├── components/
│   │   ├── Navbar.jsx       # Top navigation
│   │   ├── Hero.jsx         # Landing hero section
│   │   ├── ProjectGrid.jsx  # Video grid with filters
│   │   ├── ProjectCard.jsx  # Individual video card
│   │   ├── Services.jsx     # Services section
│   │   ├── About.jsx        # About + tools section
│   │   ├── Contact.jsx      # Contact form
│   │   └── Footer.jsx       # Footer
│   ├── data/
│   │   └── portfolio.json   # ⭐ EDIT THIS to update videos
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── vercel.json
└── vite.config.js
```

## Tech Stack

- **React 18** — UI framework
- **Vite 6** — Build tool (fast dev server)
- **Tailwind CSS 3** — Styling
- **Framer Motion** — Animations
- **Lucide React** — Icons

## Build for Production

```bash
npm run build    # Creates dist/ folder
npm run preview  # Preview the production build locally
```

---

Built with React. Deployed on Vercel. Updated in seconds.
