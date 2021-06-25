import React, { useEffect } from 'react'
import { View, StatusBar } from 'react-native'
import { Provider } from 'react-redux'
import { store } from '../store'
import BootSplash from 'react-native-bootsplash'
import Navigation from '../navigation/index'

const App: React.FC = () => {
  useEffect(() => {
    BootSplash.hide()
  }, [])

  return (
    <Provider store={store}>
      <View style={{ flex: 1 }}>
        <StatusBar translucent barStyle="dark-content" backgroundColor={'transparent'} />
        <Navigation />
      </View>
    </Provider>
  )
}

export default App
