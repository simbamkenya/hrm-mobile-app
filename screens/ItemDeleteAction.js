import React from 'react'
import { View, StyleSheet } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { TouchableWithoutFeedback } from 'react-native-web'

function ItemDeleteAction({ onPress }) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.container}>
        <MaterialCommunityIcons
          style={styles.icon}
          name="trash-can"
          size={30}
        />
      </View>
    </TouchableWithoutFeedback>
  )
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'red',
    width: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    color: 'white',
  },
})

export default ItemDeleteAction
