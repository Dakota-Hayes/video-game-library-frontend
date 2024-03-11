import { InputLabel, TextField, RadioGroup, FormControl, FormLabel, FormControlLabel, Radio, Select, MenuItem, FormGroup, Checkbox} from "@mui/material"
import { useForm } from 'react-hook-form'
import { server_calls } from "../api/server"
import { useDispatch, useStore } from "react-redux"
import { chooseTitle,chooseVersion, chooseConsole, choosePublisher, chooseRegion, chooseCompleted, chooseCondition, chooseValue } from "../redux/slices/RootSlice"

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
      } else {
        await dispatch(chooseTitle(data.title));
        await dispatch(chooseVersion(data.version));
        await dispatch(chooseConsole(data.console));
        await dispatch(choosePublisher(data.publisher));
        await dispatch(chooseRegion(data.region));
        await dispatch(chooseCompleted(data.completed));
        await dispatch(chooseCondition(data.condition));
        await dispatch(chooseValue(data.value));
        await server_calls.create_game(store.getState(),token)
      }
      await props.toggleForm()
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
                <TextField placeholder="Title..." {...register('title')} fullWidth></TextField>
            </div>
            <div>
                <TextField placeholder="Version..." {...register('version') }fullWidth></TextField>
            </div>
            <div>
                <FormControl fullWidth>
                    <InputLabel>Console</InputLabel>
                    <Select label="Console" {...register('console')}>
                        <MenuItem value={"Analogue Analogue Pocket"}> Analogue Analogue Pocket </MenuItem>
                        <MenuItem value={"Atari 2600"}> Atari 2600 </MenuItem>
                        <MenuItem value={"Atari 5200"}> Atari 5200 </MenuItem>
                        <MenuItem value={"Atari 7800"}> Atari  7800 </MenuItem>
                        <MenuItem value={"Atari Jaguar"}> Atari  Jaguar </MenuItem>
                        <MenuItem value={"Atari Lynx"}> Atari Lynx </MenuItem>
                        <MenuItem value={"Bandai WonderSwan Color"}> Bandai WonderSwan Color </MenuItem>
                        <MenuItem value={"Coleco ColecoVision"}> Coleco ColecoVision </MenuItem>
                        <MenuItem value={"Intellivision Amico"}> Intellivision Amico </MenuItem>
                        <MenuItem value={"Magnavox Magnavox Odyssey"}> Magnavox Magnavox Odyssey </MenuItem>
                        <MenuItem value={"Microsoft Xbox"}> Microsoft Xbox </MenuItem>
                        <MenuItem value={"Microsoft Xbox 360"}> Microsoft Xbox 360 </MenuItem>
                        <MenuItem value={"Microsoft Xbox One"}> Microsoft Xbox One </MenuItem>
                        <MenuItem value={"Microsoft Xbox Series S"}> Microsoft Xbox Series S </MenuItem>
                        <MenuItem value={"Microsoft Xbox Series X"}> Microsoft Xbox Series X </MenuItem>
                        <MenuItem value={"NEC TurboGrafx-16"}> NEC TurboGrafx-16 </MenuItem>
                        <MenuItem value={"Nintendo 3DS"}> Nintendo 3DS </MenuItem>
                        <MenuItem value={"Nintendo 64"}> Nintendo 64 </MenuItem>
                        <MenuItem value={"Nintendo DS"}> Nintendo DS </MenuItem>
                        <MenuItem value={"Nintendo Game Boy"}> Nintendo Game Boy </MenuItem>
                        <MenuItem value={"Nintendo Game Boy Advance"}> Nintendo Game Boy Advance </MenuItem>
                        <MenuItem value={"Nintendo Game Boy Color"}> Nintendo Game Boy Color </MenuItem>
                        <MenuItem value={"Nintendo GameCube"}> Nintendo GameCube </MenuItem>
                        <MenuItem value={"Nintendo NES"}> Nintendo NES </MenuItem>
                        <MenuItem value={"Nintendo Switch"}> Nintendo Switch </MenuItem>
                        <MenuItem value={"Nintendo SNES"}> Nintendo SNES </MenuItem>
                        <MenuItem value={"Nintendo Virtual Boy"}> Nintendo Virtual Boy </MenuItem>
                        <MenuItem value={"Nintendo Wii"}> Nintendo Wii </MenuItem>
                        <MenuItem value={"Nintendo Wii U"}> Nintendo Wii U </MenuItem>
                        <MenuItem value={"Nokia N-Gage"}> Nokia N-Gage </MenuItem>
                        <MenuItem value={"Nvidia Nvidia Shield"}> Nvidia Nvidia Shield </MenuItem>
                        <MenuItem value={"Ouya Ouya"}> Ouya Ouya </MenuItem>
                        <MenuItem value={"Panasonic Panasonic 3DO"}> Panasonic Panasonic 3DO </MenuItem>
                        <MenuItem value={"Playdate Playdate"}> Playdate Playdate </MenuItem>
                        <MenuItem value={"Sega Dreamcast"}> Sega Dreamcast </MenuItem>
                        <MenuItem value={"Sega Game Gear"}> Sega Game Gear </MenuItem>
                        <MenuItem value={"Sega Genesis"}> Sega Genesis </MenuItem>
                        <MenuItem value={"Sega Master System"}> Sega Master System </MenuItem>
                        <MenuItem value={"Sega Nomad"}> Sega Nomad </MenuItem>
                        <MenuItem value={"Sega Pico"}> Sega Pico </MenuItem>
                        <MenuItem value={"Sega Saturn"}> Sega Saturn </MenuItem>
                        <MenuItem value={"SNK NEO GEO"}> SNK NEO GEO </MenuItem>
                        <MenuItem value={"SNK Neo Geo Pocket"}> SNK Neo Geo Pocket </MenuItem>
                        <MenuItem value={"SNK Neo Geo Pocket Color"}> SNK Neo Geo Pocket Color </MenuItem>
                        <MenuItem value={"Sony PlayStation"}> Sony PlayStation </MenuItem>
                        <MenuItem value={"Sony PlayStation 2"}> Sony PlayStation 2 </MenuItem>
                        <MenuItem value={"Sony PlayStation 3"}> Sony PlayStation 3 </MenuItem>
                        <MenuItem value={"Sony PlayStation 4"}> Sony PlayStation 4 </MenuItem>
                        <MenuItem value={"Sony PlayStation 5"}> Sony PlayStation 5 </MenuItem>
                        <MenuItem value={"Sony PSP"}> Sony PSP </MenuItem>
                        <MenuItem value={"Sony PSVITA"}> Sony PSVITA </MenuItem>
                    </Select>
                </FormControl>
            </div>
            <div>
                <TextField placeholder="Publisher..." {...register('publisher')} fullWidth></TextField>
            </div>
            <div>
                <TextField placeholder="Region..." {...register('region')} fullWidth></TextField>
            </div>
            <div>
                <TextField placeholder="Value..." {...register('value')} fullWidth></TextField>
            </div>
            <div>
                <FormControl fullWidth>
                    <FormLabel>Status of Condition</FormLabel>
                    <FormGroup className="flex items-start">
                        <div>
                            <FormLabel><Checkbox  value={"Box"} {...register('condition')}/>Box</FormLabel>
                            <FormLabel><Checkbox value={"Manual"} {...register('condition')}/>Manual</FormLabel>
                            <FormLabel><Checkbox value={"Artwork"} {...register('condition')}/>Artwork</FormLabel>
                            <FormLabel><Checkbox value={"Extras"} {...register('condition')}/>Extras</FormLabel>
                            <FormLabel><Checkbox value={"Damaged"} {...register('condition')}/>Damaged</FormLabel>
                        </div>
                    </FormGroup>
                </FormControl>
            </div>
            <div>    
                <FormControl fullWidth>
                    <FormLabel>Status of Completion</FormLabel>
                    <RadioGroup>
                        <div>
                            <FormControlLabel value={"True"} control={<Radio/>} label="Completed" {...register('completed')}/>
                            <FormControlLabel value={"False"} control={<Radio/>} label="In Progress" {...register('completed')}/>
                        </div>
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