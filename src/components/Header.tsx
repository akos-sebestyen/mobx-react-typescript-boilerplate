import * as React from "react";
import {Link} from "react-router-dom";

export class Header extends React.Component {
    public render() {
        return <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
            </ul>
        </nav>
    }
}
