import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

function Main() {
    return (
        <div>
            Welcome to visit me!
            <nav>
                <ul>
                    <li>
                        <Link to='/'>Mowa</Link>
                    </li>
                    <li>
                        <Link to='/main'>main</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Main;
