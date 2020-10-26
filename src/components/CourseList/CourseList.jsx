import React, { Component } from 'react'
import { DataGrid } from '@material-ui/data-grid'

const headers = [
  {
    field: 'title',
    headerName: 'Title',
    width: 300,
  },
  {
    field: 'description',
    headerName: 'Description',
    width: 600,
  },
]

class CourseList extends Component {
  constructor() {
    super()
    this.state = {
      items: [],
    }
  }

  getCourseFromApi() {
    return fetch('http://localhost:3333/course')
      .then((res) => res.json())
      .then(items => {
        const newItems = items.map(item => {
          return {
            id: item._id,
            title: item.title,
            description: item.description
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

export default CourseList
