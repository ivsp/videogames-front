import "./add-new-game.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import styled, { keyframes } from "styled-components";
import { pulse } from "react-animations";
import AddGame from "./modal-add-game";
import CanNotAddGame from "../alerts/can-not-add-game";
import { useState } from "react";

function AddNewGame() {
  const pulseAnimation = keyframes`${pulse}`;
  const BouncyDiv = styled.div`
    animation: 1s ${pulseAnimation};
  `;

  const [showModal, setShowModal] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  function openModal() {
    if (localStorage.getItem("token")) {
      setShowModal(true);
    } else {
      setShowAlert(true);
    }
  }

  return (
    <Row
      style={{
        paddingTop: "4rem",
        paddingBottom: "4rem",
      }}
    >
      <Col
        className="pt-3"
        xs={{ span: 11, offset: 1 }}
        sm={{ span: 11, offset: 1 }}
        md={{ span: 11, offset: 1 }}
        lg={{ span: 5, offset: 1 }}
        xl={{ span: 5, offset: 1 }}
        xxl={{ span: 5, offset: 1 }}
      >
        <h2 className="text-uppercase">Añadir nuevo juego</h2>
        <BouncyDiv>
          <Button className="addGame_button" onClick={openModal}>
            Añadir juego
          </Button>
        </BouncyDiv>
        <AddGame show={showModal} setShow={setShowModal}></AddGame>
        <CanNotAddGame show={showAlert} setShow={setShowAlert}></CanNotAddGame>
      </Col>
    </Row>
  );
}

export default AddNewGame;
