import { useEffect, useState } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Header } from "./components/Header";
import { Task } from "./components/Task";

const LOCAL_STORAGE_KEY = 'todo:tasks';

function App() {
  const [tasks, setTasks] = useState([]);

  function loadSavedTasks() {
    const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
    if(saved) {
      setTasks(JSON.parse(saved));
    }
  }

  function setTasksAndSave(newTasks) {
    setTasks(newTasks);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newTasks));
  }

  useEffect(() => {
    loadSavedTasks();
  }, [])

  function addTask(taskTitle) {
    setTasksAndSave([...tasks, {
      id: crypto.randomUUID(),
      title: taskTitle,
      isCompleted: false
    }]);
  }

  function deleteTaskById(taskId) {
    const newTasks = tasks.filter(task => task.id !== taskId);
    setTasksAndSave(newTasks);
  }

  function toggleTaskCompletedById(taskId) {
    const newTasks = tasks.map(task => {
      if(task.id === taskId) {
        return {
          ...task,
          isCompleted: !task.isCompleted
        }
      }
      return task;
    });
    setTasksAndSave(newTasks);
  }
  function renameTask(taskId, newTaskName){
    // setTasks(prev => {
    //   const newTasks = [...prev];
    //   newTasks[taskId].title = taskId.title;
    //   return newTasks;
    // })
    // setTasksAndSave(newTasks)

    // setTasksAndSave([...tasks, {
    //   id: crypto.randomUUID(),
    //   title: taskTitle,
    //   isCompleted: false
    // }]);
    // setTasksAndSave([tasks => {
    //   const newTasks = [...tasks]
    //   // newTasks[taskId].id = taskId.id
    //   newTasks[taskId.id].title = taskId.title
    //   // newTasks[taskId].isCompleted = taskId.isCompleted
    //   return newTasks
    // }]);
    const newTasks = tasks.map((tasks) => {
      return tasks.id === taskId.id ? newTaskName : tasks
    })
    setTasksAndSave(newTasks)
  }

  return (
    <>
    <Container className="bg-dark square rounded mt-3">
      <Row>
        <Col className="d-flex mt-3 justify-content-center">
          <p className="fs-1">Todo List</p>
        </Col>
      </Row>
      <Row>
        <Col>
          <Header handleAddTask={addTask} />
          {tasks.map((task) => (
            <Task key={task.id} 
            task={task} 
            onDelete={deleteTaskById} 
            onComplete={toggleTaskCompletedById}
            onRename={renameTask}/>
          ))}
          
        </Col>
      </Row>
    </Container>
    </>
  )
}

export default App