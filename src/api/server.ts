const token = '4f255c55aa6b02ee2b5a63f4ffc9613486cff6135fae6bbe'

export const server_calls = {
    get_user_by_id: async (id: string) => { 
        const response = await fetch(`http://localhost:5173/?name=Dakota#//users/search/id/${id}`,
        {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'x-access-token': `Bearer ${token}`
            }

        });

        if (!response.ok){
            throw new Error('Failed to fetch data from the server')
        }
        return await response.json()
    },
    get_all_users: async () => { 
        const response = await fetch(`http://localhost:5173/?name=Dakota#//users/all`,
        {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'x-access-token': `Bearer ${token}`
            }

        });

        if (!response.ok){
            throw new Error('Failed to fetch data from the server')
        }
        return await response.json()
    },
    create_user: async (data: any = {}) => {
        const response = await fetch(`http://localhost:5173/?name=Dakota#//api/users/create`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'x-access-token': `Bearer ${token}`
            },
            body: JSON.stringify(data)
        })

        if (!response.ok){
            throw new Error('Failed to create new data on server')
        }
        return await response.json()
    },
    update_user_by_id: async (id: string, data:any = {}) => {
        const response = await fetch(`http://localhost:5173/?name=Dakota#//api/users/update/id/${id}`,
        {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'x-access-token': `Bearer ${token}`
            },
            body: JSON.stringify(data)

        })

        if (!response.ok) {
            throw new Error('Failed to update data on the server')
        }

        return await response.json()
    },
    delete_user_by_id: async (id:string[]) => {
        const response = await fetch(`http://localhost:5173/?name=Dakota#//api/users${id}`,{
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'x-access-token': `Bearer ${token}`
            },
        })

        if (!response.ok){
            throw new Error('Failed to delete data on server')
        }

        return;
    },
    get_game_by_id: async (id: string) => { 
        const response = await fetch(`http://localhost:5173/?name=Dakota#//api/games/search/id/${id}`,
        {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'x-access-token': `Bearer ${token}`
            }

        });

        if (!response.ok){
            throw new Error('Failed to fetch data from the server')
        }
        return await response.json()
    },
    get_game_by_title: async (title: string) => { 
        const response = await fetch(`http://localhost:5173/?name=Dakota#//api/games/search/title/${title}`,
        {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'x-access-token': `Bearer ${token}`
            }

        });

        if (!response.ok){
            throw new Error('Failed to fetch data from the server')
        }
        return await response.json()
    },
    get_game_by_version: async (version: string) => { 
        const response = await fetch(`http://localhost:5173/?name=Dakota#//api/games/search/version/${version}`,
        {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'x-access-token': `Bearer ${token}`
            }

        });

        if (!response.ok){
            throw new Error('Failed to fetch data from the server')
        }
        return await response.json()
    },
    get_game_by_region: async (region: string) => { 
        const response = await fetch(`http://localhost:5173/?name=Dakota#//api/games/search/region/${region}`,
        {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'x-access-token': `Bearer ${token}`
            }

        });

        if (!response.ok){
            throw new Error('Failed to fetch data from the server')
        }
        return await response.json()
    },
    get_game_by_publisher: async (publisher: string) => { 
        const response = await fetch(`http://localhost:5173/?name=Dakota#//api/games/search/publisher/${publisher}`,
        {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'x-access-token': `Bearer ${token}`
            }

        });

        if (!response.ok){
            throw new Error('Failed to fetch data from the server')
        }
        return await response.json()
    },
    get_game_by_completed: async (completed: string) => { 
        const response = await fetch(`http://localhost:5173/?name=Dakota#//api/games/search/completed/${completed}`,
        {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'x-access-token': `Bearer ${token}`
            }

        });

        if (!response.ok){
            throw new Error('Failed to fetch data from the server')
        }
        return await response.json()
    },
    get_game_by_value: async (value: string) => { 
        const response = await fetch(`http://localhost:5173/?name=Dakota#//api/games/search/value/${value}`,
        {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'x-access-token': `Bearer ${token}`
            }

        });

        if (!response.ok){
            throw new Error('Failed to fetch data from the server')
        }
        return await response.json()
    },
    get_games_by_owner: async () => { 
        const response = await fetch(`http://localhost:5173/?name=Dakota#//api/games/search/owner/all`,
        {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'x-access-token': `Bearer ${token}`
            }

        });

        if (!response.ok){
            throw new Error('Failed to fetch data from the server')
        }
       
    get_all_games: async () => { 
        const response = await fetch(`http://localhost:5173/?name=Dakota#//api/games/search/all`,
        {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'x-access-token': `Bearer ${token}`
            }

        });

        if (!response.ok){
            throw new Error('Failed to fetch data from the server')
        }
        return await response.json()
    },
    create_game: async (data: any = {}) => {
        const response = await fetch(`http://localhost:5173/?name=Dakota#//api/games/create`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'x-access-token': `Bearer ${token}`
            },
            body: JSON.stringify(data)
        })

        if (!response.ok){
            throw new Error('Failed to create new data on server')
        }
        return await response.json()
    },
    update_game_by_id: async (id: string, data:any = {}) => {
        const response = await fetch(`http://localhost:5173/?name=Dakota#//api/games/update/id/${id}`,
        {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'x-access-token': `Bearer ${token}`
            },
            body: JSON.stringify(data)

        })

        if (!response.ok) {
            throw new Error('Failed to update data on the server')
        }

        return await response.json()
    },
    delete_game_by_id: async (id:string[]) => {
        const response = await fetch(`http://localhost:5173/?name=Dakota#//api/games/delete/id/${id}`,{
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'x-access-token': `Bearer ${token}`
            },
        })

        if (!response.ok){
            throw new Error('Failed to delete data on server')
        }

        return;
    }
}