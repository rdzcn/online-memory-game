"use client";

import { Reducer, useMemo, useReducer, useState, useEffect } from "react";
import MemoryCard from "../../components/memoryCard/MemoryCard";
import cardData, { CardData } from "../../constants/memoryCards";
import { shuffleCards } from "../../utils";
import gameReducer, {
  GameEvent,
  GameState,
  GameStatus,
  GAME_EVENTS,
  initialGameState,
} from "./game.reducer";

const Game = () => {
  const [memoryCards, setMemoryCards] = useState<CardData[]>([]);
  const [gameState, dispatch] = useReducer<Reducer<GameState, GameEvent>>(
    gameReducer,
    initialGameState,
  );

  console.log("GAME STATE", gameState);

  useEffect(() => {
    if (gameState.status === GameStatus.idle) {
      dispatch({ type: GAME_EVENTS.GET_READY, data: {} });
    }
  }, [gameState.status]);

  useEffect(() => {
    const pairedCards: CardData[] = [...cardData].map((card) => {
      return { ...card, pairIndex: 1 };
    });
    setMemoryCards(shuffleCards([...cardData, ...pairedCards]));
  }, []);

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
