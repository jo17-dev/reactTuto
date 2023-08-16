import { useState, useContext } from "react";
import { AppChildsContext } from "../App";
const Home = (props)=>{
    const {name} = useContext(AppChildsContext);
    return (
        <>
        <h1>this is the HOME page</h1>
        <p>I am {name}</p>
        </>
    );
}

export default Home;