import "./add-new-game.css";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Modal from "react-bootstrap/Modal";
import Card from "react-bootstrap/Card";
import { Button } from "react-bootstrap";
import { createNewGame } from "../../API/HTTP-protocols/http-protocols";
import { useContext } from "react";
import { GamesContext } from "../../context/user-info/games.context";

function AddGame({ show, setShow }) {
  const [gamesData, setGamesData, filterGamesData, setFilterGamesData] =
    useContext(GamesContext);

  async function createGame(body, token, email) {
    const games = await createNewGame(body, token, email);
    setGamesData([...gamesData, games]);
    setFilterGamesData([...filterGamesData, games]);
  }

  function addGame(e) {
    e.preventDefault();
    const token = localStorage.getItem("token");
    const email = localStorage.getItem("email");
    const body = new FormData(e.target);

    body.set("firstRelease", new Date(e.target.firstRelease.value).getTime());
    body.set("secondRelease", new Date(e.target.secondRelease.value).getTime());
    body.set("thirdRelease", new Date(e.target.thirdRelease.value).getTime());
    body.set("fourthRelease", new Date(e.target.fourthRelease.value).getTime());
    body.set("japanRelease", new Date(e.target.japanRelease.value).getTime());
    body.set(
      "northAmericaRelease",
      new Date(e.target.northAmericaRelease.value).getTime()
    );
    body.set("europeRelease", new Date(e.target.europeRelease.value).getTime());
    body.set(
      "australiaRelease",
      new Date(e.target.australiaRelease.value).getTime()
    );
    if (token) createGame(body, token, email);
    setShow(false);
  }
  return (
    <Modal
      show={show}
      fullscreen={true}
      backdrop="static"
      keyboard={false}
      onHide={() => setShow(false)}
      style={{
        minHeight: "100vh",
      }}
    >
      <Modal.Header closeButton>
        <Modal.Title
          style={{
            fontFamily: "rubik-bold",
            padding: "1rem",
          }}
        >
          Añadir juego
        </Modal.Title>
      </Modal.Header>
      <Form onSubmit={addGame}>
        <Row>
          <Col
            xs={{ span: 10, offset: 1 }}
            sm={{ span: 10, offset: 1 }}
            md={{ span: 10, offset: 1 }}
            lg={{ span: 10, offset: 1 }}
            xl={{ span: 10, offset: 1 }}
            xxl={{ span: 10, offset: 1 }}
          >
            <Card
              className="event-info_container"
              style={{
                border: "none",
                borderRadius: "0px",
                borderBottom: "0.5px solid #e5e5e5e5",
                paddingBottom: "2rem",
                paddingTop: "2rem",
              }}
            >
              <Col
                xs={{ span: 4, offset: 4 }}
                sm={{ span: 2, offset: 1 }}
                md={{ span: 2, offset: 1 }}
                lg={{ span: 2, offset: 1 }}
                xl={{ span: 2, offset: 0 }}
                xxl={{ span: 2, offset: 0 }}
              >
                <div className="d-flex flex-column align-items-center">
                  <Form.Group className="mb-3" controlId="formBasicFile">
                    <Form.Label> Subir Imagen</Form.Label>
                    <Form.Control
                      name="file"
                      type="file"
                      placeholder="select an image"
                    />
                  </Form.Group>
                </div>
              </Col>

              <Col
                xs={{ span: 11, offset: 1 }}
                sm={{ span: 6, offset: 1 }}
                md={{ span: 8, offset: 1 }}
                lg={{ span: 8, offset: 1 }}
                xl={{ span: 9, offset: 1 }}
                xxl={{ span: 9, offset: 1 }}
              >
                <Row>
                  <Col
                    xs={{ span: 10, offset: 1 }}
                    sm={{ span: 9, offset: 1 }}
                    md={{ span: 6, offset: 0 }}
                    lg={{ span: 5, offset: 0 }}
                    xl={{ span: 4, offset: 0 }}
                    xxl={{ span: 4, offset: 0 }}
                  >
                    <Form.Group className="mb-3" controlId="formBasicText">
                      <Form.Label> Nombre: </Form.Label>
                      <Form.Control
                        name="name"
                        type="text"
                        placeholder="Introduzca el nombre del juego..."
                        required
                      />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicText">
                      <Form.Label> Plataforma: </Form.Label>
                      <Form.Control
                        name="platform"
                        type="text"
                        placeholder="Introduzca el nombre de la plataforma..."
                        required
                      />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicText">
                      <Form.Label>Desarrollador:</Form.Label>
                      <Form.Control
                        name="developer"
                        type="text"
                        placeholder="Introduzca el nombre del desarrollador..."
                        required
                      />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicText">
                      <Form.Label>Distribuidor:</Form.Label>
                      <Form.Control
                        name="publisher"
                        type="text"
                        placeholder="Introduzca el nombre del distribuidor..."
                        required
                      />
                    </Form.Group>
                  </Col>

                  <Col
                    xs={{ span: 7, offset: 1 }}
                    sm={{ span: 9, offset: 1 }}
                    md={{ span: 5, offset: 0 }}
                    lg={{ span: 5, offset: 1 }}
                    xl={{ span: 4, offset: 0 }}
                    xxl={{ span: 4, offset: 0 }}
                  >
                    <Form.Group className="mb-3" controlId="formBasicDate">
                      <Form.Label>Fecha de primera publicación</Form.Label>
                      <Form.Control name="firstRelease" type="date" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicDate">
                      <Form.Label>Fecha de segunda publicación</Form.Label>
                      <Form.Control name="secondRelease" type="date" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicDate">
                      <Form.Label>Fecha de tercera publicación</Form.Label>
                      <Form.Control name="thirdRelease" type="date" />
                      <Form.Group className="mb-3" controlId="formBasicDate">
                        <Form.Label>Fecha de cuarta publicación</Form.Label>
                        <Form.Control name="fourthRelease" type="date" />
                      </Form.Group>
                    </Form.Group>
                  </Col>
                  <Col
                    xs={{ span: 7, offset: 1 }}
                    sm={{ span: 9, offset: 1 }}
                    md={{ span: 5, offset: 0 }}
                    lg={{ span: 5, offset: 0 }}
                    xl={{ span: 4, offset: 0 }}
                    xxl={{ span: 4, offset: 0 }}
                  >
                    <Form.Group className="mb-3" controlId="formBasicDate">
                      <Form.Label>Fecha de lanzamiento en Japón:</Form.Label>
                      <Form.Control name="japanRelease" type="date" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicDate">
                      <Form.Label>
                        Fecha de lanzamiento en América del Norte:
                      </Form.Label>
                      <Form.Control name="northAmericaRelease" type="date" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicDate">
                      <Form.Label>Fecha de lanzamiento en Europa:</Form.Label>
                      <Form.Control name="europeRelease" type="date" />
                      <Form.Group className="mb-3" controlId="formBasicDate">
                        <Form.Label>
                          Fecha de lanzamiento en Australia:
                        </Form.Label>
                        <Form.Control name="australiaRelease" type="date" />
                      </Form.Group>
                    </Form.Group>
                  </Col>

                  <Col
                    xs={{ span: 7, offset: 1 }}
                    sm={{ span: 9, offset: 1 }}
                    md={{ span: 5, offset: 0 }}
                    lg={{ span: 5, offset: 0 }}
                    xl={{ span: 4, offset: 0 }}
                    xxl={{ span: 4, offset: 0 }}
                  >
                    <Form.Group className="mb-3" controlId="formBasicText">
                      <Form.Label>Género:</Form.Label>
                      <Form.Control name="genre" type="text" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicText">
                      <Form.Label>Modo doble:</Form.Label>
                      <Form.Control name="dualMode" type="text" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicText">
                      <Form.Label>Características del cartucho:</Form.Label>
                      <Form.Control name="cartridgeFeature" type="text" />
                    </Form.Group>
                  </Col>

                  <Col
                    xs={{ span: 7, offset: 1 }}
                    sm={{ span: 9, offset: 1 }}
                    md={{ span: 5, offset: 0 }}
                    lg={{ span: 5, offset: 0 }}
                    xl={{ span: 4, offset: 0 }}
                    xxl={{ span: 4, offset: 0 }}
                  >
                    <Form.Group className="mb-3" controlId="formBasicText">
                      <Form.Label>Licencia:</Form.Label>
                      <Form.Control name="license" type="text" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicText">
                      <Form.Label>Tienda nintendo:</Form.Label>
                      <Form.Control name="nintendoShop" type="text" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicText">
                      <Form.Label>Versión Mac OS:</Form.Label>
                      <Form.Control name="macOsVersion" type="text" />
                    </Form.Group>
                  </Col>
                </Row>
              </Col>
            </Card>
          </Col>
        </Row>
        <Row
          style={{
            paddingTop: "2rem",
            paddingBottom: "4rem",
          }}
        >
          <Col
            xs={{ span: "auto", offset: 5 }}
            sm={{ span: "auto", offset: 6 }}
            md={{ span: "auto", offset: 8 }}
            lg={{ span: "auto", offset: 9 }}
            xl={{ span: "auto", offset: 9 }}
            xxl={{ span: "auto", offset: 9 }}
          >
            <Button className="addGame_button" type="submit">
              Añadir juego
            </Button>
          </Col>
          <Col
            xs={{ span: 1, offset: 0 }}
            sm={{ span: 1, offset: 0 }}
            md={{ span: 1, offset: 0 }}
            lg={{ span: 1, offset: 0 }}
            xl={{ span: 1, offset: 0 }}
            xxl={{ span: 1, offset: 0 }}
          >
            <Button className="addGame_button" onClick={() => setShow(false)}>
              Cancelar
            </Button>
          </Col>
        </Row>
      </Form>
    </Modal>
  );
}

export default AddGame;
