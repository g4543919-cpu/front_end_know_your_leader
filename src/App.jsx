import { Route, Routes } from 'react-router-dom'
import './App.css'
import  { Button, buttonVariants } from './components/ui/button'
import { Home } from './Pages/Home'
import { CandidateId } from './Pages/CandidateId'
import SearchBox from './Pages/SearchBox'
import { ADMINPOST } from './Pages/ADMINPOST'

function App() {
  return (
  <>   
   <Routes>
    <Route path='/' element ={<Home />} ></Route>
    <Route path='/candidate/:id' element ={<CandidateId />}></Route>
   </Routes>
   {/* <ADMINPOST></ADMINPOST> */}

  </>
  )
}

export default App
