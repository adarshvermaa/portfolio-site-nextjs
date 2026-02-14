# Portfolio Website - Adarsh Verma

A high-performance, physics-driven portfolio website architected with **Next.js 16**, **TypeScript**, and **GSAP**. This project features a unique "Deep Science" aesthetic, visualizing complex mathematical concepts directly in the UI.

## 🚀 Mathematical Visualizations

The core identity of this portfolio is built on real-time physics simulations and mathematical visualizations.

### 1. Hero Section: The "Joint Breaker"
A unified, multi-layered visualization that spans the entire viewport.
*   **Foreground**: **Taylor Series Polynomials** ($f(x) = \sum [ f^{(n)}(a) / n! ] (x-a)^n$) moving in a flow field.
*   **Background**: **Lagrangian Mechanics** ($d/dt(\partial L/\partial \dot{q}) - \partial L/\partial q = 0$) simulating a high-depth flow.
*   **Base Layer**: **Bollinger Path Finder** (see below).

### 2. Global Background: Bollinger Path Finder
Used in the Hero, Skills, Projects, and Footer sections to create a seamless continuum.
*   **Concept**: Visualizes system volatility and trend searching.
*   **Formula**: **Determinant / Volume Scaling** ($det(A) = ad - bc$).
*   **Simulation**: Particles follow a vector field where their **path width** expands or contracts based on the local determinant of the transformation matrix.
    *   **Gold/Wide Trails**: Expansion ($det > 1$), representing high volatility/energy.
    *   **Cyan/Narrow Trails**: Contraction ($det < 1$), representing stability/focus.
    *   **Direction**: Led by arrow heads acting as "Path Finders".

### 3. Smooth Scrolling: Pythagorean Easing
Custom inertial scrolling powered by **Lenis**.
*   **Formula**: **Pythagorean Theorem** ($a^2 + b^2 = c^2$).
*   **Implementation**: A custom easing curve designed to mimic geometric progression, ensuring scroll momentum feels mathematically precise.
*   **Visual**: A fixed overlay in the bottom-left corner visually confirms the scrolling geometry.

## 🛠️ Tech Stack

*   **Framework**: Next.js 16 (App Router, Turbopack)
*   **Language**: TypeScript
*   **Styling**: Tailwind CSS v4 (Strict B&W Theme, Dark Mode)
*   **Animations**:
    *   GSAP (ScrollTrigger, Timelines)
    *   HTML5 Canvas (High-performance particle systems)
    *   Lenis (Inertial Scrolling)
*   **Forms**: React Hook Form + Zod
*   **Email**: Nodemailer (Custom HTML5 Templates)
*   **Tools**:
    *   `DevToolsHider`: Custom component to aggressively clean up development overlays.

## 🌟 Key Features

*   **"Nuclear" Clean UI**: aggressive removal of all development indicators for a pristine immersive experience.
*   **Fluid Typography**: Clamp-based scaling for perfect readability on all devices.
*   **Seamless Transitions**: "Joint Breaker" design ensures animations flow continuously between sections (Hero -> Skills -> Projects).
*   **Physics-Based Interaction**: Elements react to mouse movement (Parallax) and scroll velocity.
*   **SEO Optimized**: JSON-LD Structured Data, Dynamic OG Images, and Semantic HTML.

## 🏃‍♂️ Running Locally

1.  **Clone the repo**
    ```bash
    git clone https://github.com/adarshvermaa/portfolio-site-nextjs.git
    ```
2.  **Install dependencies**
    ```bash
    pnpm install
    ```
3.  **Run development server**
    ```bash
    pnpm run dev
    ```
4.  **Open** `http://localhost:3000`

## 📧 Contact API
The contact form uses a dedicated API route (`/api/contact`) connecting to a Nodemailer transporter. Ensure `.env.local` is configured with:
```env
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
```

---
*© 2026 Adarsh Verma. Architected with Precision.*