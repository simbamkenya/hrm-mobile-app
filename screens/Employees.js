import React, { useEffect } from 'react'
import { deleteEmployee, fetchEmployees } from '../store/EmployeeSlice'
import { deleteClient } from '../store/ClientSlice'
import { useDispatch, useSelector } from 'react-redux'
import Screen from '../components/Screen'
import { FlatList, Text, View, Button, StyleSheet } from 'react-native'

function Employees() {
  const dispatch = useDispatch()
  const { employees } = useSelector((state) => state.employees)
  useEffect(() => {
    dispatch(fetchEmployees())
  }, [])

  const Employee = ({ id, name, email }) => (
    <View style={styles.container}>
      {console.log('id', id)}
      <Text style={styles.text}>{name}</Text>
      <Text style={styles.text}> {email}</Text>
      <Button
        title="Delete"
        style={{ padding: 15, fontSize: 16, borderRadius: 12 }}
        onPress={() => dispatch(deleteEmployee(id))}
      ></Button>
    </View>
  )

  return (
    <Screen>
      <FlatList
        data={employees}
        renderItem={({ item }) => (
          <Employee id={item._id} name={item.firstName} email={item.email} />
        )}
        keyExtractor={(item) => item._id}
      />
    </Screen>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'pink',
    borderRadius: 10,
    padding: 15,
    marginBottom: 6,
    flexDirection: 'row',
  },
  text: {
    fontSize: 14,
    fontWeight: 'bold',
  },
})

export default Employees
