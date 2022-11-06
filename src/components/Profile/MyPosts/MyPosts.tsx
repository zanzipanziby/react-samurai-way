import React from 'react';
import s from "./MyPosts.module.css"
import {Post} from "./Post/Post";
import {PostsType} from "../../../Redux/state";


type MyPostsPropsType = {
    posts: PostsType[]
}


export const MyPosts = (props:MyPostsPropsType) => {
    const postRender = props.posts.map(p => <Post message={p.message} likeCount={p.likeCount}/>)

    return (
        <div className={s.myPosts}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea/>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postRender}
            </div>
        </div>
    );
};

