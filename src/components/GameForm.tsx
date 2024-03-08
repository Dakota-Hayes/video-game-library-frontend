import { TextField, RadioGroup, FormControl, FormLabel, FormControlLabel, Radio, Select, MenuItem, FormGroup, Checkbox} from "@mui/material"
import { useForm } from 'react-hook-form'
import { server_calls } from "../api/server"
import { useDispatch, useStore } from "react-redux"
import { chooseTitle,chooseVersion, chooseConsole, choosePublisher, chooseRegion, chooseCompleted, chooseStatus, chooseValue } from "../redux/slices/RootSlice"

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
        await dispatch(chooseConsole(data.version));
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
                <TextField placeholder="Title..." {...register('title')}></TextField>
            </div>
            <div>
                <TextField placeholder="Version..." {...register('version')}></TextField>
            </div>
            <div>
                <FormControl>
                    <Select {...register('console')} label="Console" placeholder="Console" autoWidth>
                        <MenuItem value={"Magnavox Odyssey"}> Magnavox Odyssey </MenuItem>
                        <MenuItem value={"Atari 2600"}> Atari 2600 </MenuItem>
                        <MenuItem value={"Atari 5200"}> Atari 5200 </MenuItem>
                        <MenuItem value={"ColecoVision"}> ColecoVision </MenuItem>
                        <MenuItem value={"Atari 7800"}> Atari 7800 </MenuItem>
                        <MenuItem value={"NES"}> NES </MenuItem>
                        <MenuItem value={"Sega Master System"}> Sega Master System </MenuItem>
                        <MenuItem value={"TurboGrafx-16"}> TurboGrafx-16 </MenuItem>
                        <MenuItem value={"Sega Genesis"}> Sega Genesis </MenuItem>
                        <MenuItem value={"SNES"}> SNES </MenuItem>
                        <MenuItem value={"NEO GEO"}> NEO GEO </MenuItem>
                        <MenuItem value={"Atari Jaguar"}> Atari Jaguar </MenuItem>
                        <MenuItem value={"Panasonic 3DO"}> Panasonic 3DO </MenuItem>
                        <MenuItem value={"Sega Saturn"}> Sega Saturn </MenuItem>
                        <MenuItem value={"PlayStation"}> PlayStation </MenuItem>
                        <MenuItem value={"Nintendo 64"}> Nintendo 64 </MenuItem>
                        <MenuItem value={"Dreamcast"}> Dreamcast </MenuItem>
                        <MenuItem value={"PlayStation 2"}> PlayStation 2 </MenuItem>
                        <MenuItem value={"GameCube"}> GameCube </MenuItem>
                        <MenuItem value={"Xbox"}> Xbox </MenuItem>
                        <MenuItem value={"Xbox 360"}> Xbox 360 </MenuItem>
                        <MenuItem value={"PlayStation 3"}> PlayStation 3 </MenuItem>
                        <MenuItem value={"Wii"}> Wii </MenuItem>
                        <MenuItem value={"Wii U"}> Wii U </MenuItem>
                        <MenuItem value={"PlayStation 4"}> PlayStation 4 </MenuItem>
                        <MenuItem value={"Xbox One"}> Xbox One </MenuItem>
                        <MenuItem value={"Nintendo Switch"}> Nintendo Switch </MenuItem>
                        <MenuItem value={"PlayStation 5"}> PlayStation 5 </MenuItem>
                        <MenuItem value={"Xbox Series X"}> Xbox Series X </MenuItem>
                        <MenuItem value={"Xbox Series S"}> Xbox Series S </MenuItem>
                        <MenuItem value={"Game Boy"}> Game Boy </MenuItem>
                        <MenuItem value={"Game Gear"}> Game Gear </MenuItem>
                        <MenuItem value={"Game Boy Color"}> Game Boy Color </MenuItem>
                        <MenuItem value={"Game Boy Advance"}> Game Boy Advance </MenuItem>
                        <MenuItem value={"Nintendo DS"}> Nintendo DS </MenuItem>
                        <MenuItem value={"PlayStation Portable"}> PSP </MenuItem>
                        <MenuItem value={"Nintendo 3DS"}> Nintendo 3DS </MenuItem>
                        <MenuItem value={"PlayStation Vita"}> PSVITA </MenuItem>
                        <MenuItem value={"Ouya"}> Ouya </MenuItem>
                        <MenuItem value={"Nvidia Shield"}> Nvidia Shield </MenuItem>
                        <MenuItem value={"Neo Geo Pocket"}> Neo Geo Pocket </MenuItem>
                        <MenuItem value={"Neo Geo Pocket Color"}> Neo Geo Pocket Color </MenuItem>
                        <MenuItem value={"WonderSwan Color"}> WonderSwan Color </MenuItem>
                        <MenuItem value={"N-Gage"}> N-Gage </MenuItem>
                        <MenuItem value={"Atari Lynx"}> Atari Lynx </MenuItem>
                        <MenuItem value={"Sega Nomad"}> Sega Nomad </MenuItem>
                        <MenuItem value={"Virtual Boy"}> Virtual Boy </MenuItem>
                        <MenuItem value={"Sega Pico"}> Sega Pico </MenuItem>
                        <MenuItem value={"Intellivision Amico"}> Intellivision Amico </MenuItem>
                        <MenuItem value={"Playdate"}> Playdate </MenuItem>
                        <MenuItem value={"Analogue Pocket"}> Analogue Pocket </MenuItem>
                        <MenuItem value={"Evercade"}> Evercade </MenuItem>
                    </Select>
                </FormControl>
            </div>
            <div>
                <TextField placeholder="Publisher..." {...register('publisher')}></TextField>
            </div>
            <div>
                <TextField placeholder="Region..." {...register('region')}></TextField>
            </div>
            <div>    
                <FormControl>
                    <FormLabel>Status of Completion</FormLabel>
                    <RadioGroup {...register('Completed')}>
                        <FormControlLabel value={true} control={<Radio/>} label="Completed"/>
                        <FormControlLabel value={false} control={<Radio/>} label="In Progress"/>
                    </RadioGroup>
                </FormControl>
            </div>
            <div>
                <FormControl>
                    <FormLabel>Status of Condition</FormLabel>
                    <FormGroup {...register('Status')}>
                        <Checkbox name="Box"/>
                        <Checkbox name="Manual"/>
                        <Checkbox name="Artwork"/>
                        <Checkbox name="All Other Extras"/>
                        <Checkbox name="Damaged"/>
                    </FormGroup>
                </FormControl>
            </div>
            <div>
                <TextField placeholder="Value..." {...register('value')}></TextField>
            </div>
            <div>
                <button className="p-3 bg-gray-300 m-3 rounded hover:bg-gray-800 hover:text-white">Submit</button>
            </div>
        </form>
    </>
  )
}

export default GameForm