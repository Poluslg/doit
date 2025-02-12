import Profile from "./Profile";
import SidebarTaskAddButton from "./SidebarTaskAddButton";
import SidePanelMenu from "./SidePanelMenu";
import SidebarDonutChart from "./SidebarDonutChart";
import { useEffect, useState } from "react";

function SideBar() {
  const [name, setName] = useState(String);


  useEffect(()=>{
    const isName = localStorage.getItem("name");
    if (isName) {
      setName(isName);
    }
  })

  return (
    <div
      className="h-full w-64 bg-[#EEF6EF] dark:bg-[#3b3b3b] mt-40  items-center justify-center -translate-x-full opacity-0 hidden"
      id="header"
    >
      <Profile />
      <div className=" flex flex-col gap-5">
        <div className="text-xs font-semibold text-center h-10 flex flex-col justify-between ">
          <span></span>
          <h1 className="text-[14px]"> Hey, {name}</h1>
        </div>
        <SidePanelMenu />
        <SidebarTaskAddButton />
        <SidebarDonutChart />
      </div>
    </div>
  );
}

export default SideBar;
