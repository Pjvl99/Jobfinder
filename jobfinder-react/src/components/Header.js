import React from 'react'

const Header = ({logout}) => { //componente para el Header
    return (
      <header>               
                  <h1>Finder App</h1>
                  <button onClick={logout}>Logout</button>
      </header>
    )
  }

export {Header as default}