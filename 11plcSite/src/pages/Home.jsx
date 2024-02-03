import { Outlet} from 'react-router-dom'
import {ScrollContainer, ScrollPage, Animator, batch, Fade, FadeIn, FadeOut, Move, MoveIn, MoveOut, Sticky, StickyIn, StickyOut, Zoom, ZoomIn, ZoomOut} from 'react-scroll-motion'

/*Carousel Componenet*/

function Carousel(){
    return (
      /*
        <ScrollPage>
          <Animator animation={Zoom()}>
          */
  <div id="carouselExampleAutoplaying" className="carousel slide carousel-fade" data-bs-ride="carousel">
    <div className="carousel-inner">
      <div className="carousel-item active" data-bs-interval="6000">
        <img src="\images\josue-isai-ramos-figueroa-Pj4je7OjrME-unsplash.jpg" className="d-block w-100" alt="..." id = "firstImage"/>
        <div className="carousel-caption d-md-block" id = "firstImageText">
        <h3>WHO WE ARE</h3>
        <p>11 Plc is the exclusive authorized distributor to blend, pack, 
            <br/>distribute and market Mobil branded lubricants in Nigeria.</p>
      </div>
    </div>
    
    <div className="carousel-item"  data-bs-interval="6000">
      <img src="\images\vision.jpg" className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-md-block">
        <h3>OUR VISION</h3>
        <p>To be the number one company in Nigeria in terms of sustained service, 
            quality and reliability and the first brand preference by the consumer 
            whilst conduction operations with high safety standards and environmental compliance.</p>
      </div>
    </div>
   
    
    <div className="carousel-item"  data-bs-interval="6000">
      <img src="\images\product1.jpg" className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-md-block">
        <h3>THE MISSION</h3>
        <p>Aim to provide the best in class products, 
            services and solutions to customers with a focus 
            on safety and environmental standards.</p>
      </div>
    </div>
    
    <div className="carousel-item"  data-bs-interval="6000">
      <img src="\images\mission2.jpg" className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-md-block">
        <h3>QUALITY AND INTEGRITY</h3>
        <p>11plc recognizes that product quality and customer 
            satisfaction are of primary importance 
           to the value of the Brand we represent and our success.</p>
      </div>
    </div>
    
    <div className="carousel-item"  data-bs-interval="6000">
      <img src="\images\mobil-fam-II2.png" className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-md-block">
        <h3>MOBILE LUBRICANTS</h3>
        <p>Mobil Motor Oils Deliver Excellent Engine Protection</p>
        <button id = "carouselButton"><a href = "#">Learn More</a></button>
      </div>
    </div>
  </div>
  
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
/*
</Animator>
</ScrollPage>
*/
    )
}

/*Offer Component*/

function Offer(){
    return (

        <div className = "offers">
        <h4 id = "main"><b>WHAT WE OFFER </b></h4>
        <p>11PLC is committed to maintaining high standard for integrity, adherence to safety, health and 
          environment.
          We are a leading company in the promotion and sharing of best practices in 
          the downstream sector of Nigeria’s oil and gas industry.</p>
        <div className = "offer1">
            <h4><b>Fuel</b></h4>
            <p>Our premium brand continues to differentiate us from competition.
              To our Retail Customers, we offer you a variety of options at our stations – fuel 
              and other services for your car and refreshment and other necessities for you to ensure 
              your refill takes you through your journey. Find your nearest Mobil Station and check out 
              the options available to you.
              To our Commercial Customers, we understand the importance you place on quality and reliability 
              of supply.We offer you premium quality products either to sell under your brand or to ensure you 
              deliver solutions to your consumers in a cost effective manner.
              We offer you the option of picking up the fuels with your trucks or delivering directly to your 
              storage facilities with our trucks.
              250+ That is the number of stations ready to serve you across the nation.</p>
        <button id = "btn1"><a href = "#">Find A Station</a></button>
        </div>
        
        <div className = "offer2">
            <h4><b>Lubricants</b></h4>
            <p>11PLC’s Mobil brand keeps people and machines moving since the advent of gasoline powered engines 
              and automobiles. From the Wright brothers’ first flight to the launch of the space station, from the 
              first automobiles to the latest Grand Prix cars, our fuels and oils have continuously been keeping 
              millions of vehicles performing at their best. Our Mobil 1 specification meets the latest standard of 
              the global oil industry and vehicle manufacturers. From NASCAR to Grand Prix, Le Mans to Indy Racing 
              League and Formula 1, winning motorsport teams trust Mobil 1 technology to deliver the performance and 
              engine protection needed to meet the grueling demands of the race tracks. Our Mobil Super™ is at the 
              pinnacle of global family of premium passenger vehicle engine oils that provide different levels of 
              protection to match the conditions you face, so that you can drive with full confidence.</p>
      <button><a href = "#" id = "btn2">Find Your Product</a></button>
      </div>
      </div>
      
        
    )
}

/*News Component*/ 

function News(){
    return (
     
        <div className = "news">
          <h4>News & Events</h4>
          <div className = "leftNews">
          <img src ="\images\ceo.png" id = "newsImg1"/>
          </div>
          <div className = "rightNews">
          <h4><a href = "#">CNG: 11 Plc Begins Plant Construction In Lagos, Ibadan</a></h4>
          <p>Chief executive officer, 11 Plc, Adetunji Oyebanji, 
            has said the company has commenced exploration of the Compressed Natural Gas (CNG) market 
            with the construction of facilities in Ibadan and Lagos respectively.</p>
          </div>

          <div className = "leftNews1">
          <img src ="\images\compliance.jpg" id = "newsImg1"/>
          </div>
          <div className = "rightNews1">
          <h4><a href = "#">Notice of Annual General Meeting – 2023</a></h4>
          <p>11:00a.am, May 24, 2023 at Abuja Continental Hotels, Abuja FCT.</p>
          </div>
        </div>
        
    )
}



function Home(){
    return (
        
        
        <ScrollContainer>
        <Carousel/>
        <Offer/>
        <News/>
        <Outlet/>
       
        </ScrollContainer>
        
        
    )
    
    
}

export default Home