import React from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import useFetch from "../../Hooks/useFetch";
import ActorItem from "../../Components/ActorItem";

const Actor: React.FC  = () => {
    const { id } = useParams();
    console.log(id);
    const {doFetch, items} = useFetch({path: `actors/${id}`});
    useEffect(() => {
        doFetch();
    }, [])
    // items = {specified actor}
    const {firstname, lastname, dateOfBirth, acts} = items;
    //const item : Item | never[] = items;
    console.log("Acts: ", acts) 
    return (
        <>
            <div>
            </div>
             <ActorItem 
             name = {firstname}
             lastname = {"lastname"}
             dateOfBirth = {"dateOfBirth"}
             acts = {acts}
             />
            
        </>
    )
};


export default Actor;















