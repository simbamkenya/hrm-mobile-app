import React from 'react'
import { View, Text, Button, StyleSheet, TextInput } from 'react-native'
import { Formik, Field, Form } from 'formik'
import Screen from '../components/Screen'
import AppTextInput from '../components/AppTextInput'
import AppButton from '../components/AppButton'

function Register() {
  return (
    <Screen>
      <View>
        <Formik
          initialValues={{ name: '', email: '', password: '' }}
          onSubmit={(values) => console.log(values)}
        >
          {({ values, handleChange, handleSubmit, handleBlur }) => (
            <Form style={styles.form} onSubmit={handleSubmit}>
              <View style={styles.wrapper}>
                {/* <Text style={styles.label}>Name</Text> */}
                <AppTextInput
                  style={styles.input}
                  placeholder="name"
                  name="name"
                  type="text"
                  onChange={handleChange('name')}
                  onBlur={handleBlur}
                  value={values.name}
                />
              </View>
              <View style={styles.wrapper}>
                {/* <Text style={styles.label}>Email</Text> */}
                <AppTextInput
                  style={styles.input}
                  placeholder="email"
                  name="email"
                  type="email"
                  field="email"
                  onChangeText={handleChange('email')}
                  onBlur={handleBlur}
                  value={values.email}
                />
              </View>

              <View style={styles.wrapper}>
                {/* <Text style={styles.label}>Password</Text> */}
                <AppTextInput
                  style={styles.input}
                  placeholder="password"
                  name="password"
                  type="password"
                  field="password"
                  onChangeText={handleChange('password')}
                  onBlur={handleBlur}
                  value={values.password}
                />
              </View>
              <AppButton
                type="submit"
                title="SUBMIT"
                onPress={handleSubmit}
              ></AppButton>
            </Form>
          )}
        </Formik>
      </View>
    </Screen>
  )
}

const styles = StyleSheet.create({
  form: {
    flexDirection: 'column',
  },
  wrapper: {
    // flexDirection: 'row',
  },
  label: {},
  input: {
    backgroundColor: 'gray',
  },
})

export default Register
