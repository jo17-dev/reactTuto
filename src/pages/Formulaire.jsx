import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import * as yup from "yup";

const Formulaire = ()=>{

    const schema = yup.object().shape({
        fullname: yup.string().min(2, "Minimun 2 caracteres").required("le nom est requis"), 
        email: yup.string().email().required("l'email est requis"),
        age: yup.number().positive().min(15).required("le numero est requis"), 
        password: yup.string().min(6).max(20).required("le mot de passe est requis"), 
        confirmPassword: yup.string().oneOf([yup.ref("password"), null]).required("ce champ est requis"),
    });

    const {register, handleSubmit, formState: {errors}} = useForm({
        resolver: yupResolver(schema),
    });

    const enregistrer = (data)=>{
        console.log(data);
    }

    return (
        <>
        <h1>This is the FORM page</h1>
        <form action="" style={{display: "flex", flexDirection: "column", width: "300px", margin: "auto"}} onSubmit={handleSubmit(enregistrer)}>
            <input type="text" placeholder="full name" {...register("fullname")} />
            <input type="text" placeholder="Email" {...register("email")} />
            <input type="number" placeholder="Age" {...register("age")} />
            <input type="password" placeholder="password" {...register("password")} />
            <input type="password" placeholder="confirm your password" {...register("confirmPassword")} />
            <input type="submit" value="Submit"/>
        </form>
        <p>{errors.fullname?.message}</p>
        <p>{errors.email?.message}</p>
        <p>{errors.age?.message}</p>
        <p>{errors.password?.message}</p>
        <h3>Note that i havent do all the validations, bcause i've alreday understood the way to do it on some of the enters</h3>
        </>
    )
}

export default Formulaire; 

/**
 * Fonctionement deds form hooks
 *   on install react-hook-form et yup
 */