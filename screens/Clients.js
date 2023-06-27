import React, { useEffect } from 'react'
import { UseSelector, useSelector } from 'react-redux/es/hooks/useSelector'
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
} from 'react-native'
import Screen from '../components/Screen'

function Clients() {
  const dispatch = useDispatch()
  const { clients } = useSelector((state) => state.clients)
  // // const data = clients
  // // console.log('cl', clients)

  // const data = [
  //   { _id: '1', clientName: 'him', hourlyRate: 40 },
  //   { _id: '2', clientName: 'she', hourlyRate: 30 },
  // ]

  useEffect(() => {
    dispatch(fetchClients())
  }, [])

  const Client = ({ name, rate, id }) => (
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
      {/* <Button
        title="Delete"
        style={{ padding: 15, fontSize: 16, borderRadius: 12 }}
        onPress={() => dispatch(deleteClient(id))}
      ></Button> */}
    </View>
  )

  return (
    <Screen>
      <FlatList
        data={clients}
        renderItem={({ item }) => (
          <Client name={item.clientName} rate={item.hourlyRate} id={item._id} />
        )}
        keyExtractor={(item) => item._id}
      />
      {/* <FlatList
        data={data}
        renderItem={({ item }) => <Text>{item.clientName}</Text>}
      /> */}
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
    color: 'white',
  },
})
export default Clients
