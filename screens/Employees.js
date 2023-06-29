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
} from 'react-native'
import { Swipeable } from 'react-native-gesture-handler'
import ItemDeleteAction from './ItemDeleteAction'
import { useNavigation } from '@react-navigation/native'
import EmployeeProfile from './EmployeeProfile'
import AppTabNavigator from './TabNavigator'
import ItemNavigator from '../navigation/ItemNavigator'

function Employees() {
  const navigation = useNavigation()
  const dispatch = useDispatch()
  const { employees } = useSelector((state) => state.employees)
  useEffect(() => {
    dispatch(fetchEmployees())
  }, [])

  const Employee = ({ id, firstName, lastName, email, renderRightActions }) => (
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableHighlight
        onPress={() => {
          // navigation.navigate('EmployeeProfile', {})
        }}
      >
        <View style={styles.container}>
          {console.log('id', id)}
          <Image
            style={{ height: 40, width: 40, borderRadius: 20, marginRight: 10 }}
            source={require('../assets/user.jpg')}
          ></Image>
          <Text style={styles.text}>{`${firstName + lastName}`}</Text>
          {/* <Text style={styles.text}> {email}</Text> */}
          {/* <Button
            title="Delete"
            style={{ padding: 15, fontSize: 16, borderRadius: 12 }}
            onPress={() => dispatch(deleteEmployee(id))}
          ></Button> */}
        </View>
      </TouchableHighlight>
    </Swipeable>
  )

  return (
    <Screen>
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
    alignItems: 'center',
  },
  text: {
    fontSize: 14,
    fontWeight: 'bold',
  },
})

export default Employees
