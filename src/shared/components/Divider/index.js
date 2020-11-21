import React from 'react'
import { Text, View } from "react-native";

const Divider = ({label, wrapperStyle, textStyle, lineStyle}) => {
    return (
        <View style={[{display: 'flex', flexDirection: 'row', alignItems: 'center'}, wrapperStyle]}>
            <View style={[{backgroundColor: '#c4c4c4', height: 1, flex: 1, marginTop: 1}, lineStyle]} />
            <Text style={[{ fontSize: 11, color: '#a3a3a3', paddingHorizontal: 4 }, textStyle]}>{label}</Text>
            <View style={[{backgroundColor: '#c4c4c4', height: 1, flex: 1, marginTop: 3}, lineStyle]} />
        </View>
    )
}

export default Divider
