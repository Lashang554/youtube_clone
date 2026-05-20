# YouTube Clone

A responsive YouTube-style video browsing app built with React, Vite, React Router, and Tailwind CSS. The project recreates the core YouTube experience with a home feed, category filters, search results, a watch page, suggested videos, Shorts, and YouTube-like icons.

## Project Features

- Responsive YouTube-inspired layout
- Home page with recommended videos
- Category filter bar
- Shorts section
- Search page with filtered video results
- Watch page with video details and suggested videos
- Sidebar navigation for desktop
- Bottom navigation for mobile screens
- Custom YouTube-style SVG icons
- Reusable video cards and shared video data

## Tech Stack

- React
- Vite
- React Router DOM
- Tailwind CSS
- JavaScript

## Folder Structure

```text
youtube-clone/
├── public/
├── src/
│   ├── assets/
│   │   └── react.svg
│   ├── components/
│   │   ├── CategoryBar.jsx
│   │   ├── Loader.jsx
│   │   ├── Navbar.jsx
│   │   ├── ShortsList.jsx
│   │   ├── Sidebar.jsx
│   │   ├── VideoCard.jsx
│   │   ├── VideoList.jsx
│   │   └── YoutubeIcons.jsx
│   ├── data/
│   │   └── videos.js
│   ├── image/
│   │   └── project images
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Seachresult.jsx
│   │   └── Vediodetails.jsx
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## Pages and Routes

```text
/              Home page with video feed, categories, and Shorts
/search?q=...  Search result page
/watch/:id     Video details page
```

## How to Run This Project

1. Clone the repository.

```bash
git clone https://github.com/Lashang554/youtube_clone.git
```

2. Go inside the project folder.

```bash
cd youtube_clone
```

3. Install dependencies.

```bash
npm install
```

4. Start the development server.

```bash
npm run dev
```

5. Open the local URL shown in the terminal.

```text
http://localhost:5173/
```

## Available Scripts

```bash
npm run dev
```

Starts the local development server.

```bash
npm run build
```

Creates a production build.

```bash
npm run lint
```

Runs ESLint to check code quality.

```bash
npm run preview
```

Previews the production build locally.

## Project Data

Video information such as title, thumbnail, channel name, views, duration, category, and description is stored in:

```text
src/data/videos.js
```

Images used in the project are stored in:

```text
src/image/
```

## Author

Created by Lashang Tamang.
