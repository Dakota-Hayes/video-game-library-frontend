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
        headerName: 'title',
        flex: 1
    },
    {
        field: 'version',
        headerName: 'version',
        flex: 1
    },
    {
        field: 'publisher',
        headerName: 'publisher',
        flex: 1
    },
    {
        field: 'region',
        headerName: 'region',
        flex: 1
    },
    {
        field: 'completed',
        headerName: 'completed',
        flex: 1
    },
    {
        field: 'status',
        headerName: 'status',
        flex: 1
    },
    {
        field: 'value',
        headerName: 'region',
        flex: 1
    },
]

function DataTable() {
    const [isModalOpen,setModalOpen] = useState(false)
    const toggleModalOpen = () => {setModalOpen(!isModalOpen)}
    const [selectionModel,setSelectionModel] = useState<string[]>([])
    const {gameData, getData} = useGetData();
    
    const deleteData = () => {
        server_calls.delete_game_by_id(selectionModel);
        getData();
        console.log(`Selection model: ${selectionModel}`)
        setTimeout(() => {window.location.reload()}, 500)
    }

    return (
        <>
            <div>
                { !isModalOpen ? 
                (
                    <>
                        { selectionModel.length == 0 ?
                        (
                            <button onClick={toggleModalOpen} className="p-3 bg-slate-300 m-3 rounded hover:bg-slate-800 hover:text-white">Create Entry</button>
                        )
                        :
                        (
                            <>
                                <button onClick={toggleModalOpen} className="p-3 bg-slate-300 m-3 rounded hover:bg-slate-800 hover:text-white">Update Entry</button>
                                <button onClick={deleteData} className="p-3 bg-slate-300 m-3 rounded hover:bg-slate-800 hover:text-white">Delete Entry</button>
                            </>
                        )}                        
                        <div>
                            <h2 className='p-3 bg-slate-300 my-2 rounded'>Video Game Library Database</h2>
                            <DataGrid 
                                rows={gameData} 
                                columns={columns} 
                                pageSizeOptions={[5]} 
                                checkboxSelection 
                                disableRowSelectionOnClick
                                onRowSelectionModelChange={(item : any) => {setSelectionModel(item)}} 
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
                        form={<GameForm id={selectionModel} />}
                    />
                )}
            </div>
        </>
    )
}

export default DataTable