import React from 'react'
import { TextInput, View, StyleSheet, Platform } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import _ from 'lodash'
import { colors } from '../constants/color'

function AppTextInput({ icon, field, ...otherProps }) {
  return (
    <View style={styles.container}>
      {icon && (
        <MaterialCommunityIcons name={icon} size={20} style={styles.icon} />
      )}
      <TextInput
        placeholderTextColor="#6e6969"
        style={styles.input}
        {..._.omit(field, 'onChangeText')}
        {...otherProps}
      ></TextInput>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'gray',
    borderRadius: 25,
    flexDirection: 'row',
    padding: 15,
    marginVertical: 10,
    width: '100%',
  },
  icon: {
    marginRight: 10,
  },
  input: {
    fontSize: 18,
    fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Avenir',
    width: '100%',
    paddingHorizontal: 8,
  },
})

export default AppTextInput
