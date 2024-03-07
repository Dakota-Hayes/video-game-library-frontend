import { TextField } from "@mui/material"
import { useForm } from 'react-hook-form'
import { server_calls } from "../api/server"
import { useDispatch, useStore } from "react-redux"
import { chooseMake,chooseModel,chooseYear,chooseColor } from "../redux/slices/RootSlice"
import { useNavigate } from "react-router-dom"

interface Props {
    id?: string[]
}

function CarForm (props:Props){
    const navigate = useNavigate();
    const {register, handleSubmit} = useForm({})
    const dispatch = useDispatch();
    const store = useStore();
    const onSubmit = (data: any) => {
      if (props.id && props.id.length > 0) {
        server_calls.update(props.id[0], data)
        console.log(`Updated: ${ data.first } ${ props.id }`)
        navigate("./Dashboard")
      } else {
        dispatch(chooseMake(data.make));
        dispatch(chooseModel(data.model));
        dispatch(chooseYear(data.year));
        dispatch(chooseColor(data.color));
        server_calls.create(store.getState())
        navigate("./Dashboard")
      }
    }

  return (
    <>
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <h1>
                    Car Form
                </h1>
            </div>
            <div>
                <TextField placeholder="Make..." {...register('make')}></TextField>
            </div>
            <div>
                <TextField placeholder="Model..." {...register('model')}></TextField>
            </div>
            <div>
                <TextField placeholder="Year..." {...register('year')}></TextField>
            </div>
            <div>
                <TextField placeholder="Color..." {...register('color')}></TextField>
            </div>
            <div>
                <button className="p-3 bg-slate-300 m-3 rounded hover:bg-slate-800 hover:text-white">Submit</button>
            </div>
        </form>
    </>
  )
}

export default CarForm