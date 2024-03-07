import Task from "../Task/Task";
import css from "./TaskList.module.css";
import { useSelector } from "react-redux";

const TaskList = () => {
  const tasksList = useSelector((state) => state.tasks);
  console.log("tasksList", tasksList);
  return (
    <ul className={css.list}>
      {tasksList.map((task) => (
        <li className={css.listItem} key={task.id}>
          <Task task={task} />
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
