import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, NavLink, Route } from 'react-router-dom';

import './index.css';

function Home(props) {
    return (
        <div>
            <h1>Home Component</h1>
            <p>This is HOME</p>
        </div>
    );
}

function About(props) {
    return (
        <div>
            <h1>About Component</h1>
            <p>This is ABOUT</p>
        </div>
    );
}

function Music(props) {
    return (
        <div>
            <h1>Music Component</h1>
            <p>This is Music</p>
        </div>
    );
}

function Movies(props) {
    return (
        <div>
            <h1>Movies Component</h1>
            <p>This is Movies</p>
        </div>
    );
}

function Books(props) {
    return (
        <div>
            <h1>Books Component</h1>
            <p>This is Books</p>
        </div>
    );
}


function Products(props) {
    return (
        <div className="view">
            <h1>Products Component</h1>
            <p>This is PRODUCTS</p>

            <ul>
                <li className="navLink">
                    <NavLink to="/products/music" activeClassName="navLink--selected">
                        Music
                    </NavLink>
                </li>
                <li className="navLink">
                    <NavLink to="/products/movies" activeClassName="navLink--selected">
                        Movies
                    </NavLink>
                </li>
                <li className="navLink">
                    <NavLink to="/products/books" activeClassName="navLink--selected">
                        Books
                    </NavLink>
                </li>
            </ul>

            <hr/>

            <Route path="/products/music" component={Music} />
            <Route path="/products/movies" component={Movies} />
            <Route path="/products/books" component={Books} />
        </div>
    );
}

ReactDOM.render(
    <Router>
        <div>
            <ul>
                <li className="navLink">
                    <NavLink to="/" activeClassName="navLink--selected" exact>
                        Home
                    </NavLink>
                </li>
                <li className="navLink">
                    <NavLink to="/about" activeClassName="navLink--selected" exact>
                        About
                    </NavLink>
                </li>
                <li className="navLink">
                    <NavLink to="/products" activeClassName="navLink--selected" exact>
                        Products
                    </NavLink>
                </li>
            </ul>

            <Route path="/" component={Home} exact />
            <Route path="/about" component={About} />
            <Route path="/products" component={Products} />
        </div>
    </Router>,
document.getElementById('root'));
