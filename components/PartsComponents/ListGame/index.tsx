// Import Library
import React, { useCallback, useEffect, useState } from "react";

// Import Components
import GameContent from "./gameContent";
import { getFeaturesGame } from "../../../services/fetchData";

export default function ListGame() {
  const [gameList, setGameList] = useState([]),
    API_IMAGE = process.env.NEXT_PUBLIC_API_IMAGE;

  // Callback Services
  const getFeaturesGameList = useCallback(async () => {
    const data = await getFeaturesGame();
    setGameList(data);
  }, []);

  useEffect(() => {
    getFeaturesGameList();
  }, []);

  return (
    <section className="featured-game pt-50 pb-50" id="games">
      <div className="container-fluid">
        <h2 className="text-4xl fw-bold color-palette-1 mb-30">
          Our Games
          <br />
          Recommended
        </h2>
        <div className="d-flex flex-row flex-lg-wrap overflow-setting justify-content-lg-between gap-lg-3 gap-4" data-aos="fade-up">
          {/* V1 */}
          {gameList.map((item: any, i: any) => (
            <GameContent key={i.id} href={`game/${item._id}`} urlImage={`${API_IMAGE}/cover-games/${item.coverGames}`} gameName={item.gameName} gameCategory={item.category.name} />
          ))}
        </div>
      </div>
    </section>
  );
}
