import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import WidgetsOutlinedIcon from "@mui/icons-material/WidgetsOutlined";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import { useState } from "react";
import { useColorScheme } from "@mui/material";

function Header() {
  const [mode, setMode] = useState("light");
  // const { mode, setMode } = useColorScheme();
  const [header, setHeader] = useState(true);
  const [widgets, setWidgets] = useState(true);
  const handleModeToggle = () => {
    // if (mode === "light") {
    //   setMode("dark");
    // } else if (mode === "dark") {
    //   setMode("light");
    // }
    setMode(mode === "light" ? "dark" : "light");
    if (mode === "light") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };
  const headerOnClick = () => {
    setHeader(!header);
    const headers = document.getElementById("header");
    if (header) {
      headers?.classList.add("-translate-x-full", "opacity-0", "hidden");
    } else {
      headers?.classList.remove("-translate-x-full", "opacity-0", "hidden");
    }
  };

  const handleWidgetsClick = () => {
    setWidgets(!widgets);
  };

  return (
    <header className="h-10 w-full bg-white dark:bg-[#242424] dark:text-white  flex items-center justify-between px-4 pr-8 fixed">
      <div className="flex items-center gap-3">
        <button onClick={headerOnClick}>
          <MenuOutlinedIcon />
        </button>
        <div className="flex items-center gap-2 cursor-pointer">
          <img src="/src/assets/Logo.png" alt="Logo" className="h-6 w-6" />
          <h1 className="text-green-600 font-bold text-xl">DoIt</h1>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <button>
          <SearchOutlinedIcon />
          <span className="sr-only">Search</span>
        </button>
        <button onClick={handleWidgetsClick}>
          {widgets ? <WidgetsOutlinedIcon /> : <MenuOutlinedIcon />}

          <span className="sr-only">widgets</span>
        </button>
        <button onClick={handleModeToggle}>
          {mode === "light" ? (
            <DarkModeOutlinedIcon />
          ) : (
            <LightModeOutlinedIcon />
          )}
          <span className="sr-only">mode toggle</span>
        </button>
      </div>
    </header>
  );
}

export default Header;
