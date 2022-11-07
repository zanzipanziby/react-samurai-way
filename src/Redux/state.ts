import {rerenderEntireTree} from "../render";

export type DialogsType = {
    id: string
    name: string
} //Типы массивов данных
export type MessagesType = {
    id: string
    message: string
}
export type PostsType = {
    id: string
    message: string
    likeCount: number
}
export type ProfilePageType = {
    posts: PostsType[]
    newPostText: string
}
export type DialogsPageType = {
    dialogs: DialogsType[]
    messages: MessagesType[]
}

export type StateType = {
    profilePage:ProfilePageType
    dialogsPage: DialogsPageType
}

// let dialogs: DialogsType[] = [
//     {id: "1", name: "Dima"},
//     {id: "2", name: "Misha"},
//     {id: "3", name: "Veronika"},
//     {id: "4", name: "Svetlana"},
//     {id: "5", name: "Jura"},
//     {id: "6", name: "Natasha"},
// ]   // Массивы данных
// let messages: MessagesType[] = [
//     {id: "1", message: "Hi"},
//     {id: "1", message: "How are you"},
//     {id: "1", message: "Go to school"},
//     {id: "1", message: "Plz, buy meat"},
//     {id: "1", message: "let's rock"},
// ]
// let postData: Array<PostDataType> = [
//     {id: "1", message: "Hi, how are you ", likeCount: 10},
//     {id: "2", message: "My first post ", likeCount: 137},
//     {id: "3", message: "My second posts ", likeCount: 112},
// ]

export let state: StateType = {
    profilePage: {
        posts: [
            {id: "1", message: "Hi, how are you ", likeCount: 10},
            {id: "2", message: "My first post ", likeCount: 137},
            {id: "3", message: "My second posts ", likeCount: 112},
        ],
        newPostText: ""
    },
    dialogsPage: {
        dialogs: [
            {id: "1", name: "Dima"},
            {id: "2", name: "Misha"},
            {id: "3", name: "Veronika"},
            {id: "4", name: "Svetlana"},
            {id: "5", name: "Jura"},
            {id: "6", name: "Natasha"},
        ],
        messages: [
            {id: "1", message: "Hi"},
            {id: "1", message: "How are you"},
            {id: "1", message: "Go to school"},
            {id: "1", message: "Plz, buy meat"},
            {id: "1", message: "let's rock"},
        ],
    }
}  //General State


export const addPost = () => {
    let newPost: PostsType = {
        id: "5",
        message: state.profilePage.newPostText,
        likeCount: 0 }
    state.profilePage.posts.push(newPost)
    state.profilePage.newPostText = ""
    rerenderEntireTree(state)
}

export const updateNewPostChange = (newText: string) => {
    state.profilePage.newPostText = newText
    rerenderEntireTree(state)
}