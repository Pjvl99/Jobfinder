import React, {useEffect, useState } from 'react';
import axios from 'axios'
import cthulhu from './images/cthulu.jpeg'
//estructura del perfil:
// {
//     id: int
//     name: String,
//     lat: String,
//     lon: String,
//     phone: String,
//     dept: String
// }

const Profile = (props) => { //componente para mostrar la lista de fiscalias

  const [userInfo, setUserInfo] = useState({})
  
  useEffect(() => { //funciona como un ComponentDidMount, el cual realiza la busqueda del token
    
    console.log(props.token)
    const baseURL = "http://localhost:5000/users/me";
      
    axios.get(baseURL, {
      headers: {
        'Authorization': `Bearer ${props.token}`
      }   
    }).then((response) => {
      setUserInfo(response.data)
    }).catch(err => {
      console.log(err)
    });
  }, [])

    
    return ( //cuerpo del componente.
      <div className='content-container'>
        <div key={1}>
          {userInfo.isEnterprise ? (
            <div>
              <h1>Perfil de la Empresa: </h1>
              <p>Name: {userInfo.enterpriseName}</p>
            </div>
          ) : (
            
            <div>
                 <div id="page-wrap">
    
    <img src={cthulhu} alt="Photo of Cthulu" id="pic" width="300" height="300"/>

    <div id="contact-info" class="vcard">
    
    
        <h1>C'thulhu</h1>
    
        <p color="black">
            Cell: <span class="tel">555-666-7777</span><br />
            Email: <a class="email" href="mailto:greatoldone@lovecraft.com">greatoldone@lovecraft.com</a>
        </p>
    </div>
            
    <div id="objective">
        <p>
            I am an outgoing and energetic (ask anybody) young professional, seeking a 
            career that fits my professional skills, personality, and murderous tendencies. 
            My squid-like head is a masterful problem solver and inspires fear in who gaze upon it. 
            I can bring world domination to your organization. 
        </p>
    </div>
    
    <div class="clear"></div>
    
    <dl>
        <dd class="clear"></dd>
        
        <dt>Education</dt>
        <dd>
            <h2>Withering Madness University - Planet Vhoorl</h2>
            <p><strong>Major:</strong> Public Relations<br />
               <strong>Minor:</strong> Scale Tending</p>
        </dd>
        
        <dd class="clear"></dd>
        
        <dt>Skills</dt>
        <dd>
            <h2>Office skills</h2>
            <p>Office and records management, database administration, event organization, customer support, travel coordination</p>
            
            <h2>Computer skills</h2>
            <p>Microsoft productivity software (Word, Excel, etc), Adobe Creative Suite, Windows</p>
        </dd>
        
        <dd class="clear"></dd>
        
        <dt>Experience</dt>
        <dd>
            <h2>Doomsday Cult <span>Leader/Overlord - Baton Rogue, LA - 1926-2010</span></h2>
            <ul>
                <li>Inspired and won highest peasant death competition among servants</li>
                <li>Helped coordinate managers to grow cult following</li>
                <li>Provided untimely deaths to all who opposed</li>
            </ul>
            
            <h2>The Watering Hole <span>Bartender/Server - Milwaukee, WI - 2009</span></h2>
            <ul>
                <li>Worked on grass-roots promotional campaigns</li>
                <li>Reduced theft and property damage percentages</li>
                <li>Janitorial work, Laundry</li>
            </ul> 
        </dd>
        
        <dd class="clear"></dd>
        
        <dt>Hobbies</dt>
        <dd>World Domination, Deep Sea Diving, Murder Most Foul</dd>
        
        <dd class="clear"></dd>
        
        <dt>References</dt>
        <dd>Available on request</dd>
        
        <dd class="clear"></dd>
    </dl>
    
    <div class="clear"></div>

</div></div>
          )}
        </div>
      </div>
    )
  }

  export {Profile as default}