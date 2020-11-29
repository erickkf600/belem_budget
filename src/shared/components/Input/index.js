import React from 'react'
import { FormInput, InputDefault, Label, Error } from './input.style'
import * as actions from './input.actions'
import { connect } from 'react-redux'
import { Text, Button, View } from "react-native";

const Input = ({ types, border, isFocused, changeText, inputStyles }) =>{
    return (
        <View>
            <Label>{types.label}</Label>
            <InputDefault
                onBlur={() => isFocused('#ccc', types.name)}
                onFocus={() => isFocused('#4365A9', types.name)}
                onChangeText={text => changeText(text) }
                placeholder={types.placeholder}
                style={[{ borderColor: border }, inputStyles]}
            />
            {/* <Text>{types.required && !value ? 'Obrigatorio' : null}</Text> */}
        </View>
    )
}
export default connect(actions.mapStateToProps, actions.mapDispatchToProps)(Input)

