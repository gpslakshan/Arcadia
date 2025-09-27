import { fetchGameScreenshots } from "@/api/games";
import { useQuery } from "@tanstack/react-query";

interface Props {
  slug: string;
}

const GameScreenshots = ({ slug }: Props) => {
  const {
    data: screenshots,
    isLoading,
    error,
  } = useQuery<ImageResult[], Error>({
    queryKey: ["games", slug, "screenshots"],
    queryFn: () => fetchGameScreenshots(slug),
  });

  if (isLoading) {
    return <p>Screenshots Loading...</p>;
  }

  if (error) {
    throw error; // React Router will catch this and display the error page
  }

  if (!screenshots || screenshots.length === 0) {
    return null;
  }

  return (
    <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-5">
      {screenshots.map((screenshot, index) => (
        <img key={index} src={screenshot.image} alt={`screenshot-${index}`} />
      ))}
    </div>
  );
};

export default GameScreenshots;
