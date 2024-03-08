import { useState, useEffect } from "react"
import { server_calls } from "../api/server"

export const useGetData = () => {
    const [gameData, setData] = useState<[]>([])
    
    async function handleDataFetch(){
        const result = await server_calls.get_all_games();
        setData(result)
    }

    useEffect(() => {
        handleDataFetch();
    }, [])

    return {gameData, getData:handleDataFetch}
}