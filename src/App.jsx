//import { useState } from 'react'
import heroImg from './assets/profile-picture.jpg'
import './App.css'

function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
      <div className='container'>
        <section className='hero'>
          <div className='hero-details'>
            <h1>Syazwan Suhaimi</h1>
            <p>Full Stack Developer</p>
          </div>
          <div className='hero-image'>
            <img src={heroImg} alt="Syazwan Suhaimi"/>
          </div>
        </section>

        <section className='about'>
          <h2>About Me</h2>
        </section>
      </div>
    </>
  )
}

export default App
