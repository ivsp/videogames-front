import "./videogame-card.css";
import React, { useContext, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { getAllGames } from "../../API/HTTP-protocols/http-protocols";
import { GamesContext } from "../../context/user-info/games.context";

import notAvailable from "../../assets/images/image-not-available.jpg";
import { useNavigate } from "react-router-dom";
import { returnDateByTimeStamp } from "../../functions/functions";

function VideoGameCard() {
  const [, setGamesData, filterGamesData, setFilterGamesData] =
    useContext(GamesContext);
  const navigate = useNavigate();

  async function getGames() {
    const games = await getAllGames();
    setGamesData(games);
    setFilterGamesData(games);
  }

  useEffect(() => {
    getGames();
  }, []);

  return (
    <React.Fragment>
      {filterGamesData?.length < 0 ? (
        <Row>
          <Col
            className="px-5 py-5"
            xs={{ span: 10, offset: 1 }}
            sm={{ span: 10, offset: 1 }}
            md={{ span: 10, offset: 1 }}
            lg={{ span: 10, offset: 1 }}
            xl={{ span: 10, offset: 1 }}
            xxl={{ span: 10, offset: 1 }}
          >
            <h1>
              No se han encontrado resultados de búsqueda. Por favor, puebe con
              otros filtros
            </h1>
          </Col>
        </Row>
      ) : (
        <Row>
          {filterGamesData?.length > 0 ? (
            filterGamesData?.map((g, i) => {
              return (
                <Col
                  className="px-5 py-2"
                  key={i}
                  xs={{ span: 10, offset: "auto" }}
                  sm={{ span: 10, offset: "auto" }}
                  md={{ span: 6, offset: "auto" }}
                  lg={{ span: 6, offset: "auto" }}
                  xl={{ span: 4, offset: "auto" }}
                  xxl={{ span: 3, offset: "auto" }}
                  style={{
                    height: "100%",
                  }}
                >
                  <Card
                    style={{
                      height: "75vh",
                    }}
                  >
                    <Card.Img
                      style={{
                        height: "400px",
                      }}
                      className="d-flex flex-column justify-content-center align-items-center"
                      variant="top"
                      src={
                        g?.file !== "static/undefined"
                          ? `${process.env.REACT_APP_URL}/${g.file}`
                          : notAvailable
                      }
                    />
                    <Card.Body className="d-flex flex-column justify-content-between">
                      <Card.Title
                        className="card-body_tittle"
                        style={{
                          fontFamily: "rubik-semibold",
                        }}
                      >
                        {g.name}
                      </Card.Title>
                      <div>
                        <Card.Text className="card-body_parr colorgey">
                          Plataforma: {g.platform}
                        </Card.Text>
                        <Card.Text className="card-body_parr "></Card.Text>
                      </div>
                      <div>
                        <Card.Text className="card-body_parr colorgey">
                          Desarrollador: {g.developer}
                        </Card.Text>
                      </div>
                      <div>
                        <Card.Text className="card-body_parr colorgey">
                          Distribuidor: {g.publisher}
                        </Card.Text>
                        <Card.Text className="card-body_parr ">
                          Feha de lanzamiento:{" "}
                          {isNaN(g?.firstRelease) || g?.firstRelease === null
                            ? g?.firstRelease
                            : returnDateByTimeStamp(g?.firstRelease)}
                        </Card.Text>
                      </div>
                      <div>
                        <Card.Text className="card-body_parr colorgey">
                          Género: {g.genre}
                        </Card.Text>
                        <Card.Text className="card-body_parr ">
                          Modo dual: {g.dualMode}
                        </Card.Text>
                      </div>
                      <div className="d-flex justify-content-center">
                        <Button
                          className="applyFilter_button"
                          onClick={() => navigate(`/details/${g.name}`)}
                        >
                          VER MÁS
                        </Button>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              );
            })
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
      )}
    </React.Fragment>
  );
}

export default VideoGameCard;
