import StudentForm from '../StudentForm/StudentForm'
import StudentList from '../StudentList/StudentList'
import { Container } from '@material-ui/core'

function Course() {
  return (
    <Container component="article" maxWidth="lg" className="content">
      <StudentForm />
      <StudentList />
    </Container>
  )
}

export default Course
