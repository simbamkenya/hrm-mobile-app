import React from 'react'
import { Formik, Form } from 'formik'
import AppTextInput from './AppTextInput'
import AppButton from './AppButton'
import Screen from './Screen'
import { StyleSheet, View } from 'react-native'
import { colors } from '../constants/color'

function ClientForm() {
  return (
    <Screen>
      <View style={styles.form}>
        <Formik
          initialValues={{
            clientName: '',
            email: '',
            address: '',
            hourlyRate: '',
          }}
          onSubmit={(values) => console.log(values)}
        >
          {({ values, handleChange, handleBlur, handleSubmit }) => (
            <Form style={{ justifyContent: 'center' }} onSubmit={handleSubmit}>
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

              <AppButton
                style={styles.submit}
                title="Submit"
                color={colors.green}
                type="Submit"
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
  form: {
    marginHorizontal: 8,
    paddingTop: 20,
    justifyContent: 'center',
  },
  submit: {
    // marginLeft: 50,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
})

export default ClientForm
