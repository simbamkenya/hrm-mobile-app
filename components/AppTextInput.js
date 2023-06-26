import React from 'react'
import { TextInput, View, StyleSheet } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import _ from 'lodash'

function AppTextInput({ icon, width = '100%', field, ...otherProps }) {
  return (
    <View style={[styles.container, { width }]}>
      {icon && (
        <MaterialCommunityIcons name={icon} size={20} color="" style="" />
      )}
      <TextInput
        placeholderTextColor=""
        style=""
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
