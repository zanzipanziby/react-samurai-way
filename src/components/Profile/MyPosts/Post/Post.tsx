import React from 'react';
import s from "./Post.module.css"
import avatar from "../../../../img/avatar.jpg"

type PostPropsType = {
    message: string
    likeCount: number
}

export const Post = (props: PostPropsType) => {
    return (

        <div className={s.item}>
            <img src={avatar} alt="avatar"/>
            <span>{props.message}</span>
            <div>
                <span>like </span>
                <span>{props.likeCount}</span>
            </div>

        </div>

    );
};

