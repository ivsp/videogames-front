import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { logInUser } from "../../API/HTTP-protocols/http-protocols";
import WrongEmailOrPass from "../alerts/wrong-email-pass";

function Login(props) {
  const [showWrongEmailOrPAssAlert, setShowWrongEmailOrPAssAlert] =
    useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    localStorage.setItem("email", e.target.email.value);
    const body = {
      email: e.target.email.value,
      password: e.target.password.value,
    };
    const data = await logInUser(body);
    if (data.status === 404) {
      //Alert -> Email o contraseña incorrectos
      setShowWrongEmailOrPAssAlert(true);
    } else {
      localStorage.setItem("token", data.access_token);
      props.onHide(false);
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
          INICIO DE SESIÓN
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Datos para el inicio de sesión</h4>
        <Form onSubmit={onSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email:</Form.Label>
            <Form.Control
              name="email"
              type="email"
              placeholder="Introduzca su email..."
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Contraseña:</Form.Label>
            <Form.Control
              name="password"
              type="password"
              placeholder="Introduzca su contraseña..."
              required
            />
          </Form.Group>
          <WrongEmailOrPass
            show={showWrongEmailOrPAssAlert}
            setShow={setShowWrongEmailOrPAssAlert}
          ></WrongEmailOrPass>
          <Button
            className="applyFilter_button"
            type="submit"
            style={{ width: "100%", padding: "0.5rem 0rem" }}
          >
            Acceder
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
}

export default Login;
