import'./modal.css';

const Modal=()=>
function close() {
    let modal = document.querySelector('#modal')
    if(modal){
        modal.classList.toggle('active')
    }
    

  return(
    <div id= 'modal' className='modal-overlay'>
        <div className='modal'>
            <form action="#">
            <fieldset className='inputs'>
                <legend> Formulario de autenticação</legend>
                <label className='sr-only' htmlFor="login">Login</label>
                <input type="text" id='login' name='login' placeholder='login' required/>
                <label className='sr-only' htmlFor="password">Password</label>
                <input type="password" id='password' name='password' placeholder='password' required/>
               </fieldset>
               <fieldset className='actions'> 
               <button type='reset' className='button-cancel' onClick={close}>Cancelar</button>
               <button type='submit' className='button-submmit'>Salvar</button>
               </fieldset>
            </form> 
            </div>
    </div>
)
  }
  export default Modal;