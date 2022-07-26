import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import useFetch from "../../Hooks/useFetch";
import useIdGenerator from "../../Hooks/useIdGenerator";
import Loader from "../Loader";

interface Act {
    name?: string,
    actors_id: string[],
    date: string[],
}

interface ActorProp {
    //id? : string;
    name?: string;
    lastname?: string;
    dateOfBirth?: string;
    acts?: Act[]; // not type string
    btnHandler?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}



const ActorItem: React.FC <ActorProp> = (props) => {
   
    const {name, lastname, dateOfBirth, acts} = props;
    console.log("prop in Actor item: ", acts);
    return (
        <>
            <div className = "actor__item">
                <h4>{name}</h4>
                <h4>{lastname}</h4>
                <h4>{dateOfBirth}</h4>
                {acts?.length ? acts.map((act) => {
                    return <p>{act.name}: {act.date}</p>       
                }): ""}
            </div>    
        
        </>
    )
};





export default ActorItem;