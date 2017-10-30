import React from 'react';
import { NavLink } from 'react-router-dom';

export default (props) => (
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
                    <li className="active"><NavLink to="/">Расходы</NavLink></li>
                    <li><NavLink to="/">Ремонт</NavLink></li>
                    <li><NavLink to="/">Планирование</NavLink></li>
                    <li><NavLink to="/">Идеи</NavLink></li>
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