# 📘 Assignment: Practice React Props

In this assignment, you will create a small React project to practice how props work.
⚡ Props (_short for properties_) allow us to pass data from one component to another and make our components reusable.

📝 Task

1. 🛠️ Create a new React app using create-react-app or Vite.
2. 🧩 Create at least 3 reusable components (for example: `Card`, `Button`, `UserProfile`).
3. 📥 Use props to pass data into these components. Examples:

   - 👤 Pass a user’s name and age to a `UserProfile` component.
   - 🔘 Pass text and color to a `Button` component.
   - 📄 Pass title and description to a `Card` component.

4. 🎨 Display at least 3 different variations of each component by changing props.
5. 💅 Add some simple CSS for better UI.

✅ Requirements for Submission

- 📌 Your project should have at least 3 components using props.
- 🧹 Code must be clean and readable.
- 🌐 Push your project to GitHub and share the repo link.

# 📖 Solution: Project Description – Props Practice in React

🎯 Objective

The goal of this assignment was to practice using props in React by creating reusable components. Props (short for _properties_) allow us to pass data from one component to another, making our components dynamic and reusable.

🛠️ Steps I Followed

1. Created a New React Project

I used Vite (faster and modern alternative to Create React App) to set up the React environment:

npm create vite@latest props-practice
cd props-practice
npm install
npm run dev

This gave me a fresh React project running locally at `http://localhost:5173`.

2. Created Reusable Components

Inside the `src/components/` folder, I created three components:

a:) Button.jsx

- Props: `text`, `color`
- Displays a styled button with customizable text and background color.

b:) UserProfile.jsx

- Props: `name`, `age`, `hobby`
- Displays user details inside a card-like box.

c:) Card.jsx

- Props: `title`, `description`
- Displays a content card with a title and description.

3. Used Props in App.jsx

In `App.jsx`, I imported the three components and displayed three different variations of each one by changing their props:

- Buttons: “Click Me” (blue), “Delete” (red), “Submit” (green)
- User Profiles: Tayyab (22, Coding), Ali (25, Football), Sara (20, Painting)
- Cards: React Basics, Advanced React, Frontend Tools

This demonstrated how props make components reusable with different data.

4. Added Simple CSS

I styled each component using inline CSS for simplicity:

- Buttons have custom background colors and rounded corners.
- User profiles and cards have borders, padding, and spacing for a neat layout.

This made the UI cleaner and more readable.

5. Code Organization

- Components are kept in separate files for clean code.
- Props are passed in a simple, clear way to make the code easy to understand.
- Each component is reusable and independent.

# 🚀 Deploying Vite + React App to GitHub Pages

This guide explains how to deploy this project to **GitHub Pages**.

🔹 1. Install `gh-pages`

Inside your project, install the `gh-pages` package:

npm install gh-pages --save-dev

🔹 2. Configure `vite.config.js`

Edit your `vite.config.js` file and add the `base` option with your repo name:

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
plugins: [react()],
base: "/ use your repo name here/",
});

🔹 3. Update `package.json` Scripts

In your `package.json`, add `predeploy` and `deploy` scripts:

"scripts": {
"dev": "vite",
"build": "vite build",
"preview": "vite preview",
"predeploy": "npm run build",
"deploy": "gh-pages -d dist"
}

👉 (Optional but recommended) Also add a `homepage` field:

"homepage": "https://easy2-code.github.io/Props-Practice-in-React"

Like this:

{
"name": "props-practice",
"private": true,
"version": "0.0.0",
"homepage": "https://easy2-code.github.io/Props-Practice-in-React",
"type": "module",
"scripts": {
"dev": "vite",
"build": "vite build",
"preview": "vite preview",
"predeploy": "npm run build",
"deploy": "gh-pages -d dist"
}
}

🔹 4. Build the Project

Run this command inside in your project folder:

npm run build

This creates a `dist/` folder with the production build.

🔹 5. Deploy to GitHub Pages

Run this command inside in your project folder:

npm run deploy

This will push the contents of the `dist/` folder to a branch called `gh-pages`.

🔹 6. Enable GitHub Pages

1. Go to your repo on GitHub:
   👉 [Props-Practice-in-React Settings](https://github.com/easy2-code/Props-Practice-in-React/settings/pages)
2. Navigate to Settings → Pages
3. Under Source, select:

   - Branch: `gh-pages`
   - Folder: `/ (root)`
   - Click **Save**

🔹 7. Access Your Live App

After a few minutes, your app will be available at:

👉 https://easy2-code.github.io/Props-Practice-in-React/ 🎉

✅ Notes

- If the page doesn’t load immediately, wait 2–5 minutes (GitHub Pages takes time).
- Clear browser cache if you see an old version.
- Always re-run:

  npm run build
  npm run deploy

# ✍️ Submitted By:

Tayyab Khan

I have completed this assignment with honesty and dedication ❤️
Done with full effort and from the heart. ✅
