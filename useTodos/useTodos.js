import { useEffect, useReducer } from "react";
import { todoReducer } from "./todoReducer";

const initialState = []

//el init se pasa como valor inicial del reduce la primera vez porque si se pasara desde el useEfect la primera vez al montar el componente retornara un arreglo vacio sobreescribiendo lo que hay en el LocalStorage 
const init = ()=>{
    return JSON.parse(localStorage.getItem('todos') ) || [];
}

const useTodos = () => {

    const [todos, dispatch] = useReducer(todoReducer, initialState, init);
    
        useEffect(()=>{
            //envia los todos al localStorage
            localStorage.setItem('todos', JSON.stringify(todos));
    
        },[todos]);
    
        const handleNewTodo = (todo)=>{
    
            const action = {
                type:'[TODO] Add Todo',
                payload: todo
            }
    
            //dispatch para mandar la action al reducer
            dispatch(action);
        };
    
        const handleDeleteTodo = (id)=>{
            const action = {
                type: '[TODO] Remove Todo',
                payload: id
            }
    
            dispatch(action)
    
        };
    
        const handleToggleTodo = (id)=>{
            const action = {
                type: '[TODO] Toggle Todo',
                payload:id,
            }
    
            dispatch(action);
        };

        const counterTodos = ()=>{
            return todos.length
        }

        const pendingTodosCount = ()=>{
            return todos.filter( todo =>!todo.done).length
        }

    return{
        todos,
        handleNewTodo,
        handleDeleteTodo,
        handleToggleTodo,
        counterTodos,
        pendingTodosCount
    }
}

export default useTodos