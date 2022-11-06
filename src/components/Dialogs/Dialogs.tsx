import React from 'react';
import s from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {DialogsPageType, DialogsType, MessagesType} from "../../Redux/state"

export type DialogsPropsType = {
    state: DialogsPageType
}

export const Dialogs = (props: DialogsPropsType) => {


    let dialogItemRender = props.state.dialogs.map(el => {
        return (
            <DialogItem name={el.name} id={el.id}/>
        )
    }) //Мапаем компоненты из масивов данных
    let messageRender = props.state.messages.map(el => {
        return (
            <Message text={el.message}/>
        )
    })

    return (
        <div className={s.dialogs}>
            <ul className={s.dialog_items}>
                {dialogItemRender}
            </ul>
            <div className={s.messages}>
                {messageRender}
            </div>
        </div>
    );
};

