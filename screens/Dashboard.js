import React from 'react'
import { ScrollView, TouchableOpacity } from 'react-native-web'
import { View, Text, StyleSheet, Button, Image } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Screen from '../components/Screen'
import { TouchableHighlight } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'
import { colors } from '../constants/color'
import { ImageBackground } from 'react-native'

const Tab = createBottomTabNavigator()

function Dashboard() {
  const navigation = useNavigation()
  const Card = ({ style, children }) => (
    <View style={[styles.card, style]}>{children}</View>
  )
  return (
    <Screen style={{ paddingTop: 8 }}>
      <ScrollView>
        <ImageBackground
          source={require('../assets/dash-bg.jpg')}
          style={{ flex: 1, width: '100%' }}
          blurRadius={2}
        >
          <View style={styles.dashTitle}>
            <Text style={styles.title}>Dashboard</Text>
          </View>
        </ImageBackground>
        <View style={styles.cardRow}>
          <View style={styles.cardContainer}>
            <TouchableHighlight onPress={() => navigation.navigate('clients')}>
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
            <TouchableHighlight onPress={() => navigation.navigate('projects')}>
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
        </View>
      </ScrollView>
    </Screen>
  )
}

const styles = StyleSheet.create({
  cardContainer: {
    margin: 2,
    marginTop: 6,
    flex: 1,
    borderRadius: 8,
  },
  dashTitle: {
    // backgroundColor: 'blue',
    flex: 1,
    paddingVertical: 30,
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

  image: { width: 70, height: 70, borderRadius: 15 },
})

export default Dashboard
