
export function isFocused(color, name) {
    return {
        type: `CHANGE_BORDER_COLOR`,
        color,
        name
    }
}