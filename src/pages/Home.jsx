import { useState, useContext } from "react";
import { AppChildsContext } from "../App";

import {useQuery} from '@tanstack/react-query';
import axios from 'axios';

const Home = (props)=>{
    const {name} = useContext(AppChildsContext);
    const {data, isLoading} = useQuery(["cat"], ()=>{
        return axios.get("https://catfact.ninja/fact").then(
             (resp)=>resp.data
         );
     });

     if(isLoading){
        return <h2>Loading...</h2>
     }
    return (
        <>
        <h1>this is the HOME page</h1>
        <p>I am {name}</p>
        <h4>cat fact: {data?.fact}</h4>
        </>
    );
}

export default Home;