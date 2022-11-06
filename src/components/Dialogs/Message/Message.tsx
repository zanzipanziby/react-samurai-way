import s from './Message.module.css'
import React from "react";

type MessagePropsType = {
    text: string
}
export const Message = (props: MessagePropsType) => {
    return (
        <div className={s.message}>{props.text}</div>
    )
}