import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import NavBar from './components/NavBar'
import Home from './components/Home'
import NineInchNails from './components/NineInchNails'
import KoRn from './components/KoRn'
import TheCrystalMethod from './components/TheCrystalMethod'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/NineInchNails" component={NineInchNails}></Route>
          <Route exact path="/KoRn" component={KoRn}></Route>
          <Route exact path="/TheCrystalMethod" component={TheCrystalMethod}></Route>
        </Switch>
      </BrowserRouter>
    </>
  )
}

export default App
