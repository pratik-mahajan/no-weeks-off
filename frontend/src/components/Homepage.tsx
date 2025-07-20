import { useTotalWorkouts } from "../hooks/useTotalWorkouts";

const Homepage = () => {

  const { workoutCount, isPending, error, isFetching } = useTotalWorkouts();

  if(isPending || isFetching) {
    return <div>Loading...</div>;
  }

  if(error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="h-full w-full flex-col items-center justify-center p-8 min-h-screen">
      <div className="flex-col flex items-center justify-center">
        <h1 className="text-5xl font-bold">NO WEEKS OFF</h1>
        <p>lifting every week since May 16, 2025</p>
        <p>Total workouts: {workoutCount}</p>
      </div>
    </div>
  );
};

export default Homepage;
