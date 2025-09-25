import { getCroppedImageURL } from "@/lib/utils";
import useGameQueryStore from "@/stores/game-query";

interface Props {
  genre: Genre;
}

const GenreListItem = ({ genre }: Props) => {
  const selectedGenreId = useGameQueryStore((s) => s.genreId);
  const setGenreId = useGameQueryStore((s) => s.setGenreId);

  return (
    <div className="flex items-center gap-2">
      <img
        src={getCroppedImageURL(genre.image_background)!}
        className="h-8 w-8 rounded-md"
      />
      <p
        className={`cursor-pointer hover:underline ${
          selectedGenreId === genre.id ? "text-xl font-bold" : "text-lg"
        }`}
        onClick={() => {
          if (genre.id === selectedGenreId) {
            setGenreId(null);
          } else {
            setGenreId(genre.id);
          }
        }}
      >
        {genre.name}
      </p>
    </div>
  );
};

export default GenreListItem;
