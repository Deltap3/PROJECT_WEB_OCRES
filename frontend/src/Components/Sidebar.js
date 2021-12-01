import React, { Component } from 'react'
import { Link } from "react-router-dom";

export class Sidebar extends Component {
    render() {
        return (
            <ul className="sidebarList">
                <Link to="/" className="link">
                    <li className="sidebarListItem">
                        Home
                    </li>
                </Link>
                <Link to="/home2" className="link">
                    <li className="sidebarListItem">
                        Home 2
                    </li>
                </Link>
            </ul>

        )
    }
}

export default Sidebar
