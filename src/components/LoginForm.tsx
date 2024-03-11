import { TextField} from "@mui/material"
import { useForm } from 'react-hook-form'

interface Props {
    toggleForm: () => void,
    handleSignIn: (email:string,password:string) => void
}

function LoginForm (props:Props){
    const {register, handleSubmit} = useForm({})
    const onSubmit = async (data: any) => {

        props.handleSignIn(data.email,data.password)
        props.toggleForm()
    }

  return (
    <>
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <h1>
                    Login Form
                </h1>
            </div>
            <div>
                <TextField placeholder="Email..." {...register('email')}></TextField>
            </div>
            <div>
                <TextField placeholder="Password..." {...register('password')}></TextField>
            </div>
            <div>
                <button className="p-3 bg-gray-300 m-3 rounded hover:bg-gray-800 hover:text-white">Submit</button>
            </div>
        </form>
    </>
  )
}

export default LoginForm