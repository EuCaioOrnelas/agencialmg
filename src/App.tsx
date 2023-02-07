import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Navbar from "./components/Navbar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="Home">
      <Navbar />
      <h1>Hello, World!</h1>
    </div>
  );
}

export default App;
