import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './Pages/homePage'
import SideProjectsPage from './Pages/SideProjectsPage'
import CVPage from './Pages/cvPage'



function App() {
  

  return <>
    
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/SideProjects" element={<SideProjectsPage/>} />
        <Route path="/CVPage" element={<CVPage/>} />
      </Routes>
     </BrowserRouter>
    </>
  
}

export default App
