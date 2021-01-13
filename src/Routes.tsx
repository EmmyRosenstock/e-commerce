import React from 'react';
import {Route, BrowserRouter} from 'react-router-dom';
import Home from './pages/Home';
import Produtos from './pages/Produtos';
import Conta from './pages/Conta';

const Routes = ()=>{
    return(
        <BrowserRouter>
        <Route component={Home} path= '/' exact />
         <Route component={Produtos} path='/produtos'/>
         <Route component={Conta} path='/conta'/>
        </BrowserRouter>
    )
}
export default Routes; 