import React, { useState } from "react"
import * as actions from './index.action'
import Input from './../../../shared/components/Input'
import Divider from './../../../shared/components/Divider'
import { DinamycInputControl, Dinamyc, Actions, nativeStyle, Form } from './../generete-budget.style'
import { CustomIcon } from './../../../assets/Icons/Icons'
function stepTwo() {
     const [materialFields, setMaterialField] = useState([
        {material: ''}
    ])
    // MATERIAIS
    const addInput = () =>{
        setMaterialField([...materialFields, {material: ''}])
    }
    const removeInput = (index) =>{
        const values = [...materialFields];
        values.splice(index, 1)
        setMaterialField(values)
    }

    // OBSERVAÇÕES
    const [obsFields, setObslField] = useState([
        {obs: ''}
    ])
    const addInputObs = () =>{
        setObslField([...obsFields, {obs: ''}])
    }
    const removeInputObs = (index) =>{
        const values = [...obsFields];
        values.splice(index, 1)
        setObslField(values)
    }
    // SEND FORM
    const formBuilder = (index, value) =>{
        const values = [...materialFields]
        values[index] = value
        setMaterialField(values)
    }
    return (
        <Form>
            {materialFields.map((materialField, index) => (
            <DinamycInputControl key={index}>
                <Input 
                    key={index}
                    changeText = {(value) => formBuilder(index, value)}
                    types={{
                        placeholder: '',
                        required: true,
                        label:`Material ${index+1}`,
                        name: 'material',
                        action: true
                    }}
                />
            <Actions>

                {(index + 1) === materialFields.length ? 
                    <Dinamyc onPress={() => addInput()}>
                        <CustomIcon name="plus" style={nativeStyle.icons} />
                    </Dinamyc>
                :
                    null
                }

                {index === 0 ? 
                    null
                : 
                    <Dinamyc onPress={() => removeInput(index)}>
                        <CustomIcon name="trash" style={nativeStyle.icons} />
                    </Dinamyc>
                }
            </Actions>
            
            </DinamycInputControl>
        ))}

        <Divider label="Observações" wrapperStyle={{marginBottom: 10, marginTop: 30}}/> 


        {obsFields.map((obsField, index) => (
            <DinamycInputControl key={index}>
                <Input 
                    key={index}
                    inputStyles={{marginTop: 0}}
                    changeText = {(value) => formBuilder(index, value)}
                    types={{
                        placeholder: '',
                        required: true,
                        label:`Obs ${index+1}`,
                        name: 'obs',
                        action: true
                    }}
                />
            <Actions>
                {(index + 1)  === obsFields.length ? 
                    <Dinamyc onPress={() => addInputObs()}>
                        <CustomIcon name="plus" style={nativeStyle.icons} />
                    </Dinamyc>
                :
                    null
                }

                {index === 0 ? 
                    null
                : 
                    <Dinamyc onPress={() => removeInputObs(index)}>
                        <CustomIcon name="trash" style={nativeStyle.icons} />
                    </Dinamyc>
                }
            </Actions>
            
            </DinamycInputControl>
        ))} 
        </Form>
    )
}
export default stepTwo