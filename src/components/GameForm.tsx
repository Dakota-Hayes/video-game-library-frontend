import { TextField, RadioGroup, FormControl, FormLabel, FormControlLabel, Radio} from "@mui/material"
import { useForm } from 'react-hook-form'
import { server_calls } from "../api/server"
import { useDispatch, useStore } from "react-redux"
import { chooseTitle,chooseVersion,choosePublisher, chooseRegion, chooseCompleted, chooseStatus, chooseValue } from "../redux/slices/RootSlice"

interface Props {
    id?: string[],
    token: string,
    toggleForm: () => void;
}

function GameForm (props:Props){
    const {register, handleSubmit} = useForm({})
    const dispatch = useDispatch();
    const store = useStore();
    const token = props.token
    const onSubmit = async (data: any) => {
      if (props.id && props.id.length > 0) {
        await server_calls.update_game_by_id(props.id[0], data, token)
        await props.toggleForm()
      } else {
        await dispatch(chooseTitle(data.title));
        await dispatch(chooseVersion(data.version));
        await dispatch(choosePublisher(data.publisher));
        await dispatch(chooseRegion(data.region));
        await dispatch(chooseCompleted(data.completed));
        await dispatch(chooseStatus(data.status));
        await dispatch(chooseValue(data.Value));
        await server_calls.create_game(store.getState(),token)
        await props.toggleForm()
      }
    }

  return (
    <>
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <h1>
                    Video Game Form
                </h1>
            </div>
            <div>
                <TextField placeholder="Title..." {...register('author_name')}></TextField>
            </div>
            <div>
                <TextField placeholder="Version...(Ex: Greatest Hits)" {...register('book_title')}></TextField>
            </div>
            <div>
                <TextField placeholder="Page Count..." {...register('page_count')}></TextField>
            </div>
            <div>
                <FormControl>
                    <FormLabel id="demo-radio-buttons-group-label"></FormLabel>
                        <RadioGroup>
                            <FormControlLabel value="Hard Cover" control={<Radio />} label="Hard Cover" {...register('book_type')}/>
                            <FormControlLabel value="Soft Cover" control={<Radio />} label="Soft Cover" {...register('book_type')}/>
                            <FormControlLabel value="Digital" control={<Radio />} label="Digital" {...register('book_type')}/>
                        </RadioGroup>
                </FormControl>
            </div>
            <div>
                <button className="p-3 bg-gray-300 m-3 rounded hover:bg-gray-800 hover:text-white">Submit</button>
            </div>
        </form>
    </>
  )
}

export default GameForm