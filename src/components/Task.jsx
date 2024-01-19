import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { useState } from 'react'

export function Task({ task, onDelete, onComplete }) {
  const [editMode, setEditMode] = useState(false)
  const [newName, setNewName] =useState('')

  function onRenameTask(ev){
    setNewName(ev.target.value)
  }
  function submitRename(ev){
    ev.preventDefault()
    setEditMode(false)
    onRename(newName)
  }
  return (
    <div className='d-flex
                    bg-dark
                    square border 
                    border-secondary 
                    bg-primary rounded
                    mt-2
                    mb-2'>
      <div className='p-2'>
        <Form.Check type='checkbox' onClick={() => onComplete(task.id)}/>
      </div>
      {!editMode && (
        <div className='me-auto p-2' onClick={() => setEditMode(prev => !prev)}>
          {task.isCompleted ? (<del>{task.title}</del>) : (<>{task.title}</>)}
        </div>
      )}{editMode && (
          <Form onSubmit={submitRename}>
            <Form.Control type='text' placeholder={task.title}
            onChange={onRenameTask}/>
          </Form>
        
        )}
      <Button className='btn btn-danger ' onClick={() => onDelete(task.id)}>
        x
      </Button>
    </div>
  )
}