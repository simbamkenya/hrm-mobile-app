import React from 'react'
import { Formik, Form } from 'formik'
import AppTextInput from './AppTextInput'
import AppButton from './AppButton'
import Screen from './Screen'
import { StyleSheet, View } from 'react-native'
import DateTimePicker from '@react-native-community/datetimepicker'

function EventForm() {
  return (
    <Screen>
      <View style={styles.container}>
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
                placeholder="Event Name"
                values={values.eventName}
                onChangeText={handleChange('eventName')}
              />

              <AppTextInput
                title="Event Date"
                placeholder="Event Date"
                values={values.eventDate}
                onChangeText={handleChange('eventDate')}
              />
              <DateTimePicker
                // testID="dateTimePicker"
                value={new Date()}
                // is24Hour={true}
                onChangeText={handleChange('eventDate')}
              />

              <AppTextInput
                title="Duration"
                placeholder="Duration"
                values={values.duration}
                onChangeText={handleChange('duration')}
              />
              <View style={{ alignItems: 'center' }}>
                <AppButton title="Submit" onPress={handleSubmit} />
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
    padding: 15,
    flex: 1,
    paddingTop: 150,
  },
})

export default EventForm
