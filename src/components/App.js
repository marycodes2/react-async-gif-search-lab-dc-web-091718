import React from 'react'
import GifListContainer from '../containers/GifListContainer'
import NavBar from './NavBar'

// the App component should render out the GifListContainer component

function App() {
  return (
    <div
      style={{textAlign: "center"}}>
      <NavBar title={"Giphy Search"} />
      <GifListContainer />
    </div>
  )
}

export default App
