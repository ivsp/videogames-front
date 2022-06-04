import Alert from "react-bootstrap/Alert";

function WrongEmailOrPass({ show, setShow }) {
  if (show === true) {
    return (
      <Alert variant="danger" onClose={() => setShow(false)} dismissible>
        <Alert.Heading>
          El email o la contraseña son incorrectos, por favor, asegúrese de que
          los datos son correctos o regístrese si no lo ha hecho todavía.
        </Alert.Heading>
      </Alert>
    );
  }
}

export default WrongEmailOrPass;
