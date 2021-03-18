import React, { useState } from 'react'
import { Text, View, Button, TouchableOpacity } from 'react-native'
import Input from './../../../shared/components/Input'
import { Form } from './../generete-budget.style'
import * as actions from './index.actions'
const stepOne = ({next})  =>{
    const formControlName = (control, input, valid) =>{ 
        actions.formBuilderClient[control].value = input 
        actions.formBuilderClient.valid = valid 
    }
    const [submit, setSubmit] = useState(false)
    const [valid, setValid] = useState(false)
    return (
        <Form>
            <Input 
                inputStyles={{marginBottom: 15}}
                changeText = {(value) => formControlName('nomeCliente', value, valid)}
                check = {bool => setValid(bool)}
                types={{
                    submit: submit,
                    placeholder: '',
                    type: 'default',
                    required: actions.formBuilderClient['nomeCliente'].required,
                    label:'Cliente',
                    name: 'nomeCliente',
                }}
            />
            <Input
                inputStyles={{marginBottom: 15}}
                changeText = {(value) => formControlName('cidadeCliente', value)}
                check = {bool => setValid(bool)}
                types={{
                    submit: submit,
                    placeholder: '',
                    type: 'default',
                    required: actions.formBuilderClient['cidadeCliente'].required,
                    label: 'Cidade',
                    name: 'cidadeCliente'
                }}
            />
            <Input
                inputStyles={{marginBottom: 15}}
                changeText = {(value) => formControlName('telefoneCliente', value)}
                check = {bool => setValid(bool)}
                types={{
                    submit: submit,
                    type: 'numeric',
                    placeholder: '',
                    required: actions.formBuilderClient['telefoneCliente'].required,
                    label: 'telefone',
                    name: 'telefoneCliente'
                }}
            />
            <Button title="Proximo"  onPress={() => actions.nextStep(next, setSubmit)} />      
        </Form>
    )   
}
export default stepOne

