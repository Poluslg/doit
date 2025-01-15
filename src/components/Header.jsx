import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import WidgetsOutlinedIcon from "@mui/icons-material/WidgetsOutlined";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import React, { useState } from "react";
import CloudIcon from "@mui/icons-material/Cloud";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Slide,
  useColorScheme,
} from "@mui/material";
import axios from "axios";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function Header() {
  const [mode, setMode] = useState("light");
  // const { mode, setMode } = useColorScheme();
  const [header, setHeader] = useState(false);
  const [widgets, setWidgets] = useState(true);
  const [open, setOpen] = useState(false);
  const [city, setCity] = useState(String);
  const [weather, setWeather] = useState(null);
  const API_KEY = "75c748a4f73fde273b420c40e0d600de";
  const API_URL = "https://api.openweathermap.org/data/2.5/weather";

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

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const createWeather = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(API_URL, {
        params: {
          q: city,
          appid: API_KEY,
          units: "metric",
        },
      });
      setWeather(response.data);
    } catch (err) {
      setWeather(null);
    }
    handleClose();
  };
  const currentWeather = weather && parseFloat(weather?.main?.temp).toFixed(0);

  return (
    <header className="h-10 w-full bg-white dark:bg-[#242424] dark:text-white  flex items-center justify-between px-4 pr-8 fixed">
      <div className="flex items-center gap-3">
        <button onClick={headerOnClick}>
          <MenuOutlinedIcon />
        </button>
        <div className="flex items-center gap-2 cursor-pointer">
          <img src="/Logo.png" alt="Logo" className="h-6 w-6" />
          <h1 className="text-green-600 font-bold text-xl">DoIt</h1>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <div>
          <button
            onClick={handleClickOpen}
            className="uppercase h-10 w-24 rounded-md bg-[#35793729] text-[#357937] hover:bg-[#91b192] transition-colors text-sm font-semibold flex items-center justify-center gap-3"
          >
            <span>{currentWeather === null ? "0" : currentWeather + "°"}</span>
            <CloudIcon className="text-[#357937]" />
            <span className="sr-only">Weather</span>
          </button>
        </div>

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
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"Weather"}</DialogTitle>
        <DialogContent className="w-96">
          <form onSubmit={createWeather}>
            <input
              type="text"
              className="h-12 w-full p-2 border"
              placeholder="Enter City Name"
              onChange={(e) => setCity(e.target.value)}
            />
          </form>
          <DialogContentText>
            {weather && (
              <div className="pt-2 p-1 py-2 overflow-x-hidden">
                <h1>Feel Like -{weather?.main?.feels_like.toFixed(0)}</h1>
                <h1>Grnd Level -{weather?.main?.grnd_level.toFixed(0)}</h1>
                <h1>Humidity -{weather?.main?.humidity.toFixed(0)}</h1>
                <h1>Pressure -{weather?.main?.pressure.toFixed(0)}</h1>
                <h1>Sea Level -{weather?.main?.sea_level.toFixed(0)}</h1>
                <h1>Temperature -{weather?.main?.temp.toFixed(0)}</h1>
                <h1>
                  Maximum Temperature -{weather?.main?.temp_max.toFixed(0)}
                </h1>
                <h1>
                  Minimum Temperature -{weather?.main?.temp_min.toFixed(0)}
                </h1>
              </div>
            )}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          {/* <button onClick={handleClose}>Cancel</button> */}
          <button type="submit" onClick={createWeather}>
            Submit
          </button>
        </DialogActions>
      </Dialog>
    </header>
  );
}

export default Header;
