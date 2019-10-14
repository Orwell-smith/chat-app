import React from "react";
import Contact from "./Contact"


const user = [
    {
        avatar: "https://randomuser.me/api/portraits/women/83.jpg",
        name: "Frances Ford",
        online: true,
    },

    {
        avatar:"https://randomuser.me/api/portraits/men/33.jpg",
        name:"Eric Snyder",
        online: false
    },

    {
        avatar: "https://randomuser.me/api/portraits/men/9.jpg",
        name: "Frank Von Vürst",
        online:true,
    },

    {
        avatar: "https://randomuser.me/api/portraits/women/7.jpg",
        name: "Patricia Duncanopé",
        online: false,
    }, 

    {
        avatar: "https://randomuser.me/api/portraits/men/49.jpg",
        name: "Bruce Kaïl",
        online: true
    }
]


const ContactList = () => (
    <div>
      {user.map(item => (
    <Contact avatar={item.avatar} name={item.name} online={item.online} />
  )
  )}
    </div>
  );


export default ContactList;