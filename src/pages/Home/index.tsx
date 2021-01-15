import React from 'react';
import {Link} from 'react-router-dom';

import './style.css';
import acucar from '../../assets/acucar.png';
import leite from '../../assets/leite.png';
import pao from '../../assets/pao.png';
import planta from '../../assets/planta.png';
import Header from '../../components/Header/Header';

const Home = () => {
    return (
        <div id="page-home">
            <div className="content">
                <Header />
                <hr></hr>
                <div className="Banner">
                    <img className='banner' src="https://s3.amazonaws.com/ibc-portal/wp-content/uploads/2020/04/29152053/familia-feliz.jpg" />
                    <strong>Cuide bem da sua saude e bem estar da sua familia com produtos naturais e organicos</strong>
                </div>

                <div className='menu'>
                    <div className='Low-Carb'>
                        <Link to='/produtos'>
                            <strong>Low Carb</strong>
                            <img src={pao} alt="pao" />
                        </Link>
                    </div>
                    <div className='Vegano'>
                        <Link to='/produto'>
                            <strong>Vegano</strong>
                            <img src={planta} alt="planta" />
                        </Link>
                    </div>
                    <div className='semlactose'>
                        <Link to='/produto'>
                            <strong>Sem Lactose</strong>
                            <img src={leite} alt="leite" />
                        </Link>
                    </div>
                    <div className='Diet'>
                        <Link to='/produto'>
                            <strong>Diet</strong>
                            <img src={acucar} alt="diet" />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Home;