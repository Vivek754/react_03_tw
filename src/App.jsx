import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./components/Card";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Card btn="Go to Mac"/>
      <Card ProductName="iPhone" btn="Go to iPhone"/>
    </>
  );
}

export default App;
