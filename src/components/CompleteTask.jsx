import StarOutlinedIcon from "@mui/icons-material/StarOutlined";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import TodoTaskUpdateForm from "./TodoTaskUpdateForm";
import { useState } from "react";
function CompleteTask({ todos }) {
  const [activeTodoId, setActiveTodoId] = useState(null);

  const todoCompleted = todos.filter((todo) => todo.completed);

  const handleAddTaskClick = (id) => {
    setActiveTodoId(activeTodoId === id ? null : id);
  };
  const handleClose = () => {
    setActiveTodoId(null);
  };
  return (
    <>
      {todoCompleted && (
        <div className="w-full">
          <h1 className="py-5">Completed</h1>
          {todos.map(
            (todo) =>
              todo.completed && (
                <div
                  key={todo.id}
                  className="w-full h-14 border-b-2 flex items-center justify-between px-5 gap-1 pl-3 cursor-pointer"
                  onClick={() => handleAddTaskClick(todo.id)}
                >
                  <div className="flex gap-3">
                    <input type="checkbox" checked readOnly />
                    <h1 className="font-semibold text-center text-[#1B281B] dark:text-[#F5F5F5] relative">
                      {todo.text}
                      <span className="absolute left-0 right-0 bottom-0 h-[1px] top-[13px] bg-current transform translate-y-1/2" />
                    </h1>
                  </div>

                  <button>
                    {todo.star ? (
                      <StarOutlinedIcon className=" text-[#000000] dark:text-[#ffffff]" />
                    ) : (
                      <StarBorderOutlinedIcon />
                    )}
                    <span className="sr-only">Star</span>
                  </button>

                  <div className="fixed right-0 h-[90%] top-16 z-[99]">
                    {activeTodoId === todo.id && (
                      <TodoTaskUpdateForm
                        todo={todo}
                        handleClose={handleClose}
                      />
                    )}
                  </div>
                </div>
              )
          )}
        </div>
      )}
    </>
  );
}

export default CompleteTask;
