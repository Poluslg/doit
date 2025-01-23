import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import RepeatOutlinedIcon from "@mui/icons-material/RepeatOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Slide,
} from "@mui/material";
import { useDispatch } from "react-redux";
import { addTodoTask } from "../store/todoSlice";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function MainContentAddTask() {
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
    if (text) {
      dispatch(
        addTodoTask({
          text: text,
        })
      );
    }
    setText("");
    handleClose();
  };

  return (
    <>
      <div className="h-56 w-full flex flex-col justify-between bg-[#EEF6EF] dark:bg-[#242424] text-black">
        <div className="h-5 w-full bg-[#FBFDFC] dark:bg-[#232323] shadow-sm shadow-[#FBFDFC]">
          <h1 className="text-[#142E159E] dark:text-[#357937] text-xs font-semibold flex items-center ">
            To Do
            <ArrowDropDownIcon className="-ml-1" />
          </h1>
        </div>
        <div className="text-[#1B281BB8] dark:text-white font-semibold p-4">
          Add A Task
        </div>
        <div className="flex flex-row justify-between items-baseline p-4">
          <div>
            <NotificationsNoneOutlinedIcon className="text-[#808181]" />
            <RepeatOutlinedIcon className="text-[#808181]" />
            <CalendarTodayOutlinedIcon className="text-[#808181]" />
          </div>
          <button
            onClick={handleClickOpen}
            className="uppercase h-10 w-28 rounded-md bg-[#35793729] text-[#357937] hover:bg-[#91b192] transition-colors text-sm font-semibold"
          >
            Add TASK
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
                  value={text}
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
      </div>
    </>
  );
}

export default MainContentAddTask;
