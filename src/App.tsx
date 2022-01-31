import { Header } from "./components/header"
import { Profile } from "./components/profile"
import { Experiences } from "./components/experiences"
import { Projects } from "./components/projects"
import { Graduation } from "./components/graduation"
//import { Contact } from "./components/contact"
import './App.css'

function App() {

  return (
    <>
      <Header/>
      <Profile/>
      <Experiences/> 
      <Projects/>
      <Graduation/>
    </>
  )
}

export default App
