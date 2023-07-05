import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import Screen from '../components/Screen'
import AppButton from '../components/AppButton'
import AppTextInput from '../components/AppTextInput'
import { Formik, Form } from 'formik'
import { login } from '../store/UserSlice'
import { useNavigation } from '@react-navigation/native'
import { useDispatch } from 'react-redux'

function Login() {
  const dispatch = useDispatch()
  const navigation = useNavigation()

  return (
    <Screen>
      <View style={{ justifyContent: 'center' }}>
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
                placeholder="email"
                name="email"
                type="email"
                field="email"
                icon="email"
                onChangeText={handleChange('email')}
                value={values.email}
              />
              <AppTextInput
                placeholder="password"
                name="password"
                type="password"
                field="password"
                icon="lock"
                onChangeText={handleChange('password')}
                value={values.password}
              />
              <AppButton
                title="Submit"
                type="submit"
                style={{ flex: 1 }}
                onPress={handleSubmit}
              />
            </Form>
          )}
        </Formik>
      </View>
    </Screen>
  )
}

const styles = StyleSheet.create({
  logo: {
    width: 150,
    height: 150,
    marginBottom: 10,
  },
})
export default Login
