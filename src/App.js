
import './App.css';
import {
  BrowserRouter, Routes, Route} from "react-router-dom"
import Home from './pages/Home'
import Tour from './pages/Tour'
import DrawerAppBar from './component/AppBar';
function App() {
  return (
    <BrowserRouter>
         <DrawerAppBar />
    <Routes>
        <Route  path='/' element={ <Home />}  />

        <Route  path='/:id' element={ <Tour/>}  />
       
    </Routes>
    </BrowserRouter>
   
  );
}

export default App;
