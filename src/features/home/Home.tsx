import GameCard from "@/features/home/components/GameCard";
import useGames from "@/features/home/hooks/useGames";

const Home = () => {
  const { games, loading } = useGames();

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {games.map((game) => (
        <GameCard key={game.id} game={game} />
      ))}
    </div>
  );
};

export default Home;
