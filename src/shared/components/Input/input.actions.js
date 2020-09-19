import { bindActionCreators } from "redux"
import * as InputActions from './../../../store/actions/input-color-actions/border-color.action'
export const mapStateToProps = state => ({
    border: state.bordercolor.color,
    colors: state.colors.colors
})

//FUNÇÃO DO BOTÃO obs:o metodo do click tem ter o mesmo nome da função do action
export const mapDispatchToProps = dispatch =>
    bindActionCreators(InputActions, dispatch)