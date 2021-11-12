import React, {useState} from 'react';
import './ChatScreen.css'
import Avatar from '@mui/material/Avatar';

function ChatScreen (){
          const [input, setInput] = useState ("");
          const [messages, setMessages] = useState ([
                    {
                           name: 'Nike',
                           message: 'Que dice'   
                    },
                    {
                              message: "Si si, estoy buscando trabajo"
                    }
          ])

          const handleSend = e =>{
                 e.preventDefault();
                 setMessages([...messages, {message: input}]);
                 setInput('');
          }
          return (
                    <div className = "chatScreen">
                     <p className = "chatScreen__timestamp"> Hiciste match con Nike </p>
                    {messages.map((message) => 
                              message.name ? (
                                        <div className = "chatScreen__message">
                                        <Avatar 
                                        className = "chatScreen__image"
                                        />
                                         <p className= "chatScreen__text">{message.message}</p>
                                        </div>
                              ): (
                                        <div className = "chatScreen__message">
                                         <p className = "chatScreen__textUser">{message.message}</p>
                                        </div> 
                                )
                              )}

                     <form className = "chatScreen__input">
                            <input 
                            value = {input}
                            onChange = {e => setInput (e.target.value)}
                            className = "chatScreen__inputField"
                            placeholder = "Type a message..." 
                            type = "text"/>
                            <button onClick = {handleSend} type = "submit"className = "chatScreen__inputButton">SEND</button>
                     </form>
                    </div>
          );
}


export default ChatScreen