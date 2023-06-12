import {combineReducers, createStore} from "redux";
import {tasksReducer} from "../components/Tasks/tasks-reducer";
import {appReducer} from "./app-reducer";

const rootReducer = combineReducers({
    tasks: tasksReducer,
    app: appReducer
})

export const store = createStore(rootReducer)

export type AppRootStateType = ReturnType<typeof rootReducer>

// @ts-ignore
window.store = store