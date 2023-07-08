import React from 'react'
import { Formik, Form } from 'formik'
import AppTextInput from './AppTextInput'
import AppButton from './AppButton'
import Screen from './Screen'
import { StyleSheet } from 'react-native'

function EmployeeForm() {
  return (
    <Screen>
      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          email: '',
        }}
        onSubmit={(values) => console.log(values)}
      >
        {({ values, handleChange, handleSubmit, handleBlur }) => (
          <Form onSubmit={handleSubmit}>
            <AppTextInput
              placeholder="First Name"
              name="firstName"
              type="text"
              onChangeText={handleChange('firstName')}
              onBlur={handleBlur}
              value={values.firstName}
            />
            <AppTextInput
              placeholder="Last Name"
              name="lastName"
              type="text"
              onChangeText={handleChange('lastName')}
              onBlur={handleBlur}
              value={values.lastName}
            />
            <AppTextInput
              placeholder="email"
              name="email"
              type="email"
              onChangeText={handleChange('email')}
              onBlur={handleBlur}
              value={values.email}
            />
            <View style={{ alignItems: 'center' }}>
              <AppButton type="submit" title="Submit" onPress={handleSubmit} />
            </View>
          </Form>
        )}
      </Formik>
    </Screen>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
    flex: 1,
    paddingTop: 150,
  },
})

export default EmployeeForm
