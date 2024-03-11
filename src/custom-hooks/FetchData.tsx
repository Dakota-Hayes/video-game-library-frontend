import { useState, useEffect } from "react";
import { server_calls } from "../api/server";
import { useAuthContext } from "../auth/AuthContext";

export const useGetData = () => {
    const [gameData, setData] = useState<[]>([]);
    const authContext = useAuthContext();
    const id = authContext?.user?.id;
    const token = authContext?.user?.token;

    async function handleDataFetch() {
        if (id && token) {
            try {
                const result = await server_calls.get_games_by_owner(id, token);
                setData(result);
            } catch (error) {
                console.error("Failed to fetch game data:", error);
            }
        }
    }

    useEffect(() => {
        handleDataFetch();
    }, [id, token]);

    return { gameData, getData: handleDataFetch };
};
