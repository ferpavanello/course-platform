import React from 'react'
import { Route, Switch, Redirect } from 'react-router'

import Student from './components/Student/Student'
import Course from './components/Course/Course'

function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Course} />
      <Route path="/course" component={Course} />
      <Route path="/student" component={Student} />
      <Redirect from="*" to="/" />
    </Switch>
  )
}

export default Routes
