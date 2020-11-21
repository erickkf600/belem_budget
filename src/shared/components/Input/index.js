import React from 'react'
import { FormInput, InputDefault, Label, Error } from './input.style'
import { useForm, Controller } from "react-hook-form"
import * as actions from './input.actions'
import { connect } from 'react-redux'
import { Text, Button, View } from "react-native";

const Input = ({ types, border, isFocused, changeText, inputStyles }) =>{
    return (
        <View>
            <Label>{types.label}</Label>
            <InputDefault
                onBlur={() => isFocused('#ccc')}
                onFocus={() => isFocused('#4365A9')}
                onChangeText={text => changeText(text) }
                placeholder={types.placeholder}
                style={[{ borderColor: border }, inputStyles]}
            />
        </View>
    )
}
export default connect(actions.mapStateToProps, actions.mapDispatchToProps)(Input)

