import React from "react";
import AddNewGame from "../../components/add-new-game/add-new-game";
import Filter from "../../components/filter/filter";
import Header from "../../elements/header/header";
import HomeBody from "../../elements/home-body/home-body";

function HomePage() {
  return (
    <React.Fragment>
      <Header></Header>
      <Filter></Filter>
      <AddNewGame></AddNewGame>
      <HomeBody></HomeBody>
    </React.Fragment>
  );
}

export default HomePage;
