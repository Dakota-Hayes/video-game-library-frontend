import { DataGrid, GridColDef} from "@mui/x-data-grid"
import { useState } from "react"
import { server_calls } from '../api/server';
import Modal from "./Modal"
import GameForm from "./GameForm"
import { useGetData } from '../custom-hooks/FetchData';

const columns: GridColDef[] = [
    {
        field: 'id',
        headerName: 'ID',
        width: 90,
    },
    {
        field: 'title',
        headerName: 'Tile',
        flex: 1
    },
    {
        field: 'version',
        headerName: 'Version',
        flex: 1
    },
    {
        field: 'console',
        headerName: 'Console',
        flex: 1
    },
    {
        field: 'publisher',
        headerName: 'Publisher',
        flex: 1
    },
    {
        field: 'region',
        headerName: 'Region',
        flex: 1
    },
    {
        field: 'completed',
        headerName: 'Completed',
        flex: 1
    },
    {
        field: 'condition',
        headerName: 'Condition',
        flex: 1
    },
    {
        field: 'value',
        headerName: 'Value',
        flex: 1
    },
]

interface Props{
    token : string
}

function DataTable(props:Props) {
    const [isModalOpen,setModalOpen] = useState(false)
    const [selectionModel,setSelectionModel] = useState<string[]>([])
    const {gameData, getData} = useGetData();
    const token = props.token
    const toggleModalOpen = async() => {
        await setModalOpen(!isModalOpen);
        await clearSelection();
        await getData();
    }
    
    const clearSelection = () => {
        if(isModalOpen){
            setSelectionModel([])
        }
    }

    const deleteData = async () => {
        await server_calls.delete_game_by_id(selectionModel,token);
        await getData();
    }

    return (
        <>
            <div>
                { !isModalOpen ? 
                (
                    <>
                        { selectionModel.length == 0 ?
                        (
                            <button onClick={toggleModalOpen} className="p-3 bg-gray-300 m-3 rounded hover:bg-gray-800 hover:text-white">Create Entry</button>
                        )
                        :
                        (
                            <>
                                <button onClick={toggleModalOpen} className="p-3 bg-gray-300 m-3 rounded hover:bg-gray-800 hover:text-white">Update Entry</button>
                                <button onClick={deleteData} className="p-3 bg-gray-300 m-3 rounded hover:bg-gray-800 hover:text-white">Delete Entry</button>
                            </>
                        )}                        
                        <div>
                            <h2 className='p-3 bg-gray-300 my-2 rounded'>Book Inventory</h2>
                            <DataGrid 
                                rows={gameData} 
                                columns={columns} 
                                pageSizeOptions={[9]} 
                                checkboxSelection 
                                disableRowSelectionOnClick
                                onRowSelectionModelChange={(item : any) => {
                                    setSelectionModel(item)}
                                } 
                                columnVisibilityModel={{id : false}}
                            />
                        </div>
                    </>
                )
                :
                (
                    <Modal 
                        open={isModalOpen} 
                        toggleForm={toggleModalOpen} 
                        form={<GameForm id={selectionModel} toggleForm={toggleModalOpen} token={token}/>}
                    />
                )}
            </div>
        </>
    )
}

export default DataTable