import { useState } from "react"
import { Link } from "react-router-dom"
import { useAuthContext } from "../auth/AuthContext";
import Modal from "./Modal";
import LoginForm from "./LoginForm";

function Account() {
    const [isSignUpModalOpen, setSignUpModalOpen] = useState(false);
    const [isSignInModalOpen, setSignInModalOpen] = useState(false);
    const toggleSignInModalOpen = () => setSignInModalOpen(!isSignInModalOpen);
    const toggleSignUpModalOpen = () => setSignUpModalOpen(!isSignUpModalOpen);
    const authContext = useAuthContext();
    const isAuthorized = authContext.isAuthorized
    const {signIn,signOut,signUp} = authContext;
    const signUpOnClick = () => {
        toggleSignUpModalOpen()
    }

    const signInOnClick = () => {
        toggleSignInModalOpen()     
    }

    const signOutOnClick = () => {
        signOut
        location.reload();
    }


    return (
        <>
            <div className="flex items-center justify-center flex-wrap bg-white p-6 ">
                {!isAuthorized ? (<>
                    <div className="flex p-3 justify-center ">
                        <Link to='./' onClick={signInOnClick} className="bg-gray-100 p-4 flex place-items-center mt-4 lg:inline-block lg:mt-0 border rounded border-gray-200 text-gray-400 hover:text-white hover:border-white hover:bg-gray-300 mr-4">
                            <button>Sign In</button>
                        </Link>
                    </div>
                    <div className="flex p-3 justify-center">
                        <Link to='./' onClick={signUpOnClick} className="bg-gray-100 p-4 flex place-items-center mt-4 lg:inline-block lg:mt-0 border rounded border-gray-200 text-gray-400 hover:text-white hover:border-white hover:bg-gray-300 mr-4">
                            <button>Sign Up</button>
                        </Link>
                    </div> 
                </>):(<>
                    <div className="flex p-3 justify-center">
                        <Link to='/home' onClick={() => {signOutOnClick()}} className="bg-gray-100 p-4 flex place-items-center mt-4 lg:inline-block lg:mt-0 border rounded border-gray-200 text-gray-400 hover:text-white hover:border-white hover:bg-gray-300 mr-4">
                            <button>Sign Out</button>
                        </Link>
                    </div>

                </>)}
            </div>
            <div className="flex items-center justify-center bg-white p-5 ">
                {isAuthorized && (
                    <>
                        <div className="flex flex-col border rounded p-5">
                            <h1 className="p-5">Email: {authContext.user?.GetEmail()}</h1>
                            <a className="p-5 bg-blue-100 text-center flex items-center lg:inline-block border rounded border-gray-200 text-gray-400 hover:text-white hover:border-white hover:bg-gray-300" href="https://video-game-library-backend.onrender.com/" target="_blank">
                            <div >
                                <h1>VGL API</h1>
                            </div>
                            </a>
                        </div>
                    </>
                )}
            </div>

            <div>
                {isSignUpModalOpen && (<>
                    <Modal
                        open={isSignUpModalOpen}
                        toggleForm={toggleSignUpModalOpen}
                        form={<LoginForm toggleForm={toggleSignUpModalOpen} handleSignIn={signUp}/>}
                    />
                </>)}
                {isSignInModalOpen && (<>
                    <Modal
                        open={isSignInModalOpen}
                        toggleForm={toggleSignInModalOpen}
                        form={<LoginForm toggleForm={toggleSignInModalOpen} handleSignIn={signIn}/>}
                    />
                </>)}
            </div>
        </>
    )
}

export default Account