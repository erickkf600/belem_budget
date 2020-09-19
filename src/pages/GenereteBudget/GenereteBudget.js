import React from 'react'
import { Container } from './generete-budget.style'
import { TextInput } from 'react-native-paper'
function GenereteBudget() {
    return (
        <Container>
            <TextInput
                label="Email"
                type="outlined"
                style={{backgroundColor: '#fff'}}
                onChangeText={text => {}}
            />
        </Container>
    )
}

export default GenereteBudget