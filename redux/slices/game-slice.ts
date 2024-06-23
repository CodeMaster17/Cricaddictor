import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface teamName {
  teamA: string;
  teamB: string;
}

interface PlayerNames {
  teamA: string[];
  teamB: string[];
}

interface Toss {
  winner: "teamA" | "teamB" | "";
  choice: "bat" | "bowl" | "";
}

interface Score {
  teamA: number;
  teamB: number;
}

interface GameState {
  teamName: teamName;
  teamSize: number;
  players: PlayerNames;
  choosenSide: "teamA" | "teamB" | "";
  toss: Toss;
  score: Score;
  currentInnning: "teamA" | "teamB" | "";
  gameState:
    | "home"
    | "chooseTeamSize"
    | "enterPlayerNamesA"
    | "enterPlayerNamesB"
    | "chooseSide"
    | "toss"
    | "chooseBatBowl"
    | "play";
}

// defining the initial state
const initialState: GameState = {
  teamName: {
    teamA: "",
    teamB: "",
  },
  teamSize: 0,
  players: {
    teamA: [],
    teamB: [],
  },
  choosenSide: "",
  toss: {
    winner: "",
    choice: "",
  },
  score: {
    teamA: 0,
    teamB: 0,
  },
  currentInnning: "",
  gameState: "home",
};

const gameSlice = createSlice({
  name: "cricaddicor",
  initialState,
  reducers: {
    reducer_setTeamSize(state, action: PayloadAction<number>) {
      state.teamSize = action.payload;
    },
    reducer_setPlayerNames_teamA(state, action: PayloadAction<string[]>) {
      state.players.teamA = action.payload;
    },
    reducer_setPlayerNames_teamB(state, action: PayloadAction<string[]>) {
      state.players.teamA = action.payload;
    },
    reducer_chooseSide(state, action: PayloadAction<"teamA" | "teamB">) {
      state.choosenSide = action.payload;
    },
    reducer_setTossWinner(state, action: PayloadAction<"teamA" | "teamB">) {
      state.toss.winner = action.payload;
    },
    reducer_setTossChoice(state, action: PayloadAction<"bat" | "bowl">) {
      state.toss.choice = action.payload;
    },
    reducer_updateScore(
      state,
      action: PayloadAction<{ team: "teamA" | "teamB"; score: number }>
    ) {
      const { team, score } = action.payload;
      state.score[team] = score;
    },

    reducer_setGameState(
      state,
      action: PayloadAction<
        | "home"
        | "chooseTeamSize"
        | "enterPlayerNamesA"
        | "enterPlayerNamesB"
        | "chooseSide"
        | "toss"
        | "chooseBatBowl"
        | "play"
      >
    ) {
      state.gameState = action.payload;
    },
  },
});

export const {
  reducer_setTeamSize,
  reducer_setPlayerNames_teamA,
  reducer_setPlayerNames_teamB,
  reducer_chooseSide,
  reducer_setTossWinner,
  reducer_setTossChoice,
  reducer_updateScore,
  reducer_setGameState,
} = gameSlice.actions;

export default gameSlice.reducer;
