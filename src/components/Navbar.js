import React, { Component } from 'react'
import { Link, NavLink } from 'react-router-dom'

 class Navbar extends Component {
    render() {
        return (
            <nav clasName=" nav-wrapped grey darken-3">
                <div className="container">
                    <a className= "brand-logo">Poke'Times</a>
                    <ul className="right">
                        <li><Link to="/">Home</Link> </li>
                        <li><NavLink to ="/about">About</NavLink> </li>
                        <li><NavLink to="/contact">Contact</NavLink></li>
                    </ul>
                </div>

            </nav>
        )
    }
}
export default Navbar
