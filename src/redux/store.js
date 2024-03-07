import { createStore } from "redux";
import { rootReducer } from "./reducer";
// Початкове значення стану Redux для кореневого редюсера,
// якщо не передати параметр preloadedState.

// Поки що використовуємо редюсер який
// тільки повертає отриманий стан

// console.log("rootReducer", rootReducer);
export const store = createStore(rootReducer);
console.log("store", store);
console.log("getState", store.getState());

store.dispatch({ id: 0, completed: false, type: "uhruh" });
// console.log("getState", store.getState());
