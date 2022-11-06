import React from 'react';
import s from "./Profile.module.css"
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ProfilePageType} from "../../Redux/state";

export type ProfilePropsType  = {
    state: ProfilePageType
}


export const Profile = (props:ProfilePropsType) => {



    return (
        <div className={s.profile}>
            <ProfileInfo/>
            <MyPosts posts= {props.state.posts}/>
        </div>
    );
};

