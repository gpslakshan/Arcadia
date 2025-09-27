import { fetchGameTrailer } from "@/api/games";
import { useQuery } from "@tanstack/react-query";

interface Props {
  slug: string;
}

const GameTrailer = ({ slug }: Props) => {
  const {
    data: trailers,
    isLoading,
    error,
  } = useQuery<VideoItem[], Error>({
    queryKey: ["games", slug, "movies"],
    queryFn: () => fetchGameTrailer(slug),
  });

  if (isLoading) {
    return null;
  }

  if (error) {
    throw error; // React Router will catch this and display the error page
  }

  if (!trailers || trailers.length === 0) {
    return null;
  }

  const firsTrailer = trailers[0];

  return (
    <video
      src={firsTrailer.data[480]}
      poster={firsTrailer.preview}
      controls
      className="mt-12"
    />
  );
};

export default GameTrailer;
