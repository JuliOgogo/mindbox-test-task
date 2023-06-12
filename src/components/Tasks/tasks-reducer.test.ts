import {addTaskAC, tasksReducer, TasksStateType, TaskStatuses, updateTaskStatusAC} from './tasks-reducer';

let initialState: TasksStateType

beforeEach(() => {
    initialState = [
        {id: '1', title: 'Тестовое задание', status: TaskStatuses.New},
        {id: '2', title: 'Прекрасный код', status: TaskStatuses.Completed},
        {id: '3', title: 'Покрытие тестами', status: TaskStatuses.New},
    ]
})

test('new task should be add', () => {
    const endState = tasksReducer(initialState, addTaskAC('new task'))

    expect(endState.length).toBe(4)
    expect(endState[0].title).toBe('new task')
})

test('task status should be update', () => {
    const endState = tasksReducer(initialState, updateTaskStatusAC('3', TaskStatuses.Completed))

    expect(endState[2].status).toBe(TaskStatuses.Completed)
})