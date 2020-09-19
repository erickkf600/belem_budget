import styled from 'styled-components/native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import { StyleSheet, Animated } from 'react-native'

//STYLED COMPONENTS
export const Container = styled.View`
    flex: 1;

`;
export const Img = styled.Image`
    display: flex;
    margin: 20px 0 auto auto;
    width: 50%;
    height: 35px;
`;
export const HomeHeader = styled.View`
    background: #2E55A0;
    padding-left: 30px;
    padding-right: 30px;
`;
export const Top = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;
export const H1 = styled.Text`
    font-size: 30px;
    color: #fff;
    margin-top: 20px;
    font-family: Rubik;
    font-weight: bold;
`;
export const H2 = styled.Text`
    font-size: 25px;
    color: #2E55A0;
    margin-top: 20px;
    font-family: Rubik;
    font-weight: bold;
    margin-bottom: 25px;
`;
export const Button = styled.TouchableWithoutFeedback`
    
`;
export const P = styled.Text`
    margin: 0;
    font-family: Rubik;
    font-weight: bold;
`;

export const Body = styled.ScrollView`
    flex: 1;
    background: #D0D8E2;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    margin-top: 10px;
    height: 100%;
    position: absolute;
    left: 0;
    right: 0;
    top: 25%;
    padding-left: 20px;
    padding-right: 20px;
`;
export const Card = styled.View`
    width: 100%;
    height: 100px;
    border-bottom-width: 1px;
    border-bottom-color: #F1F4F6;
    background: #ebf0f5;
    padding: 15px;
    display: flex;
    flex-direction: row;
    align-items: center;
    position: relative;
    margin-top: 15px;
    border-radius: 20px;
`;
export const CardIcon = styled.View`
    width: 60px;
    height: 60px;
    border-radius: 20px;
    background: #f5f5f5;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const CardContent = styled.View`
    display: flex;
    flex-direction: column;
    margin-left: 15px;
`;
export const CardFooter = styled.View`
    position: absolute;
    bottom: 10px;
    right: 10px;
`;

