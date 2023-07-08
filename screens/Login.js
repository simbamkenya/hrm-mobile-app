import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import Screen from '../components/Screen'
import AppButton from '../components/AppButton'
import AppTextInput from '../components/AppTextInput'
import { Formik, Form } from 'formik'
import { login } from '../store/UserSlice'
import { useNavigation } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux'
import jwtDecode from 'jwt-decode'

function Login() {
  const dispatch = useDispatch()
  const navigation = useNavigation()

  console.log('user', jwtDecode(localStorage.getItem('user')))

  return (
    <Screen>
      <View style={styles.container}>
        <View>
          <Image
            style={[styles.logo, { alignSelf: 'center', marginBottom: 18 }]}
            source={require('../assets/hrm-logo.png')}
          />
          <Formik
            initialValues={{ email: '', password: '' }}
            onSubmit={(values) => {
              dispatch(login(values))
              navigation.navigate('Home')
            }}
          >
            {({ values, handleChange, handleSubmit }) => (
              <Form onSubmit={handleSubmit}>
                <AppTextInput
                  placeholder="Email"
                  name="email"
                  type="email"
                  field="email"
                  icon="email"
                  onChangeText={handleChange('email')}
                  value={values.email}
                />
                <AppTextInput
                  placeholder="Password"
                  name="password"
                  type="password"
                  field="password"
                  icon="lock"
                  onChangeText={handleChange('password')}
                  value={values.password}
                />
                <View style={{ alignItems: 'center' }}>
                  <AppButton
                    title="Submit"
                    type="submit"
                    onPress={handleSubmit}
                  />
                </View>
              </Form>
            )}
          </Formik>
        </View>
      </View>
    </Screen>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 150,
    alignItems: 'center',
    flex: 1,
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 10,
  },
})
export default Login
