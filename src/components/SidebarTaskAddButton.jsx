import AddIcon from "@mui/icons-material/Add";
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Slide } from "@mui/material";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodoTask } from "../store/todoSlice";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
function SidebarTaskAddButton() {
  const [open, setOpen] = useState(false);
  const [text, setText] = useState(String);
  const dispatch = useDispatch();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const createTask = (e) => {
    e.preventDefault();
    dispatch(
      addTodoTask({
        text: text,
      })
    );
    setText("");
    handleClose();
  };

  return (
    <div>
      <button
        onClick={handleClickOpen}
        className="w-56 h-14 flex items-center pl-2 gap-1  text-sm font-semibold bg-[#FBFDFC] dark:bg-[#232323] dark:text-white text-[#1B281B] hover:text-[#357937] dark:hover:bg-[#35793729] hover:bg-[#35793729] transition-colors duration-300 rounded-md"
      >
        <AddIcon fontSize="large" />
        <span className="">Add list</span>
      </button>

      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"Enter Task"}</DialogTitle>
        <DialogContent className="lg:w-96 md:w-72">
          <form onSubmit={createTask}>
            <input
              type="text"
              className="h-12 w-full p-2 border"
              placeholder="Enter Task Name"
              onChange={(e) => setText(e.target.value)}
            />
          </form>
        </DialogContent>
        <DialogActions>
          <button onClick={handleClose}>Cancel</button>
          <button type="submit" onClick={createTask}>
            Create
          </button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default SidebarTaskAddButton;
