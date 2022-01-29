import { Header } from "./components/header"
import { MenuBar } from "./components/menuBar"
import './App.css'
import { Profile } from "./components/profile"
import { Experiences } from "./components/experiences"
import { Cards } from "./components/cards"

function App() {

  return (
    <>
      <Header/>
      <Profile/>
      <Experiences/> 
    </>
  )
}

export default App
