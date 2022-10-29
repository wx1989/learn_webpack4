import React from 'react'
import ReactDOM from 'react-dom'
import firefox from './firefox.png'
import './index.css'
import './index.less'

const App = () => {
  return (
    <>
      <p>React, Hello</p>
      <img src={firefox} />
      <div className="imgWrapper"></div>
    </>
  )
}

export default App;

ReactDOM.render(<App />, document.getElementById('root'))

