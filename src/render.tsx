import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import {addMessage, addPost, StateType, updateMessageText, updateNewPostChange} from "./Redux/state";
import React from "react";


export const rerenderEntireTree = (state: StateType) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state}
                 addPost={addPost}
                 updateNewPostChange={updateNewPostChange}
                 updateMessageText={updateMessageText}
                 addMessage={addMessage}
            />
        </BrowserRouter>,
        document.getElementById('root')
    );

}
