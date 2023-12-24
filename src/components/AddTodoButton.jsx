import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const AddTodoButton = ({ onAddTodo }) => {
  const [showModal, setShowModal] = useState(false);

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  const [todoText, setTodoText] = useState('');
  const [deadline, setDeadline] = useState('');

  const handleAddTodo = () => {
    // Burada todo eklemek için gerekli işlemleri yapabilirsiniz.
    // Örneğin, onAddTodo prop'unu kullanarak ana bileşene todo ekleyebilirsiniz.
    onAddTodo({
      text: todoText,
      deadline: deadline,
    });

    // Modal'ı kapat
    handleClose();
  };

  return (
    <>
      <Button   className='' variant="primary"  onClick={handleShow}>
       Add TO-DO
      </Button>

      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add To-Do</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form.Group className="mb-3" controlId="todoText">
            <Form.Label>Todo</Form.Label>
            <Form.Control
              type="text"
              placeholder="Todo"
              onChange={(e) => setTodoText(e.target.value)}
            />
          </Form.Group>

          <Row>
            <Col>
              <Form.Group className="mb-3" controlId="date">
                <Form.Label>Set Deadline</Form.Label>
                <Form.Control
                  onChange={(e) => setDeadline(e.target.value)}
                  type="datetime-local"
                  placeholder="Date"
                  required
                />
              </Form.Group>
            </Col>
          </Row>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            İptal
          </Button>
          <Button variant="success" onClick={handleAddTodo}>
            Todo Ekle
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default AddTodoButton;
