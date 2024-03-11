const admin_token = 'a99f3a00e6c0d4ab6e38f941e02506023725d23b175afd0a'

export const server_calls = {
    get_user_authorization: async (data: any = {}) => { 
        const response = await fetch(`https://video-game-library-backend.onrender.com//api/users/authorization`,
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'x-access-token': `Bearer ${admin_token}`
            },
            body: JSON.stringify(data)

        });

        if (!response.ok){
            throw new Error('Failed to fetch data from the server')
        }
        return await response.json()
    },
    get_user_by_id: async (id: string) => { 
        const response = await fetch(`https://video-game-library-backend.onrender.com//api/users/search/id/${id}`,
        {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'x-access-token': `Bearer ${admin_token}`
            }

        });

        if (!response.ok){
            throw new Error('Failed to fetch data from the server')
        }
        return await response.json()
    },
    get_all_users: async () => { 
        const response = await fetch(`https://video-game-library-backend.onrender.com//api/users/all`,
        {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'x-access-token': `Bearer ${admin_token}`
            }

        });

        if (!response.ok){
            throw new Error('Failed to fetch data from the server')
        }
        return await response.json()
    },
    create_user: async (data: any = {}) => {
        console.log(JSON.stringify(data))
        const response = await fetch(`https://video-game-library-backend.onrender.com//api/users/create`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'x-access-token': `Bearer ${admin_token}`
            },
            body: JSON.stringify(data)
        })

        if (!response.ok){
            throw new Error('Failed to create new data on server')
        }
        return await response.json()
    },
    update_user_by_id: async (id: string, data:any = {}) => {
        const response = await fetch(`https://video-game-library-backend.onrender.com//api/users/update/id/${id}`,
        {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'x-access-token': `Bearer ${admin_token}`
            },
            body: JSON.stringify(data)

        })

        if (!response.ok) {
            throw new Error('Failed to update data on the server')
        }

        return await response.json()
    },
    delete_user_by_id: async (id:string[]) => {
        const response = await fetch(`https://video-game-library-backend.onrender.com//api/users${id}`,{
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'x-access-token': `Bearer ${admin_token}`
            },
        })

        if (!response.ok){
            throw new Error('Failed to delete data on server')
        }

        return;
    },
    get_game_by_id: async (id: string, token: string) => { 
        const response = await fetch(`https://video-game-library-backend.onrender.com//api/games/search/id/${id}`,
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
    get_games_by_title: async (title: string, token: string) => { 
        const response = await fetch(`https://video-game-library-backend.onrender.com//api/games/search/title/${title}`,
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
    get_games_by_version: async (version: string, token: string) => { 
        const response = await fetch(`https://video-game-library-backend.onrender.com//api/games/search/version/${version}`,
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
    get_games_by_console: async (console: string, token: string) => { 
        const response = await fetch(`https://video-game-library-backend.onrender.com//api/games/search/version/${console}`,
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
    get_games_by_region: async (region: string, token: string) => { 
        const response = await fetch(`https://video-game-library-backend.onrender.com//api/games/search/region/${region}`,
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
    get_games_by_publisher: async (publisher: string, token: string) => { 
        const response = await fetch(`https://video-game-library-backend.onrender.com//api/games/search/publisher/${publisher}`,
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
    get_games_by_completed: async (completed: string, token: string) => { 
        const response = await fetch(`https://video-game-library-backend.onrender.com//api/games/search/completed/${completed}`,
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
    get_games_by_value: async (value: string, token: string) => { 
        const response = await fetch(`https://video-game-library-backend.onrender.com//api/games/search/value/${value}`,
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
    get_games_by_owner: async (owner: string, token: string) => {
        const response = await fetch(`https://video-game-library-backend.onrender.com//api/games/search/owner/${owner}`,
        {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'x-access-token': `Bearer ${token}`
            }

        });
        console.log(owner,token)
        if (!response.ok){
            throw new Error('Failed to fetch data from the server')
        }
        return await response.json()
    },
    get_games_by_token: async (token: string) => { 
        const response = await fetch(`https://video-game-library-backend.onrender.com//api/games/search/owner/all`,
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
    get_all_games: async () => { 
        const response = await fetch(`https://video-game-library-backend.onrender.com//api/games/search/all`,
        {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'x-access-token': `Bearer ${admin_token}`
            }

        });

        if (!response.ok){
            throw new Error('Failed to fetch data from the server')
        }
        return await response.json()
    },
    create_game: async (data: any = {}, token: string) => {
        const response = await fetch(`https://video-game-library-backend.onrender.com//api/games/create`,{
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
    update_game_by_id: async (id: string, data:any = {}, token: string) => {
        const response = await fetch(`https://video-game-library-backend.onrender.com//api/games/update/id/${id}`,
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
    delete_game_by_id: async (id:string[], token: string) => {
        const response = await fetch(`https://video-game-library-backend.onrender.com//api/games/delete/id/${id}`,{
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