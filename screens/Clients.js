import React, { useEffect } from 'react'
import { useSelector } from 'react-redux/es/hooks/useSelector'
import { fetchClients } from '../store/ClientSlice'
import { deleteClient } from '../store/ClientSlice'
import { useDispatch } from 'react-redux'
import {
  TextInput,
  View,
  StyleSheet,
  FlatList,
  Text,
  Button,
  Image,
  TouchableHighlight,
  ActivityIndicator,
} from 'react-native'
import Screen from '../components/Screen'
import { Swipeable } from 'react-native-gesture-handler'
import ItemDeleteAction from './ItemDeleteAction'
import { useNavigation } from '@react-navigation/native'
import { colors } from '../constants/color'

function Clients() {
  const navigation = useNavigation()
  const dispatch = useDispatch()
  const { clients, loading } = useSelector((state) => state.clients)
  const X = useSelector((state) => state.clients)
  console.log('clientss', X)

  useEffect(() => {
    dispatch(fetchClients())
  }, [])

  const Client = ({ name, rate, address, email, id, renderRightActions }) => (
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableHighlight
        onPress={() =>
          navigation.navigate('ClientProfile', { name, rate, address, email })
        }
      >
        <View style={styles.container}>
          {console.log('id', id)}
          <Image
            style={{ height: 40, width: 40, borderRadius: 20, marginRight: 10 }}
            source={require('../assets/user.jpg')}
          ></Image>
          <View style={{ flexDirection: 'column' }}>
            <Text style={[styles.text, { marginRight: 10 }]}>
              CLIENT NAME: {name}
            </Text>
            <Text style={styles.text}>HOURLY RATE ${rate}</Text>
          </View>
        </View>
      </TouchableHighlight>
    </Swipeable>
  )

  return (
    <Screen>
      <Button
        title="Add Client"
        onPress={() => navigation.navigate('AddClient')}
      />
      {loading ? (
        <View
          style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
        >
          <ActivityIndicator size="large" color="#00ff00" />
        </View>
      ) : (
        <FlatList
          data={clients}
          renderItem={({ item }) => (
            <Client
              name={item.clientName}
              rate={item.hourlyRate}
              address={item.address}
              email={item.email}
              id={item._id}
              renderRightActions={() => (
                <ItemDeleteAction
                  onPress={() => dispatch(deleteClient(item._id))}
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
export default Clients
