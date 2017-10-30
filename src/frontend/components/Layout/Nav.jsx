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
                    <li className="active"><NavLink to="/">Ссылка</NavLink></li>
                    <li><NavLink to="/">Ссылка</NavLink></li>
                    <li className="dropdown">
                        <NavLink to="/" className="dropdown-toggle" data-toggle="dropdown">Dropdown <b className="caret"></b></NavLink>
                        <ul className="dropdown-menu">
                            <li><NavLink to="/">Действие</NavLink></li>
                            <li><NavLink to="/">Другое действие</NavLink></li>
                            <li><NavLink to="/">Что-то еще</NavLink></li>
                            <li className="divider"></li>
                            <li><NavLink to="/">Отдельная ссылка</NavLink></li>
                            <li className="divider"></li>
                            <li><NavLink to="/">Еще одна отдельная ссылка</NavLink></li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
);