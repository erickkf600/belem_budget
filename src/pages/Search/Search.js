import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ScrollView, Text, View  } from 'react-native'
import { Container } from './search.style'

function Search() {
    return (
        <Container>
            <Text style={{ fontSize: 35 }}>Search</Text>
        </Container>
    )
}

export default Search
