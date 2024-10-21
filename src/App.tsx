// import { useState } from "react";
// import reactLogo from "@/assets/react.svg";
// import viteLogo from "/vite.svg";
import Header from "./sections/Header";
import Rate from "./sections/Rate";
import About from "./sections/About";

function App() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 100 }}>
      <Header />
      <Rate />
      <About />
    </div>
  );
}

export default App;
