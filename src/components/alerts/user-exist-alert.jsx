import Alert from "react-bootstrap/Alert";

function UserExists({ show, setShow }) {
  if (show === true) {
    return (
      <Alert variant="warning" onClose={() => setShow(false)} dismissible>
        <Alert.Heading>
          Las contraseñas deben ser iguales, por favor, introduzca el mismo
          valor en ambos campos
        </Alert.Heading>
      </Alert>
    );
  }
}

export default UserExists;
