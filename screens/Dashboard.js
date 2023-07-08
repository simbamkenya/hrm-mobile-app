import React, { useEffect } from 'react'
import { ScrollView, TouchableOpacity } from 'react-native-web'
import { View, Text, StyleSheet, Button, Platform, Image } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Screen from '../components/Screen'
import { TouchableHighlight } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'
import { colors } from '../constants/color'
import { ImageBackground } from 'react-native'
import { useSelector } from 'react-redux'
import Card from '../components/Card'
import * as Calendar from 'expo-calendar'

const Tab = createBottomTabNavigator()

function Dashboard() {
  const navigation = useNavigation()
  const users = useSelector((state) => state)

  console.log('users', users)
  const Card = ({ style, children }) => (
    <View style={[styles.card, style]}>{children}</View>
  )
  const requestCalender = async () => {
    const { status } = await Calendar.requestCalendarPermissionsAsync()
    if (status === 'granted') {
      const calendars = await Calendar.getCalendarsAsync(
        Calendar.EntityTypes.EVENT
      )
      console.log('Here are all your calendars:')
      console.log({ calendars })
    }
  }
  useEffect(() => {
    requestCalender()
  }, [])

  async function getDefaultCalendarSource() {
    const defaultCalendar = await Calendar.getDefaultCalendarAsync()
    return defaultCalendar.source
  }
  async function createCalendar() {
    const defaultCalendarSource =
      Platform.OS === 'ios'
        ? await getDefaultCalendarSource()
        : { isLocalAccount: true, name: 'Expo Calendar' }
    const newCalendarID = await Calendar.createCalendarAsync({
      title: 'Expo Calendar',
      color: 'blue',
      entityType: Calendar.EntityTypes.EVENT,
      sourceId: defaultCalendarSource.id,
      source: defaultCalendarSource,
      name: 'internalCalendarName',
      ownerAccount: 'personal',
      accessLevel: Calendar.CalendarAccessLevel.OWNER,
    })
    console.log(`Your new calendar ID is: ${newCalendarID}`)
  }

  return (
    <Screen>
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.banner}>
            <View style={styles.profile}>
              <Image
                style={styles.imageProfile}
                source={require('../assets/user.jpg')}
              />
              <View>
                <Text style={styles.title}>Welcome Phares Njoki!</Text>
                <Text style={styles.profileText}>Employee ID: 28589</Text>
                <Text style={styles.profileText}>Designation:Director </Text>
              </View>
            </View>
            <View>
              <Text style={styles.title}>You Have</Text>
              <Text style={styles.profileText}>0 Pendidng Requests</Text>
              <Text style={styles.profileText}>0 Due Tasks</Text>
            </View>
          </View>
          {/* <View style={styles.cardRow}>
            <View style={styles.cardContainer}>
              <TouchableHighlight
                onPress={() => navigation.navigate('clients')}
              >
                <Card style={styles.card}>
                  <Image
                    source={require('../assets/clients.jpg')}
                    style={styles.image}
                  />
                  <Text style={styles.sectionTitle}>Clients</Text>
                </Card>
              </TouchableHighlight>
            </View>

            <View style={styles.cardContainer}>
              <TouchableHighlight onPress={() => navigation.navigate('events')}>
                <Card style={styles.card}>
                  <Image
                    style={styles.image}
                    source={require('../assets/events.jpg')}
                  />
                  <Text style={styles.sectionTitle}>Events</Text>
                </Card>
              </TouchableHighlight>
            </View>
          </View>

          <View style={styles.cardRow}>
            <View style={styles.cardContainer}>
              <TouchableHighlight
                onPress={() => navigation.navigate('projects')}
              >
                <Card style={styles.card}>
                  <Image
                    source={require('../assets/Projects.jpg')}
                    style={styles.image}
                  />
                  <Text style={styles.sectionTitle}>Projects</Text>
                </Card>
              </TouchableHighlight>
            </View>

            <View style={styles.cardContainer}>
              <TouchableHighlight
                onPress={() => navigation.navigate('employees')}
              >
                <Card style={styles.card}>
                  <Image
                    source={require('../assets/employees.jpg')}
                    style={styles.image}
                  />
                  <Text style={styles.sectionTitle}>Employees</Text>
                </Card>
              </TouchableHighlight>
            </View>
          </View> */}

          <Card>
            <Text style={{ textTransform: 'uppercase' }}>Title</Text>
          </Card>
          <Card>
            <Text style={{ textTransform: 'uppercase' }}>TaskView</Text>
          </Card>

          <Card>
            <Text style={{ textTransform: 'uppercase' }}>Calender</Text>
            <View>
              <Text>Calendar Module Example</Text>
              <Button title="Create a new calendar" onPress={createCalendar} />
            </View>
          </Card>

          <Card>
            <Text style={{ textTransform: 'uppercase' }}>Upcoming Events</Text>
          </Card>
        </View>
      </ScrollView>
    </Screen>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    paddingTop: 30,
  },
  banner: {
    paddingVertical: 30,
  },
  cardContainer: {
    margin: 2,
    marginTop: 6,
    flex: 1,
    borderRadius: 8,
  },
  dashTitle: {
    flex: 1,
    paddingVertical: 30,
  },
  profile: {
    flexDirection: 'row',
  },
  profileText: {
    color: 'white',
    fontSize: 16,
  },
  cardRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderRadius: 8,
    backgroundColor: colors.light,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    // width: '90%',
    flex: 1,
  },

  sectionTitle: {
    fontSize: 18,
    textTransform: 'uppercase',
    fontWeight: '600',
    color: colors.black,
    marginLeft: 8,
    marginTop: 8,
  },
  title: {
    fontSize: 24,
    color: colors.white,
    fontWeight: 'bold',
    textTransform: 'capitalize',
    textAlign: 'center',
    marginBottom: 4,
  },

  image: {
    height: 70,
    width: 70,
    borderRadius: 15,
  },
  imageProfile: {
    padding: 20,
    marginRight: 20,
    height: 60,
    width: 60,
    borderRadius: '50%',
  },
})

export default Dashboard
