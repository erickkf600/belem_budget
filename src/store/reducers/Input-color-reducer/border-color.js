const BORDER_COLOR = {
    color: "#ccc"
}

export default function bordercolor(state = BORDER_COLOR, action) {
    if (action.type === 'CHANGE_BORDER_COLOR'){
        return{
            ...state,
            color: action.color
        }
    } 
    return state
}