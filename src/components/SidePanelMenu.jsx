import AssignmentTurnedInOutlinedIcon from "@mui/icons-material/AssignmentTurnedInOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import StarOutlineOutlinedIcon from "@mui/icons-material/StarOutlineOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";
import AssignmentIndOutlinedIcon from "@mui/icons-material/AssignmentIndOutlined";
import { useState } from "react";
function SidePanelMenu() {
  const [selectedNav, setSelectedNav] = useState(String);

  const navigations = [
    {
      name: "All Tasks",
      icon: <AssignmentTurnedInOutlinedIcon />,
      link: "/all-tasks",
    },
    {
      name: "Today",
      icon: <CalendarMonthOutlinedIcon />,
      link: "/today",
    },
    {
      name: "Importent",
      icon: <StarOutlineOutlinedIcon />,
      link: "/importent",
    },
    {
      name: "Planned",
      icon: <MapOutlinedIcon />,
      link: "/planned",
    },
    {
      name: "Assigned to me",
      icon: <AssignmentIndOutlinedIcon />,
      link: "/assigned-to-me",
    },
  ];

  // console.log(selectedNav);
  return (
    <div className="h-auto w-56 bg-[#FBFDFC] dark:bg-[#232323] py-2 pt-7">
      {navigations.map((nav, index) => (
        <div key={index}>
          <button
            onClick={() => setSelectedNav(nav.name)}
            color="secondary"
            className={`w-full flex items-center gap-2 px-3 py-2 font-semibold text-[#1B281B] dark:text-white hover:text-[#357937] hover:bg-[#35793729] transition-colors duration-300 rounded-md ${
              selectedNav === nav.name && "bg-[#35793729] text-[#357937] "
            }`}
          >
            {nav.icon}
            <span>{nav.name}</span>
          </button>
        </div>
      ))}
    </div>
  );
}

export default SidePanelMenu;
