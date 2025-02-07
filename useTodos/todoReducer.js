

export const todoReducer = (initialState, action)=>{

    switch (action.type) {
        case '[TODO] Add Todo': 
            return[...initialState, action.payload];

        case '[TODO] Remove Todo':
            return initialState.filter( todo => todo.id != action.payload);

        case '[TODO] Toggle Todo':
            return initialState.map(todo =>{
                
                if(todo.id === action.payload){ //itera todos los todos
                    //si existe un todo con el id modifica el done
                    return{
                        ...todo, //retorna todos los valores iguales
                        done : !todo.done,
                    };
                }
                    //si no retorna el todo igual
                    return todo
            })
            
        default:
            return initialState;
    }

}