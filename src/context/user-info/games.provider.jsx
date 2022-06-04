import { GamesContext } from "./games.context";
import { useEffect, useState } from "react";
import { getAllGames } from "../../API/HTTP-protocols/http-protocols";

function GamesProvider({ children }) {
  const [gamesData, setGamesData] = useState([]);
  const [filterGamesData, setFilterGamesData] = useState([]);

  useEffect(() => {
    //hacer un get para tener los datos del servidor
    async function getGames() {
      const games = await getAllGames();
      setGamesData(games);
      setFilterGamesData(games);
    }
    getGames();
  }, []);

  return (
    <GamesContext.Provider
      value={[gamesData, setGamesData, filterGamesData, setFilterGamesData]}
    >
      {children}
    </GamesContext.Provider>
  );
}

export default GamesProvider;
