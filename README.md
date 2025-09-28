# 🎮 Arcadia

A modern **video game discovery application** that helps you explore and find games with powerful search, filtering, and sorting features — all wrapped in a sleek, mobile-friendly interface.

![Arcadia Home Page](https://github.com/gpslakshan/Arcadia/blob/main/public/arcadia-home.png?raw=true)

![Game Details Page](https://github.com/gpslakshan/Arcadia/blob/main/public/arcadia-game-details.png?raw=true)

---

## ✨ Features

- 🔎 **Game Search** – Find games instantly using the RAWG Video Games Database API
- 🏷️ **Filtering** – Filter games by genre, platform, and more
- 📊 **Sorting** – Sort by relevance, release date, rating, etc.
- ♾️ **Infinite Scrolling** – Smooth, endless game browsing
- 🎥 **Game Details** – Watch trailers and view screenshots
- ⌛ **Debounced Search** – Optimized search with reduced unnecessary API calls
- 🗂️ **Caching** – Faster navigation with cached data using TanStack Query
- 🌗 **Light & Dark Mode** – Seamlessly switch between themes
- 📱 **Fully Responsive** – Works seamlessly across devices

---

## 🛠️ Tech Stack

- [React](https://react.dev/) + [Vite](https://vitejs.dev/) + [Typescript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/) + [shadcn/ui](https://ui.shadcn.com/)
- [Zustand](https://zustand-demo.pmnd.rs/) for state management
- [TanStack Query](https://tanstack.com/query/latest) for data fetching & caching
- [React Router](https://reactrouter.com/) for routing
- [RAWG Video Games Database API](https://rawg.io/apidocs) (v1.0)

---

## 🚀 Getting Started

Follow these steps to run Arcadia locally:

```bash
# Clone the repository
git clone https://github.com/your-username/arcadia.git

# Navigate into the project
cd arcadia

# Install dependencies
npm install

# Start the development server
npm run dev
```

### 🔑 API Key Setup

Arcadia requires a RAWG API key.

Get your API key from RAWG.io
.

Create a .env file in the root of the project.

Add the following line to your .env file:

```bash
VITE_RAWG_API_KEY=your_api_key_here
```

Then start the development server:

```bash
npm run dev
```

The app should now be running at http://localhost:5173
