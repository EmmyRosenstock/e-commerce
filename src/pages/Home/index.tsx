import React from 'react';
import {Link} from 'react-router-dom';

import Modal from './Modal'
import './style.css';
import {FiLogIn, FiShoppingBag, FiSearch} from 'react-icons/fi'
import { TiEye, TiUser } from "react-icons/ti"
import logo from '../../assets/logo.jpeg';

const Home = () => {

    function toggle(){
        let modal = document.querySelector('#modal')
        if(modal){
            modal.classList.toggle('active')
        }
    }

    return (
        <div id="page-home">
            <div className="content">

                <header>
                    <img src={logo} alt='Saladamandra'/>
                    <h1>Produtos Naturais</h1>
                    
                    <div className='busca'>
                  <form action="/search" className="search" method="get">
                  <input className="txtbusca" name="q" type="text" value="" placeholder="Digite o que você procura" />
                  <FiSearch type="submit" size={30} />
                  </form>
                   </div>
                   <div className='cad'>
                       <TiUser  size={30}/>
                        <a href="#" className="btnlog" onClick={toggle}>
                            <span>
                                <strong>Entre ou Cadastre-se</strong>
                            
                            </span>
                        </a>
                    </div>
                    <div className='carrinho'>
                      <Link to="/conta">
                          <FiShoppingBag size={30}/>
                          </Link>
                      </div>
                   
                   </header>
                   
                      <div className="Banner">
                      <img className='banner' src="https://s3.amazonaws.com/ibc-portal/wp-content/uploads/2020/04/29152053/familia-feliz.jpg"/>
                      <div className='elipse'>
                      <strong>Cuide bem da sua saude e bem estar da sua familia com produtos naturais e organicos</strong>
                      </div>
                     </div>
                    
                    <div className='menu'>
                        <div className='menuitem'>
                            <Link to='/produtos'>
                             <strong>Low Carb</strong>
                             <img className='pao' src="https://cdn2.iconfinder.com/data/icons/diets-and-ingredient-labels/109/bread-512.png" />
                            
                            </Link>
                            </div>
                        <div className='menuitem'>
                           <Link to='/produto'>
                               <strong>Vegano</strong>
                               <img className='vegano' src='https://img.icons8.com/ios/452/potted-plant.png'/>

                               </Link>
                        </div>
                        <div className='menuitem'>
                           <Link to='/produto'>
                               <strong>Sem Lactose</strong>
                               <img className='leite' src='https://img.icons8.com/ios/452/non-lactose-food.png'/>

                               </Link>
                        </div>
                        <div className='menuitem'>
                           <Link to='/produto'>
                               <strong>Diet</strong>
                               <img className='acucar' src='https://image.flaticon.com/icons/png/512/1410/1410541.png'/>
                            </Link>
                        </div>
                       
                    </div> 

            </div>
            
            <Modal />
         </div>   
        
    )}
export default Home;