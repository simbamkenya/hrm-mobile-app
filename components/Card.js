import { Children } from 'react'
import { View, Text, StyleSheet } from 'react-native'

function Card({ children }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>title</Text>
      <View>{children}</View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
  },
  title: {
    fontSize: 18,
    textTransform: 'uppercase',
  },
})

export default Card
