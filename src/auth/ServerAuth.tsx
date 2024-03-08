import { server_calls } from "../api/server";

export const serverAuth = {
    signIn: async (email: string, password: string): Promise<string[]> => {

        const results = await server_calls.get_user_authorization([email, password]);
        return results;
    },
    signUp: async (email: string, password: string): Promise<string[]> => {
        const results = await server_calls.create_user([email, password, false, false]);
        return results;
    }
};
