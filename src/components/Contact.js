import React from 'react';
import './contact.css';

// function Contact(props){
//     return(
        
//         <div className="Contact">
            
//             <img className="avatar" src={props.avatar}></img>
//             <div>
//                 <h4 className="name">{props.name}</h4>
                
//                 <div className="status">
                    
//                     <div className={props.online ? "status-online" : "status-offline"}></div>

//                     <p className="status-text">{props.online ? "Online" : "Offline"}</p>
                
//                 </div>
//             </div>
//         </div>
//     )
// }


class Contact extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            online: false
        }
    }
    
    render(){
        return(
            
            <div className="Contact">
                
                <img className="avatar" src={this.props.avatar}></img>
                <div>
                    <h4 className="name">{this.props.name}</h4>
                    
                    <div className="status">
                        
                        <div 
                        className = {this.state.online ? "status-online" : "status-offline"}
                        onClick = {event => {
                            const newClick = !this.props.online;
                            this.setState({
                                online:  newClick
                             });
                        }}
                        ></div>

                        <p className="status-text">{this.props.online ? "Online" : "Offline"}</p>
                    
                    </div>
                </div>
            </div>
        )
    }
}

export default Contact;