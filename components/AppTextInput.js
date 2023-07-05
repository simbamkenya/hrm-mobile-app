import React from 'react'
import { TextInput, View, StyleSheet } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import _ from 'lodash'
import { colors } from '../constants/color'

function AppTextInput({ icon, width = '100%', field, ...otherProps }) {
  return (
    <View style={[styles.container, { width }]}>
      {icon && (
        <MaterialCommunityIcons name={icon} size={20} color="" style="" />
      )}
      <TextInput
        placeholderTextColor="white"
        style={{ width: '80%', padding: 6 }}
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
  },
})

export default AppTextInput
