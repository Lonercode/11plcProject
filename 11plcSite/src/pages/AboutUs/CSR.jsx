import { useEffect } from 'react';
import {Outlet, Link} from 'react-router-dom'


function CSR(){
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
    <img src = "\images\csrMain.jpg" id = "mainImg"/>
    <div id = "text">
    <h4>Cooperate Social Responsibility</h4>
    </div>
    <p id = "hist">Our responsibilities and interface involves but not limited to the following: </p>
    <div className = "slides">
      <p id = "leftSlide" className = "leftSlide"><b> Federal/ State Ministries and Departments</b></p>
      <p id = "rightSlide"><b>Regulatory Agencies at State or Federal levels</b></p>

      <p id = "leftSlide" className = "leftSlide"><b> Local Government Authorities</b></p>
      <p id = "rightSlide"><b>Educational Institutions</b></p>

      <p id = "leftSlide" className = "leftSlide"><b> Healthcare Institutions</b></p>
      <p id = "rightSlide"><b>Non-Governmental Orgnization (Charitable Houses)</b></p>

      <p id = "leftSlide" className = "leftSlide"><b> Traditional Institutions</b></p>
      <p id = "rightSlide"><b>Host Community</b></p>

      <p id = "leftSlide" className = "leftSlide"><b> Retirees and Shareholders</b></p>
      <p id = "rightSlide"><b> Media</b></p>
    </div>
    
    <div class = "overall">
    <div class="container">
    <img src= "\images\csrMain.jpg" class="image"/>
  <div class="overlay">
    <div class="text1">The MD presents gifts items to the winner of Round Robin Football Tournament.</div>
  </div>
</div>

<div class="container1">
    <img src= "\images\csr2.jpg" class="image"/>
  <div class="overlay">
    <div class="text1">Apapa School Rennovation.</div>
  </div>
</div>


<div class="container2">
    <img src= "\images\csr3.jpg" class="image"/>
  <div class="overlay">
    <div class="text1">Apapa School Rennovation.</div>
  </div>
</div>

</div>
 
    <br/><br/>
    <br/><br/>
    <Outlet/>
    </div>
    </>
    )
}



export default CSR