import {Outlet, Link} from 'react-router-dom'


function Awards(){
  return (
    <>
    <div id = "directors">
    <img src = "\images\award.jpg" id = "mainImg"/>
    <div id = "text">
    <h4>Awards and Recognition</h4>
    </div>
    <p id = "hist">In striving for excellence, the general public especially the community we impact regularly 
    acknowledge our commitment in improving the environment through best inline service delivery.</p>
    <div className = "directorsList">

        <div className = "leftBoard">
          <img src ="\images\award1.jpg" id = "boardImg1"/>
          
          <p id = "heading2">
          In 2016, at the 45th Annual General Meeting of Industrial Companies in Nigeria, MOBIL OIL NIGERIA 
          PLC (Now 11PLC) was named the 1st runner-up of the 2016 Best-Kept Competition for Industrial Premises 
          (multinational/large company category). Since the association’s establishment, the body has held an 
          annual general meeting where industry leaders convene to review the past year and forecast the 
          future of Nigeria’s manufacturing industry.
          </p>

        <img src = "\images\award3.jpg" id = "boardImg3"/>

      
          <p id = "heading4">
          OTL Africa’s Downstream Award, which is one of the most prestigious oil and gas awards in Africa, 
          also presented an award to MOBIL OIL NIGERIA PLC (Now 11PLC) as the Best-Branded Lubricant in Nigeria.
          The award presented to the company was one of the top honours which the company received in 2016. 
          The prestigious award recognized the company’s investments and dedication to ensuring top quality 
          products and services for its customers.
          </p>

        <img src="\images\award5.jpg" id ="boardImg5"/>

      

        <img src ="\images\award7.jpg" id = "boardImg7" />    
        </div>
          
        <div className = "rightBoard">
          <p>
          MOBIL OIL NIGERIA PLC (Now 11PLC) is a multinational company engaged in the marketing of
          petroleum products. Over the years, the dedication and standard of MOBIL OIL NIGERIA PLC 
          (Now 11PLC) has risen, it has remained a highly recognized industry player in Nigeria and Africa.
          The 10th anniversary of the Nigeria Auto Awards, which was organized by the automotive Journalist 
          in the country where various companies were carefully selected and scrutinized, MOBIL OIL NIG. PLC 
          (Now 11PLC) emerged as the Best Lubricant Company of the year 2015.
          </p>
          
        <img src ="\images\award2.jpg" id = "boardImg2"/>
          
          <p id = "heading3">
          The African Brand Leadership Merits Awards held in 2017 saw MOBIL OIL NIGERIA PLC (Now 11PLC) 
          emerge as the winner in the category of Africa’s Most Trusted Premium Quality Lubricant Brand.
          This category recognized the achievements made by selected high profile corporate business leaders 
          in Africa and honoured their great contributions towards the country’s post-recession economic 
          development.
          This recognition showed the ability of 11PLC to steer its business through turbulent times, 
          applying industry best practices in managing and keeping on course.

          </p>

        <img src = "\images\award4.jpg" id = "boardImg4"/>      

          <p id = "heading5" class = "head5">
          It is a great honour to announce that the registration (RN.0000488) of 11Plc with the Standards 
          Organisation of Nigeria” (SON) was, doubtless, a confirmation of the conformity of the company with 
          Quality Management System in the industry.

          </p>

        <img src = "\images\award6.jpg" id = "boardImg6"/>

          
        </div>

    </div>
    <br/><br/>
    <Outlet/>
    </div>
    </>
    )
}

export default Awards