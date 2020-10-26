import React, { Component } from 'react'
import { DataGrid } from '@material-ui/data-grid'

const headers = [
  {
    field: 'name',
    headerName: 'Name',
    width: 300,
  },
  {
    field: 'email',
    headerName: 'Email',
    width: 450,
  },
  {
    field: 'birthDate',
    headerName: 'Birthday',
    width: 250,
  },
]

class StudentList extends Component {
  constructor() {
    super()
    this.state = {
      items: [],
    }
  }

  getCourseFromApi() {
    return fetch('http://localhost:3333/student')
      .then((res) => res.json())
      .then(items => {
        const newItems = items.map(item => {
          return {
            id: item._id,
            name: item.name,
            email: item.email,
            birthDate: item.birthDate
          }
        })
        console.log('items', items)
        this.setState({ items: newItems })
      })
  }

  componentDidMount() {
    this.getCourseFromApi()
  }
  
  render() {
    return <DataGrid rows={this.state.items} columns={headers} pageSize={5} />
  }
}

export default StudentList
