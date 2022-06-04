import Alert from "react-bootstrap/Alert";

function SuccessfulRegistration({ show, setShow }) {
  if (show === true) {
    return (
      <Alert variant="success" onClose={() => setShow(false)} dismissible>
        <Alert.Heading>
          Se ha enviado un email de confirmación a la dirección de correo
          introducida, por favor, valida el registro en el enlace que te hemos
          enviado.
        </Alert.Heading>
      </Alert>
    );
  }
}

export default SuccessfulRegistration;
