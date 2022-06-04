import Alert from "react-bootstrap/Alert";

function DangerAlert({ show, setShow }) {
  if (show === true) {
    return (
      <Alert variant="danger" onClose={() => setShow(false)} dismissible>
        <Alert.Heading>
          Las contraseñas deben ser iguales, por favor, introduzca el mismo
          valor en ambos campos
        </Alert.Heading>
      </Alert>
    );
  }
}

export default DangerAlert;
