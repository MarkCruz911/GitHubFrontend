import {Routes,Route} from "react-router-dom"
import './App.css'
import Profile from "./sidebar/profile"
import Title from "./component/title"
import Date from "./component/date"
import Pagination from "./component/pagination"
import TotalUno from "./component/totaluno"
import TotalDos from "./component/totaldos"
import SubTitle from "./component/subtitle"
import Contribuitor from "./component/contribuitor"
import PageRepositories from "./pages/pagerepositories"
import PageBranches from "./pages/pagebranches"
import ListRepository from "./component/listRepository"
import ListBranches from "./component/listBranches"
import ListCommits from "./component/listCommitss"
import PageCommits from "./pages/pagecommits"
import PageContribuitors from "./pages/pagecontribuitors"
import LoginWithGoogle from "./component/loginWithGoogle"
import PrivateRoute from "./privateRoute"

function App() {
  return (
    <div className="App">
    <Routes>
      <Route>  
        <Route path="/" element={PrivateRoute()?<PageRepositories/>:<LoginWithGoogle/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/title' element={<Title title={""}/>}/>
        <Route path='/subtitle' element={<SubTitle title={""}/>}/>
        <Route path='/date' element={<Date date={""}/>}/>  
        <Route path='/pagination' element={<Pagination total={0} page={0} setPageActual={function (): void {
            throw new Error("Function not implemented.")
          } }/>}/>
        <Route path='/totaluno' element={<TotalUno total={0}/>}/>
        <Route path='/totaldos' element={<TotalDos total={0}/>}/>
        <Route path='/listrepository' element={<ListRepository title={""} description={""} date={""} status={""}/>}/>
        <Route path='/listbranches' element={<ListBranches name={""} date={""}/>}/>
        <Route path='/listcommits' element={<ListCommits name={""} description={""} user={""} date={""}/>}/>
        <Route path='/contribuitor' element={<Contribuitor login={""} avatar_url={""} html_url={""}/>}/>
        <Route path='/repositories' element={PrivateRoute()?<PageRepositories/>:<LoginWithGoogle/>}/>
        <Route path='/branches' element={PrivateRoute()?<PageBranches/>:<LoginWithGoogle/>}/>
        <Route path='/branches/:id' element={PrivateRoute()?<PageBranches/>:<LoginWithGoogle/>}/>
        <Route path='/commits' element={PrivateRoute()?<PageCommits/>:<LoginWithGoogle/>}/>
        <Route path='/commits/:id' element={PrivateRoute()?<PageCommits/>:<LoginWithGoogle/>}/>
        <Route path='/contribuitors' element={PrivateRoute()?<PageContribuitors/>:<LoginWithGoogle/>}/>
        <Route path='/contribuitors/:id' element={PrivateRoute()?<PageContribuitors/>:<LoginWithGoogle/>}/>
      </Route>
    </Routes>
    </div>
  )
}

export default App
