import React from 'react'
import { Formik, Form } from 'formik'
import AppTextInput from './AppTextInput'
import AppButton from './AppButton'

function ClientForm() {
  return (
    <Formik
      initialValues={{
        clientName: '',
        email: '',
        address: '',
        hourlyRate: '',
      }}
      onSubmit={(values) => console.log(values)}
    >
      {({ handleChange, handleBlur, handleSubmit }) => (
        <Form onSubmit={handleSubmit}>
          <AppTextInput
            placeholder="Client Name"
            name="clientName"
            type="text"
            onChangeText={handleChange('clientName')}
            onBlur={handleBlur}
            value={values.clientName}
          />
          <AppTextInput
            placeholder="email"
            name="email"
            type="email"
            onChangeText={handleChange('email')}
            onBlur={handleBlur}
            value={values.email}
          />
          <AppTextInput
            placeholder="address"
            name="address"
            type="text"
            onChangeText={handleChange('address')}
            onBlur={handleBlur}
            value={values.address}
          />
          <AppTextInput
            placeholder="Hourly Rate"
            name="hourlyRate"
            type="text"
            onChangeText={handleChange('hourlyRate')}
            onBlur={handleBlur}
            value={values.hourlyRate}
          />

          <AppButton title="Submit" onPress={handleSubmit} />
        </Form>
      )}
    </Formik>
  )
}

const styles = StyleSheet.create({})

export default ClientForm
