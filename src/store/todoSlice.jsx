import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodoTask: (state, action) => {
      const newTodo = {
        id: new Date().toISOString(),
        text: action.payload.text,
        completed: false,
        star: false,
        addStep: false,
        setpsValue: "",
        reminder: false,
        dueDate: false,
        repeat: false,
        repeatValue: "",
        calendervaluee: "",
      };
      state.todos.push(newTodo);
    },
    updateTodoTask: (state, action) => {
      const todo = state.todos.find((t) => t.id);
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
      }
    },
    removeTodoTask: (state, action) => {
      state.todos = state.todos.filter((t) => t.id !== action.payload);
    },
  },
});

export default { addTodoTask, removeTodoTask, updateTodoTask } =
  todoSlice.actions;
