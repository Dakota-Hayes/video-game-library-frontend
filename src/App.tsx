import { Route, Routes,HashRouter } from "react-router-dom"
import routes from "./config/routes"
import Navbar from "./components/Navbar"
import { Provider } from 'react-redux'
import { store } from './redux/store'
import Footer from "./components/Footer"
import AuthWrapper from "./auth/AuthWrapper"
import { AuthProvider } from "./auth/AuthContext"

function App() {

  return (
    <HashRouter>
      <AuthProvider>
    <Navbar/>
    <Provider store={store}>
      <Routes>
        {routes.map
          ((route : any, index : any) => (<Route
            key = {index}
            path = {route.path}
            element = {route.protected ? (<AuthWrapper><route.component/></AuthWrapper>) : (<route.component/>)}
          />))
        }
        </Routes>
    </Provider>
    <Footer/>
    </AuthProvider>
  </HashRouter>
  )
}

export default App
