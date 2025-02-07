import { useEffect, useState } from "react"

const LocalCache = {};

const useFetch = (url) => {
  
    const [state, setState] = useState({
        data: null,
        isLoading: true,
        hasError: false,
        error: null,
    });

    const itsLoading = ()=>{
        setState({
            data: null,
            isLoading: true,
            hasError: false,
            error: null
        })
    };

    useEffect(()=>{

        getFetch();

    },[url]);

    const getFetch = async()=>{
        //Si existe data correspondiente a las url enviada entoces no hace la peticion https
        if(LocalCache[url]){

            setState({
                data: LocalCache[url],
                isLoading: false,
                hasError: false,
                error: null
            })

            return;
        }

            itsLoading();

            const res = await fetch(url);

            //Sleep
            await new Promise(resolve => setTimeout(resolve, 1500));

            if(!res.ok){
                setState({
                    data: null,
                    isLoading: false,
                    hasError: true,
                    error: {
                        code: res.status,
                        message: res.statusText,
                    }
                });
                return
            }

            const data = await res.json();

                setState({
                    data:data,
                    isLoading: false,
                    hasError: false,
                    error: null
                });

            //Manejo cache
        LocalCache[url] = data;
        //esto crea un obj con valor y llave en el que la llave o key es el url y el valor es la data
    }

    return{
        data: state.data,
        isLoading: state.isLoading,
        hasError: state.hasError,
        error: state.error
    }
}

export default useFetch