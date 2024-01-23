import { useState } from 'react';
import '/css/custom.min.css'
// import 'bootstrap/dist/css/bootstrap.min.css';
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
      <Form.Control className='border border-lexlightorange' placeholder="New Task..." type="text" onChange={onChangeTitle} value={title} required/>
      <div className='text-center mt-3 mb-3'>
        <Button className='btn' variant='lexpurple' type='submit'>Add Todo</Button>
      </div>
      </Form>
  )
}