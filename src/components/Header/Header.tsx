import React from 'react'


import logo from '../../assets/logo.jpeg'
import {FiLogIn, FiShoppingBag, FiSearch} from 'react-icons/fi'
import {Link} from 'react-router-dom'

import './Header.css'

const Header = () => {
    return (
        <header>
            <div className="logo">
                <img src={logo} alt='Saladamandra' />
                <span>Produtos Naturais</span>
            </div>

            <div className='busca'>
                <form action="/search" className="search" method="get">
                    <input className="txtbusca" name="q" type="text" value="" placeholder="Digite o que você procura" />
                    <FiSearch type="submit" size={30} />
                </form>
            </div>
            <div className="login">
                <Link to="/conta">Sua Conta
                    <FiLogIn />
                </Link>
            </div>
            <div className='carrinho'>
                <FiShoppingBag size={60} />
            </div>

        </header>
    )
}

export default Header