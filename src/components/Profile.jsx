import { ListItemButton, ListItemText } from "@mui/material";
import { useState } from "react";

function Profile() {
  const [listitem, setListItem] = useState(false);
  const handleProfileAvaterClickl = () => {
    setListItem(!listitem);
  };

  const handleLogout = () => {
    localStorage.removeItem("name");
    window.location.reload();
  };

  return (
    <div className="w-48 absolute top-24 left-16 z-10">
      <button onClick={handleProfileAvaterClickl}>
        <img
          src="/UserPhoto.png"
          alt=""
          className="h-32 w-32 rounded-full object-cover cursor-pointer outline-none"
        />
      </button>
      <div
        className={`${
          listitem ? "block" : "hidden"
        } absolute bg-[#EEF6EF] dark:bg-[#242424] text-black dark:text-white  w-48 z-50 shadow-md`}
      >
        <ListItemButton
          onClick={() => console.log("Profile")}
          className="dark:hover:bg-[#3d3d3d]"
        >
          <ListItemText primary="My Profile" />
        </ListItemButton>
        <ListItemButton
          onClick={handleLogout}
          className="dark:hover:bg-[#3d3d3d]"
        >
          <ListItemText primary="Logout" />
        </ListItemButton>
      </div>
    </div>
  );
}

export default Profile;
{
}
