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
            <h1>Hi, I'm Syazwan Suhaimi</h1>
            <p>Full-stack developer that build and maintain web applications end to end — from reliable back-end systems to clean, responsive front-ends.
              Let's connect on <a href="https://www.linkedin.com/in/syazwansuhaimi/" target="_blank">LinkedIn</a> or <a href="https://github.com/ob1kenotbi" target="_blank">Github</a>
            </p>

          </div>
          <div className='hero-image'>
            <img src={heroImg} alt="Syazwan Suhaimi"/>
          </div>
        </section>

        <section className='about'>
          <h2>About</h2>
          <p>I'm a full-stack developer based in Kuala Lumpur, working across the stack since 2019. I've spent the last few years building internal systems for investment banking and asset management firms — REST APIs in .NET, batch processing and reporting in SQL Server, and front-ends in Angular and React. I like the back-end work most: making data flow reliably, tuning slow queries, and automating the repetitive things away.</p>
        </section>

        <section className='experience'>
          <h2>Experience</h2>
          <p></p>
        </section>
      </div>
    </>
  )
}

export default App
