import apiClient from "@/services/api-client";
import { useEffect, useState } from "react";
import GenreListItem from "./GenreListItem";
import GenreListItemLoadingSkeleton from "./GenreListItemLoadingSkeleton";

const GenreList = () => {
  const [genres, setGenres] = useState<Genre[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    apiClient
      .get<FetchGenresResponse>("/genres")
      .then((res) => setGenres(res.data.results))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div className="py-3 px-2 space-y-2">
        {Array.from({ length: 19 }).map((_, index) => (
          <GenreListItemLoadingSkeleton key={index} />
        ))}
      </div>
    );
  }

  return (
    <div className="py-3 px-2">
      {error && <p className="text-red-400">{error}</p>}
      <h1 className="text-2xl font-bold mb-5">Genres</h1>
      <div className="space-y-2">
        {genres.map((genre) => (
          <GenreListItem key={genre.id} genre={genre} />
        ))}
      </div>
    </div>
  );
};

export default GenreList;
