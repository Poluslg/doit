import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import StarOutlinedIcon from "@mui/icons-material/StarOutlined";
import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import RepeatOutlinedIcon from "@mui/icons-material/RepeatOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import { useState } from "react";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import { useDispatch, useSelector } from "react-redux";
import { updateTodoTask } from "../store/todoSlice";
import { removeTodoTask } from "../store/todoSlice";

function TodoTaskUpdateForm(todo) {
  const [completed, setCompleted] = useState(false);
  const [star, setStar] = useState(false);
  const [addStep, setAddStep] = useState(false);
  const [setpsValue, setStepsValue] = useState(String);
  const [calendervalue, setCalendarValue] = useState(new Date());
  const [reminder, setReminder] = useState(false);
  const [dueDate, setDueDate] = useState(false);
  const [repeat, setRepeat] = useState(false);
  const [repeatValue, setRepeatValue] = useState(String);

  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos.todos);

  const handlesubmit = (e) => {
    const calendervaluee = calendervalue.toString();
    e.preventDefault();
    dispatch(
      updateTodoTask({
        completed,
        star,
        addStep,
        setpsValue,
        reminder,
        dueDate,
        repeat,
        repeatValue,
        calendervaluee,
      })
    );
  };

  const handleDelete = (e) => {
    e.preventDefault();
    dispatch(removeTodoTask(todo.todo.id));
  };
  return (
    <div
      id="addTask"
      className="w-96 h-full pt-10 p-4 rounded-lg shadow-lg bg-[#EEF6EF] dark:bg-[#2C2C2C] overflow-hidden"
    >
      <form
        className="flex flex-col justify-between h-full"
        onSubmit={handlesubmit}
      >
        <div className="border-t-2">
          <div className="h-12 border-b-2  w-full flex items-center justify-evenly gap-2 font-semibold cursor-pointer text-[#1B281B] dark:text-[#F5F5F5]">
            <input
              type="checkbox"
              name="Buy groceries"
              id="Buy groceries"
              onChange={(e) => setCompleted(e.target.checked)}
            />
            <h1 className="uppercase">{todo.todo.text}</h1>
            <button
              onClick={(e) => {
                e.preventDefault();
                setStar(!star);
              }}
            >
              {star ? (
                <StarOutlinedIcon className=" text-[#000000] dark:text-[#ffffff]" />
              ) : (
                <StarBorderOutlinedIcon />
              )}
            </button>
          </div>
          <div
            className="h-12 border-b-2  w-full flex items-center justify-start pl-8 gap-10 font-semibold cursor-pointer text-[#1B281B] dark:text-[#F5F5F5]"
            onClick={() => setAddStep(!addStep)}
          >
            <AddOutlinedIcon className="text-gray-600 dark:text-[#F5F5F5]" />
            Add Step
          </div>
          {addStep && (
            <div className=" border-b-2  w-full flex items-center justify-start pl-8 gap-10 ">
              <input
                type="text"
                placeholder="Add Step"
                onChange={(e) => setStepsValue(e.target.value)}
                className="w-full h-12 bg-[#EEF6EF] dark:bg-[#2C2C2C] dark:text-white outline-none pl-2"
              />
            </div>
          )}
          <div
            className="h-12 border-b-2  w-full flex items-center justify-start pl-8 gap-10 font-semibold cursor-pointer text-[#1B281B] dark:text-[#F5F5F5]"
            onClick={() => setReminder(!reminder)}
          >
            {reminder ? (
              <div className="flex gap-10">
                <NotificationsActiveIcon className="text-gray-600 dark:text-[#F5F5F5]" />
                Reminder On
              </div>
            ) : (
              <div className="flex gap-10">
                <NotificationsNoneOutlinedIcon className="text-gray-600 dark:text-[#F5F5F5]" />
                Set Reminder
              </div>
            )}
          </div>

          <div
            className="h-12 border-b-2  w-full flex items-center justify-start pl-8 gap-10 font-semibold cursor-pointer text-[#1B281B] dark:text-[#F5F5F5]"
            onClick={() => setDueDate(!dueDate)}
          >
            <CalendarTodayOutlinedIcon className="text-gray-600 dark:text-[#F5F5F5]" />
            Add Due Date
          </div>
          {dueDate && (
            <div className=" border-b-2  w-full flex items-center justify-start pl-8 gap-10 ">
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DateCalendar
                  className="bg-white dark:bg-[#1F1F1F] dark:text-white rounded-md px-5 py-5"
                  // value={calendervalue}
                  onChange={(e) => {
                    // e.preventDefault();
                    setCalendarValue(e);
                  }}
                />
              </LocalizationProvider>
            </div>
          )}

          <div
            className="h-12 border-b-2  w-full flex items-center justify-start pl-8 gap-10 font-semibold cursor-pointer text-[#1B281B] dark:text-[#F5F5F5]"
            onClick={() => setRepeat(!repeat)}
          >
            <RepeatOutlinedIcon className="text-gray-600 dark:text-[#F5F5F5]" />
            Repeat
          </div>
          {repeat && (
            <div className=" border-b-2  w-full flex items-center justify-start pl-8 gap-10 ">
              <select
                name="repeat"
                id="repeat"
                className="w-full h-12 bg-[#EEF6EF] dark:bg-[#2C2C2C] dark:text-white outline-none pl-2 font-semibold"
                onChange={(e) => setRepeatValue(e.target.value)}
              >
                <option value="daily">Daily</option>
                <option value="weekly">Weekly</option>
                <option value="monthly">Monthly</option>
                <option value="yearly">Yearly</option>
              </select>
            </div>
          )}
          <div>
            <textarea
              name="notes"
              id="notes"
              cols={30}
              rows={10}
              placeholder="Add notes here"
              className="w-full h-24 mt-2 bg-[#EEF6EF] dark:bg-[#2C2C2C] dark:text-white outline-none pl-2"
            ></textarea>
          </div>
        </div>
        <div className="flex items-center justify-evenly h-10">
          <button>
            <CloseOutlinedIcon />
          </button>
          <button type="submit" className="w-60">
            Update Task
          </button>
          <button onClick={handleDelete}>
            <DeleteForeverOutlinedIcon />
          </button>
        </div>
      </form>
    </div>
  );
}

export default TodoTaskUpdateForm;
