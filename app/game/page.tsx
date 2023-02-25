import MemoryCard from "../../components/memoryCard/MemoryCard";
import cardData from "../../constants/memoryCards";

const Game = () => {
  return (
    <ul className="grid grid-cols-4 gap-16 w-fit">
      {cardData.map((card) => (
        <MemoryCard key={card.id} src={card.src} id={card.id} />
      ))}
    </ul>
  );
};

export default Game;
