import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import './App.css'
import Navbar from './sidebar/navbar'
import Profile from "./sidebar/profile"
import Title from "./layout/title"
import Date from "./layout/date"
import Pagination from "./layout/pagination"


function App() {
  return (
    <div className="App">
    <Routes>
      <Route>  
        <Route path="/" element={<Navbar/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/title' element={<Title/>}/>
        <Route path='/date' element={<Date/>}/>  
        <Route path='/pagination' element={<Pagination/>}/>
      </Route>
    </Routes>
    </div>
  )
}

export default App
