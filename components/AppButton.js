import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'

function AppButton({ title, onPress, color = 'red' }) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    padding: 15,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
    width: 200,
    marginVertical: 10,
    backgroundColor: '#0a0a23',
  },
  text: {
    color: 'white',
    fontSize: 12,
    fontWeight: 'normal',
    textTransform: 'uppercase',
  },
})

export default AppButton
