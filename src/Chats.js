import React from 'react';
import Chat from './Chat'
import './Chat.css';

function Chats(){
          return(
                    <div className = "chats">
                              <Chat 
                              name = "Nike"
                              message = "Que dice, queres trabajo?"
                              timestamp = "Hace 40 segundos">

                              </Chat>
                    </div>
          );
}

export default Chats