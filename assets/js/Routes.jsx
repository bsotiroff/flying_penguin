import React from 'react'
import {
  Switch,
  Route
} from 'react-router-dom'

import Home from './components/Home'
import Count from './components/Count'
import Pings from './components/Pings'
import Socket from './contexts/Socket'
import PingChannel from './contexts/PingChannel'

export default function Routes() {
  return (
    <Switch>
      <Route path={['/pings', '/count', '/other']}>
        <WebSocketRoutes />
      </Route>
      <Route path='/'>
        <Home />
      </Route>
    </Switch>
  )
}

function WebSocketRoutes() {
  return (
    <Socket>
      <Route path={['/pings', '/count']}>
        <PingChannel topic='ping'>
          <Route path='/pings'>
            <Pings />
          </Route>
          <Route path='/count'>
            <Count />
          </Route>
        </PingChannel>
      </Route>

      <Route path={['/other']}>
        <PingChannel topic='other'>
          <Route path='/other'>
            <Pings topic='other' />
          </Route>
        </PingChannel>
      </Route>
    </Socket>
  )
}