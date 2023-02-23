import MemoryCard from "../../components/MemoryCard";
import cardData from "../../constants/memoryCards";

const Game = () => {
  return (
    <ul className="grid grid-cols-4 gap-16 w-fit">
      {cardData.map((card) => {
        return (
          <li>
            <MemoryCard key={card.id} src={card.src} id={card.id} />
          </li>
        );
      })}
    </ul>
  );
};

export default Game;
