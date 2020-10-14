import styled from 'styled-components/native'
import { StyleSheet } from 'react-native'

//STYLED COMPONENTS
export const Container = styled.ScrollView`
    flex: 1;
    background: #D0D8E2;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    padding: 20px;
`;


export const FormInput = styled.View`
    margin-top: 15px;
`;
export const Label = styled.Text`
    text-transform: uppercase;
    font-weight: bold;
    font-size: 10px;
    font-family: Rubik;
    letter-spacing: 1.2px;
    color: #949494;
    margin-bottom: 5px;
`;
export const Input = styled.TextInput`
   background: #fff;
    border: 1px;
    /* border-color: #ccc; */
   border-radius: 5px;
   padding: 10px;
`;
export const Error = styled.Text`
   color: #f00;
   font-size: 14px;
   font-weight: bold;
   font-family: Rubik;
`;


export const nativeStyles = StyleSheet.create({
    button:{
        padding: 0, 
        backgroundColor: '#2E55A0',
        width: 100
    },
    buttonText:{
        color: '#fff'
    }
})