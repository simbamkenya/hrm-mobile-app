import React from 'react'
import { View, Text, Button, StyleSheet, TextInput } from 'react-native'
import { Formik, Field, Form } from 'formik'
import Screen from '../components/Screen'
import AppTextInput from '../components/AppTextInput'
import AppButton from '../components/AppButton'
import { BASE_URL } from '../constants'
import axios, { Axios } from 'axios'
import { login, registerUser } from '../store/UserSlice'
import { useDispatch } from 'react-redux'

function Register() {
  const dispatch = useDispatch()
  return (
    <Screen>
      <View style={styles.container}>
        <Formik
          initialValues={{ name: '', email: '', password: '' }}
          onSubmit={(values) => dispatch(registerUser(values))}
        >
          {({ values, handleChange, handleSubmit }) => (
            <Form style={styles.form} onSubmit={handleSubmit}>
              <AppTextInput
                style={styles.input}
                placeholder="name"
                name="name"
                type="text"
                onChange={handleChange('name')}
                value={values.name}
              />

              <AppTextInput
                style={styles.input}
                placeholder="Email"
                name="email"
                type="email"
                field="email"
                onChangeText={handleChange('email')}
                value={values.email}
              />

              <AppTextInput
                style={styles.input}
                placeholder="Password"
                name="password"
                type="password"
                field="password"
                onChangeText={handleChange('password')}
                value={values.password}
              />
              <View style={{ alignItems: 'center' }}>
                <AppButton
                  type="submit"
                  title="SUBMIT"
                  onPress={handleSubmit}
                ></AppButton>
              </View>
            </Form>
          )}
        </Formik>
      </View>
    </Screen>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
    paddingTop: 100,
  },
  form: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export default Register
