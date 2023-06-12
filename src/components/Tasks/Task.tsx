import React, {ChangeEvent, useCallback} from 'react';
import {EditableSpan} from '../EditableSpan/EditableSpan';
import {Checkbox} from '@mui/material';
import {TaskStatuses, TaskType} from './tasks-reducer';

export type TaskPropsType = {
    task: TaskType
    changeTaskStatus: (id: string, status: TaskStatuses) => void
    changeTaskTitle?: (taskId: string, newTitle: string) => void
}

export const Task = React.memo((props: TaskPropsType) => {
    const onChangeHandler = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        let newIsDoneValue = e.currentTarget.checked;
        props.changeTaskStatus(props.task.id, newIsDoneValue ? TaskStatuses.Completed : TaskStatuses.New);
    }, [props.changeTaskStatus, props.task.id])
    const onTitleChangeHandler = useCallback((newValue: string) => {
        props.changeTaskTitle?.(props.task.id, newValue);
    }, [props.changeTaskTitle, props.task.id])

    return <div key={props.task.id}
                style={props.task.status === TaskStatuses.Completed ? {
                    textDecoration: 'line-through',
                    color: 'gray'
                } : {}}>
        <Checkbox
            checked={props.task.status === TaskStatuses.Completed}
            color='primary'
            onChange={onChangeHandler}
        />

        <EditableSpan value={props.task.title} onChange={onTitleChangeHandler}/>
    </div>
})