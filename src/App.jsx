import { NavLink } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import TaskManagerPage from "./pages/TaskManagerPage";
import CounterPage from "./pages/CounterPage";
import css from "./App.module.css";

const App = () => {
  return (
    <>
      <header>
        <nav className={css.navList}>
          <NavLink to="/counter">Counter</NavLink>
          <NavLink to="/taskManager">Task manager Redux</NavLink>
        </nav>
      </header>
      <Routes>
        <Route path="/counter" element={<CounterPage />} />
        <Route path="/taskManager" element={<TaskManagerPage />} />
      </Routes>
    </>
  );
};

export default App;
