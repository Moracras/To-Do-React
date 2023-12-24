import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';

const AddModalPlanner = () => {
  const [date, setDate] = useState("")
  return (
    <div
      className="modal show"
      style={{ display: 'block', position: 'initial' }}
    >
      <Modal.Dialog>
        <Modal.Header closeButton>
          <Modal.Title>Add To-DO</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>Modal body text goes here.</p>
        </Modal.Body>
        <Modal.Group className="mb-3" controlId="date">
              <Modal.Label>Deadline</Modal.Label>
              <Modal.Control
                onChange={(e) => setDate(e.target.value)}
                type="datetime-local"
                placeholder="Date"
                required
              />
            </Modal.Group>

        <Modal.Footer>
          <Button variant="secondary">Cancel</Button>
          <Button variant="primary">Add To Do</Button>
        </Modal.Footer>
      </Modal.Dialog>
    </div>
  )
}

export default AddModalPlanner