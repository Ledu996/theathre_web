import React from "react";
import "./index.css"

interface ItemProps {
    title?: string,
    description?: string,
    date?: string,
    url?: string,
}


const EventItem: React.FC <ItemProps> = ({title, description, date, url }) => { // prima podatke iz fetcha
    /*Item has its own styles */
    return (
        <div className = "event-item"> 
            <img className = "event-item__image" src = {url} alt = "img"/>
            <h3 className = "event-item__title">{title}</h3>
            <h4 className="event-item__date">{date}</h4>
            <p className = "event-item__description">{description}</p>
        </div>
    )
}; 




export default EventItem;






