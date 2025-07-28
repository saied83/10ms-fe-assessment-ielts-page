# Frontend Engineer (Level 1) Assessment

This is my submission for the Frontend Engineer (Level 1) assessment, where I built a product page similar to the [IELTS Course by Munzereen Shahid](https://10minuteschool.com/product/ielts-course/) page using React, Next.js, and TailwindCSS.

---

## About This Project

I designed and developed this product page by fetching course data from a public API provided by 10 Minute School. The page supports English and Bangla languages, uses server-side rendering (SSR) for SEO, and includes all the required sections based on the API data.

---

## Features I Implemented

- Dynamic **product title** and **description** (rendered as HTML).
- Display of **course instructors** from API sections.
- Embedded **YouTube trailer** using media data.
- Default price set to 1000 (as price data was not provided).
- Dynamic **call-to-action (CTA)** text from the API.

- Server-Side Rendering (SSR) and Incremental Static Regeneration (ISR) with Next.js.
- Sections like **features**, **what you will learn**, **exclusive features**, and **course details** from the API.
- Checklist rendered based on the checklist array.
- SEO tags and Open Graph metadata using the API’s SEO data (requires special header).

---

## Tech Stack

- React + Next.js for SSR and routing
- TypeScript for type safety
- TailwindCSS for styling and responsiveness
- Modular, reusable React components organized by feature
- Fetching data securely with proper headers for SEO
- Incremental Static Regeneration (ISR) for up-to-date static content

---

## Project Structure Overview

```
├── [locale]
│   └── product
│       └── [slug]
│           ├── _components       # Components for each section (About, CTA, Trailer, etc.)
│           ├── _libs             # API calls and TypeScript types
│           └── page.tsx          # Main product page
├── assets
│   └── icons                   # SVG icon components
├── components
│   └── Navbar                  # Navigation and language switcher
├── globals.css                # Global Tailwind styles
├── layout.tsx                 # Root layout
└── page.tsx                   # Entry point
```

---

## How to Run This Project Locally

1. Clone the repository and install dependencies:

```bash
npm install
# or
yarn install
```

2. Run the development server:

```bash
npm run dev
# or
yarn dev
```

3. Open your browser to [http://localhost:3000/en/product/ielts-course](http://localhost:3000/en/product/ielts-course) for English version, or `/bn/product/ielts-course` for Bangla.

---

## Build & Deployment

- This project supports SSR and ISR for performance and SEO.
- SEO meta tags are dynamically generated using API data.
- I have included a Dockerfile for containerized deployment (optional to use).

---

## What I Focused On

- Clean and maintainable React components with reusable pieces.
- Proper use of TypeScript to type API data and props.
- Server-side rendering and localization support.
- Responsive and accessible UI using TailwindCSS.
- Efficient data fetching with correct headers for SEO.
- Code splitting and performance optimization.

---

## Submission Details

- Built with React, Next.js, TypeScript, and TailwindCSS.
- Dockerfile included for easier deployment.
- Deadline: 28th July, 11:59 PM.

---

## Contact

Feel free to reach out if you have any questions or feedback!

**Md Saiedur Rahman Saied (/saied83)**

---

Thank you for reviewing my project!
