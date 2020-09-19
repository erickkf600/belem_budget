import { bindActionCreators } from "redux"
import * as Submit from './../../store/actions/submit-action/submit.action'

export const mapStateToProps = state => ({
    border: state.bordercolor.color,
    colors: state.colors.colors
})


//FUNÇÃO DO BOTÃO obs:o metodo do click tem ter o mesmo nome da função do action
export const mapDispatchToProps = dispatch =>
    bindActionCreators(Submit, dispatch)