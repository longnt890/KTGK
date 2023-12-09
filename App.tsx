
import React from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import SignupScreen from './Screens/SignupScreen'
import LoginScreen from './Screens/LoginScreen'
import ForgotPasswordScreen from './Screens/ForgotPasswordScreen'
import HomeScreen from './Screens/HomeScreen'
import { AuthenticatedUserProvider } from './providers'
import RootNavigator from './navigation/RootNavigator'
import { View } from 'react-native'
import AddProduct from './Screens/AddProduct'



const App = () => {
  return (
    <AuthenticatedUserProvider>
      <SafeAreaProvider>
        <RootNavigator/>
      </SafeAreaProvider>
    </AuthenticatedUserProvider>
    // <View>
    //   </>
    // </View>
  )
}

export default App

// const styles = StyleSheet.create({})