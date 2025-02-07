import { useState } from "react"

const useCounter = (value = 10) => {
  
    const [counter, setCounter] = useState(value)

    const suma = (value = 1)=>{
        setCounter(counter + value );
    };

    const resta = (value = 1)=>{

        if(counter > 1){
            setCounter(counter-value);
        }
        
    };

    const reset = ()=>{
        setCounter(value)
    }

    return{
        counter,
        suma,
        resta,
        reset
    }
}

export default useCounter