import React, { useState } from 'react';
import TinderCard from "react-tinder-card";
import './TinderCards.css';


function TinderCards(){
          const [people, setPeople] = useState ([
                    {
                              name: "Programador de Front End Google",
                              url: 
                                 "https://wallpapercave.com/wp/wp2860517.jpg"
                    },
                    {
                              name: "Gerente Regional de ventas en Nike",
                              url: 
                                 "https://cdn.wallpapersafari.com/99/88/JV7LXN.jpg"
                              
                    },
                    {
                        name: "Maestro de Matematicas en Universidad Fransico Marroquin",
                        url: 
                           "data:image/png;base64,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"
                        
                    },
                    {
                        name: "Se busca Persona Bilingue en Call Center TIGO",
                        url: 
                           "https://okyapp.com/wp-content/uploads/2021/01/op-tigo-logo-cuadrado.jpg"
                        
                    },
                    {
                        name: "Cajero en San Martin",
                        url: 
                           "https://okyapp.com/wp-content/uploads/2020/11/sanmartin-logo-cuadrado.jpg"
                        
                    },
                    {
                        name: "Gerente Comercial BI",
                        url: 
                           "https://play-lh.googleusercontent.com/nvBkpCojq9C9bSJ5wG1pjp2cCA-EYOV-xpNaIuvjPgua6oZw9YJueYpRMflFs-YMv5M"
                        
                    },
          ]);

          return ( 
                    <div>
                              <div className = "tinderCards__cardContainer">
                                        {people.map((person) => (
                                                  <TinderCard
                                                  className = "swipe"
                                                  key = {person.url}
                                                  preventSwipe = {['up','down']}
                                                  >
                                                            <div
                                                            style= {{ backgroundImage: `url(${person.url})` }}
                                                            className="card"
                                                            >
                                                            <h3>{person.name}</h3>      
                                                            </div>
                                                  </TinderCard>
                                        ))}
                              </div>

                    </div>
          );
}

export default TinderCards;