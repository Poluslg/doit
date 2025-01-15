import Header from "./components/Header";
import SideBar from "./components/SideBar";
import MainContent from "./components/MainContent";
import Login from "./components/form/login";
import { useEffect, useState } from "react";

function App() {
  const [islogin, setIsLogin] = useState(false);
  useEffect(() => {
    const nameStore = localStorage.getItem("name");
    const passWordStore = localStorage.getItem("password");
    if (nameStore && passWordStore) {
      setIsLogin(true);
    } else {
      setIsLogin(false);
    }
  }, [islogin]);

  return (
    <main>
      {islogin ? (
        <div className="p-4 flex overflow-hidden gap-5">
          <div className="relative ">
            <Header />
            <SideBar />
          </div>
          <MainContent />
        </div>
      ) : (
        <Login />
      )}
    </main>
  );
}

export default App;
