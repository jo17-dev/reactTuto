import { useContext } from "react";
import App, { AppChildsContext } from "../App";

const Profil = (props) =>{

    const {name} = useContext(AppChildsContext);
    const {setName} = useContext(AppChildsContext);

    const changeName = () =>{
        setName(
            document.getElementById('newname').value
        );
    }

    return (
        <>
        <i>Your Account section</i>
        <p>je suis {name} </p>
        <input type="text" placeholder="Enter your name" id="newname" />
        <button onClick={changeName}>Change</button>
        </>
    )
}

export default Profil;