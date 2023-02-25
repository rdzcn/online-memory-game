import { CardData } from "../constants/memoryCards";

// Fisher Yates Shuffle
function swap(array: CardData[], i: number, j: number) {
  const temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}
export function shuffleCards(array: CardData[]) {
  const length = array.length;
  for (let i = length; i > 0; i--) {
    const randomIndex = Math.floor(Math.random() * i);
    const currIndex = i - 1;
    swap(array, currIndex, randomIndex);
  }
  return array;
}
