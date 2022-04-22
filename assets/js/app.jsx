// We import the CSS which is extracted to its own file by esbuild.
// Remove this line if you add a your own CSS build pipeline (e.g postcss).
import "../css/app.css"

// If you want to use Phoenix channels, run `mix help phx.gen.channel`
// to get started and then uncomment the line below.
// import "./user_socket.js"

// You can include dependencies in two ways.
//
// The simplest option is to put them in assets/vendor and
// import them using relative paths:
//
//     import "../vendor/some-package.js"
//
// Alternatively, you can `npm install some-package --prefix assets` and import
// them using a path starting with the package name:
//
//     import "some-package"
//

import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Link
} from 'react-router-dom'

import Routes from './Routes'

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/pings'>Pings</Link>
            </li>
            <li>
              <Link to='/other'>Other Pings</Link>
            </li>
            <li>
              <Link to='/count'>Counter</Link>
            </li>
          </ul>
        </nav>

        <Routes />
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
