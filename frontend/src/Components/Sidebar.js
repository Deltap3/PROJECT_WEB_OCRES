import React, { Component } from 'react'
import { Link } from "react-router-dom";

export class Sidebar extends Component {
    render() {
        return (
            <ul className="sidebarList">
                <Link to="/" className="link">
                    <li className="sidebarListItem">
                        List Pokemon
                    </li>
                </Link>
                <Link to="/home2" className="link">
                    <li className="sidebarListItem">
                        One Pokemon
                    </li>
                </Link>
                <Link to="/myTeam" className="link">
                    <li className="sidebarListItem">
                        My Team
                    </li>
                </Link>
            </ul>

        )
    }
}

export default Sidebar
