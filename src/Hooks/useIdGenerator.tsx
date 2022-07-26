
import useFetch from "./useFetch";


const useIdGenerator = ( {btnHandler}: {btnHandler? : (event: React.MouseEvent<HTMLButtonElement>) => void}) => {

    console.log("Imported Hook id generator");
    //useFetch({path: `actors/${id}`});
    /*const generateID = (event: React.MouseEvent<HTMLButtonElement>) => {
        console.log(event.target);
    } */
    const submit = (event: React.MouseEvent<HTMLButtonElement>) => { // React.MouseEventHandler<HTMLInputElement>
        const id = event.currentTarget.id;
    
    };

    return {submit}

};


export default useIdGenerator;

