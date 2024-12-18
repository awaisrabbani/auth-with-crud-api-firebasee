import { Navigate } from "react-router-dom"

export const PrivateRoute = (prop) => {
    const {children} = prop;
    const user = JSON.parse(localStorage.getItem('user'))

    if (user) {
        return children
    }
    else {
        return <Navigate to={'/login'}/>
    }
}