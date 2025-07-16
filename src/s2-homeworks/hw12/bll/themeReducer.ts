type ThemeState = {
    themeId: number
}

type ChangeThemeIdAction = {
    type: 'SET_THEME_ID'
    id: number
}

const initState = {
    themeId: 1,
}

export const themeReducer = (state = initState, action: ChangeThemeIdAction): ThemeState  => { // fix any
    switch (action.type) {
        case 'SET_THEME_ID':
            return {
                ...state,
                themeId: action.id
            }
        default:
            return state
    }
}

export const changeThemeId = (id: number): ChangeThemeIdAction => ({
    type: 'SET_THEME_ID',
    id
})