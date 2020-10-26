import React from 'react'
import { Route, Switch, Redirect } from 'react-router'

import Student from './components/Student/Student'
import Course from './components/Course/Course'
import Home from './components/Home/Home'

function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/course" component={Course} />
      <Route path="/student" component={Student} />
      <Redirect from="*" to="/" />
    </Switch>
  )
}

export default Routes
