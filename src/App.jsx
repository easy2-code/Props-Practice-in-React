// src/App.jsx
import Button from "./components/Button";
import UserProfile from "./components/UserProfile";
import Card from "./components/Card";

function App() {
  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Props Practice App</h1>

      {/* Buttons with props */}
      <h2>Buttons</h2>
      <Button text="Click Me" color="blue" />
      <Button text="Delete" color="red" />
      <Button text="Submit" color="green" />

      {/* User Profiles */}
      <h2>User Profiles</h2>
      <UserProfile name="Tayyab Khan" age={22} hobby="Coding" />
      <UserProfile name="Ali Raza" age={25} hobby="Football" />
      <UserProfile name="Sara Ahmed" age={20} hobby="Painting" />

      {/* Cards */}
      <h2>Cards</h2>
      <Card
        title="React Basics"
        description="Learn how to use props and state."
      />
      <Card title="Advanced React" description="Hooks, Context, and more." />
      <Card
        title="Frontend Tools"
        description="Explore Vite, Tailwind, and libraries."
      />
    </div>
  );
}

export default App;
