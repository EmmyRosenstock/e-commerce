import React from 'react';
import {Link} from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';

import './style.css';
import banner from "../../assets/banner.jpg"
import bolsa from '../../assets/bolsa.png';
import lupa from '../../assets/lupa.jpg';
import acucar from '../../assets/acucar.png';
import leite from '../../assets/leite.png';
import  pao from '../../assets/pao.png';
import planta from '../../assets/planta.png';
import logo from '../../assets/logo.jpeg';

const Home=() =>{
    return(
        <div id="page-home">
            <div className="content">
                <header>
                    <img src={logo} alt='Saladamandra'/>
                    <h1>Produtos Naturais</h1>
                    
                    <div className='busca'>
                  <form action="/search" className="search" method="get">
                  <input className="txtbusca" name="q" type="text" value="" placeholder="Digite o que você procura" />
                  <input className="btnBusca" type="submit" value="Ok"/>
                  </form>
                   </div>
                    <div className='cad'>
                        <Link to='/conta'>
                        <img className='pessoa' src='https://cdn.icon-icons.com/icons2/934/PNG/512/person-black-user-shape_icon-icons.com_72962.png' />
                        <span>
                            <strong>Entre ou Cadastre-se</strong>
                        <FiLogIn/>
                        </span>
                        </Link>
                    </div>
                        <div className='carrinho'>
                      <Link to="/conta">
                          <img className='bolsa' src='https://image.flaticon.com/icons/png/512/126/126510.png'/>
                      </Link>
                      </div>
                   </header>
                      <div className="navbar">
                        <div className="subnav">
                    
                          <button className= "subnavbtn">Suplementos <i className="fa fa-caret-down"></i></button>
                           <div className="subnav-content">
                           <a href="#"> Glutamina</a>
                           <a href="#"> Anti-Oxidante </a>
                           <a href="#"> Colageno </a>
                           <a href="#"> Minerais </a>
                        </div>
                        </div>
                        <div className="subnav">
                         <button className= "subnavbtn">Alimentos e bebidas <i className="fa fa-caret-down"></i></button>
                         <div className="subnav-content">
                          <a href="#"> Pães e massas</a>
                         <a href="#"> Doces </a>
                         <a href="#"> Barras</a>
                        <a href="#"> Bebidas </a> 
                        </div>
                        </div>
                        <div className="subnav">
                         <button className= "subnavbtn"> Outros <i className="fa fa-caret-down"></i></button>
                         <div className="subnav-content">
                          <a href="#"> Acessorios</a>
                         <a href="#"> Beleza </a>
                         <a href="#"> Higiene</a>
                        
                        </div>
                        </div>
                      </div>
                      
                 
                  <div className="Banner">
                      <img className='banner' src="https://s3.amazonaws.com/ibc-portal/wp-content/uploads/2020/04/29152053/familia-feliz.jpg"/>
                      <div className='elipse'>
                      <strong>Cuide bem da sua saude e bem estar da sua familia com produtos naturais e organicos</strong>
                      </div>
                     </div>
                    
                    <div className='menu'>
                        <div className='Low-Carb'>
                            <Link to='/produtos'>
                             <strong>Low Carb</strong>
                            <img src={pao} alt="pao"/>
                            </Link>
                            </div>
                        <div className='Vegano'>
                            <Link to='/produto'>
                            <strong>Vegano</strong>
                            <img src={planta} alt="planta"/>
                            </Link>
                            
                        </div>
                        <div className='semlactose'>
                            <Link to='/produto'>
                            <strong>Sem Lactose</strong>
                            <img src={leite} alt="leite"/>
                            </Link>
                            </div>
                            <div className='Diet'>
                            <Link to='/produto'>
                            <strong>Diet</strong>
                            <img src={acucar} alt="diet"/>
                            </Link>
                            
                        </div>


                    </div>
            </div>
        </div>
       
    )
}
export default Home;