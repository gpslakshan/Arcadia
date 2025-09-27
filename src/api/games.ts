import api from "@/lib/axios";

export async function fetchGames(params: {
  genres: number | null;
  parent_platforms: number | null;
  ordering: string | null;
  search: string;
  page?: number; // Add page parameter
}): Promise<FetchGamesResponse> {
  const res = await api.get<FetchGamesResponse>("/games", {
    params: {
      ...params,
      page: params.page || 1, // Default to page 1
      page_size: 20, // Optional: control how many games per page
    },
  });
  return res.data; // Return the full response, not just results
}

export async function fetchGameDetails(slug: string): Promise<Game> {
  const res = await api.get(`/games/${slug}`);
  return res.data;
}

export async function fetchGameTrailer(slug: string): Promise<VideoItem[]> {
  const res = await api.get<FetchGameTrailerResponse>(`/games/${slug}/movies`);
  return res.data.results;
}
