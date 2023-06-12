import React from 'react';
import './App.css';
import {Button} from '@mui/material';
import {AddItemForm} from '../components/AddItemForm/AddItemForm';
import {useDispatch, useSelector} from 'react-redux';
import {AppRootStateType} from './store';
import {addTaskAC, TasksStateType, TaskStatuses, updateTaskStatusAC} from '../components/Tasks/tasks-reducer';
import {Task} from '../components/Tasks/Task';
import {AppStateType, changeFilterAC} from './app-reducer';

function App() {

    const dispatch = useDispatch()
    const tasks = useSelector<AppRootStateType, TasksStateType>(state => state.tasks)
    const filter = useSelector<AppRootStateType, AppStateType>(state => state.app)

    const addTask = (title: string) => {
        dispatch(addTaskAC(title))
    }

    const updateStatus = (id: string, status: TaskStatuses) => {
        dispatch(updateTaskStatusAC(id, status))
    }

    const onAllClickHandler = () => {
        dispatch(changeFilterAC('all'))
    }
    const onActiveClickHandler = () => {
        dispatch(changeFilterAC('active'))
    }
    const onCompletedClickHandler = () => {
        dispatch(changeFilterAC('completed'))
    }

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
                        changeTaskStatus={updateStatus}
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
