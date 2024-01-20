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
    <div className='p-1'>
    <Button className='p-1' size='sm' variant="outline-primary" onClick={handleShow}>
        Edit  
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
        <Modal.Body>
            <Form onSubmit={submitRename}>
                <Form.Control type='text' value={newName}
                onChange={onRenameTask}/>
            </Form>
        </Modal.Body>
        <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Save Changes
            </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default EditTask;