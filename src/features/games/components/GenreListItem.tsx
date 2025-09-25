import { getCroppedImageURL } from "@/lib/utils";
import useGameQueryStore from "@/stores/game-query";

interface Props {
  genre: Genre;
}

const GenreListItem = ({ genre }: Props) => {
  const { setGenreId } = useGameQueryStore();

  return (
    <div className="flex items-center gap-2">
      <img
        src={getCroppedImageURL(genre.image_background)!}
        className="h-8 w-8 rounded-md"
      />
      <p
        className="text-lg cursor-pointer hover:underline"
        onClick={() => setGenreId(genre.id)}
      >
        {genre.name}
      </p>
    </div>
  );
};

export default GenreListItem;
