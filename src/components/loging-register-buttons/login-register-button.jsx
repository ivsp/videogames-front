import Button from "react-bootstrap/Button";

function LoginRegisterButtons({ setModalLoginShow, setModalRegisterShow }) {
  return (
    <>
      <Button
      
        style={{
          fontWeight: "bold",
        }}
        variant="light"
        onClick={() => setModalLoginShow(true)}
      >
        Iniciar Sesión
      </Button>
      <Button
        style={{
          fontWeight: "bold",
        }}
        variant="light"
        onClick={() => setModalRegisterShow(true)}
      >
        Registro
      </Button>
    </>
  );
}

export default LoginRegisterButtons;
