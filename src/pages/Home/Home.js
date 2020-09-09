import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ScrollView, Text, View  } from 'react-native'

function Home(props) {
    return (
        <SafeAreaView>
            <ScrollView style={{minHeight: 1000}}>
                <View style={{ minHeight: 240, backgroundColor:'#2E55A0'}}></View>
                <View style={{ minHeight: 1000, backgroundColor: '#D0D8E2', borderRadius: 20, marginTop: -30 }}></View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Home
