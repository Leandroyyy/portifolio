import { Header } from "./components/header"
import { MenuBar } from "./components/menuBar"
import './App.css'
import { Profile } from "./components/profile"
import { Experiences } from "./components/experiences"
import { Projects } from "./components/projects"
import { Graduation } from "./components/graduation"
import { Contact } from "./components/contact"

function App() {

  return (
    <>
      <Header/>
      <Profile/>
      <Experiences/> 
      <Projects/>
      <Graduation/>
      <Contact/>
    </>
  )
}

export default App
