import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SideProjectsPage from './Pages/SideProjectsPage'
import CVPage from './Pages/CVPage'
import HomePage from './Pages/homePage';
import ContactPage from './Pages/ContactPage';


function App() {
  

  return <>
    
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/SideProjects" element={<SideProjectsPage/>} />
        <Route path="/CVPage" element={<CVPage/>} />
        <Route path="/contact" element={<ContactPage/>} />
      </Routes>
     </BrowserRouter>
    </>
  
}

export default App
 