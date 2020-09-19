import React from 'react'
import { FormInput, Input, Label, Error } from './input.style'
import { useForm, Controller } from "react-hook-form"
import * as actions from './input.actions'
import { connect } from 'react-redux'
import { Text, Button } from "react-native";

const InputDefault = ({types, border, colors, isFocused, error }) =>{
    const { control, handleSubmit, errors } = useForm();
    const onSubmit = () => errors;
    console.log(types)
    return (
        <FormInput>
            <Label>{types.label}</Label>
            <Controller
                control={control}
                render={() => (
                    <Input
                        onBlur={() => isFocused('#ccc')}
                        onFocus={() => isFocused('#4365A9')}
                        onChangeText={text => { }}
                        placeholder = {types.placeholder}
                        style={{ borderColor: border }}
                    />
                )}
                name={types.name}
                rules={{ required: types.required }}
                defaultValue=""
            />
            {/* {errors.cliente && errors.cliente.type === "required" ? 
                <Error>Este campo é obrigatório.</Error>
                : 
                null
            } */}
            {/* {errors.client && <Error>Este campo é obrigatório.</Error>} */}
            {/* <Button title="Submit" onPress={handleSubmit(onSubmit)} /> */}
        </FormInput>
    )
}
export default connect(actions.mapStateToProps, actions.mapDispatchToProps)(InputDefault)

