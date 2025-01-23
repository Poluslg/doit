import Header from "./components/Header";
import SideBar from "./components/SideBar";
import MainContent from "./components/MainContent";
import Login from "./components/form/Login";
import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Importent from "./components/pages/Importent";
import TodayTask from "./components/pages/TodayTask";
import NotFoundPage from "./components/pages/NotFoundPage";

function App() {
  const [islogin, setIsLogin] = useState(false);
  useEffect(() => {
    const nameStore = localStorage.getItem("name");
    if (nameStore) {
      setIsLogin(true);
    } else {
      setIsLogin(false);
    }
  }, [islogin]);

  return (
    <BrowserRouter>
      <main>
        {islogin ? (
          <div className="p-4 flex overflow-hidden gap-5">
            <div className="relative ">
              <Header />
              <SideBar />
            </div>
            <Routes>
              <Route path="/" element={<MainContent />} />
              <Route path="/today" element={<TodayTask />} />
              <Route path="/importent" element={<Importent />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </div>
        ) : (
          <Login />
        )}
      </main>
    </BrowserRouter>
  );
}

export default App;
