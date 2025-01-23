import { createSlice } from "@reduxjs/toolkit";

const loadTodosFromLocalStorage = () => {
  const storedTodos = localStorage.getItem("todos");
  return storedTodos ? JSON.parse(storedTodos) : [];
};
const saveTodosToLocalStorage = (todos) => {
  localStorage.setItem("todos", JSON.stringify(todos));
};

const initialState = {
  todos: loadTodosFromLocalStorage(),
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodoTask: (state, action) => {
      const todos = {
        id: new Date().toISOString(),
        text: action.payload.text,
        completed: false,
        star: false,
        addStep: false,
        setpsValue: "",
        Date: new Date().toLocaleDateString(),
        reminder: false,
        dueDate: false,
        repeat: false,
        repeatValue: "",
        calendervaluee: "",
      };
      state.todos.push(todos);
      saveTodosToLocalStorage(state.todos);
    },
    updateTodoTask: (state, action) => {
      const todo = state.todos.find((t) => t.id === action.payload.id);
      if (todo) {
        todo.completed = action.payload.completed;
        todo.star = action.payload.star;
        todo.addStep = action.payload.addStep;
        todo.setpsValue = action.payload.setpsValue;
        todo.reminder = action.payload.reminder;
        todo.dueDate = action.payload.dueDate;
        todo.repeat = action.payload.repeat;
        todo.repeatValue = action.payload.repeatValue;
        todo.calendervaluee = action.payload.calendervaluee;
        saveTodosToLocalStorage(state.todos);
      }
    },
    removeTodoTask: (state, action) => {
      state.todos = state.todos.filter((t) => t.id !== action.payload);
      saveTodosToLocalStorage(state.todos);
    },
  },
});

export const { addTodoTask, removeTodoTask, updateTodoTask } =
  todoSlice.actions;

export default todoSlice.reducer;
