import React from 'react'
import { Router } from '@reach/router'
import { Link } from 'gatsby'
import { getProfile, isAuthenticated, login } from '../utils/auth'

const Settings = ({ user }) => {
    return <div>
        <h3>HIIIII!!!</h3>
        <p>{user.name}</p>
    </div>
}

const Superadmin = () => {
    if (!isAuthenticated()) {
        login()
        return <p>Redirecting to login...</p>
    }

    const user = getProfile()
    return (
        <div>
            <nav>
                <Link to="/superadmin">Superadmin</Link>{" "}
                <Link to="/superadmin/settings">Settings</Link>{" "}
                <Link to="/">Home</Link>
            </nav>
            <p>This is going to be protectd route</p>
            <Router>
                <Settings path="/superadmin/settings" user={user}></Settings>
            </Router>
        </div>
    )
}

export default Superadmin