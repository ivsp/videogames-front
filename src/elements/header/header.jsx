import React, { useEffect, useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/col";
import Login from "../../components/login-register/login";
import Register from "../../components/login-register/register";
import LoginRegisterButtons from "../../components/loging-register-buttons/login-register-button";
import UserButton from "../../components/user-button/user-button";

function Header() {
  const [modalLoginShow, setModalLoginShow] = useState(false);
  const [modalRegisterShow, setModalRegisterShow] = useState(false);
  const [token, setToken] = useState(localStorage.getItem("token"));

  useEffect(() => {
    setToken(localStorage.getItem("token"));
  }, [modalLoginShow, token]);

  return (
    <Row
      style={{
        backgroundColor: "#333333",
      }}
    >
      <Col
        className="p-4"
        xs={{ span: 9, offset: 1 }}
        sm={{ span: 4, offset: 1 }}
        md={{ span: 4, offset: 1 }}
        lg={{ span: 5, offset: 1 }}
        xl={{ span: 6, offset: 1 }}
        xxl={{ span: 6, offset: 1 }}
      >
        <h1
          style={{
            color: "#ffffff",
            fontFamily: "rubik-bold",
          }}
        >
          VIDEOGAMES
        </h1>
      </Col>

      {token ? (
        <Col
          className=" p-md-4 d-flex justify-content-between align-items-center"
          xs={{ span: 1, offset: 0 }}
          sm={{ span: 1, offset: 4 }}
          md={{ span: 1, offset: 5 }}
          lg={{ span: 1, offset: 4 }}
          xl={{ span: 1, offset: 3 }}
          xxl={{ span: 1, offset: 3 }}
        >
          <UserButton setToken={setToken}></UserButton>
        </Col>
      ) : (
        <Col
          className=" p-md-4 d-flex justify-content-between align-items-center"
          xs={{ span: 10, offset: 1 }}
          sm={{ span: 5, offset: 1 }}
          md={{ span: 5, offset: 1 }}
          lg={{ span: 4, offset: 1 }}
          xl={{ span: 3, offset: 1 }}
          xxl={{ span: 3, offset: 1 }}
        >
          <LoginRegisterButtons
            setModalLoginShow={setModalLoginShow}
            setModalRegisterShow={setModalRegisterShow}
          ></LoginRegisterButtons>
        </Col>
      )}

      <Login
        show={modalLoginShow}
        onHide={() => setModalLoginShow(false)}
      ></Login>
      <Register
        show={modalRegisterShow}
        onHide={() => setModalRegisterShow(false)}
      ></Register>
    </Row>
  );
}
export default Header;
