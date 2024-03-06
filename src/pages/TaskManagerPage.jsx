import AppBar from "components/TaskManager/AppBar/AppBar";
import Layout from "components/TaskManager/Layout/Layout";
import TaskForm from "components/TaskManager/TaskForm/TaskForm";
import TaskList from "components/TaskManager/TaskList/TaskList";

const TaskManagerPage = () => {
  return (
    <Layout>
      <AppBar />
      <TaskForm />
      <TaskList />
    </Layout>
  );
};

export default TaskManagerPage;
