import React from 'react'
import CourseForm from '../CourseForm/CourseForm'
import CourseList from '../CourseList/CourseList'
import { Container } from '@material-ui/core'

function Course() {
  return (
    <Container component="article" maxWidth="lg">
      <CourseForm />
      <CourseList />
    </Container>
  )
}

export default Course
