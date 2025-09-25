import { getCroppedImageURL } from "@/lib/utils";

interface Props {
  genre: Genre;
}

const GenreListItem = ({ genre }: Props) => {
  return (
    <div className="flex items-center gap-2 cursor-pointer">
      <img
        src={getCroppedImageURL(genre.image_background)!}
        className="h-8 w-8 rounded-md"
      />
      <p className="text-lg">{genre.name}</p>
    </div>
  );
};

export default GenreListItem;
