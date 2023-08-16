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
        <p>je suis {name} </p>
        <input type="text" placeholder="Enter a new name" id="newname" />
        <button onClick={changeName}>Change</button>
        </>
    )
}

export default Profil;