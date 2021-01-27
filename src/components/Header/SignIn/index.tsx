import React,{PureComponent, Fragment}from 'react'
import "./style.css";

function SignIn(){
    return(
        <form action="logar" method='post'>
            <div className='container'>
                <label className='uname'><b>E-mail</b></label>
                <input type="text" placeholder='E-mail' name="uname" required/>
                <label className='psw'><b>Senha</b></label>
                <input type="password" placeholder='Senha' name="psw" required/>
                <button type='submit'>Login</button>
                </div>
                <div className='container'>
                    <button type='button' className='cancelbtn'>Entrar</button>
                    <span className="psw">Forgot <a href="#">password?</a></span>
                    <span className="psw">Cadastrar-se <a href="#">cadastro?</a></span>
                </div>
        </form>
        
    )
}
export default SignIn;