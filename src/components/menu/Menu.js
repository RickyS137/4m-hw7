import React from "react";
import { NavLink } from "react-router-dom";
import style from './menu.module.css'

function Menu() {
    return (
        <div>
            <ul>
                <li>
                    <NavLink to='/' className={style.link}>
                        Home Page
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/main' className={style.link}>
                        Main Page
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/emir' className={style.link}>
                        Emir Page
                    </NavLink>
                </li>
            </ul>
        </div>
    );
}
export default Menu;