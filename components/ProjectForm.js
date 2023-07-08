import React from 'react'
import { Formik, Form } from 'formik'
import AppTextInput from './AppTextInput'
import AppButton from './AppButton'
import Screen from './Screen'
import { StyleSheet, View } from 'react-native'

function ProjectForm() {
  return (
    <Screen>
      <View style={styles.container}>
        <Formik
          initialValues={{
            projectName: '',
            client: '',
            hours: '',
            dateDue: '',
          }}
          onSubmit={(values) => console.log(values)}
        >
          {({ values, handleSubmit, handleChange }) => (
            <Form onSubmit={handleSubmit}>
              <AppTextInput
                placeholder="Project Name"
                name="projectName"
                value={values.projectName}
                onChangeText={handleChange}
              />
              <AppTextInput
                placeholder="Client"
                name="client"
                value={values.client}
                onChangeText={handleChange}
              />
              <AppTextInput
                placeholder="Hours"
                name="hours"
                value={values.hours}
                onChangeText={handleChange}
              />
              <AppTextInput
                placeholder="Date Due"
                name="dateDue"
                value={values.dateDue}
                onChangeText={handleChange}
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
export default ProjectForm
