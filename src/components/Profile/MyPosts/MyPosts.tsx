import React from 'react';
import s from "./MyPosts.module.css"
import {Post} from "./Post/Post";


export const MyPosts = () => {
    return (
        <div>
            <div>
                <textarea/>
                <button>Add post</button>
            </div>
            <div className={s.posts}>
                <Post message="Hi, how are you " likeCount = {10}/>
                <Post message="My first post "  likeCount = {20}/>
                <Post message="My second posts " likeCount = {11}/>
            </div>
        </div>
    );
};

