import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

export function Header({ handleAddTask}) {
  const [title, setTitle] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    handleAddTask(title);
    setTitle('');
  }

  function onChangeTitle(event) {
    setTitle(event.target.value);
  }

  return (
    <Form onSubmit={handleSubmit} className=''>
      <Form.Control placeholder="New Task..." type="text" onChange={onChangeTitle} value={title} />
      <div className='text-center mt-3 mb-3'>
        <Button className='btn btn-primary' type='submit'>Add Todo</Button>
      </div>
      </Form>
  )
}