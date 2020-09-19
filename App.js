
import React, { Component } from 'react'
import { StatusBar } from 'react-native';
import Routing from './src/router-config/Routing'
import { Provider as PaperProvider } from 'react-native-paper';
class App extends Component {
  render() {
    return (
      <PaperProvider>
        <StatusBar barStyle="light-content" backgroundColor='#2E55A0' currentHeight="100px"/>
            <Routing />
      </PaperProvider>  
    )
  }
}

export default App;
