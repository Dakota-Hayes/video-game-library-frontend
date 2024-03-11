import DataTable from "../components/DataTable"
import { useAuthContext } from "../auth/AuthContext";

function Dashboard() {
  const authcontext = useAuthContext();
  return (
    <div>
        {authcontext.user ? (<DataTable token={authcontext.user.GetToken()}/>):(<></>)}
    </div>
  )
}

export default Dashboard