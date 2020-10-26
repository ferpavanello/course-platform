import React from 'react'
import { AppBar, Toolbar, Typography } from '@material-ui/core'
import './style.css'

function Header() {
  return (
    <AppBar position="static">
      <Toolbar variant="dense" className="header-bar">
        <Typography variant="h5" color="inherit">
          Platform
        </Typography>
      </Toolbar>
    </AppBar>
  )
}

export default Header