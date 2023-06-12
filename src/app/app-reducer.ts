const initialState: AppStateType = 'all'

export const appReducer = (state: AppStateType = initialState, action: ActionsType): AppStateType => {
    switch (action.type) {
        case 'CHANGE-FILTER':
            return action.value
        default:
            return state;
    }
}

// actions
export const changeFilterAC = (value: AppStateType) =>
    ({type: 'CHANGE-FILTER', value} as const)

// types
export type AppStateType = 'all' | 'completed' | 'active'
type ActionsType = ReturnType<typeof changeFilterAC>