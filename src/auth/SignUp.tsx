import { useState } from 'react';
import { useAuthContext } from './AuthContext';
import Modal from '../components/Modal';
import LoginForm from '../components/LoginForm';

const SignUp = () => {
    const auth = useAuthContext();
    const auth_signUp = auth.signUp;
    const [isModalOpen, setModalOpen] = useState(false);
    const toggleModalOpen = () => setModalOpen(!isModalOpen);
    const signUp = async ()=>{
        {isModalOpen ?
        (
            <Modal
                open={isModalOpen}
                toggleForm={toggleModalOpen}
                form={<LoginForm toggleForm={toggleModalOpen} handleSignIn={handleSignUp}/>}
            />
        ):(
            <></>
        )
        }
    };
    const handleSignUp = async (email:string, password:string) => {
        toggleModalOpen();
        await auth_signUp(email, password);
        toggleModalOpen();
        
    };
    return (
        <>
            {signUp}
        </>
    )
};

export default SignUp;
