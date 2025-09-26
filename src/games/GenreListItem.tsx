import { getCroppedImageURL } from "@/lib/utils";
import useGameQueryStore from "@/stores/game-query";

interface Props {
  genre: Genre;
}

const GenreListItem = ({ genre }: Props) => {
  const selectedGenreId = useGameQueryStore((s) => s.gameQuery.genreId);
  const setGameQuery = useGameQueryStore((s) => s.setGameQuery);

  return (
    <div className="flex items-center gap-2">
      <img
        src={getCroppedImageURL(genre.image_background)!}
        className="h-8 w-8 rounded-md object-cover"
      />
      <p
        className={`cursor-pointer hover:underline ${
          selectedGenreId === genre.id
            ? "text-lg underline font-bold"
            : "text-base"
        }`}
        onClick={() => {
          if (genre.id === selectedGenreId) {
            setGameQuery({ genreId: null, genreName: null });
          } else {
            setGameQuery({ genreId: genre.id, genreName: genre.name });
          }
        }}
      >
        {genre.name}
      </p>
    </div>
  );
};

export default GenreListItem;
