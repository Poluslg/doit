import AddIcon from "@mui/icons-material/Add";

function SidebarTaskAddButton() {
  return (
    <button className="w-56 h-14 flex items-center pl-2 gap-1  text-sm font-semibold bg-[#FBFDFC] dark:bg-[#232323] dark:text-white text-[#1B281B] hover:text-[#357937] dark:hover:bg-[#35793729] hover:bg-[#35793729] transition-colors duration-300 rounded-md">
      <AddIcon fontSize="large" />
      <span className="">Add list</span>
    </button>
  );
}

export default SidebarTaskAddButton;
