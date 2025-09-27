import api from "@/lib/axios";

export async function fetchGames(params: {
  genres: number | null;
  parent_platforms: number | null;
  ordering: string | null;
  search: string;
}): Promise<Game[]> {
  const res = await api.get<FetchGamesResponse>("/games", { params });
  return res.data.results;
}
