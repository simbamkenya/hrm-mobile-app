import React, { Children } from 'react'
import { View, SafeAreaView, StyleSheet } from 'react-native'
import Constants from 'expo-constants'
import { colors } from '../constants/color'

function Screen({ children, style, onLayout }) {
  return (
    <SafeAreaView style={[styles.screen, style]}>
      <View style={[styles.view, style]} onLayout={onLayout}>
        {children}
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  screen: {
    paddingTop: Constants.statusBarHeight,
    flex: 1,
  },
  view: {
    flex: 1,
    backgroundColor: colors.black,
  },
})

export default Screen
