import { create } from "zustand";

// 1. Define an interface to represent the shape of our store
interface GameQueryStore {
  genreId: number | null;
  platformId: number | null;
  searchText: string | null;
  sortOrder: string | null;
  setGenreId: (id: number | null) => void;
  setPlatformId: (id: number | null) => void;
  setSearchText: (text: string | null) => void;
  setSortOrder: (order: string | null) => void;
  reset: () => void;
}

// 2. Create zustand store
const useGameQueryStore = create<GameQueryStore>((set) => ({
  // Initial state
  genreId: null,
  platformId: null,
  searchText: null,
  sortOrder: null,

  // Actions to update the state
  setGenreId: (id: number | null) => set({ genreId: id }),
  setPlatformId: (id: number | null) => set({ platformId: id }),
  setSearchText: (text: string | null) => set({ searchText: text }),
  setSortOrder: (order: string | null) => set({ sortOrder: order }),
  reset: () =>
    set({
      genreId: null,
      platformId: null,
      searchText: null,
      sortOrder: null,
    }),
}));

export default useGameQueryStore;
