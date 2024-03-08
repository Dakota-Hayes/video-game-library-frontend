import { useAuthContext } from './AuthContext';

const SignOut = () => {
    const auth = useAuthContext();
    const auth_signOut = auth.signOut;
    const signOut = async ()=>{
        handleSignOut
    };
    const handleSignOut = async () => {
        await auth_signOut(); 
    };
    return (
        <>
            {signOut}
        </>
    )
};

export default SignOut;
