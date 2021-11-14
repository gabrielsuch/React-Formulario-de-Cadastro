import "./style.css"

import * as yup from "yup"
import {useForm} from "react-hook-form"
import {yupResolver} from "@hookform/resolvers/yup"
import {useHistory} from "react-router-dom"

const Register = ({setAuth}) => {

    const history = useHistory()

    const schema = yup.object().shape({
        name: yup.string().required("Nome Obrigatório"),
        email: yup.string().required("Email Obrigatório").email("Email Inválido"),
        password: yup.string().required("Senha Obrigatória").min(8, "Senha deve ter mais de 8 caractéres")
        .matches(/(?=.*[a-z])/, "Deve ter pelo menos uma letra minúscula")
        .matches(/(?=.*[A-Z])/, "Deve ter pelo menos uma letra maiúscula")
        .matches(/(?=.*[0-9])/, "Deve ter pelo menos um número")
        .matches(/[$-/:-?@#%¨&*-+{-~!"^_`\[\]]/, "Deve ter pelo menos um símbolo"),
        confirmPassword: yup.string().required("Confirmar Senha Obrigatória").oneOf([yup.ref("password"), null], "Senhas Diferentes")
    })

    const {register, handleSubmit, formState: {errors}} = useForm({
        resolver: yupResolver(schema)
    })

    const onSubmit = (data) => {
        setAuth(true)
        history.push(`/success/${data.name}`)
    }

    return (
        <div className="box">
            <div className="register">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input type="text" placeholder="Nome" {...register("name")}/>
                    <span>{errors.name?.message}</span>
                    <input placeholder="Email" {...register("email")}/>
                    <span>{errors.email?.message}</span>
                    <input type="password" placeholder="Senha" {...register("password")}/>
                    <span>{errors.password?.message}</span>
                    <input type="password" placeholder="Confirmar Senha" {...register("confirmPassword")}/>
                    <span>{errors.confirmPassword?.message}</span>
                    <div className="btnRegister">
                        <button type="submit">Cadastrar</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Register