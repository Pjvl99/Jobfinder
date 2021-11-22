import React from 'react'
import user from './App'
import firstn from './App'
import setFirstn from './App'
import lastn from './App'
import setLastn from './App'
import enterprisen from './App'
import setEnterprisen from './App'
import setUser from './App'
import pass from './App'
import setPass from './App'
import error from './App'
const CreateProfile = ({ create }) => {
  return (
    <form class='form' onSubmit={create}>
      <div class='control block-cube block-input'>
        Nombre: <input placeholder='Resumen' value={firstn} onChange={(e) => setFirstn(e.target.value)} />
        <div class='bg-top'>
          <div class='bg-inner'></div>
        </div>
        <div class='bg-right'>
          <div class='bg-inner'></div>
        </div>
        <div class='bg'>
          <div class='bg-inner'></div>
        </div>
      </div><br />
      <div class='control block-cube block-input'>
        Nombre: <input placeholder='Educacion' value={firstn} onChange={(e) => setFirstn(e.target.value)} />
        <div class='bg-top'>
          <div class='bg-inner'></div>
        </div>
        <div class='bg-right'>
          <div class='bg-inner'></div>
        </div>
        <div class='bg'>
          <div class='bg-inner'></div>
        </div>
      </div><br />
      <div class='control block-cube block-input'>
        Nombre: <input placeholder='Habilidades' value={firstn} onChange={(e) => setFirstn(e.target.value)} />
        <div class='bg-top'>
          <div class='bg-inner'></div>
        </div>
        <div class='bg-right'>
          <div class='bg-inner'></div>
        </div>
        <div class='bg'>
          <div class='bg-inner'></div>
        </div>
      </div><br />
      <div class='control block-cube block-input'>
        Nombre: <input placeholder='Experiencia' value={firstn} onChange={(e) => setFirstn(e.target.value)} />
        <div class='bg-top'>
          <div class='bg-inner'></div>
        </div>
        <div class='bg-right'>
          <div class='bg-inner'></div>
        </div>
        <div class='bg'>
          <div class='bg-inner'></div>
        </div>
      </div><br />
      <div class='control block-cube block-input'>
        Nombre: <input placeholder='Otras habilidades' value={firstn} onChange={(e) => setFirstn(e.target.value)} />
        <div class='bg-top'>
          <div class='bg-inner'></div>
        </div>
        <div class='bg-right'>
          <div class='bg-inner'></div>
        </div>
        <div class='bg'>
          <div class='bg-inner'></div>
        </div>
      </div><br />
      <div class='control block-cube block-input'>
        Nombre: <input placeholder='Referencias' value={firstn} onChange={(e) => setFirstn(e.target.value)} />
        <div class='bg-top'>
          <div class='bg-inner'></div>
        </div>
        <div class='bg-right'>
          <div class='bg-inner'></div>
        </div>
        <div class='bg'>
          <div class='bg-inner'></div>
        </div>
      </div><br />


      <button class='btn block-cube block-cube-hover' type='submit'>
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
          Guardar Perfil
        </div>
      </button>
      <p className="errorMsj">{error}</p>
    </form>
  )


}

export { CreateUser as default }