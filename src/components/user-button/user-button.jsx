import { useState } from "react";
import Nav from "react-bootstrap/Nav";
import Offcanvas from "react-bootstrap/Offcanvas";
import { FaUserCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function UserButton(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const navigate = useNavigate();

  const logOut = () => {
    const token = localStorage.getItem("token");
    if (token) {
      localStorage.removeItem("token");
      navigate("/");
    }
  };

  return (
    <>
      <FaUserCircle
        style={{
          color: "#ffffff",
          fontSize: "2rem",
          cursor: "pointer",
        }}
        onClick={handleShow}
      ></FaUserCircle>

      <Offcanvas show={show} onHide={handleClose} {...props}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title
            style={{
              fontSize: "1.5rem",
              fontFamily: "rubik-semibold",
            }}
          >
            IVAN
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Nav
          style={{
            fontSize: "1rem",
            fontFamily: "rubik-regular",
          }}
          className="flex-column "
        >
          <Nav.Link
            className="nav_link p-3"
            onClick={() => {
              setShow(false);
              logOut();
              props.setToken(localStorage.getItem("token"));
            }}
          >
            Cerrar sesión
          </Nav.Link>
        </Nav>
      </Offcanvas>
    </>
  );
}

export default UserButton;
