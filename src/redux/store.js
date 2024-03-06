import { createStore } from "redux";

// Початкове значення стану Redux для кореневого редюсера,
// якщо не передати параметр preloadedState.

const initialState = {
  tasks: [
    { id: 0, text: "Learn HTML and CSS", completed: true },
    { id: 1, text: "Get good at JavaScript", completed: true },
    { id: 2, text: "Master React", completed: false },
    { id: 3, text: "Discover Redux", completed: false },
    { id: 4, text: "Build amazing apps", completed: false },
  ],
  filters: {
    status: "all",
  },
};

// Поки що використовуємо редюсер який
// тільки повертає отриманий стан

const rootReducer = (state = initialState, action) => {
  return {
    ...state,
    tasks: state.tasks.map((task) => {
      if (task.id === action.id) {
        return { ...task, completed: action.completed };
      }
      return task;
    }),
  };
};

console.log("rootReducer", rootReducer);
export const store = createStore(rootReducer);
console.log("store", store);
console.log("getState", store.getState());

store.dispatch({ id: 0, completed: false, type: "uhruh" });
console.log("getState", store.getState());