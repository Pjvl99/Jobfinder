import React from 'react';
import './Header.css'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ChatIcon from '@mui/icons-material/Chat';
import IconButton from '@mui/material/IconButton';
import {Link, useHistory} from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';


function Header({backButton}) {
          const history = useHistory();
          return(
                    <div className = 'header' >
                              {backButton ? (
                                        <IconButton onClick = {() => history.replace(backButton)}>
                                                  <ArrowBackIcon fontSize = "large" className = "header__arrowback"/>
                                        </IconButton>
                              ):(
                                        <IconButton>
                                                  <AccountCircleIcon className = "header__icon" sx={{ fontSize: 40}} />
                                        </IconButton>
                              )}

                              <Link to ='/'>
                              <img 
                              className = "header__logo"
                              src="https://cdn.discordapp.com/attachments/799845001198305360/903431113169571850/unknown.png" alt="Logo de empresa"
                              />
                              </Link>

                              <Link to ="/chat">
                              <IconButton>
                                        <ChatIcon className = "header__icon" sx={{ fontSize: 40}} />
                              </IconButton>
                              </Link>
                    </div>
                    
          )
}

export default Header