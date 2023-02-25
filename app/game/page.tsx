import { useMemo } from "react";
import MemoryCard from "../../components/memoryCard/MemoryCard";
import cardData from "../../constants/memoryCards";
import { shuffleCards } from "../../utils";

const Game = () => {
  const memoryCards = useMemo(
    () => shuffleCards(cardData.concat(cardData)),
    [],
  );
  return (
    <ul className="grid grid-cols-8 gap-8 w-fit my-0 mx-auto">
      {memoryCards.map((card) => (
        <MemoryCard key={card.id} src={card.src} id={card.id} />
      ))}
    </ul>
  );
};

export default Game;
