import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { useState } from 'react'

export function Task({ task, onDelete, onComplete }) {
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
        <div className='me-auto p-2'>
          {task.isCompleted ? (<del>{task.title}</del>) : (<>{task.title}</>)}
        </div>
      <Button className='btn btn-danger ' onClick={() => onDelete(task.id)}>
        x
      </Button>
    </div>
  )
}