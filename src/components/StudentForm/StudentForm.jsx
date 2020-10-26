import React, { Component } from 'react'
import { Button, TextField, Container, Typography } from '@material-ui/core'
import './StudentForm.css'

class StudentForm extends Component {
  constructor() {
    super()
    this.state = {
      student: {
        name: '',
        email: '',
        birthDate: new Date(),
      },
    }
  }

  saveStudent(event) {
    event.preventDefault()
    fetch('http://localhost:3333/student', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: this.state.student.name,
        email: this.state.student.email,
      }),
    })
  }

  updateField(event) {
    const student = { ...this.state.student }
    student[event.target.id] = event.target.value
    this.setState({ student })
  }

  render() {
    return (
      <Container className="formContainer" component="article" maxWidth="sm">
        <Typography variant="h3" component="h1" align="center">
          Register Student
        </Typography>
        <form>
          <TextField
            id="id"
            label="ID"
            variant="outlined"
            margin="normal"
            disabled
            fullWidth
          />
          <TextField
            id="name"
            label="Name"
            variant="outlined"
            margin="normal"
            value={this.state.student.name}
            onChange={(e) => this.updateField(e)}
            fullWidth
          />
          <TextField
            id="email"
            label="Email"
            variant="outlined"
            margin="normal"
            value={this.state.student.email}
            onChange={(e) => this.updateField(e)}
            fullWidth
          />
          <TextField
            id="birthDate"
            label="Bithday"
            type="date"
            variant="outlined"
            margin="normal"
            value={this.state.student.birthDate}
            onChange={(e) => this.updateField(e)}
            InputLabelProps={{
              shrink: true,
            }}
            fullWidth
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            onClick={(e) => this.saveStudent(e)}
          >
            Submit
          </Button>
        </form>
      </Container>
    )
  }
}

export default StudentForm
