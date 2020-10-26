import React, { Component } from 'react'
import { Button, TextField, Typography, Container } from '@material-ui/core'
import './CourseForm.css'

class CourseForm extends Component {
  constructor() {
    super()
    this.state = {
      course: {
        title: '',
        description: '',
      },
    }
  }

  saveCourse(event) {
    event.preventDefault()
    fetch('http://localhost:3333/course', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        title: this.state.course.title,
        description: this.state.course.description,
      }),
    })
  }

  updateField(event) {
    const course = { ...this.state.course }
    course[event.target.id] = event.target.value
    console.log('mudou', course)
    this.setState({ course })
  }

  render() {
    return (
      <Container className="formContainer" component="article" maxWidth="sm">
        <Typography variant="h3" component="h1" align="center">
          Register Course
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
            id="title"
            label="Title"
            variant="outlined"
            margin="normal"
            value={this.state.course.title}
            onChange={(e) => this.updateField(e)}
            fullWidth
          />
          <TextField
            id="description"
            label="Description"
            variant="outlined"
            margin="normal"
            value={this.state.course.description}
            onChange={(e) => this.updateField(e)}
            fullWidth
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            onClick={(e) => this.saveCourse(e)}
          >
            Submit
          </Button>
        </form>
      </Container>
    )
  }
}

export default CourseForm
