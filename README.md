# React + Vite + Tailwind CSS (CLI)

This project provides a minimal and clean setup for building React applications using Vite, with Tailwind CSS integrated via the CLI (not the Vite plugin). ESLint is included to enforce basic code quality.

## ✅ Features

- React 19
- Vite for fast development
- Tailwind CSS via CLI (with `input.css` and `output.css`)
- ESLint setup
- Framer Motion & React Scroll for animation and smooth scrolling

---

## 🛠 Project Structure

react-app/
├── src/
│ ├── App.jsx
│ ├── main.jsx
│ ├── input.css # Tailwind source file
│ ├── output.css # Generated file (ignored in Git)
├── tailwind.config.js # Tailwind configuration
├── vite.config.js # Vite configuration
├── .gitignore
├── package.json
└── README.md

---

## 📦 Getting Started

### Install dependencies

```bash
npm install
Development
Option 1: Use two terminals
bash
# Terminal 1: Watch Tailwind CSS changes
npm run dev-css

# Terminal 2: Run Vite dev server
npm run dev
Option 2: Use one terminal (recommended)
bash
npm run dev:full   # Uses concurrently to run both dev and dev-css
Make sure to install concurrently with:
npm install -D concurrently

🏗 Build for Production
bash
npm run build

🧹 Lint Your Code
bash
npm run lint

📌 Notes
src/output.css is generated and should not be edited manually.

.gitignore is configured to exclude unnecessary files (e.g. node_modules, dist, output.css).

Tailwind is compiled via CLI for full manual control — great for learning or debugging.

If you plan to scale this project, consider switching to the official Vite plugin and TypeScript.

📄 License
MIT — Free to use and modify.

