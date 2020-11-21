import React from 'react'
import { Text, View, Button } from 'react-native'
import Input from './../../../shared/components/Input'
import { Form } from './../generete-budget.style'
function stepOne() {
    return (
        <Form>
            <Input 
                inputStyles={{marginBottom: 15}}
                types={{
                    placeholder: '',
                    required: true,
                    label:'Cliente',
                    name: 'client',
                }}
            />
            <Input
                inputStyles={{marginBottom: 15}}
                types={{
                    placeholder: '',
                    required: true,
                    label: 'Cidade',
                    name: 'city'
                }}
            />
            <Input
                inputStyles={{marginBottom: 15}}
                types={{
                    placeholder: '',
                    required: true,
                    label: 'telefone',
                    name: 'tel'
                }}
            />
            {/* <Button title="Submit" onPress={() => clickAlert()} />        */}
        </Form>
    )   
}
export default stepOne

