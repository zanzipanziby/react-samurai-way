import React from 'react';
import s from "./Post.module.css"
import avatar from "../../../../img/avatar.jpg"

export const Post = () => {
    return (

        <div className={s.item}>
            <img src={avatar} alt="avatar"/>
            <span>post 1</span>
            <div>
                <span>like</span>
            </div>

        </div>

    );
};

