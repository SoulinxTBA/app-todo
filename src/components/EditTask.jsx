import { useState } from 'react';
import { Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function EditTask({task, onRename}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [newName,setNewName] = useState(task.title)

  function onRenameTask(ev){
    setNewName(ev.target.value)
  }
  function submitRename(ev){
    ev.preventDefault()
    onRename(newName)
    setShow(false)
  }

  return (
    <>
    <div className='p-1 my-auto'>
    <Button className='p-1' size='sm' variant="outline-lexpurple" onClick={handleShow}>
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
        <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
        <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"/>
      </svg>
    </Button>
    </div>
      

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        
      >
        <Modal.Header closeButton>
          <Modal.Title className='text-dark'>Edit Todo</Modal.Title>
        </Modal.Header>
        <Modal.Body >
            <Form onSubmit={submitRename}>
                <Form.Control className='border border-lexlightorange' type='text' value={newName}
                onChange={onRenameTask}/>
            </Form>
        </Modal.Body>
        <Modal.Footer>
            <Button variant="outline-danger" onClick={handleClose}>
              Close
            </Button>
            <Button variant="lexpurple" onClick={handleClose}>
              Save Changes
            </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default EditTask;