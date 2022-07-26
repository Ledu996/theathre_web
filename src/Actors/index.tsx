import React from "react";

import { useEffect } from "react";
import useFetch from "../Hooks/useFetch";
import useIdGenerator from "../Hooks/useIdGenerator";

import { Link } from "react-router-dom";
import Header from "../Components/Header/header";
import Loader from "../Components/Loader";
import ActorItem from "../Components/ActorItem";

interface ActorItemProps {
    btnHandler?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}
const Actors: React.FC <ActorItemProps> = (props) => {
    const {btnHandler} = props;
    const {doFetch, items, id} = useFetch({path: "actors/"});
    console.log(id);
    //const {submit} = useIdGenerator({btnHandler});
    useEffect(() => {
        doFetch();
    },[])

    return (
        <>
        <Header/>
        <div>
            {items.length > 0 ? items.map(item => { // inside here there is gonna be a carousel
                //console.log(item);
                        const {_id, firstname, lastname, dateOfBirth} = item;
                        return <ActorItem
                            //id = {_id}
                            key = {_id} 
                            name = {firstname} 
                            lastname = {lastname}
                            dateOfBirth = {dateOfBirth}
                            //btnHandler = {submit} 
                        />; 
                    }): <Loader/>}
        </div>
        </>
    )
};


export default Actors;