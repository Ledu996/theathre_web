import React from "react";
import "./index.css";

import Header from "../Components/Header/header";
import EventItem from "../Components/EventItem/index";
import Loader from "../Components/Loader";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination  } from "swiper";
import useFetch from "../Hooks/useFetch"; 
import {useEffect} from "react" 




const Landing: React.FC = () => { // <ItemProps> 
    // on backend create route for getting all events
    //const {title, description, date, url} = props;
    const {doFetch, isLoaded, items} = useFetch({path: "home"});
    useEffect(() => {
        doFetch();
    }, [])
    return (
        <div className= "main">
            <Header/>
                <div className = "landing__content"> 
                {items.length > 0 ? items.map(item => { // inside here there is gonna be a carousel
                console.log(item);
                        const {_id, title, description, date, picture} = item;
                        return <EventItem 
                            key={_id} 
                            title = {title} 
                            description = {description}
                            date = {date}
                            url = {picture} 
                        />; 
                    }): <Loader/>}
                </div>    
        </div>
    )
}


/*     {items.length > 0 ? items.map(item => { // inside here there is gonna be a carousel
                        const {title, description, date, picture} = item;
                        return <EventItem  
                            title = {title} 
                            description = {description}
                            date = {date}
                            url = {picture} 
                        />; 
                    }): <Loader/>} */

export default Landing;










