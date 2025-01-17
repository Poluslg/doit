import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import WidgetsOutlinedIcon from "@mui/icons-material/WidgetsOutlined";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import React, { useEffect, useState } from "react";
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
  const [localStoreWeather, setLocalStoretWeather] = useState(null);
  const [weatherError, setWeatherError] = useState(null);
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
      headers?.classList.add("flex");
      headers?.classList.remove("-translate-x-full", "opacity-0", "hidden");
    }
  };

  const handleWidgetsClick = () => {
    const widgetss = document.getElementById("widgets");
    const innerWidgets = document.getElementsByClassName("innerWidgets");
    setWidgets((prevWidgets) => {
      const newWidgetsState = !prevWidgets;
      if (newWidgetsState) {
        widgetss?.classList.add(
          "grid",
          "grid-cols-1",
          "md:grid-cols-3",
          "gap-4",
          "p-6"
        );
        for (let i = 0; i < innerWidgets.length; i++) {
          innerWidgets[i].classList.add("h-44", "border");
          innerWidgets[i].classList.remove("h-14", "border-b-2");
        }
      } else {
        widgetss?.classList.remove(
          "grid",
          "grid-cols-1",
          "md:grid-cols-3",
          "gap-4",
          "p-6"
        );
        for (let i = 0; i < innerWidgets.length; i++) {
          innerWidgets[i].classList.remove("h-44", "border");
          innerWidgets[i].classList.add("h-14", "border-b-2");
        }
      }
      return newWidgetsState;
    });
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
      if (response.status === 200) {
        localStorage.setItem("weather", JSON.stringify(response.data));
      }
    } catch (err) {
      setWeatherError(err);
    }
    handleClose();
  };
  const checkWeather = () => {
    const weatherData = localStorage.getItem("weather");
    setLocalStoretWeather(weatherData ? JSON.parse(weatherData) : null);
  };
  useEffect(() => {
    checkWeather();
  }, []);

  const currentWeather =
    localStoreWeather && parseFloat(localStoreWeather?.main?.temp).toFixed(0);

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
        <DialogTitle className=" bg-[#35793729] text-[#357937] dark:bg-[#242424] dark:text-white">
          {("Weather", localStoreWeather && localStoreWeather.name)}
        </DialogTitle>
        <DialogContent className="lg:w-96 md:w-72 bg-[#35793729] text-[#357937] dark:bg-[#242424] dark:text-white">
          <form onSubmit={createWeather}>
            <input
              type="text"
              className="h-12 w-full p-2 border bg-transparent text-[#357937]  dark:text-white dark:outline-none dark:border-none"
              placeholder="Enter City Name"
              onChange={(e) => setCity(e.target.value)}
            />
          </form>
          <DialogContentText>
            {localStoreWeather && (
              <div className="pt-2 p-1 py-2 overflow-x-hidden  text-[#357937]  dark:text-white">
                <h1>
                  Feel Like = {localStoreWeather?.main?.feels_like.toFixed(0)}
                </h1>
                <h1>
                  Grnd Level = {localStoreWeather?.main?.grnd_level.toFixed(0)}
                </h1>
                <h1>
                  Humidity = {localStoreWeather?.main?.humidity.toFixed(0)}
                </h1>
                <h1>
                  Pressure = {localStoreWeather?.main?.pressure.toFixed(0)}
                </h1>
                <h1>
                  Sea Level = {localStoreWeather?.main?.sea_level.toFixed(0)}
                </h1>
                <h1>
                  Temperature = {localStoreWeather?.main?.temp.toFixed(0)}
                </h1>
                <h1>
                  Maximum Temperature =
                  {localStoreWeather?.main?.temp_max.toFixed(0)}
                </h1>
                <h1>
                  Minimum Temperature =
                  {localStoreWeather?.main?.temp_min.toFixed(0)}
                </h1>
              </div>
            )}
          </DialogContentText>
        </DialogContent>
        <DialogActions className=" bg-[#35793729] text-[#357937] dark:bg-[#242424] dark:text-white flex gap-5">
          <button onClick={handleClose}>Cancel</button>
          <button type="submit" onClick={createWeather}>
            Submit
          </button>
        </DialogActions>
      </Dialog>
    </header>
  );
}

export default Header;
