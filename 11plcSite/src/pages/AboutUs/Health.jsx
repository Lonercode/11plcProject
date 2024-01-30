import { useEffect } from 'react'
import {Outlet, Link} from 'react-router-dom'

function Health(){

    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
          entries.forEach(entry => {
            if (entry.isIntersecting){
              
              entry.target.classList.add('slideLeft');
              
            }
            else {
          
            entry.target.classList.remove('slideLeft')
            }
            
          })
        },
        {
          threshold: 0.5
        }
        )
        const obs = document.querySelectorAll('#leftSlide')
        const obs1 = document.querySelectorAll('#rightSlide')
        obs1.forEach((one) => {
          observer.observe(one)
        }) 
        obs.forEach((one) => {
          observer.observe(one)
        }) 
      
        
      })

  return (
    <>
    <div id = "directors">
    <img src = "\images\env.jpg" id = "mainImg"/>
    <div id = "text">
    <h4>Safety, Security, Health and Environmental <br/>(SSH&E) Policy Statement</h4>
    </div>
    <p id = "hist">Our commitment to Safety, Security, Health and Environment (SSH&E) performance is an 
    integral part of our Business. <br/>
    Everyone who works at 11PLC is responsible for protecting the safety, health and environment of our 
    employees, customers, contractors and the community in accordance with our vision, mission and value 
    statements.
    Our commitment to sustaining high Safety, Security, Health and environment (SSH&E) performance is 
    an integral part of our business. Achieving a cost-effective SSH&E solutions are essential to our long- term 
    business successes.
    These commitments are in addition to our basic obligation to comply with all Safety, Security, Health 
    and Environmental laws and regulations. <br/>
    At 11PLC we are committed to:

    </p>
    <div class = "slides">
      <p id = "leftSlide"><b> Eliminating accidents and environmental incidents</b></p>
      <p id = "rightSlide"><b>No spillages</b></p>

      <p id = "leftSlide"><b> Using energy and other natural resources efficiently</b></p>
      <p id = "rightSlide"><b>Emergencies preparedness response</b></p>

      <p id = "leftSlide"><b>Ongoing education of our employees and general public on the safe use of these products</b></p>
      <p id = "rightSlide"><b>SSH&E synergies with our neighbors and business community</b></p>

      <p id = "leftSlide"><b> SSH&E synergies with our neighbors and business community</b></p>
      <p id = "rightSlide"><b>Recognizing outstanding SSH&E performance</b></p>

    </div>
    
 
    <br/><br/>
    <Outlet/>
    </div>
    </>
    )
}

export default Health