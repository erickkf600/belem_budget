import React from 'react'
import { bindActionCreators } from "redux"
import * as Submit from './../../store/actions/submit-action/submit.action'
import StepOne from './StepOne'
import StepTwo from './StepTwo'
import StepThree from './StepThree'

export const mapStateToProps = state => ({
    border: state.bordercolor.color,
    colors: state.colors.colors
})
// const formControlClient = obj

export const content = [
    <StepOne title="Component 1" next={obj => nextStep(obj)}/>,
    <StepTwo title="Component 2" />,
    <StepThree title="Component 3" />
]

export const nextStep = (obj) =>{
    console.log(obj)
}




//FUNÇÃO DO BOTÃO obs:o metodo do click tem ter o mesmo nome da função do action
export const mapDispatchToProps = dispatch =>
    bindActionCreators(Submit, dispatch)