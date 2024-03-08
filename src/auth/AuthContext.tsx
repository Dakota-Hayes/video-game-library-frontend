import { createContext, useContext, useState, ReactNode } from 'react';
import { serverAuth } from './ServerAuth';
import { User } from './User';

interface AuthContextType {
    user: User | null;
    signIn: (email: string, password: string) => Promise<void>;
    signOut: () => void;
    signUp: (email: string, password: string) => Promise<void>;
    isAuthorized: boolean;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const useAuthContext = () => useContext(AuthContext)!;

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [user, setUser] = useState<User | null>(null);

    const signUp =  async (email: string, password: string) => {
        const result = await serverAuth.signUp(email, password);
        const newUser = await new User();
        await newUser.SetUser({data: result});
        await setUser(newUser);
    };

    const signIn =  async (email: string, password: string) => {
        const result = await serverAuth.signIn(email, password);
        const newUser = await new User();
        await newUser.SetUser({data: result});
        await setUser(newUser);
    };

    const signOut = async () => {
        await setUser(null);
    };

    const value = {
        user,
        signIn,
        signOut,
        signUp,
        isAuthorized: !!user,
    };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
