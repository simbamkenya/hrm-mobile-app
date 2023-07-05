import React, { useEffect } from 'react'
import { deleteEmployee, fetchEmployees } from '../store/EmployeeSlice'
import { deleteClient } from '../store/ClientSlice'
import { useDispatch, useSelector } from 'react-redux'
import Screen from '../components/Screen'
import {
  FlatList,
  Text,
  View,
  StyleSheet,
  Image,
  TouchableHighlight,
  Button,
  ActivityIndicator,
} from 'react-native'
import { Swipeable } from 'react-native-gesture-handler'
import ItemDeleteAction from './ItemDeleteAction'
import { useNavigation } from '@react-navigation/native'
import { colors } from '../constants/color'

function Employees() {
  const navigation = useNavigation()
  const dispatch = useDispatch()
  const { employees, loading } = useSelector((state) => state.employees)
  useEffect(() => {
    dispatch(fetchEmployees())
  }, [])

  const Employee = ({ id, firstName, lastName, email, renderRightActions }) => (
    <Swipeable renderRightActions={renderRightActions}>
      {/* {console.log('email', email)} */}
      <TouchableHighlight
        onPress={() => {
          navigation.navigate('EmployeeProfile', {
            email: email,
            firstName: firstName,
            lastName: lastName,
          })
        }}
      >
        <View style={styles.container}>
          {console.log('id', id)}
          <Image
            style={{ height: 40, width: 40, borderRadius: 20, marginRight: 10 }}
            source={require('../assets/user.jpg')}
          ></Image>
          <Text style={styles.text}>{`${firstName + lastName}`}</Text>
        </View>
      </TouchableHighlight>
    </Swipeable>
  )

  return (
    <Screen>
      <Button
        title="Add Employee"
        style={{ padding: 15, fontSize: 16, borderRadius: 12 }}
        onPress={() => navigation.navigate('AddEmployee')}
      ></Button>
      {loading ? (
        <View
          style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
        >
          <ActivityIndicator size="large" color="#00ff00" />
        </View>
      ) : (
        <FlatList
          data={employees}
          renderItem={({ item }) => (
            <Employee
              id={item._id}
              firstName={item.firstName}
              lastName={item.lastName}
              email={item.email}
              renderRightActions={() => (
                <ItemDeleteAction
                  onPress={() => dispatch(deleteEmployee(item._id))}
                />
              )}
            />
          )}
          keyExtractor={(item) => item._id}
        />
      )}
    </Screen>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light,
    borderRadius: 10,
    padding: 15,
    margin: 6,
    flexDirection: 'row',
  },
  text: {
    fontSize: 14,
    marginTop: 4,
    fontWeight: 'bold',
    color: 'white',
  },
})
export default Employees
