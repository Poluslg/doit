import { useSelector } from "react-redux";
import CompleteTask from "./CompleteTask";
import MainContentAddTask from "./MainContentAddTask";
import StarOutlinedIcon from "@mui/icons-material/StarOutlined";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import { useState } from "react";
import TodoTaskUpdateForm from "./TodoTaskUpdateForm";

function MainContent() {
  const todos = useSelector((state) => state.todos.todos);
  const [activeTodoId, setActiveTodoId] = useState(null);

  const handleClose = () => {
    // console.log("123");
    setActiveTodoId(null);
  };

  const handleAddTaskClick = (id) => {
    setActiveTodoId(activeTodoId === id ? null : id);
  };

  // console.log(todos);

  return (
    <div className="w-full h-auto dark:text-white pt-10 flex flex-row">
      <div className="w-full">
        <MainContentAddTask />
        <div className="w-full  " id="widgets">
          {todos.map(
            (todo) =>
              !todo.completed && (
                <>
                  <div className="flex" key={todo.id}>
                    <div
                      className="w-full h-14 border-b-2 flex items-center justify-between px-5 cursor-pointer gap-1 pl-3 innerWidgets"
                      onClick={() => handleAddTaskClick(todo.id)}
                    >
                      <div className="flex gap-3">
                        <input type="checkbox" />
                        <h1 className="font-semibold  text-[#1B281B] dark:text-[#F5F5F5]">
                          {todo.text}
                        </h1>
                      </div>

                      <button>
                        {todo.star ? (
                          <StarOutlinedIcon className=" text-[#000000] dark:text-[#ffffff]" />
                        ) : (
                          <StarBorderOutlinedIcon />
                        )}
                      </button>
                    </div>
                    <div className="fixed right-0 h-[90%] top-16 z-[99]">
                      {activeTodoId === todo.id && (
                        <TodoTaskUpdateForm
                          todo={todo}
                          handleClose={handleClose}
                        />
                      )}
                    </div>
                  </div>
                </>
              )
          )}
        </div>
        {todos.map((todo) => todo.completed) && <CompleteTask todos={todos} />}
      </div>
    </div>
  );
}

export default MainContent;
