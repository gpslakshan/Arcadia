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

// Represents a single genre
interface Genre {
  id: number;
  name: string;
  slug: string;
  games_count: number;
  image_background: string;
}

// Represents the paginated response from the API
interface FetchGenresResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: Genre[];
}

interface FetchPlatformsResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: Platform[];
}

interface DetailedGame {
  id: number;
  slug: string;
  name: string;
  name_original: string;
  description: string;
  description_raw: string;
  metacritic: number;
  metacritic_platforms: {
    metascore: number;
    url: string;
  }[];
  released: string; // ISO date string
  tba: boolean;
  updated: string; // ISO datetime string
  background_image: string;
  background_image_additional: string;
  website: string;
  rating: number;
  rating_top: number;
  ratings: Record<string, unknown>;
  reactions: Record<string, unknown>;
  added: number;
  added_by_status: Record<string, unknown>;
  playtime: number;
  screenshots_count: number;
  movies_count: number;
  creators_count: number;
  achievements_count: number;
  parent_achievements_count: string;
  reddit_url: string;
  reddit_name: string;
  reddit_description: string;
  reddit_logo: string;
  reddit_count: number;
  twitch_count: string;
  youtube_count: string;
  reviews_text_count: string;
  ratings_count: number;
  suggestions_count: number;
  alternative_names: string[];
  metacritic_url: string;
  parents_count: number;
  additions_count: number;
  game_series_count: number;
  esrb_rating: {
    id: number;
    slug: string;
    name: string;
  };
  platforms: {
    platform: {
      id: number;
      slug: string;
      name: string;
    };
    released_at: string;
    requirements: {
      minimum: string;
      recommended: string;
    };
  }[];
}
