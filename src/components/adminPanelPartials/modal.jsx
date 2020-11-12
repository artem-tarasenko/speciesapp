import React, {useState} from "react";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import EditIcon from '@material-ui/icons/Edit';

//standart component with some PROPS (icon, title, body) to use it in 2 cases
	//Button has 2 opstion of icons ADD and EDIT, other icons are not implemented by logic "?"
		//Standart component from react-boostrap
function ModalForm(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>


	  <a href="#" onClick={handleShow} class="ml-2 text-secondary d-flex align-items-center" type="submit">
	  	{props.icon === "add" ? <AddCircleOutlineIcon /> : <EditIcon />}
	  </a>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>{props.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{props.children}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Отменить
          </Button>
          <Button variant="primary">Сохранить</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalForm;
