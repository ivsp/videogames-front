import "./videogame-details.css";
import { useContext, useEffect, useState } from "react";
import Spinner from "react-bootstrap/Spinner";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { GamesContext } from "../../context/user-info/games.context";
import { Button, Card } from "react-bootstrap";
import notAvailable from "../../assets/images/image-not-available.jpg";
import { useNavigate, useParams } from "react-router-dom";
import { returnDateByTimeStamp } from "../../functions/functions";

function VideoGameDetails() {
  const [, , filterGamesData] = useContext(GamesContext);
  const [gameDetails, setGameDetails] = useState({});
  const [releases, setReleases] = useState([]);
  const { name } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    console.log(gameDetails?.australiaRelease);
    releases.splice(0, releases.length);
    setReleases([...releases]);
    const currentGame = filterGamesData.find((g) => g.name === name);
    setGameDetails(currentGame);
    currentGame?.othersReleases.forEach((r) => {
      if (r !== "-") {
        releases.push(r);
      }
    });
    setReleases([...releases]);
  }, []);

  return (
    <Row className="d-flex flex-column align-items-center">
      {filterGamesData.length > 0 ? (
        <Col>
          <Card
            className="d-flex flex-column align-items-center"
            style={{
              fontFamily: "rubik-regular",
              border: "none",
              paddingBottom: "2.5rem",
            }}
          >
            <Row
              className="d-flex flex-column align-items-center"
              style={{
                paddingTop: "1rem",
              }}
            >
              <Col>
                <img
                  style={{
                    height: "500px",
                  }}
                  src={
                    gameDetails?.file
                      ? `${process.env.REACT_APP_URL}/${gameDetails?.file}`
                      : notAvailable
                  }
                  alt={`Imagen del juego ${gameDetails?.name}`}
                />
              </Col>
            </Row>

            <Row>
              <Col
                className="pt-4"
                xs={{ span: 11, offset: 1 }}
                sm={{ span: 11, offset: 1 }}
                md={{ span: 11, offset: 1 }}
                lg={{ span: 11, offset: 1 }}
                xl={{ span: 11, offset: 1 }}
                xxl={{ span: 11, offset: 1 }}
                style={{
                  fontFamily: "rubik-semibold",
                }}
              >
                <h1>{gameDetails?.name}</h1>
              </Col>
              <Col
                className="pt-4"
                xs={{ span: 11, offset: 1 }}
                sm={{ span: 11, offset: 1 }}
                md={{ span: 11, offset: 1 }}
                lg={{ span: 5, offset: 1 }}
                xl={{ span: 5, offset: 1 }}
                xxl={{ span: 5, offset: 1 }}
              >
                <h4>Plataforma: {gameDetails?.platform}</h4>
                <h4>Distribuidor: {gameDetails?.publisher}</h4>
                <h4>Desarrollador: {gameDetails?.developer}</h4>
                <h4>
                  Fecha primera publicación:{" "}
                  {isNaN(gameDetails?.firstRelease)
                    ? gameDetails?.firstRelease
                    : returnDateByTimeStamp(gameDetails?.firstRelease)}
                </h4>
                {releases?.map((r, i) => {
                  if (r === null) {
                    return <h4 key={i}>{`${i + 2}ª Publicación: -`}</h4>;
                  } else if (isNaN(r)) {
                    return <h4 key={i}>{`${i + 2}ª Publicación: ${r}`}</h4>;
                  } else {
                    return (
                      <h4 key={i}>{`${
                        i + 2
                      }ª Publicación: ${returnDateByTimeStamp(r)}`}</h4>
                    );
                  }
                })}
                <h4>
                  Lanzamiento en Japón:{" "}
                  {isNaN(gameDetails?.japanRelease) ||
                  gameDetails?.japanRelease === null
                    ? gameDetails?.japanRelease
                    : returnDateByTimeStamp(gameDetails?.japanRelease)}
                </h4>
                <h4>
                  Lanzamiento en Norte América:{" "}
                  {isNaN(gameDetails?.northAmericaRelease) ||
                  gameDetails?.northAmericaRelease === null
                    ? gameDetails?.northAmericaRelease
                    : returnDateByTimeStamp(gameDetails?.northAmericaRelease)}
                </h4>
              </Col>
              <Col
                className="pt-4"
                xs={{ span: 11, offset: 1 }}
                sm={{ span: 11, offset: 1 }}
                md={{ span: 11, offset: 1 }}
                lg={{ span: 5, offset: 0 }}
                xl={{ span: 5, offset: 1 }}
                xxl={{ span: 5, offset: 1 }}
              >
                <h4>
                  Lanzamiento en Europa:{" "}
                  {isNaN(gameDetails?.europeRelease) ||
                  gameDetails?.europeRelease === null
                    ? gameDetails?.europeRelease
                    : returnDateByTimeStamp(gameDetails?.europeRelease)}
                </h4>
                <h4>
                  Lanzamiento en Australia:{" "}
                  {isNaN(gameDetails?.australiaRelease) ||
                  gameDetails?.australiaRelease === null
                    ? gameDetails?.australiaRelease
                    : returnDateByTimeStamp(gameDetails?.australiaRelease)}
                </h4>
                <h4>Género: {gameDetails?.genre}</h4>
                <h4>Modo dual: {gameDetails?.dualMode}</h4>
                <h4>
                  Características del juego: {gameDetails?.cartridgeFeature}
                </h4>
                <h4>Licenia: {gameDetails?.license}</h4>
                <h4>Versión Mac: {gameDetails?.macOsVersion}</h4>
                <h4>
                  Disponible en tienda nintendo: {gameDetails?.nintendoShop}
                </h4>
              </Col>
            </Row>

            <Row
              style={{
                paddingTop: "3rem",
              }}
            >
              {" "}
              <Col className="d-flex justify-content-center">
                <Button
                  className="applyFilter_button"
                  onClick={() => navigate("/")}
                  style={{
                    padding: "0.5rem 1rem",
                  }}
                >
                  ATRÁS
                </Button>
              </Col>
            </Row>
          </Card>
        </Col>
      ) : (
        <Col
          className="p-4 d-flex flex-column align-items-center"
          xs={{ span: "auto", offset: 3 }}
          sm={{ span: "auto", offset: 4 }}
          md={{ span: "auto", offset: 5 }}
          lg={{ span: "auto", offset: 5 }}
          xl={{ span: "auto", offset: 5 }}
          xxl={{ span: "auto", offset: 5 }}
        >
          <p
            style={{
              fontSize: "1.5rem",
            }}
          >
            {" "}
            Cargando los datos...
          </p>

          <Spinner
            style={{
              fontSize: "1.5rem",
            }}
            animation="border"
            role="status"
          >
            <span className="visually-hidden ">Loading...</span>
          </Spinner>
        </Col>
      )}
    </Row>
  );
}

export default VideoGameDetails;
