import './styles/App.css';
import React from 'react';
import TaskService from "./service/TaskService";
import Task from "./components/Task";

function App() {

    let [tasks, setTasks] = React.useState();

    React.useEffect(() => {
        tasksFetch();
    }, []);

    const tasksFetch = async function() {
        const tasks1 = await TaskService.getAll();
        setTasks(tasks1);
    }

    return (
      <div className="App">
          <div className="header">
              <h1 className="app-title">To-Do array</h1>
          </div>

          <div className="tasks">
              {tasks?.map(x => <Task name={x.name} description={x.description} date={x.date} done={x.done}/>)}
          </div>
          <button className="create-task">+</button>
      </div>
    );
}

export default App;
