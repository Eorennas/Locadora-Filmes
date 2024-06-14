import {Routes, BrowserRouter, Route} from 'react-router-dom'

import Home from './pages/Home';
import Filmes from './pages/Filmes';
import Header from './Components/Header';
import Erro from './pages/Erro';


function RoutesApp(){
    return(
        <BrowserRouter>
        <Header/>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/filmes/:id" element={<Filmes/>} />



                <Route path='*' element={<Erro/>}/>
            </Routes>
       
        </BrowserRouter>

    )
}

export default RoutesApp;