import { Header } from "./components/header"
import { MenuBar } from "./components/menuBar"
import './App.css'
import { Profile } from "./components/profile"
import { Experiences } from "./components/experiences"
import { Cards } from "./components/cards"
import { Projects } from "./components/projects"

function App() {

  return (
    <>
      <Header/>
      <Profile/>
      <Experiences/> 
      <Projects/>
    </>
  )
}

export default App
