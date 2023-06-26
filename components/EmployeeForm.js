import React from 'react'
import { Formik, Form } from 'formik'
import AppTextInput from './AppTextInput'
import AppButton from './AppButton'

function EmployeeForm() {
  return (
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
          <AppButton type="submit" onPress={handleSubmit} />
        </Form>
      )}
    </Formik>
  )
}

const styles = StyleSheet.create({})

export default EmployeeForm