import React, { useState } from 'react'
import { FormInput, InputDefault, Label, Error } from './input.style'
import * as actions from './input.actions'
import { connect } from 'react-redux'
import { View } from "react-native";

const Input = ({ types, border, isFocused, changeText, inputStyles, check }) =>{
    const [Inputvalue, setvalue] = useState('')
    return (
        <View>
            <Label>{types.label}</Label>
            <InputDefault
                onBlur={() => isFocused('#ccc', types.name)}
                onFocus={() => isFocused('#4365A9', types.name)}
                onChangeText={text => {changeText(text); setvalue(text), check(types.required && types.submit && Inputvalue === '' ? false : true )}}
                // check = 'false'
                keyboardType={types.type}
                placeholder={types.placeholder}
                style={[{ borderColor: border }, inputStyles]}
            />
            {types.required && types.submit && Inputvalue === '' ? 
             <Error>Este Campo é Obrigatório</Error>
             :
             null
            }
           
        </View>
    )
}
export default connect(actions.mapStateToProps, actions.mapDispatchToProps)(Input)

