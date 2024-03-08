import { useState } from 'react';
import { useAuthContext } from './AuthContext';
import Modal from '../components/Modal';
import LoginForm from '../components/LoginForm';

const SignIn = () => {
    const auth = useAuthContext();
    const auth_signIn = auth.signIn;
    const [isModalOpen, setModalOpen] = useState(false);
    const toggleModalOpen = () => setModalOpen(!isModalOpen);
    const signIn = async ()=>{
        {isModalOpen ?
        (
            <Modal
                open={isModalOpen}
                toggleForm={toggleModalOpen}
                form={<LoginForm toggleForm={toggleModalOpen} handleSignIn={handleSignIn}/>}
            />
        ):(
            <></>
        )
        }
    };
    const handleSignIn = async (email:string, password:string) => {
        toggleModalOpen();
        await auth_signIn(email, password);
        toggleModalOpen();
        
    };
    return (
        <>
            {signIn}
        </>
    )
};

export default SignIn;
