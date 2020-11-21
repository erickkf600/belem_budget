import styled from 'styled-components/native'
import { StyleSheet } from 'react-native'

//STYLED COMPONENTS
export const Container = styled.ScrollView`
    flex: 1;
    background: #D0D8E2;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    padding: 20px;
    min-height: 100%;
`;
export const Form = styled.View`
    margin: 40px 0 40px 0;
`;



export const DinamycInputControl = styled.View`
    display: flex;
    /* margin: 4px 0 4px 0; */
    flex: 1;
    flex-direction: row;
    align-items: center;
   
`;

export const Actions = styled.View`
   margin: 20px 0 0 16px;
`;
export const Dinamyc = styled.TouchableWithoutFeedback`
    margin: 20px 0 16px 0;
    align-items: center;
    background: #2E55A0;
`;

export const nativeStyle = StyleSheet.create({
    icons:{
        color: '#2E55A0',
        fontSize: 20,
        marginBottom: 10,
    }
})
export const stepperStyles = StyleSheet.create({
    wrraperButtonStyle:{
        display: 'flex',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    stepStyle:{
        backgroundColor: '#2E55A0',
    },
    buttonStyle:{
        backgroundColor: '#2E55A0',
        alignSelf: 'stretch'
    }
})