import {appReducer, AppStateType, changeFilterAC} from './app-reducer';

let initialState: AppStateType

beforeEach(() => {
    initialState = 'all'
})

test('app filter should be change to active', () => {
    const endState = appReducer(initialState, changeFilterAC('active'))

    expect(endState).toBe('active')
})

test('app filter should be change to completed', () => {
    const endState = appReducer(initialState, changeFilterAC('completed'))

    expect(endState).toBe('completed')
})