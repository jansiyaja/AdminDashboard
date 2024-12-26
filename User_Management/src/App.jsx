import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import Login from './Pages/Login';
import Launcher from './Pages/Launcher';
import PasswordReset from './Pages/PasswordReset';
import Dashboard from './Pages/Dashboard';
import SideBar from './Components/SideBar';


function App() {
  

  return (
    <>
      <Router>
        <Routes>
           <Route path={"/"} element={<Launcher />} />
          <Route element={<Layout />}>
            
           
            <Route path={"/login"} element={<Login />} />
            <Route path={"/password-reset"} element={<PasswordReset />} />
        

            <Route element={<SideBar />}>
                <Route path={"/dashboard"} element={<Dashboard />} />
            </Route>
          </Route>
        </Routes>
     </Router>
    
    </>
  )
}

export default App
