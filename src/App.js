import React from "react";
import Home from "./Pages/Home";
import useLocalStorage from "use-local-storage";
import "./styles/Home.css";
import NavBar from "./components/Navbar/Navbar";


export default function App() {
  const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
  const [theme, setTheme] = useLocalStorage("theme" ? "light" : "dark");
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };
  return (
    <div>
      <div className="hero h-full  pb-2" data-theme={theme}>
        <NavBar  theme={theme}/>
        <Home toggleTheme={toggleTheme} theme={theme}/>
      </div>
    </div>
  );
}
