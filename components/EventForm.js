import React from 'react'
import { Formik, Form } from 'formik'
import AppTextInput from './AppTextInput'
import AppButton from './AppButton'
import Screen from './Screen'
import { StyleSheet } from 'react-native'

function EventForm() {
  return (
    <Screen>
      {' '}
      <Formik
        initialValues={{
          eventName: '',
          eventDate: '',
          eventTime: '',
          duration: '',
          location: '',
        }}
        onSubmit={() => console.log(values)}
      >
        {({ values, handleChange, handleSubmit }) => (
          <Form onSubmit={handleSubmit}>
            <AppTextInput
              title="Event Name"
              values={values.eventName}
              onChangeText={handleChange('eventName')}
            />

            <AppTextInput
              title="Event Date"
              values={values.eventDate}
              onChangeText={handleChange('eventDate')}
            />
            <AppTextInput
              title="Duration"
              values={values.duration}
              onChangeText={handleChange('duration')}
            />

            <AppButton title="Submit" onPress={handleSubmit} />
          </Form>
        )}
      </Formik>
    </Screen>
  )
}

const styles = StyleSheet.create({})

export default EventForm
