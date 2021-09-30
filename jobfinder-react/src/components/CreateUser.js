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
const CreateUser = ({create}) => {
return (   
<form class='form' onSubmit={create}>
<div class='control'>
    <h1>Create User</h1>
</div>
<div class='control block-cube block-input'>
            First Name: <input placeholder='First Name' value={firstn} onChange={(e) => setFirstn(e.target.value)}/>
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
            Last Name: <input placeholder='Last Name' value={lastn} onChange={(e) => setLastn(e.target.value)}/>
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
           <p> Are you a company?: </p>
            <input value="true" type="radio" value={enterprisen} onChange={(e) => setEnterprisen(e.target.value)}/>Si<br/>
            <input value="false" type="radio" value={enterprisen} onChange={(e) => setEnterprisen(e.target.value)}/>No<br/>
<br/>
  <div class='control block-cube block-input'>
            Company: <input placeholder='Enterprise' value={enterprisen} onChange={(e) => setEnterprisen(e.target.value)}/>
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
            Password: <input type="password" placeholder='Password' value={pass} onChange={(e) => setPass(e.target.value)}/>
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
      Create User
    </div>
  </button>
  <p className="errorMsj">{error}</p>
</form> 
)


}

export {CreateUser as default}