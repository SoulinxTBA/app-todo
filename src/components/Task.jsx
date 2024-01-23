import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { useState } from 'react'
import EditTask from './EditTask'

export function Task({ task, onDelete, onComplete, onRename }) {

  const [currentDate, setCurrentDate] = useState(getDate())
  //Needs to Make sure the time is unique
  function getDate(){
    const today = new Date();
    const month = today.getMonth() + 1;
    const year = today.getFullYear();
    const date = today.getDate();
    const hour = today.getHours();
    const secs = today.getSeconds();
    return `${month}/${date}/${year}/${hour}:${secs}`;
  }
  
  return (
    <div>
      <div className='d-flex
                    bg-light
                    square border 
                    border-lexlightpurple 
                    bg-primary rounded
                    mt-1
                    mb-0'>
      <div className='p-2'>
        <Form.Check type='checkbox' className="lexpurple" onClick={() => onComplete(task.id)}/>
      </div>
      <div className='me-auto p-2 text-lexpurple'>
        {task.isCompleted ? (<del className='text-lexlightpurple'>{task.title}</del>) : (<>{task.title}</>)}
      </div>
      <EditTask task={task} onRename={onRename}/>
      <div className='mx-2 p-1 my-auto'>
        <Button size='sm' variant='outline-danger' onClick={() => onDelete(task.id)}>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3" viewBox="0 0 16 16">
            <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5"/>
          </svg>
        </Button>
        
      </div>
    </div>
      <div>
        <p className="text-dark mt-1" style={{fontSize:"10px"}}>Date Created:{currentDate}</p>
      </div>
    </div>
    
  )
}