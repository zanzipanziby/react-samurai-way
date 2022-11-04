import React from 'react';
import s from "./NavBar.module.css"

export const NavBar = () => {
    return (
        <nav className={s.nav}>
            <ul>
                <li className={s.item}>Profile</li>
                <li className={s.item}>Message</li>
                <li className={s.item}>News</li>
                <li className={s.item}>Musics</li>
                <li className={s.item}>Settings</li>
            </ul>
        </nav>
    );

};

