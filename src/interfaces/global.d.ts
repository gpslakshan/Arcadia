// Root API Response
interface FetchGamesResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: Game[];
}

// Game Object
interface Game {
  id: number;
  slug: string;
  name: string;
  released: string | null;
  tba: boolean;
  background_image: string | null;
  rating: number;
  rating_top: number;
  ratings: Record<string, unknown>;
  ratings_count: number;
  reviews_text_count: string;
  added: number;
  added_by_status: Record<string, number>;
  metacritic: number | null;
  playtime: number;
  suggestions_count: number;
  updated: string;
  esrb_rating: EsrbRating | null;
  parent_platforms: { platform: Platform }[];
  platforms: GamePlatform[];
}

// ESRB Rating
interface EsrbRating {
  id: number;
  slug: string;
  name: string;
}

// Game Platform Info
interface GamePlatform {
  platform: Platform;
  released_at: string | null;
  requirements?: Requirements;
}

// Platform
interface Platform {
  id: number;
  slug: string;
  name: string;
}

// Platform Requirements
interface Requirements {
  minimum: string;
  recommended: string;
}
