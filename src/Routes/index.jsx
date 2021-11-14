import {Switch, Route} from "react-router-dom"

import Success from "../pages/Success/success"
import Register from "../pages/Register/register"

import {useState} from "react"

const Routes = () => {

    const [auth, setAuth] = useState(false)

    return (
        <Switch>
            <Route exact path="/">
                <Register setAuth={setAuth}/>
            </Route>

            <Route path="/success/:name">
                <Success auth={auth} setAuth={setAuth}/>
            </Route>
        </Switch>
    )
}

export default Routes