import React,{PureComponent, Fragment}from 'react'
import "./style.css";

function SignIn(){
    return(
        <form className='signin'>
            <div className='form'>
                <label className="formLbel">E-mail</label>
                <i className='Icon'></i>
                <input type="text" className="forminput" placeholder='Insira seu e-mail'/>
            </div>
            <div className='form'>
                <label className="formLbel">Senha</label>
                <i className='icon-locker'></i>
                <button type= "button" className='showpsw'>Mostrar</button>
                <input type="text" className='forminput' placeholder="Insira sua senha"/>
                </div>
                <a href="#" className='formlink'>
                    Esqueci a senha
                </a>
                <button type="button" className='btnlight'></button>
        </form>
       
        
    )
}
export default SignIn;