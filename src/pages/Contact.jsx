import Profil from "./Profil";
import { useState } from "react";
const Contact = ()=>{

    const [contactList, setContact] = useState(
        [
            
            { id: 0, name: "Tsafack joel", tel: 699305037},
            { id: 1, name: "Bobo JBT", tel: 698406818}
        ]
    );

    // Adding contact
    const addContact =()=>{

        if(
            document.getElementById('name').value != '' &&
            document.getElementById('phone').value != ''
        ){
            setContact(

                contactList.concat(
                    {id: contactList.length, name: document.getElementById('name').value, tel: document.getElementById('phone').value,}
                )
            );
        }

    }

    // delte contact function
    const deleteContact = (itemId) =>{

        setContact(
            contactList.filter(
                (value)=>{
                    if(value.id === itemId){
                        return false;
                    }
                    return true;
                }
            )
        );
    }

    return (
        <>
        <h2> contact listing</h2>
        <h3>Add contact</h3>
            <input type="text" placeholder="Enter the name" id="name" />
            <input type="number" placeholder="Enter the phone number" id="phone" />
            <button onClick={addContact} >Add contact</button>
        <ul>
            {
                contactList.map(
                    (elt)=>{
                        return <li key={elt.id}>
                                    Name: <u>{elt.name}</u> --- Phone number : <u>{elt.tel}</u> <button onClick={()=>deleteContact(elt.id)}>delete</button>
                            </li>;
                    }
                )
            }
        </ul>

        <h1>This is the CONTACT page</h1>
        <Profil/>
        </>
    );
}

export default Contact;