import genres from "@/constants/genres";
import GenreListItem from "./GenreListItem";

const GenreList = () => {
  return (
    <div className="py-3 px-2">
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
