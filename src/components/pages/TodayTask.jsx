import { useDispatch, useSelector } from "react-redux";
import StarOutlinedIcon from "@mui/icons-material/StarOutlined";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import { useState } from "react";
import { updateTodoTask } from "../../store/todoSlice";
import TodoTaskUpdateForm from "../TodoTaskUpdateForm";

function TodayTask() {
  const todos = useSelector((state) => state.todos.todos);
  const [activeTodoId, setActiveTodoId] = useState(null);
  const [star, setStar] = useState(false);
  const [completed, setCompleted] = useState(false);

  const handleClose = () => {
    setActiveTodoId(null);
  };

  const handleAddTaskClick = (id) => {
    setActiveTodoId(activeTodoId === id ? null : id);
  };

  const dispatch = useDispatch();

  const handleStar = (id) => {
    dispatch(
      updateTodoTask({
        id: id,
        star: star,
      })
    );
  };

  const handleCheckBox = (id) => {
    setCompleted(!completed);
    dispatch(
      updateTodoTask({
        id: id,
        completed: completed,
      })
    );
  };

  const todayDate = new Date().toLocaleDateString();

  return (
    <div className="w-full h-auto dark:text-white pt-10 flex flex-col">
      <h1 className="text-2xl uppercase font-semibold text-center py-5 border-b">
        Today
      </h1>
      <div className="w-full" id="widgets">
        {todos.map((todo) => (
          <div key={todo.id}>
            {!todo.Date == todayDate ? (
              <div className="flex pt-5">
                <div className="w-full h-14 border-b-2 flex items-center justify-between px-5 cursor-pointer gap-1 pl-3 innerWidgets">
                  <div className="h-full w-20 place-content-center">
                    <input
                      type="checkbox"
                      onClick={() => {
                        handleCheckBox(todo.id);
                      }}
                      checked={completed}
                    />
                  </div>
                  <div className="h-full w-full place-content-center">
                    <h1
                      className="font-semibold  text-[#1B281B] dark:text-[#F5F5F5] w-full"
                      onClick={() => handleAddTaskClick(todo.id)}
                    >
                      {todo.text}
                    </h1>
                  </div>

                  <button
                    onClick={() => {
                      setStar(!star);
                      handleStar(todo.id);
                    }}
                    className="h-full w-20"
                  >
                    {todo.star ? (
                      <StarOutlinedIcon className=" text-[#000000] dark:text-[#ffffff]" />
                    ) : (
                      <StarBorderOutlinedIcon />
                    )}
                  </button>
                </div>
                <div className="fixed right-0 h-[90%] top-16 z-[99]">
                  {activeTodoId === todo.id && (
                    <TodoTaskUpdateForm todo={todo} handleClose={handleClose} />
                  )}
                </div>
              </div>
            ) : (
              <div>
                <h1 className="text-lg uppercase font-semibold text-center py-5 border-t">
                  No Task Today
                </h1>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default TodayTask;
