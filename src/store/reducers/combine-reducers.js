import { combineReducers } from "redux"

import colors from './colors'
import bordercolor from './Input-color-reducer/border-color'

export default combineReducers({
    colors,
    bordercolor
})