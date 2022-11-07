import React from 'react';
import s from "./Profile.module.css"
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ProfilePageType} from "../../Redux/state";

export type ProfilePropsType  = {
    profilePage: ProfilePageType
    addPost: () => void
    updateNewPostChange: (newText: string) => void
}


export const Profile = (props:ProfilePropsType) => {



    return (
        <div className={s.profile}>
            <ProfileInfo/>
            <MyPosts posts= {props.profilePage.posts}
                     addPost = {props.addPost}
                     newPostText={props.profilePage.newPostText}
                     updateNewPostChange = {props.updateNewPostChange}
            />
        </div>
    );
};

