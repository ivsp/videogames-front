import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { registerNewUser } from "../../API/HTTP-protocols/http-protocols";
import DangerAlert from "../alerts/danger-alert";
import SuccessfulRegistration from "../alerts/successful-registration";
//import UserExists from "../alerts/user-exist-alert";

function Register(props) {
  const [showDangerAlert, setShowDangerAlert] = useState(false);
  const [showSuccessrAlert, setShowSuccessAlert] = useState(false);
  // const [showUserExistsAlert, setShowUserExistsAlert] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    if (e.target.password1.value === e.target.password2.value) {
      const body = {
        name: e.target.name.value,
        email: e.target.email.value,
        password: e.target.password1.value,
      };
      await registerNewUser(body);
      setShowSuccessAlert(true);
    } else {
      setShowDangerAlert(true);
    }
  };

  return (
    <Modal
      {...props}
      aria-labelledby="contained-modal-title-vcenter"
      style={{
        opacity: "1",
      }}
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          REGISTRO DE USUARIO
        </Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <h4> Datos para el registro:</h4>
        <Form onSubmit={onSubmit}>
          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Nombre</Form.Label>
            <Form.Control
              name="name"
              type="text"
              placeholder="Ingrese su nombre..."
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              name="email"
              type="email"
              placeholder="Ingrese su email..."
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword1">
            <Form.Label>Contraseña</Form.Label>
            <Form.Control
              name="password1"
              type="password"
              placeholder="Escriba una contraseña..."
              required
            />
          </Form.Group>
          <DangerAlert
            show={showDangerAlert}
            setShow={setShowDangerAlert}
          ></DangerAlert>
          <Form.Group className="mb-3" controlId="formBasicPassword2">
            <Form.Label>Contraseña</Form.Label>
            <Form.Control
              name="password2"
              type="password"
              placeholder="Repita su contraseña..."
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <div className="d-flex gap-2">
              <Form.Check type="checkbox" required />
              <p
                className="termsandconditions"
                //onClick={() => navigate("/")}
              >
                Términos y condiciones
              </p>
            </div>
          </Form.Group>
          <SuccessfulRegistration
            show={showSuccessrAlert}
            setShow={setShowSuccessAlert}
          ></SuccessfulRegistration>
          {/* <UserExists
            show={showUserExistsAlert}
            setShow={setShowUserExistsAlert}
          ></UserExists> */}
          <Button
            className="applyFilter_button"
            type="submit"
            style={{ width: "100%", padding: "0.5rem 0rem" }}
          >
            Registrarse
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
}

export default Register;
