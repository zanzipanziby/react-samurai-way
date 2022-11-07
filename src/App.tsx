import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {NavBar} from "./components/NavBar/NavBar";
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";
import {StateType} from "./Redux/state";

export type AppPropsType = {
    state: StateType
    addPost: () => void
    updateNewPostChange: (newText: string) => void
}
function App(props:AppPropsType) {
    return (

            <div className="app-wrapper">
                <Header/>
                <NavBar/>
                <div className={"app-wrapper_content"}>
                    <Route path="/profile" render={() => <Profile profilePage= {props.state.profilePage}
                                                                  addPost={props.addPost}
                                                                  updateNewPostChange = {props.updateNewPostChange}
                    />}/>
                    <Route path="/dialogs" render={() => <Dialogs dialogsPage= {props.state.dialogsPage}/>}/>
                    <Route path="/news" render={() => <News/>}/>
                    <Route path="/music" render={() => <Music/>}/>
                    <Route path="/settings" render={() => <Settings/>}/>
                </div>
            </div>

    );
}


export default App;
