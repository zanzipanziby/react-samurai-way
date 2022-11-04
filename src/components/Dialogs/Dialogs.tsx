import React from 'react';
import s from './Dialogs.module.css'

export const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialog_items}>
                <div className={s.dialog +" "+ s.active}>
                    Dima
                </div>
                <div className={s.dialog}>
                    Veronika
                </div>
                <div className={s.dialog}>
                    Jura
                </div>
                <div className={s.dialog}>
                    Misha
                </div>
            </div>
            <div className={s.messages}>
                <div className={s.message}>Hi</div>
                <div className={s.message}>How are you</div>
                <div className={s.message}>Go to school</div>
            </div>
        </div>
    );
};

