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
  description_raw: string;
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
  genres: Genre[];
  publishers: Publisher[];
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

interface Publisher {
  id: number;
  name: string;
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

// 1. Interface for the 'data' object (video resolutions)
interface VideoData {
  480: string; // The keys are strings representing the resolution
  max: string;
}

// 2. Interface for a single item in the 'results' array
interface VideoItem {
  id: number;
  name: string;
  preview: string;
  data: VideoData; // Use the interface we defined above
}

interface FetchGameTrailerResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: VideoItem[]; // An array of the VideoItem interface
}

interface ImageResult {
  image: string;
  hidden: boolean;
}

interface FetchScreenshotsResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: ImageResult[];
}
