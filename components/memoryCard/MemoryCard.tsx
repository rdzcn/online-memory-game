"use client";

import { Dispatch, useState } from "react";
import Image from "next/image";
import classnames from "classnames";
import styles from "./memoryCard.module.css";
import { CardData } from "../../constants/memoryCards";
import { GameEvent, GameState, GAME_EVENTS } from "../../app/game/game.reducer";

interface MemoryCardProps {
  card: CardData;
  dispatch: Dispatch<GameEvent>;
  gameState: GameState;
}

const MemoryCard = ({ card, dispatch, gameState }: MemoryCardProps) => {
  return (
    <>
      <li
        className={classnames(`border rounded border-black p-4`)}
        style={{ perspective: "600px" }}
        onClick={() => {
          dispatch({ type: GAME_EVENTS.FLIP_CARD, data: card });
        }}
      >
        <div
          className={classnames(`${styles["memory-card"]}`, {
            [`${styles["is-flipped"]}`]:
              gameState.selectedCards.findIndex(
                (selectedCard: CardData) =>
                  selectedCard.id === card.id &&
                  selectedCard.pairIndex === card.pairIndex,
              ) !== -1 ||
              gameState.matchedCards.findIndex(
                (selectedCard: CardData) =>
                  selectedCard.id === card.id &&
                  selectedCard.pairIndex === card.pairIndex,
              ) !== -1,
          })}
        >
          <div className={`${styles["card"]} ${styles["card_back"]}`}>
            <Image src={card.src} alt={card.id} width={96} height={96} />
          </div>
          <div className={`${styles["card"]} ${styles["card_front"]}`}>
            <Image
              src="/images/flip.png"
              alt="placeholder"
              width={96}
              height={96}
            />
          </div>
        </div>
      </li>
    </>
  );
};

export default MemoryCard;
