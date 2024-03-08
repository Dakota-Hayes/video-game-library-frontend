import DataTable from "../components/DataTable"
import { useAuthContext } from "../auth/AuthContext";

function Dashboard() {
  const auth = useAuthContext();
  return (
    <div>
        {auth.user ? (<DataTable token={auth.user.GetToken()}/>):(<></>)}
    </div>
  )
}

export default Dashboard