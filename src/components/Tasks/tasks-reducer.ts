import {v1} from 'uuid';

export enum TaskStatuses {
    New,
    Completed,
}

const initialState: TasksStateType = [
    {id: '1', title: 'Тестовое задание', status: TaskStatuses.New},
    {id: '2', title: 'Прекрасный код', status: TaskStatuses.Completed},
    {id: '3', title: 'Покрытие тестами', status: TaskStatuses.New},
]

export const tasksReducer = (state: TasksStateType = initialState, action: ActionsType): TasksStateType => {
    switch (action.type) {
        case 'ADD-TASK':
            return [{id: v1(), title: action.title, status: TaskStatuses.New}, ...state]
        case 'UPDATE-TASK-STATUS':
            return state.map(t => t.id === action.taskId ? {...t, status: action.newStatus} : t)
        default:
            return state;
    }
}

// actions
export const addTaskAC = (title: string) =>
    ({type: 'ADD-TASK', title} as const)
export const updateTaskStatusAC = (taskId: string, newStatus: TaskStatuses) =>
    ({type: 'UPDATE-TASK-STATUS', taskId, newStatus} as const)

// types
export type TasksStateType = Array<TaskType>
export type TaskType = {
    id: string
    title: string
    status: TaskStatuses
}
type ActionsType =
    | ReturnType<typeof addTaskAC>
    | ReturnType<typeof updateTaskStatusAC>
