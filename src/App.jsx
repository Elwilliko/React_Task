import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

function App() {
  return (
    <menu className=" bg-zinc-900 h-screen">
      <div className=" container mx-auto">
        <TaskForm />
        <TaskList />
      </div>
    </menu>
  );
}

export default App;
