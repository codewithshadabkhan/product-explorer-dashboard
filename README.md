# 🛍️ Product Explorer Dashboard
🔗 **Live Demo:** [https://product-explorer.vercel.app  ](https://product-explorer-dashboard-02.vercel.app/)
A modern **Product Explorer Dashboard** built with **Next.js (App Router)**, **TypeScript**, and **Tailwind CSS v4**.  
This project demonstrates real-world frontend architecture, clean UI patterns, and production-ready features.

---

## 💻 Getting Started

Follow these instructions to get the project up and running on your local machine.

### 1. Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/) (Version 18.17.0 or higher)
- npm

### 2. Clone the Repository

```
git clone <YOUR_REPOSITORY_URL_HERE>
cd product-explorer-dashboard
```

### 3. Install Dependencies

Install the project dependencies using your preferred package manager:

### using npm

```
npm install
```

### 4. Run the Development Server

Start the local development server:

```
npm run dev
```

Open http://localhost:3000 with your browser to see the result.

🏗️ Building for Production
To create an optimized production build:

### Create the build

```
npm run build
```

### Start the production server

```
npm start
```

## 🚀 Features

### 📦 Product Listing

- Fetches products from **Fake Store API**
- Responsive product grid
- Optimized images using `next/image`
- Smooth loading with skeleton UI
- Proper error handling

---

### 🔍 Search & Filters

- Search products by title
- Filter by category
- **Favorites filter** to view liked products only
- Filters work together seamlessly

---

### ❤️ Favorites

- Mark/unmark products as favorites
- Favorites stored in **localStorage**
- Persistent across page reloads
- Dedicated favorites filter

---

### ♾️ Infinite Scrolling

- Loads more products as the user scrolls
- Implemented using **Intersection Observer**
- Resets correctly when filters change
- No external libraries used

---

### 🌐 Network Awareness

- Detects online/offline status
- Stops fetching when offline
- Automatically refetches data when back online
- Toast-based network status feedback

---

### 🌓 Dark Mode (Tailwind CSS v4)

- Light / Dark theme toggle
- Persistent theme using `localStorage`
- Respects system theme on first load
- Implemented using Tailwind v4 `@custom-variant dark`

---

### 🖼️ Smooth Image Loading

- Skeleton placeholders
- Fade-in image transitions
- Layout-stable product images

---

### ⭐ Ratings UI

- Star ratings using **Lucide Icons**
- Supports half stars
- Optional rating count display

---

### 🚫 Empty & Error States

- Custom “No Products Found” UI
- Graceful 404 handling using `not-found.tsx`
- Page-level loading skeletons

---

## 🧱 Tech Stack

- **Framework:** Next.js (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Icons:** Lucide React
- **State Management:** React Hooks + localStorage
- **API:** https://fakestoreapi.com

---

## 📁 Project Structure

```txt
app/
 ├─ layout.tsx
 ├─ globals.css
 ├─ not-found.tsx
 ├─ products/
 │   └─ [id]/
 │       ├─ page.tsx
 │       └─ loading.tsx
components/
 ├─ product/
 ├─ filters/
 ├─ ui/
hooks/
 ├─ useNetworkStatus.ts
lib/
 ├─ api/
 ├─ storage/
types/
```
