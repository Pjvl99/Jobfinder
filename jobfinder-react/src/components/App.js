
import React, {useEffect, useState } from 'react';
import Header from './Header'
import Profile from './Profile'
import axios from 'axios'
//import CreateUser from './CreateUser';

//componente para login y listado de fiscalias
const App = (props) => {
  
    const [user, setUser] = useState('')
    const [pass, setPass] = useState('')
    const [error, setError] = useState('')
    const [auth, setAuth] = useState(false) //estados para poder almacenar el estado de autenticacion, token, usuaio y errorres
    const [token, setToken] = useState('')
    const [enterprise, setTEnterprise] = useState(false)
    const [firstn, setFirstn] = useState('')
    const [lastn, setLastn] = useState('')
    const [enterprisen, setEnterprisen] = useState('')
    const [newuser, setNewuser] = useState(false)
    // 

    useEffect(() => { //funciona como un ComponentDidMount, el cual realiza la busqueda del token
      console.log('inside useEffect')
      if(localStorage.getItem("tk") !== null){
        const tk = localStorage.getItem("tk")
        if(tk.length > 90){
          setToken(tk)
          setAuth(true)
        }
      }
      
    }, [])
  
    const login = (e) => { //login es disparado por el formulario de inicio de sesion.
      e.preventDefault() //evitamos que la pagina se refresque
      
      const baseURL = "http://localhost:5000/users/login"

      axios.post(baseURL, {
        'email': user,
        'password': pass
      }).then((response) => {
          
          setToken(response.data.token)
          // setUserInfo(response.data.user)
          setAuth(true)
          localStorage.setItem("tk", response.data.token);

          console.log()

        }).catch(err => {
          console.log(err)
          setError('Error de Autenticacion') //indicamos el error a mostrar
        });
    }

    const logout = (e) => { //logout elimina el token, y "cierra" la sesion
      const baseURL = "http://localhost:5000/users/logout";
      console.log("ESTOY EN LOGOUT")
      console.log(token)
      axios.post(baseURL, {}, {
        headers: {
          'Authorization': `Bearer ${token}`
        }   
      }).then((response) => {
        localStorage.removeItem("tk")
        setToken('')
        setAuth(false)
      }).catch(err => {
        console.log(err)
      });

      
    }
    
 
    const create = (e) => {
      e.preventDefault()
      const baseURL = "http://localhost:5000/users"
      axios.post(baseURL, {
        'firstName': firstn,
        'lastName': lastn,
        'enterpriseName': enterprisen,
        'email': user,
        'password': pass,
        'isEnterprise': enterprise
      } ).then((response) => {
        setNewuser(false)
        console.log()
      }).catch(err => {
        console.log(err)
        setError('Error al crear usuario')
      });

    }
    const usernew = (e) => {
      setNewuser(true)
    }
  
    return auth ? ( //si esta autenticado muestra la pagina principal de fiscalias
      <div> 
        <Header logout={logout}/>
        <Profile token={token} />
        
      </div> //logeado
    ) : !newuser ? (
      <div>
          <form class='form'>
              <div class='control'>
    <h1>
      Sign In
    </h1>
  </div>
  <div class='control block-cube block-input'>
            E-mail: <input value={user} placeholder='Email' onChange={(e) => setUser(e.target.value)} />
            <div class='bg-top'>
      <div class='bg-inner'></div>
    </div>
    <div class='bg-right'>
      <div class='bg-inner'></div> 
    </div>
    <div class='bg'>
      <div class='bg-inner'></div>
    </div>
  </div>
            <br/>
            <div class='control block-cube block-input'>
            Contraseña: <input type="password" placeholder='Contraseña' value={pass} onChange={(e) => setPass(e.target.value)}/>
            <div class='bg-top'>
      <div class='bg-inner'></div>
    </div>
    <div class='bg-right'>
      <div class='bg-inner'></div>
    </div>
    <div class='bg'>
      <div class='bg-inner'></div>
    </div>
  </div>
            <br/>
            <button class='btn block-cube block-cube-hover' type='button' onClick={login}>
    <div class='bg-top'>
      <div class='bg-inner'></div>
    </div>
    <div class='bg-right'>
      <div class='bg-inner'></div>
    </div>
    <div class='bg'>
      <div class='bg-inner'></div>
    </div>
    <div class='text'>
      Login
    </div>
  </button>
            <p className="errorMsj">{error}</p>
          </form>
          <form class='form'>
          <button class='btn block-cube block-cube-hover' type='button' onClick={usernew}>
    <div class='bg-top'>
      <div class='bg-inner'></div>
    </div>
    <div class='bg-right'>
      <div class='bg-inner'></div>
    </div>
    <div class='bg'>
      <div class='bg-inner'></div>
    </div>
    <div class='text'>
      Crear Usuario
    </div>
  </button>              
            </form>
        </div>
      ) //de lo contrario muestra la pagina para inicio de sesion
    : (
      <div>
        <form class='form'>
<div class='control'>
    <h1>Crear Usuario</h1>
</div>
<div class='control block-cube block-input'>
            Nombre: <input placeholder='Nombre' value={firstn} onChange={(e) => setFirstn(e.target.value)}/>
            <div class='bg-top'>
      <div class='bg-inner'></div>
    </div>
    <div class='bg-right'>
      <div class='bg-inner'></div>
    </div>
    <div class='bg'>
      <div class='bg-inner'></div>
    </div>
  </div><br/>
  <div class='control block-cube block-input'>
            Apellido: <input placeholder='Apellido' value={lastn} onChange={(e) => setLastn(e.target.value)}/>
            <div class='bg-top'>
      <div class='bg-inner'></div>
    </div>
    <div class='bg-right'>
      <div class='bg-inner'></div>
    </div>
    <div class='bg'>
      <div class='bg-inner'></div>
    </div>
  </div><br/>
      <label>¿Eres una empresa?</label><br/>
      <select>
      <option value="true" onChange={(e) => setEnterprisen(e.target.value)}>Si</option>
    <option value="false" onChange={(e) => setEnterprisen(e.target.value)}>No</option>
        </select><br/>
<br/><br/>
  <div class='control block-cube block-input'>
            Compañia: <input placeholder='Nompre de la empresa' value={enterprisen} onChange={(e) => setEnterprisen(e.target.value)}/>
            <div class='bg-top'>
      <div class='bg-inner'></div>
    </div>
    <div class='bg-right'>
      <div class='bg-inner'></div>
    </div>
    <div class='bg'>
      <div class='bg-inner'></div>
    </div>
  </div><br/> 
<div class='control block-cube block-input'>
E-mail: <input value={user} placeholder='Email' onChange={(e) => setUser(e.target.value)} />
<div class='bg-top'>
      <div class='bg-inner'></div>
    </div>
    <div class='bg-right'>
      <div class='bg-inner'></div> 
    </div>
    <div class='bg'>
      <div class='bg-inner'></div>
    </div>
  </div>
  <br/>
  <div class='control block-cube block-input'>
            Contraseña: <input type="password" placeholder='Contraseña' value={pass} onChange={(e) => setPass(e.target.value)}/>
            <div class='bg-top'>
      <div class='bg-inner'></div>
    </div>
    <div class='bg-right'>
      <div class='bg-inner'></div>
    </div>
    <div class='bg'>
      <div class='bg-inner'></div>
    </div>
  </div><br/>
  <button class='btn block-cube block-cube-hover' type='button' onClick={create}>
    <div class='bg-top'>
      <div class='bg-inner'></div>
    </div>
    <div class='bg-right'>
      <div class='bg-inner'></div>
    </div>
    <div class='bg'>
      <div class='bg-inner'></div>
    </div>
    <div class='text'>
      Crear Usuario
    </div>
  </button>
  <p className="errorMsj">{error}</p>
</form> 
      </div>
    );
  }
  

  export {App as default}