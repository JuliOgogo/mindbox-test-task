import React from 'react';
import './App.css';
import {Button} from "@mui/material";
import {AddItemForm} from "../components/AddItemForm/AddItemForm";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "./store";
import {addTaskAC, TasksStateType} from "../components/Tasks/tasks-reducer";
import {Task} from "../components/Tasks/Task";

function App() {

    const dispatch = useDispatch()
    const tasks = useSelector<AppRootStateType, TasksStateType>(store => store.tasks)
    let filter = 'all'

    const addTask = (title: string) => {
        dispatch(addTaskAC(title))
    }

    const onAllClickHandler = () => {

    }
    const onActiveClickHandler = () => {

    }
    const onCompletedClickHandler = () => {

    }

    // @ts-ignore
    return <div>
        <h1>Todos</h1>
        <h3>What needs to be done?</h3>
        <AddItemForm addItem={addTask}/>
        <div>
            {
                tasks.map(t => {
                    return <Task
                        key={t.id}
                        task={t}
                        changeTaskTitle={() => {
                        }}
                        changeTaskStatus={() => {
                        }}
                    />
                })
            }
        </div>
        <div style={{paddingTop: '10px'}}>
            <Button variant={filter === 'all' ? 'outlined' : 'text'}
                    onClick={onAllClickHandler}
                    color={'info'}
            >All
            </Button>
            <Button variant={filter === 'active' ? 'outlined' : 'text'}
                    onClick={onActiveClickHandler}
                    color={'primary'}>Active
            </Button>
            <Button variant={filter === 'completed' ? 'outlined' : 'text'}
                    onClick={onCompletedClickHandler}
                    color={'secondary'}>Completed
            </Button>
        </div>
    </div>
}

export default App;
