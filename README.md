# Abhradip Dey — Developer Portfolio

A developer portfolio for **Abhradip Dey**, a 2nd-year BCA undergraduate at **Swami Vivekananda University** focusing on foundational computer science, C, Python, and Web Technologies.

Built with **React 19**, **Vite**, **TypeScript**, **Tailwind CSS**, and **Motion**.

---

## ⚡ Features

- **Geometric Balance Aesthetic**: Minimalist, high-contrast dark architecture with hairline dividers, geometric card layouts, and responsive layouts.
- **Theme Switcher**: Instant switching between **Obsidian Dark** and **Midnight Blue** themes with localStorage persistence.
- **Interactive Code Window & Sandbox**: Runnable C, Python, HTML5, and developer info tabs with simulated execution and copy support.
- **Categorized Skills Matrix**: Clear distinction between foundational core languages and technologies under active exploration.
- **Project Showcase**: Detailed project inspection modals, repository links, and custom edit guides.
- **Curriculum & Learning Roadmap**: Highlights university coursework at Swami Vivekananda University alongside active self-learning milestones.
- **Interactive CLI Modal**: Built-in developer terminal accessible with the `~` or `` ` `` keyboard shortcut.
- **Printable Resume/CV Modal**: Clean, printable resume view with a direct print button.
- **Contact Channels**: Interactive contact form with input validation and copyable email shortcut.

---

## 🚀 Tech Stack

- **Framework**: [React 19](https://react.dev/) + [Vite](https://vite.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [Motion](https://motion.dev/)
- **Icons**: [Lucide React](https://lucide.dev/)

---

## 📦 Getting Started Locally

### 1. Clone the repository
```bash
git clone https://github.com/your-username/abhradip-dey-portfolio.git
cd abhradip-dey-portfolio
```

### 2. Install dependencies
```bash
npm install
```

### 3. Start development server
```bash
npm run dev
```

The application will be live at `http://localhost:3000` (or `http://localhost:5173`).

### 4. Build for production
```bash
npm run build
```

---

## 🌐 Deploying to Vercel

### Option 1: Vercel Dashboard (Recommended)
1. Push your code to a GitHub repository.
2. Go to [vercel.com](https://vercel.com) and log in with your GitHub account.
3. Click **"Add New..."** > **"Project"**.
4. Import your GitHub repository.
5. Vercel will automatically detect **Vite** with the following preset settings:
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`
6. Click **Deploy**. Your portfolio will be live in seconds!

### Option 2: Vercel CLI
```bash
npm i -g vercel
vercel
```

---

## 📁 Project Structure

```
├── public/               # Static assets
├── src/
│   ├── components/       # UI Components (Hero, Navbar, Skills, Projects, etc.)
│   ├── data/             # Portfolio content data (portfolioData.ts)
│   ├── types.ts          # TypeScript type definitions
│   ├── App.tsx           # Main application root
│   ├── main.tsx          # React DOM entry point
│   └── index.css         # Tailwind & theme styles
├── vercel.json           # Vercel SPA routing & rewrites configuration
├── package.json          # Project dependencies & scripts
├── vite.config.ts        # Vite configuration
└── tsconfig.json         # TypeScript configuration
```

---

## 📄 License

MIT © [Abhradip Dey](https://github.com/smpcreeper1)
