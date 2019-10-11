import React from 'react';
import './contact.css';

function Contact(props){
    return(
        
        <div className="Contact">
            
            <img className="avatar" src={props.avatar}></img>
            <div>
                <h4 className="name">{props.name}</h4>
                
                <div className="status">
                    
                    <div className={props.online ? "status-online" : "status-offline"}></div>

                    <p className="status-text">{props.online ? "Online" : "Offline"}</p>
                
                </div>
            </div>
        </div>
    )
}

export default Contact;