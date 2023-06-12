import React from 'react';
import './App.css';
import {Button, Paper} from '@mui/material';
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

    let filteredTasks = tasks

    if (filter === 'active') {
        filteredTasks = tasks.filter(t => t.status === TaskStatuses.New);
    }
    if (filter === 'completed') {
        filteredTasks = tasks.filter(t => t.status === TaskStatuses.Completed);
    }

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

    return <Paper style={{width: '300px', padding: '10px 20px 20px 20px', margin: '0 auto'}}>
        <h1>Todos</h1>
        <h3>What needs to be done?</h3>
        <AddItemForm addItem={addTask}/>
        <div>
            {
                filteredTasks.map(t => {
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
    </Paper>
}

export default App;
