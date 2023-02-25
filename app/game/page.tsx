"use client";

import { Reducer, useMemo, useReducer, useState, useEffect } from "react";
import MemoryCard from "../../components/memoryCard/MemoryCard";
import cardData, { CardData } from "../../constants/memoryCards";
import { shuffleCards } from "../../utils";
import gameReducer, {
  GameEvent,
  GameState,
  initialGameState,
} from "./game.reducer";

const Game = () => {
  const [memoryCards, setMemoryCards] = useState<CardData[]>([]);
  const [gameState, dispatch] = useReducer<Reducer<GameState, GameEvent>>(
    gameReducer,
    initialGameState,
  );

  useEffect(() => {
    setMemoryCards(shuffleCards(cardData.concat(cardData)));
  }, []);
  // const memoryCards = useMemo(
  //   () => shuffleCards(cardData.concat(cardData)),
  //   [],
  // );
  return (
    <ul className="grid grid-cols-6 gap-8 w-fit my-0 mx-auto">
      {memoryCards.map((card, index) => (
        <MemoryCard
          key={`${card.id}_${index}`}
          card={card}
          dispatch={dispatch}
          gameState={gameState}
        />
      ))}
    </ul>
  );
};

export default Game;
