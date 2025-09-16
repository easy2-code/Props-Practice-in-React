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

===============================================================
Solution: 📖 Project Description – Props Practice in React

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
