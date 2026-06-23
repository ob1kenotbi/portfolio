//import { useState } from 'react'
import heroImg from './assets/profile-picture.jpg'
import './App.css'
import Accordion from './components/accordion.jsx'

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
          <Accordion title="Phillip Capital">
            <h4>Apr 2025 - Present</h4>
            <p>I develop and maintain enterprise applications and reporting solutions that support business and finance operations. My responsibilities include building RESTful APIs and back-end services using C# (.NET), developing front-end features with Angular, optimizing SQL Server queries and batch processes, and creating SSRS reports. I also automate operational workflows using PowerShell, manage WordPress customizations, and provide production support, including incident resolution, disaster recovery activities, and data migration.</p>
          </Accordion>
          <Accordion title="AHAM Asset Management">
            <h4>Dec 2023 - Mar 2025</h4>
            <p>I contributed to the development and maintenance of internal business applications using ASP.NET, React.js, and ASP.NET Core microservices. My work involved designing APIs, developing data integration solutions with SSIS, optimizing SQL Server databases, and implementing business workflows using Nintex K2. I also built automation tools with Python and leveraged AWS and Datadog to monitor application performance, troubleshoot production issues, and ensure system reliability.</p>
          </Accordion>
          <Accordion title="Fujitsu">
            <p>As a System Engineer, I developed and enhanced enterprise application modules using ASP.NET, Spring Boot, TypeScript, and SQL. I was responsible for implementing new features, debugging issues, executing test plans, and analyzing application logs to maintain system quality. Additionally, I prepared technical documentation in both English and Japanese and developed supporting services such as automated email notification systems.</p>
          </Accordion>
        </section>
      </div>
    </>
  )
}

export default App
