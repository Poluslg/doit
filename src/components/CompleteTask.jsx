import StarOutlinedIcon from "@mui/icons-material/StarOutlined";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
function CompleteTask(todos) {
  const todoCompleted = todos.todos.filter((todo) => todo.completed);
  return (
    <>
      {todoCompleted && (
        <div className="w-full">
          <h1 className="py-5">Completed</h1>
          {todos.todos.map(
            (todo) =>
              todo.completed && (
                <div
                  key={todo.id}
                  className="w-full h-14 border-b-2 flex items-center justify-between px-5 cursor-pointer gap-1 pl-3"
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
                  </button>
                </div>
              )
          )}
        </div>
      )}
    </>
  );
}

export default CompleteTask;
