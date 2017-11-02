import React from 'react';
import { NavLink } from 'react-router-dom';
import ClassName from 'className.js';

export default ( {path}) => (
    <nav className="navbar navbar-default" role="navigation">
        <div className="container-fluid">
            <div className="navbar-header">
                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navbar-collapse">
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                </button>
                <NavLink className="navbar-brand" to="">Ремонт квартиры</NavLink>
            </div>
            <div className="collapse navbar-collapse" id="navbar-collapse">
                <ul className="nav navbar-nav">
                    <li {...ClassName({active: path === '/'})}><NavLink to="">Расходы</NavLink></li>
                    <li {...ClassName({active: path === '/repair'})}><NavLink to="/repair">Ремонт</NavLink></li>
                    <li {...ClassName({active: path === '/plan'})}><NavLink to="/plan">Планирование</NavLink></li>
                    <li {...ClassName({active: path === '/idea'})}><NavLink to="/idea">Идеи</NavLink></li>
                    <li className="dropdown">
                        <NavLink to="/" className="dropdown-toggle" data-toggle="dropdown">Выплата по долгам<b className="caret"></b></NavLink>
                        <ul className="dropdown-menu">
                            <li><NavLink to="/">Долг Ленке</NavLink></li>
                            <li><NavLink to="/">Ипотека</NavLink></li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
);