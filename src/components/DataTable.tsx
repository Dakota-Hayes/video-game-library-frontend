import { DataGrid, GridColDef} from "@mui/x-data-grid"
import { useState } from "react"
import { server_calls } from '../api/server';
import Modal from "./Modal"
import CarForm from "./GameForm"
import { useGetData } from '../custom-hooks/FetchData';

const columns: GridColDef[] = [
    {
        field: 'id',
        headerName: 'ID',
        width: 90,
    },
    {
        field: 'make',
        headerName: 'Make',
        flex: 1
    },
    {
        field: 'model',
        headerName: 'Model',
        flex: 1
    },
    {
        field: 'year',
        headerName: 'Year',
        flex: 1
    },
    {
        field: 'color',
        headerName: 'Color',
        flex: 1
    },
]

function DataTable() {
    const [isModalOpen,setModalOpen] = useState(false)
    const toggleModalOpen = () => {setModalOpen(!isModalOpen)}
    const [selectionModel,setSelectionModel] = useState<string[]>([])
    const {carData, getData} = useGetData();
    
    const deleteData = () => {
        console.log(selectionModel)
        server_calls.delete(selectionModel);
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
                            <h2 className='p-3 bg-slate-300 my-2 rounded'>Car Inventory</h2>
                            <DataGrid 
                                rows={carData} 
                                columns={columns} 
                                pageSizeOptions={[5]} 
                                checkboxSelection 
                                disableRowSelectionOnClick
                                onRowSelectionModelChange={(item : any) => {setSelectionModel(item), console.log(item)}} 
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
                        form={<CarForm id={selectionModel} />}
                    />
                )}
            </div>
        </>
    )
}

export default DataTable