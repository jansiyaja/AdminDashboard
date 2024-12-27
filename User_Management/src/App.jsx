import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import Login from './Pages/Login';
import Launcher from './Pages/Launcher';
import PasswordReset from './Pages/PasswordReset';
import Dashboard from './Pages/Dashboard';
import SideBar from './Components/SideBar';
import { AuthProvider } from './Context/AuthContext';
import ProtectedRoute from './Components/ProtectedRoute';
import ForgetPassword from './Pages/ForgetPasswprd';


function App() {
  

  return (
    <>
      <AuthProvider>

   
      <Router>
        <Routes>
           <Route path={"/"} element={<Launcher />} />
          <Route element={<Layout />}>
            
           
            <Route path={"/login"} element={<Login />} />
            <Route path={"/password-reset"} element={<PasswordReset />} />
            <Route path={"/forget-password"} element={<ForgetPassword />} />
        
           <Route element={<ProtectedRoute />}>
            <Route element={<SideBar />}>
                <Route path={"/dashboard"} element={<Dashboard />} />
                </Route>
                </Route>
          </Route>
        </Routes>
        </Router>
           </AuthProvider>
    
    </>
  )
}

export default App
