import { useState } from "react";

const useForm = (formI = {}) => {

    const [form, setForm] = useState(formI);

    const handleChange = ({target})=>{
        const {value, name} = target

        setForm({
            ...form,
            [name]: value,
        })
    };

    const onClickReset = ()=>{
        setForm(formI);
    }

    return{
        //esto desestructura todo lo que hay en un state con el spree operator
        ...form,
        form,
        handleChange,
        setForm,
        onClickReset
    }
}

export default useForm