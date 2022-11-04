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
            <Post/>
            <Post/>
            <Post/>
        </div>
    );
};

