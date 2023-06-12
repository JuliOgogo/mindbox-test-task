export enum TaskStatuses {
    New,
    InProgress,
    Completed,
    Draft
}

const initialState: TasksStateType = [
    {id: '1', title: 'Тестовое задание', status: TaskStatuses.New},
    {id: '2', title: 'Прекрасный код', status: TaskStatuses.Completed},
    {id: '3', title: 'Покрытие тестами', status: TaskStatuses.New},
]

export const tasksReducer = (state: TasksStateType = initialState, action: ActionsType): TasksStateType => {
    switch (action.type) {
        case "ADD-TASK":
            return [{id: '4', title: action.title, status: TaskStatuses.New}, ...state]
        case "UPDATE-TASK":
            return [...state]
        case "SET-TASKS":
            return [...state]
        default:
            return state;
    }
}

// actions
export const addTaskAC = (title: string) =>
    ({type: 'ADD-TASK', title} as const)
export const updateTaskAC = (taskId: string, newTitle: string) =>
    ({type: 'UPDATE-TASK', newTitle} as const)
export const setTasksAC = (tasks: TaskType[], todolistId: string) =>
    ({type: 'SET-TASKS', tasks, todolistId} as const)

// types
export type TasksStateType = Array<TaskType>
export type TaskType = {
    id: string
    title: string
    status: TaskStatuses
}
type ActionsType =
    | ReturnType<typeof addTaskAC>
    | ReturnType<typeof setTasksAC>
    | ReturnType<typeof updateTaskAC>