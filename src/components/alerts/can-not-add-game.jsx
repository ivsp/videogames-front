import Alert from "react-bootstrap/Alert";

function CanNotAddGame({ show, setShow }) {
  if (show === true) {
    return (
      <Alert variant="danger" onClose={() => setShow(false)} dismissible>
        <Alert.Heading>
          Debe estar registrado y tener la sesión iniciada para poder añadir un
          juego.
        </Alert.Heading>
      </Alert>
    );
  }
}

export default CanNotAddGame;
