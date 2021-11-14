import "./style.css"

import {useParams, useHistory} from "react-router-dom"

const Success = ({auth, setAuth}) => {
    const history = useHistory()
    const params = useParams()

    if(!auth){
        history.push("/")
    }

    const logout = () => {
        setAuth(false)
        history.push("/")
    }

    return (
        <>
            <div className="loginName">
                <h1>Bem-Vindo, {params.name}</h1>
            </div>
            <div className="logout">
                <button onClick={logout}>Voltar</button>
            </div>
        </>
    )
}

export default Success