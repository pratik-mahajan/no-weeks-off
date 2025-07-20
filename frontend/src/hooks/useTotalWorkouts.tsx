import { useQuery } from "@tanstack/react-query";

const BASE_API_URL = 'https://api.hevyapp.com/v1';

export const useTotalWorkouts = () => {
    const { data, isPending, error, isFetching } = useQuery({
        queryKey: ['totalWorkouts'],
        queryFn: async () => {
            const apiKey = import.meta.env.VITE_HEVY_API_KEY;
            if (!apiKey) {
                throw new Error("VITE_HEVY_API_KEY not found in .env file");
            }
            const response = await fetch(`${BASE_API_URL}/workouts/count`, {
                headers: {
                    'accept': 'application/json',
                    'api-key': apiKey,
                }
            });

            console.log('response: ', response);

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            
            return response.json();
        }
    })

    return {
        workoutCount: data?.workout_count,
        isPending,
        error,
        isFetching,
    }
};