import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div>Header
        <nav className="navbar navbar-expand-lg navbar-dark bg-secondary">
            <div className="container-fluid">
                <Link className="navbar-brand" to={'/'}>BloodBank </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <Link className="nav-link active" to='/'>Donor Signup </Link>
                    <Link className="nav-link active" to='/search'>Donor Signin</Link>
                    <Link className="nav-link active" to='/view'>View all Donors </Link>
                </div>
                </div>
            </div>
        </nav>
    </div>
  )
}

export default Header