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
  match = "match",
  miss = "miss",
}

export interface GameState {
  matchedCards: CardData[];
  selectedCard: CardData | null;
  status: GameStatus;
  player1Score: number;
  player2Score: number;
}

export const initialGameState: GameState = {
  matchedCards: [],
  selectedCard: null,
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
          selectedCard: event.data,
          status: GameStatus.one,
        };
      }
      return state;
    case "one":
      if (event.type === GAME_EVENTS.FLIP_CARD) {
        return {
          ...state,
          selectedCard: null,
          status: GameStatus.idle,
          matchedCards:
            state.selectedCard?.id === event.data.id
              ? [...state.matchedCards, event.data]
              : [...state.matchedCards],
        };
      }
      return state;
    default:
      throw new Error(`Unhandled type: ${event.type}`);
  }
};

export default gameReducer;
