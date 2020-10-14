import React from 'react'
import { Container, nativeStyles } from './generete-budget.style'
import InputDefault from  './../../shared/components/Input/Input'
import { connect } from 'react-redux'

import * as actions from './generate-budget.actions'
import { ProgressSteps, ProgressStep } from 'react-native-progress-steps';
function GenereteBudget({submit}) {
    function clickAlert() {
        alert("I am working")
    } 
    return (
        <Container>
            <ProgressSteps 
                activeStepIconBorderColor="transparent" 
                activeStepIconColor="#2E55A0" 
                activeStepNumColor="#fff"
                disabledStepNumColor="#2E55A0"
                completedProgressBarColor="#2E55A0"
                completedStepIconColor="#2E55A0"
                completedLabelColor="#2E55A0" >
                <ProgressStep
                    nextBtnText="Continuar"
                    nextBtnTextStyle={nativeStyles.buttonText}
                    nextBtnStyle={nativeStyles.button}>
                    <InputDefault
                        validate={clickAlert}
                        types={{
                            required: true,
                            label: 'Cliente',
                            name: 'cliente'
                        }} />
                </ProgressStep>
                <ProgressStep
                    nextBtnText="Continuar"
                    previousBtnText="Voltar">
                    <InputDefault
                        validate={clickAlert}
                        types={{
                            required: true,
                            label: 'Materiais',
                            name: 'materiais'
                        }} />
                </ProgressStep>
                <ProgressStep
                    nextBtnText="Continuar"
                    previousBtnText="Voltar"
                    finishBtnText="Finalizar">
                    <InputDefault
                        validate={clickAlert}
                        types={{
                            required: true,
                            label: 'Valor',
                            name: 'valor'
                        }} />
                </ProgressStep>
            </ProgressSteps>
            {/* <Button title="Submit" onPress={() => clickAlert()} /> */}
        </Container>
    )
}

export default connect(actions.mapStateToProps, actions.mapDispatchToProps)(GenereteBudget)