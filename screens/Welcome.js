import React from 'react'
import { View, Text, Image, StyleSheet, ImageBackground } from 'react-native'
import Screen from '../components/Screen'
import Button from '../components/AppButton'

function Welcome({ navigation }) {
  return (
    <Screen>
      <ImageBackground
        source={require('../assets/bg.jpg')}
        style={{ flex: 1, width: '100%' }}
        blurRadius={2}
      >
        <View style={styles.logoContainer}>
          <Image
            style={styles.logo}
            source={require('../assets/hrm-logo.png')}
          />
          <Text style={styles.tagline}>Let's get to work</Text>
          <View style={{ alignItems: 'center', marginTop: 20 }}>
            <Button
              title="Login"
              onPress={() => navigation.navigate('Login')}
            ></Button>
            <Button
              title="Register"
              color="red"
              onPress={() => navigation.navigate('Register')}
            ></Button>
            <Button
              title="Dashboard"
              color="red"
              onPress={() => navigation.navigate('Dashboard')}
            ></Button>
          </View>
        </View>
      </ImageBackground>
    </Screen>
  )
}

const styles = StyleSheet.create({
  logoContainer: {
    // backgroundColor: 'pink',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    flexDirection: 'column',
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 10,
  },
  tagline: {
    fontSize: 20,
    fontWeight: 'bold',
  },
})

export default Welcome
