import "./filter.css";
import { useContext, useEffect, useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import { GamesContext } from "../../context/user-info/games.context";
import { Accordion } from "react-bootstrap";
import { getAllGames } from "../../API/HTTP-protocols/http-protocols";

function Filter() {
  const [gamesData, setGamesData, filterGamesData, setFilterGamesData] =
    useContext(GamesContext);
  const [platformOptions, setPlatformOptions] = useState([]);
  const [developerOptions, setDeveloperOptions] = useState([]);
  const [plubisherOptions, setPublisherOptions] = useState([]);
  const [genreOptions, setGenreOptions] = useState([]);
  const [gamesNamesToOrder, setGamesNamesToOrder] = useState([]);

  const [gameName, setGameName] = useState("");
  const [platformNAme, setPlatformNAme] = useState("");

  async function getGames() {
    const games = await getAllGames();
    setGamesData(games);
    setFilterGamesData(games);
    console.log(games);
  }

  useEffect(() => {
    platformOptions.splice(0, platformOptions.length);
    setPlatformOptions([...platformOptions]);
    developerOptions.splice(0, developerOptions.length);
    setDeveloperOptions([...developerOptions]);
    plubisherOptions.splice(0, plubisherOptions.length);
    setPublisherOptions([...plubisherOptions]);
    genreOptions.splice(0, genreOptions.length);
    setGenreOptions([...genreOptions]);

    gamesData.forEach((g) => {
      if (g.platform !== "-") {
        const platform = platformOptions.find((p) => p === g.platform);
        if (platform === undefined) {
          platformOptions.push(g.platform);
          setPlatformOptions([...platformOptions]);
        }
      }
    });
    gamesData.forEach((g) => {
      if (g.developer !== "-") {
        const developer = developerOptions.find((d) => d === g.developer);
        if (developer === undefined) {
          developerOptions.push(g.developer);
          setDeveloperOptions([...developerOptions]);
        }
      }
    });

    gamesData.forEach((g) => {
      if (g.plubisher !== "-") {
        const publisher = plubisherOptions.find((p) => p === g.publisher);
        if (publisher === undefined) {
          plubisherOptions.push(g.publisher);
          setPublisherOptions([...plubisherOptions]);
        }
      }
    });
    gamesData.forEach((g) => {
      if (g.genre !== "-") {
        const genre = genreOptions.find((g) => g === g.genre);
        if (genre === undefined) {
          genreOptions.push(g.genre);
          setGenreOptions([...genreOptions]);
        }
      }
    });
  }, [filterGamesData]);

  function applyFilters(e) {
    /**
     * Función que aplica los filtros que establece el ususario
     */
    e.preventDefault();
    console.log(e.target.platform.value);
    console.log(e.target.developer.value);
    console.log(e.target.publisher.value);
    console.log(e.target.dualMode.value);
    console.log(e.target.genre.value);
    console.log(e.target.nintendoShop.checked);
    const newArray = [];
    filterGamesData.forEach((g) => {
      if (
        g.platform === e.target.platform.value ||
        g.developer === e.target.developer.value ||
        g.plublisher === e.target.publisher.value ||
        g.genre === e.target.genre.value ||
        g.dualMode === e.target.dualMode.value ||
        e.target.nintendoShop.checked === true
      ) {
        newArray.push(g);
        console.log(newArray);
      }
    });
    console.log("antes de borrar", filterGamesData);

    filterGamesData.splice(0, filterGamesData.length);
    setFilterGamesData(newArray);
    console.log("despues de borrar", filterGamesData);
  }

  function deleteFilter() {
    /**
     * Esta función restablece los valores del array filtrado a los
     * valores originales, los que tiene cuando se hace el fetch a la base
     * de datos.
     */
    console.log(gamesData);
    filterGamesData.splice(0, filterGamesData.length);
    getGames();
  }

  function orderAlphabeticallyByName() {
    /**
     * Esta función ordena los resultados por nombre alfabéticamente
     */
    //1. Vacio el array a ordenar
    const sortArray = [];
    gamesNamesToOrder.splice(0, gamesNamesToOrder.length);
    setGamesNamesToOrder([...gamesNamesToOrder]);

    //2. Obtengo los nombres y los ordeno en un array
    filterGamesData.forEach((g) => {
      gamesNamesToOrder.push(g.name);
      gamesNamesToOrder.sort();
      setGamesNamesToOrder([...gamesNamesToOrder]);
    });

    //3. Recorro el array ordenado y busco el elemento ordenado en el array de juegos
    //hago push al array ordenado cuando encuentro el elemento
    gamesNamesToOrder.forEach((name) => {
      const newArray = filterGamesData.find((g) => g.name === name);
      if (newArray !== undefined) {
        sortArray.push(newArray);
      }
    });
    //4.Vacío el array filtrado y lo actualizo con el ordenado
    filterGamesData.splice(0, filterGamesData.length);
    setFilterGamesData(sortArray);
  }

  function filterByGameNameAndPlatform(
    currentGames,
    gameNameSearch,
    gamePlatformSearch
  ) {
    /**
     * Función que filtra los juegos por nombre y plataforma
     */
    const name = gameNameSearch.toLowerCase();
    const platform = gamePlatformSearch.toLowerCase();
    return currentGames.filter(
      (g) =>
        g.name.toLowerCase().includes(name) &&
        g.platform.toLowerCase().includes(platform)
    );
  }

  function filterByGameName(e) {
    /**
     * Esta función filtra los resultados por nombre
     */
    setGameName(e.target.value);
    const newFiltered = filterByGameNameAndPlatform(
      gamesData,
      e.target.value,
      platformNAme
    );
    setFilterGamesData(newFiltered);
  }

  function filterByGamePlatform(e) {
    /**
     * Esta función filtra los resultados por plataforma
     */
    setPlatformNAme(e.target.value);
    const newFiltered = filterByGameNameAndPlatform(
      gamesData,
      gameName,
      e.target.value
    );
    setFilterGamesData(newFiltered);
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
        <h2 className="text-uppercase">Encuentra tu juego</h2>
        <Row
          className="pt-3"
          style={{
            width: "80vw",
          }}
        >
          <Form onSubmit={applyFilters} className="d-flex flex-column gap-1">
            <Col
              className="d-flex  flex-column align-items-sm-end flex-sm-row  gap-2"
              xs={{ span: 11, offset: 0 }}
              sm={{ span: 11, offset: 0 }}
              md={{ span: 11, offset: 0 }}
              lg={{ span: 11, offset: 0 }}
              xl={{ span: 11, offset: 0 }}
              xxl={{ span: 11, offset: 0 }}
            >
              <Form.Group controlId="formBasicTest">
                <Form.Label
                  style={{
                    paddingTop: "0.3rem",
                  }}
                >
                  Filtrar por nombre:
                </Form.Label>
                <Form.Control
                  onChange={filterByGameName}
                  style={{
                    fontFamily: "rubik-regular",
                  }}
                  className=" border-1 bg-transparent text-center reset-inputs"
                  type="text"
                  placeholder="Introduce un nombre..."
                />
              </Form.Group>
              <Form.Group controlId="formBasicText">
                <Form.Label
                  style={{
                    paddingTop: "0.3rem",
                  }}
                >
                  Filtrar por plataforma:
                </Form.Label>
                <Form.Control
                  onChange={filterByGamePlatform}
                  style={{
                    fontFamily: "rubik-regular",
                  }}
                  className=" border-1 bg-transparent text-center reset-inputs"
                  type="text"
                  placeholder="Introduce una plataforma..."
                />
              </Form.Group>
            </Col>

            <Col className="d-flex  flex-column flex-sm-row gap-2"></Col>

            <Row
              style={{
                width: "80vw",
              }}
            >
              <Accordion
                style={{
                  padding: "0px",
                }}
              >
                <Accordion.Item>
                  <Accordion.Header>Más filtros</Accordion.Header>
                  <Accordion.Body>
                    <Col
                      xs={{ span: 12, offset: 0 }}
                      sm={{ span: 12, offset: 0 }}
                      md={{ span: 12, offset: 0 }}
                      lg={{ span: 12, offset: 0 }}
                      xl={{ span: 12, offset: 0 }}
                      xxl={{ span: 12, offset: 0 }}
                    >
                      <Button
                        className="order_button"
                        onClick={orderAlphabeticallyByName}
                      >
                        Ordenar alfabéticamente
                      </Button>
                      <Row>
                        <Col
                          xs={{ span: 11, offset: 0 }}
                          sm={{ span: 11, offset: 0 }}
                          md={{ span: 11, offset: 0 }}
                          lg={{ span: 5, offset: 0 }}
                          xl={{ span: 5, offset: 0 }}
                          xxl={{ span: 5, offset: 0 }}
                        >
                          <label
                            htmlFor="platform_select"
                            style={{
                              paddingTop: "1rem",
                            }}
                          >
                            Plataforma:
                          </label>
                          <Form.Select id="platform_select" name="platform">
                            <option>Selecciona una plataforma</option>
                            {platformOptions?.length > 0
                              ? platformOptions.map((p, i) => {
                                  return (
                                    <option key={i} value={p}>
                                      {p}
                                    </option>
                                  );
                                })
                              : ""}
                          </Form.Select>
                          <label
                            htmlFor="developer_select"
                            style={{
                              paddingTop: "1rem",
                            }}
                          >
                            Desarrollador:
                          </label>
                          <Form.Select id="developer_select" name="developer">
                            <option>Selecciona un desarrollador</option>
                            {developerOptions?.length > 0
                              ? developerOptions.map((d, i) => {
                                  return (
                                    <option key={i} value={d}>
                                      {d}
                                    </option>
                                  );
                                })
                              : ""}
                          </Form.Select>
                          <label
                            htmlFor="publisher_select"
                            style={{
                              paddingTop: "1rem",
                            }}
                          >
                            Distribuidor:
                          </label>
                          <Form.Select id="publisher_select" name="publisher">
                            <option>Selecciona un distribuidor</option>
                            {plubisherOptions?.length > 0
                              ? plubisherOptions.map((p, i) => {
                                  return (
                                    <option key={i} value={p}>
                                      {p}
                                    </option>
                                  );
                                })
                              : ""}
                          </Form.Select>
                        </Col>
                        <Col
                          xs={{ span: 11, offset: 0 }}
                          sm={{ span: 11, offset: 0 }}
                          md={{ span: 11, offset: 0 }}
                          lg={{ span: 5, offset: 1 }}
                          xl={{ span: 5, offset: 1 }}
                          xxl={{ span: 5, offset: 1 }}
                        >
                          <label
                            htmlFor="genre_select"
                            style={{
                              paddingTop: "1rem",
                            }}
                          >
                            Género:
                          </label>
                          <Form.Select id="genre_select" name="genre">
                            <option>Selecciona un género</option>
                            {genreOptions?.length > 0
                              ? genreOptions.map((g, i) => {
                                  return (
                                    <option key={i} value={g}>
                                      {g}
                                    </option>
                                  );
                                })
                              : ""}
                          </Form.Select>
                          <p
                            style={{
                              paddingTop: "1rem",
                            }}
                          >
                            Modo dual:
                          </p>
                          <Form.Check
                            type="radio"
                            name="dualMode"
                            label="Yes"
                            value="Yes"
                          />
                          <Form.Check
                            type="radio"
                            name="dualMode"
                            label="No"
                            value="No"
                          />
                          <p
                            style={{
                              paddingTop: "1rem",
                            }}
                          >
                            Tienda Nintendo:
                          </p>
                          <Form.Check
                            type="checkbox"
                            name="nintendoShop"
                            label="Yes"
                            style={{
                              paddingBottom: "1rem",
                            }}
                          />
                          <div className="d-flex aling-items-center gap-4">
                            <Button
                              type="submit"
                              className="applyFilter_button"
                              style={{
                                width: "200px",
                                height: "40px",
                                marginBottom: "1rem",
                              }}
                            >
                              Aplicar filtros
                            </Button>
                            <Button
                              className="deleteFilter_button"
                              onClick={deleteFilter}
                              variant="warning"
                              style={{
                                width: "200px",
                                height: "40px",
                              }}
                            >
                              Borrar filtros
                            </Button>
                          </div>
                        </Col>
                      </Row>
                    </Col>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Row>
          </Form>
        </Row>
      </Col>
    </Row>
  );
}

export default Filter;
