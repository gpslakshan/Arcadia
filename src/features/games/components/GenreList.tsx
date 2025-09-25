import apiClient from "@/services/api-client";
import { useEffect, useState } from "react";
import GenreListItem from "./GenreListItem";

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
    return <p>Loading...</p>;
  }

  return (
    <div>
      {error && <p className="text-red-400">{error}</p>}
      <div className="py-3 px-2 space-y-2">
        {genres.map((genre) => (
          <GenreListItem key={genre.id} genre={genre} />
        ))}
      </div>
    </div>
  );
};

export default GenreList;
