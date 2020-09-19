import React from 'react'
import { Container } from './generete-budget.style'
import InputDefault from  './../../shared/components/Input/Input'
import { Text, Button } from "react-native"
import { connect } from 'react-redux'
import * as actions from './generate-budget.actions'
import { useForm, Controller } from "react-hook-form"

function GenereteBudget({submit}) {
    return (
        <Container>
            <InputDefault 
            types={{
                required:true, 
                label: 'Cliente',
                name: 'cliente'
            }}/>
            <Button title="Submit" onPress={() => submit('submit')} />
        </Container>
    )
}

export default connect(actions.mapStateToProps, actions.mapDispatchToProps)(GenereteBudget)