import { create } from "zustand";

// 1. Define the shape of the query object
interface GameQuery {
  genreId: number | null;
  platformId: number | null;
  searchText: string | null;
  sortOrder: string | null;
}

// 2. Define the store shape
interface GameQueryStore {
  gameQuery: GameQuery;
  setGameQuery: (query: Partial<GameQuery>) => void;
  reset: () => void;
}

// 3. Define initial state (DRY)
const initialGameQuery: GameQuery = {
  genreId: null,
  platformId: null,
  searchText: null,
  sortOrder: null,
};

// 4. Create Zustand store
const useGameQueryStore = create<GameQueryStore>((set) => ({
  gameQuery: initialGameQuery,

  setGameQuery: (query) =>
    set((state) => ({
      gameQuery: { ...state.gameQuery, ...query },
    })),

  reset: () => set({ gameQuery: initialGameQuery }),
}));

export default useGameQueryStore;
