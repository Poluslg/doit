import InfoTwoToneIcon from "@mui/icons-material/InfoTwoTone";
import { PieChart } from "@mui/x-charts/PieChart";
import { useSelector } from "react-redux";

function SidebarDonutChart() {
  const todos = useSelector((state) => state.todos.todos);
  const todoCompleted = todos
    .map((todo) => todo.completed)
    .filter((todo) => todo).length;
  // console.log(todoCompleted);
  // console.log(todos)
  const totalTasks = todos.length;
  const completedTasks = todoCompleted;
  const pendingTasks = totalTasks - completedTasks;
  const palette = ["#142E15", "#3F9142"];
  return (
    <div className="h-56 w-56 bg-[#FBFDFC] dark:bg-[#232323] dark:text-white flex flex-col pt-1 mb-28">
      <div className="h-16 w-full border-b border-gray-200 flex items-center justify-between px-4">
        <div>
          <h1 className="text-xs text-gray-600 dark:text-white">Today Tasks</h1>
          <h1 className="text-lg font-semibold text-black dark:text-white">
            {totalTasks}
          </h1>
        </div>
        <div>
          <InfoTwoToneIcon className="text-gray-500  dark:text-white" />
        </div>
      </div>
      <div className="flex flex-col items-center justify-center h-full">
        <PieChart
          colors={palette}
          series={[
            {
              data: [
                {
                  value: completedTasks,
                },
                { value: pendingTasks },
              ],
              innerRadius: 40,
              outerRadius: 70,
              paddingAngle: -0.1,
              cornerRadius: 0,
              startAngle: -60,
              endAngle: 300,
              cx: 90,
              cy: 67,
            },
          ]}
          className="pt-2"
        />
        <div className="flex justify-center items-baseline space-x-4  w-full h-28  ">
          <div className="flex items-center space-x-2">
            <span className="block h-3 w-3 bg-[#3F9142] rounded-full"></span>
            <span className="text-[10px] text-gray-600 dark:text-white">
              Pending
            </span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="block h-3 w-3  bg-[#142E15] rounded-full"></span>
            <span className="text-[10px] text-gray-600 dark:text-white">
              Done
            </span>
          </div>
        </div>
        {/* Legends */}
      </div>
    </div>
  );
}

export default SidebarDonutChart;
