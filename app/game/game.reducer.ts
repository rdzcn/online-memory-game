import cardData, { CardData } from "../../constants/memoryCards";

export enum GAME_EVENTS {
  FLIP_CARD = "FLIP_CARD",
}

export interface GameEvent {
  type: GAME_EVENTS;
  data: CardData;
}

export enum GameStatus {
  idle = "idle",
  one = "one",
  two = "two",
  match = "match",
  miss = "miss",
}

export interface GameState {
  matchedCards: CardData[];
  // selectedCards: [CardData, CardData] | [CardData] | [];
  selectedCards: any;
  status: GameStatus;
  player1Score: number;
  player2Score: number;
}

export const initialGameState: GameState = {
  matchedCards: [],
  selectedCards: [],
  status: GameStatus.idle,
  player1Score: 0,
  player2Score: 0,
};

const gameReducer = (state: GameState, event: GameEvent) => {
  switch (state.status) {
    case "idle":
      if (event.type === GAME_EVENTS.FLIP_CARD) {
        return {
          ...state,
          selectedCards: [event.data],
          status: GameStatus.one,
        };
      }
      return state;
    case "one":
      if (event.type === GAME_EVENTS.FLIP_CARD) {
        return {
          ...state,
          selectedCards: [...state.selectedCards, event.data],
          status: GameStatus.two,
        };
      }
      return state;
    case "two":
      if (event.type === GAME_EVENTS.FLIP_CARD) {
        return {
          ...state,
          selectedCards: [],
          status: GameStatus.idle,
          matchedCards:
            state.selectedCards[0]?.id === state.selectedCards[1]?.id
              ? [...state.matchedCards, ...state.selectedCards]
              : [...state.matchedCards],
        };
      }
      return state;
    default:
      throw new Error(`Unhandled type: ${event.type}`);
  }
};

export default gameReducer;
