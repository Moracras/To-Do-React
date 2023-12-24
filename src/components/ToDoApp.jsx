import React, { useState } from 'react';
import AddTodoButton from './AddTodoButton';
import { Button } from 'bootstrap';

const TodoApp = () => {
  const [showModal, setShowModal] = useState(false);

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  return (
    <div className="d-flex justify-content-center align-items-center" >
   
      <Button className="" onClick={handleShow}>
        Add TO-DO
      </Button>

      <AddTodoButton showModal={showModal} handleClose={handleClose} />
    </div>
  );
};

export default TodoApp;


