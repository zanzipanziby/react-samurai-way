import React from 'react';
import s from "./MyPosts.module.css"
import {Post} from "./Post/Post";
import {PostsType} from "../../../Redux/state";


type MyPostsPropsType = {
    posts: PostsType[]
    addPost: () => void
    newPostText: string
    updateNewPostChange: (newText: string) => void
}


export const MyPosts = (props: MyPostsPropsType) => {
    const postRender = props.posts.map(p => <Post message={p.message} likeCount={p.likeCount}/>)
    const newPostElement = React.createRef<HTMLTextAreaElement>();

    const addPost = () => {
        props.addPost()
    }

    let onPostChange = () => {
        if(newPostElement.current) {
            props.updateNewPostChange(newPostElement.current?.value)
        }
    }
    return (
        <div className={s.myPosts}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}/>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postRender}
            </div>
        </div>
    );
};

