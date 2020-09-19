
import React, { Component } from 'react'
import { StatusBar } from 'react-native';
import Routing from './src/router-config/Routing'

import { Provider as ReduxProvider } from "react-redux"
import store from './src/store/store'
class App extends Component {
  render() {
    return (
      <ReduxProvider store={store}>
        <StatusBar barStyle="light-content" backgroundColor='#2E55A0' currentHeight="100px"/>
            <Routing />
      </ReduxProvider>  
    )
  }
}

export default App;
