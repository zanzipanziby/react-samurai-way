import React from 'react';
import s from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {DialogsPageType} from "../../Redux/state"

export type DialogsPropsType = {
    dialogsPage: DialogsPageType
    updateMessageText: (newMessage: string) => void
    addMessage: () => void
}

export const Dialogs = (props: DialogsPropsType) => {


    const dialogItemRender = props.dialogsPage.dialogs.map(el => {
        return (
            <DialogItem name={el.name} id={el.id}/>
        )
    }) //Мапаем компоненты из масивов данных
    const messageRender = props.dialogsPage.messages.map(el => {
        return (
            <Message text={el.message}/>
        )
    })

    const newMessageElement = React.createRef<HTMLTextAreaElement>()
    const updateMessageTextHandler = () => {
        if (newMessageElement.current) {
            props.updateMessageText(newMessageElement.current?.value)
        }
    }


    return (
        <div className={s.dialogs}>
            <ul className={s.dialog_items}>
                {dialogItemRender}
            </ul>
            <div className={s.messages}>
                {messageRender}
            </div>
            <textarea ref={newMessageElement} onChange={updateMessageTextHandler}
                      value={props.dialogsPage.messageText}/>
            <button onClick={props.addMessage}>Send Message</button>
        </div>
    );
};

