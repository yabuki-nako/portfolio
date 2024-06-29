import NavBar from './assets/pages/navbar'
import Project from './assets/pages/projects'
import Contact from './assets/pages/contact'
import Home from './assets/pages/home'
import { Route, Routes } from 'react-router-dom'
import Hero from './assets/pages/Hero'
import Aboutme from './assets/pages/aboutme'
import Techstack from './assets/pages/techstack'
import Experience from './assets/pages/experience'
import Socials from './assets/pages/socials'

function App() {
  // console.log(window.location)
  // let component
  // switch (window.location.pathname){
  //   case "/home" :
  //     component = <Home/>
  //     break
  //   case "/project":
  //     component = <Project/>
  //     break
  //   case "/contact":
  //     component = <Contact/>
  //     break      
  // }
  return (
    <>
    <div className="overflow-x-hidden text-neutral-300 antialiased 
    selection:bg-cyan-300 selection:text-cyan-900">
    <div className='fixed top-0 -z-10 h-full w-full'>
    <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">

    </div>
    </div>

    <div className='container mx-auto px-8'>
      <NavBar/>
      
      <Socials/>
      <Hero/>
      <Aboutme/>
      <Techstack/>
      <Experience/>
      <Project/>
      <Contact/>


    </div>

        {/* <Routes>
          <Route path='/home' element={<Home/>}/>
          <Route path='/project' element={<Project/>}/>
          <Route path='contact' element={<Contact/>}/>
        </Routes> */}

        </div>

    </>
  )
}

export default App