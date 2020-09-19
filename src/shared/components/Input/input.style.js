import styled from 'styled-components/native'


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
   border-radius: 5px;
   padding: 10px;
`;
export const Error = styled.Text`
   color: #f00;
   font-size: 14px;
   font-weight: bold;
   font-family: Rubik;
`;