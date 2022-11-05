import React from 'react';
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";


type MessagePropsType = {
    text: string
}

export const Message = (props: MessagePropsType) => {
    return (
        <div className={s.message}>{props.text}</div>
    )
}


type DialogItemPropsType = {
    name: string
    id: string
}

export const DialogItem = (props: DialogItemPropsType) => {
    let path = "/dialogs/" + props.id
    return (
        <div className={s.dialog + " " + s.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

export const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialog_items}>
                <DialogItem name={"Dima"} id={"1"}/>
                <DialogItem name={"Misha"} id={"2"}/>
                <DialogItem name={"Veronika"} id={"3"}/>
                <DialogItem name={"Svetlana"} id={"4"}/>
                <DialogItem name={"Jura"} id={"5"}/>
                <DialogItem name={"Natasha"} id={"6"}/>

            </div>
            <div className={s.messages}>
                <Message text={"Hi"}/>
                <Message text={"How are you"}/>
                <Message text={"Go to school"}/>
                <Message text={"Plz, buy meat"}/>
            </div>
        </div>
    );
};

