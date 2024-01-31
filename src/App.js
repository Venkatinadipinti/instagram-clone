import React from 'react'
import './App.css'
import Homepage from './Homepage/Homepage'
 import Sidenav from './navgiation/Sidenav'
import Timeline from './timeline/Timeline'
const App = () => {
  return (
    <div>
     <Homepage/>
      <Sidenav/>
     <Timeline/>
    </div>
  )
}

export default App
