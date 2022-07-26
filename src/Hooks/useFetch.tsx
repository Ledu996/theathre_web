import { useCallback } from "react";
import { useState } from "react" ;
import { useParams } from "react-router-dom";

interface FetchProm {
    path?: string;
    method?: string;
    body?: object,
    id?: string; 
}

const useFetch = ({path, method, body, id }: FetchProm) => {
    const [error, setError] = useState<null>(null);
    const [isLoaded, setIsLoaded] = useState<boolean>(false);
    const [items, setItems] = useState([]); // niz Event Item objekata
    console.log(path);
    const doFetch = useCallback(() => {
        //const param = id ? id : '';
        //console.log(id);
        return fetch(`http://127.0.0.1:5000/${path}/`, { // ${param}
            //credentials: 'include',
            headers: {
                'Content-Type': 'application/json',
               },
            method: method,
            body : JSON.stringify(body)
        })
        .then((res) =>{ 
            //console.log('Odgovor', res);
            return res.json();
        })
        .then((data) => {
            console.log(data);
            setIsLoaded(true);
            setItems(data);
            return data;
        },
        (error) => {
            setIsLoaded(true);
            setError(error)
        }
    )
    }, [body])

    return {doFetch, items, isLoaded, error, id};
};


export default useFetch;






