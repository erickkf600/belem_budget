import React from 'react'
import { Text, View, Button, TouchableOpacity } from 'react-native'
import Input from './../../../shared/components/Input'
import { Form } from './../generete-budget.style'
import * as actions from './index.actions'
function stepOne() {
    const formControlName = (control, input) =>{ return actions.formBuilderClient[control] = input }
    return (
        <Form>
            <Input 
                inputStyles={{marginBottom: 15}}
                changeText = {(value) => formControlName('nomeCliente', value)}
                types={{
                    valid: actions.submit,
                    placeholder: '',
                    required: true,
                    label:'Cliente',
                    name: 'client',
                }}
            />
            <Input
                inputStyles={{marginBottom: 15}}
                changeText = {(value) => formControlName('cidadeCliente', value)}
                types={{
                    valid: actions.submit,
                    placeholder: '',
                    required: true,
                    label: 'Cidade',
                    name: 'city'
                }}
            />
            <Input
                inputStyles={{marginBottom: 15}}
                changeText = {(value) => formControlName('telefoneCliente', value)}
                types={{
                    valid: actions.submit,
                    placeholder: '',
                    required: false,
                    label: 'telefone',
                    name: 'tel'
                }}
            />
            <Button title="Proximo" onPress={() => actions.nextStep()} />      
        </Form>
    )   
}
export default stepOne

