import { useEffect, useState } from 'react'
import Home from './pages/Home'
import OurHistory from './pages/AboutUs/OurHistory'
import BoardOfDirectors from './pages/AboutUs/BoardOfDirectors'
import ManagementTeam from './pages/AboutUs/ManagementTeam'
import Awards from './pages/AboutUs/Awards'
import CSR from './pages/AboutUs/CSR'
import Health from './pages/AboutUs/Health'
import QuarterlyReports from './pages/InvestorRelations/QuarterlyReports'
import {Route, Routes, BrowserRouter} from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import $ from 'jquery'
import popper from 'popper.js'
import './App.css'
import axios from 'axios'
import { ToastContainer, toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import {Fade, Animator, ScrollContainer, ScrollPage, FadeIn} from 'react-scroll-motion'

/*Component for Contact (Footer) */

function Contact(){
  const [mail, setMail] = useState("")
  const [id, setId] = useState("")
  const [token, setToken] = useState("")

  function handleSubscribe(e){
    e.preventDefault()
    axios.post('/api/plc/subscribe', {email: mail})
    .then((res) => toast.info(res.data.message, {position: toast.POSITION.TOP_RIGHT}))
    .then(() => setMail({email: ""}))
    .catch(err => {
      console.log(err)
    })
  }


  function handleInput(e){ 
    setMail(e.target.value)
  }

  return (
    <>
    <div class = "overallContact">
    <div className = "contact">
      <div id = "leftSideContactInfo">
      <h4> Contact Us</h4>
      <p>Address: 1 Mobil Road, Apapa, Lagos, Nigeria.
        <br/>
        Email: info@11plc.com
        <br/>
        Tel: +234 1 280 1600</p>
      </div>
      
      <div id = "midContactInfo">
        <h4>Quick Links</h4>
        <ul>
          <li><a href = "https://www.exxonmobil.com/en/pds#f:Location=[United%20Kingdom]">Product Data Sheet</a></li>
          <li><a  href = "#">Health and Safety Policy</a></li>
          <li><a  href = "#">Sustainabilty Policy</a></li>
          <li><a  href = "#">Security Trading Policy</a></li>
          <li><a  href = "#">Complaints Management Policy</a></li>
          <li><a  href = "#">Data Protection Policy</a></li>
          <li><a  href = "#">Customer Relations & Product Quality Policy</a></li>
          <li><a  href = "#">Privacy Policy</a></li>
        </ul>

      </div>
      <div id = "rightSideContactInfo">
      <h4>Join Our Newsletter</h4>
      <p>Get E-mail updates about our latest shop and special offers</p>
      <form id = "formId" onSubmit = {handleSubscribe}>
        <ToastContainer/>
        <input placeholder='Your email address...' type = "text" value = {mail.email} id = "email" onChange={handleInput}/>
        <br/>
        <button type="submit" value= "submit">Subscribe</button>
      </form>
      </div>
      <p id = "copyright"><b>&#169; 2023 11PLC - Formally Mobil Oil Nigeria</b></p>
    </div>
    </div>
    </>
  )
}



/*Component for Nav Bar*/
function Nav(){
  return (
    <>
   <nav class="navbar navbar-expand-lg bg-body-tertiary">
   <img src = "\images\pngbgRemoved.png" id = "img1"/>
   <img src = "\images\plc-logo-mobil.png" id = "img2Again"/>
  <div class="container-fluid">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">

      <li class="nav-item dropdown">
          <a class="nav-link" href="/" role="button" aria-expanded="false">
            <b>HOME</b>
          </a>
        </li>
        
      <li class="nav-item dropdown">
          <a class="nav-link" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            <b>ABOUT US</b>
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="/AboutUs/OurHistory">Our History</a></li>
            <li><a class="dropdown-item" href="/AboutUs/BoardOfDirectors">Board of Directors</a></li>
            <li><a class="dropdown-item" href="/AboutUs/ManagementTeam">Management Team</a></li>
            <li><a class="dropdown-item" href="/AboutUs/Awards">Award & Recognition</a></li>
            <li><a class="dropdown-item" href="/AboutUs/CSR">CSR</a></li>
            <li><a class="dropdown-item" href="/AboutUs/SSH&E">Health and Safety</a></li>
          </ul>
        </li>
       
        <li class="nav-item dropdown">
          <a class="nav-link" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            <b>INVESTOR RELATIONS</b>
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="/InvestorRelations/quarterlyReports">Quarterly Reports</a></li>
            <li><a class="dropdown-item" href="#">Annual Reports</a></li>
            <li><a class="dropdown-item" href="#">Investors Information</a></li>
            <li><a class="dropdown-item" href="#">Shareholders Downloads</a></li>
            <li><a class="dropdown-item" href="#">Unclaimed Dividend</a></li>
          </ul>
        </li>
        
        <li class="nav-item dropdown">
          <a class="nav-link" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            <b>LUBRICANTS</b>
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Mobil Lubricants</a></li>
            <li><a class="dropdown-item" href="#">Sub Distributor Locator</a></li>
            <li><a class="dropdown-item" href="#">MobilServ Lubricant Analysis(MSLA)</a></li>
            <li><a class="dropdown-item" href="#">Planned Engineering Services(PES)</a></li>
            <li><a class="dropdown-item" href="#">Plant Study/Analysis</a></li>
            <li><a class="dropdown-item" href="#">Training Program on Lubricants</a></li>
          </ul>
        </li>

        <li class="nav-item dropdown">
          <a class="nav-link" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            <b>FUEL</b>
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Fuel</a></li>
            <li><a class="dropdown-item" href="#">Filling Station Locator</a></li>
            <li><a class="dropdown-item" href="#">Automotive Gas Oil(Diesel)</a></li>
            <li><a class="dropdown-item" href="#">Aviation</a></li>
            <li><a class="dropdown-item" href="#">Liquiefied Petroleum Gas(LPG)</a></li>
            <li><a class="dropdown-item" href="#">Petroleum Motor Spirit(PMS)</a></li>
            <li><a class="dropdown-item" href="#">Household Kerosene(HHK)</a></li>
          </ul>
        </li>

        <li class="nav-item dropdown">
          <a class="nav-link" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            <b>CONTACT</b>
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Contact & Enquiries</a></li>
            <li><a class="dropdown-item" href="#">Mobil Card</a></li>
            <li><a class="dropdown-item" href="#">Whistle Blowing</a></li>
            <li><a class="dropdown-item" href="#">Contact Details</a></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
  <img src = "\images\plc-logo-mobil.png" id = "img2"/>
</nav>

        
       
    </>
  )
}


/*Component for main App*/

function App() {
return (
  <>
  <ScrollContainer>
    
    <Nav/>

    <BrowserRouter>
    <Routes>
      <Route path = '/' element = {<Home />}/>
      <Route path = '/AboutUs/OurHistory' element = {<OurHistory/>}/>
      <Route path = '/AboutUs/BoardOfDirectors' element = {<BoardOfDirectors/>} />
      <Route path = '/AboutUs/ManagementTeam' element = {<ManagementTeam/>}/> 
      <Route path = '/AboutUs/Awards' element = {<Awards/>}/> 
      <Route path = '/AboutUs/CSR' element = {<CSR/>}/>
      <Route path = '/AboutUs/SSH&E' element = {<Health/>}/>
      <Route path = '/InvestorRelations/quarterlyReports' element = {<QuarterlyReports/>}/>
    </Routes>
    </BrowserRouter>

      <Contact/>
      </ScrollContainer>
    </>
  )
}

export default App
