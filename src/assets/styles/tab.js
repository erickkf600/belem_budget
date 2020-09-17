import styled from 'styled-components/native'
import {  StyleSheet } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'

//STYLED COMPONENTS
export const Tab = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    height: 70px;
    background: #D0D8E2
    
`;
export const TabItem = styled.View`
    background: transparent;
    box-shadow: none;
    border: none;
    display: flex;
    align-items: center;
    color: #4365A9;
`;

export const styless = StyleSheet.create({
    item: {
        width: wp('30%'),
        height: 50,
        flex: 1,
        justifyContent: 'center',

    },
    add:{
        width: 45,
        height: 40,
        marginTop: -20,
        backgroundColor: '#2E55A0' 
    }
});

export const icon = StyleSheet.create({
    active: {
        color: '#2E55A0',
    },
    textActive:{
        color: '#2E55A0',
        fontSize: 10,
        fontWeight: 'bold',
        fontFamily: 'Hanalei'
    },
    textInactive: {
        color: '#9fa9b5',
        fontSize: 10,
    },
    inactive: {
        color: '#9fa9b5'
    },
    addBudget:{
        backgroundColor: '#2E55A0',
        color: '#D0D8E2',
        display: 'flex',
        width: 45,
        height: 40,
        textAlign: 'center',
        textAlignVertical: 'center',
        borderRadius: 15,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.15,
        shadowRadius: 15,
        elevation: 8,
    }
});
