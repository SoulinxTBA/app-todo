import { useEffect, useState } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '/css/custom.min.css'
// import 'bootstrap/dist/css/bootstrap.min.css';
import { Header } from "./components/Header";
import { Task } from "./components/Task";
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'

const LOCAL_STORAGE_KEY = 'todo:tasks';

function App() {
  const [tasks, setTasks] = useState([]);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);

  const [secShow, setSecShow] = useState(false);
  const handleSecClose = () => setSecShow(false);

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
    const existingValue={id: taskId, title:newTaskName, isCompleted: false}
    const newTasks = tasks.map((todo) => 
      {return todo.id === taskId ? existingValue : todo})
    setTasksAndSave(newTasks)
  }

  function clearAllTasks(){
    setShow(false)
    setTasksAndSave([])
  }

  function clearAllCompleted(){
    setSecShow(false)
    const newTasks = tasks.filter(task => task.isCompleted !== true)
    setTasksAndSave(newTasks);
  }

  return (
    <>
    <div className="">
    
    <Container className="bg-lexwhite square rounded mt-3">
    <Row>
        <Col className="d-flex mt-3 justify-content-center">
          <p className="fs-1 text-lexorange" style={{fontWeight:"bold"}}>Todo List</p>
        </Col>
      </Row>
      <Row>
        <Col>
          <Header handleAddTask={addTask} />
          

          <div className="d-flex justify-content-between">
            <Button variant="outline-lexlightorange"  onClick={() => setSecShow(true)}>
              Remove Completed
            </Button>
            <Button variant="outline-danger" onClick={() => setShow(true)}>
              Clear All
            </Button>

            <Modal show={show} onHide={handleClose} animation={false} className='modal-sm'>
              <Modal.Header className='text-dark align-self-center'>
                Are you sure?
              </Modal.Header>  
              <Modal.Body className='text-dark align-self-center'>
                "Do you wish to Clear All Components?"
                </Modal.Body>
              <div className='d-flex justify-content-evenly p-2 mb-1'>
                <Button className='' variant="outline-secondary" onClick={handleClose}>
                  No
                </Button>
                <Button variant="outline-danger" onClick={clearAllTasks}>
                  Yes
                </Button>
              </div>          
            </Modal>

            <Modal show={secShow} onHide={handleSecClose} animation={false} className='modal-sm'>
              <Modal.Header className='text-dark align-self-center'>
                Are you sure?
              </Modal.Header>  
              <Modal.Body className='text-dark align-self-center'>
                "Do you wish to Remove Completed Tasks?"
                </Modal.Body>
              <div className='d-flex justify-content-evenly p-2 mb-1'>
                <Button className='' variant="outline-secondary" onClick={handleSecClose}>
                  No
                </Button>
                <Button variant="outline-danger" onClick={clearAllCompleted}>
                  Yes
                </Button>
              </div>          
            </Modal>
          </div>

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
    </div>
    </>
  )
}

export default App