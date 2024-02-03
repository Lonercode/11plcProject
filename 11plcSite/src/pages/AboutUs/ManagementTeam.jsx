import {Outlet, Link} from 'react-router-dom'

function ManagementTeam(){
    return (
    <>
    <div id = "directors">
    <img src = "\images\management.jpg" id = "mainImg"/>
    
    <div id = "text">
    <h4>Management Team</h4>
    </div>
    <p id = "hist">Anchoring the day to day management of 11 PLC is a dynamic team with decades of combined
    exper and astute business competence.</p>
    <div className = "directorsList">

      <div className = "leftBoard">
        <img src ="\images\board2.png" id = "boardImg1"/>
          
          <h4 id = "heading3">Ramesh Virwani</h4>
          <h5>Executive Director/ Chief Operating Officer</h5>
          <p>A Chartered Accountant by profession, Ramesh Virwani has experience of over 25 years in the 
            field of Finance and Accounts. He worked for Purebond Ltd., UK in various capacities in different 
            parts of Nigeria. He joined Nipco Plc as General Manager, Finance & Accounts in 2008, he became 
            the Executive Director, Finance in Jan 2011. He assumed the same role in 11plc in April 2011 and 
            he oversees the financial & commercial aspects of the company in supervisory capacity.</p>

        <img src = "\images\man3.png" id = "boardImg3"/>

          <h4 id = "heading4">Umesh Malik</h4>
          <h5>Chief Business Officer</h5>
          <p>Holds an Engineering degree from the University of Roorkee (Indian Institute of Technology), 
            India and a Master’s in Business Administration (International Business) from Indian Institute of 
            Foreign Trade (IIFT), India. A proactive leader and a seasoned management professional, Umesh has 
            26 years of corporate experience, mostly in US MNCs. Umesh worked with ExxonMobil Lubricants for 
            18 years as a senior manager in Business and Technical profiles at Asia-Pacific level and at India 
            Subcontinent level. Umesh joined 11 Plc (formerly Mobil Oil Nigeria) in October 2017 to take 
            complete ownership of entire value chain of Mobil™ branded Lubricants with a vision to make Mobil™ 
            as “The Most Preferred International Lubricant Brand Amongst Nigerian Consumers”.</p>
          </div>
          
      <div className = "rightBoard">
          <h4 id = "heading2m">Adetunji Oyebanji</h4>
          <h5>Managing Director</h5>
          <p>An Economics graduate from the University of Lagos (1978), he proceeded to the City University 
            of London for an MBA degree which he bagged in 1980. Tunji thereafter joined Mobil Oil Sales team 
            in December 1980. he rose through the ranks having been involved in various local and foreign 
            assignments. He was appointed a Director in 2002 and in 2008 he assumed leadership of the company 
            becoming MD/CEO Mobil Oil Nigeria. With the acquisition of 60% ExxonMobil controlling shares in 
            October 2016 by Nipco investment and after Change in Control (CIC) in April 2017, Tunji retains 
            his role on the board and oversees the entire operations in 11PLC.</p>
        <img src = "\images\board3.png" id = "boardImg3"/>
          
          <h4 id = "heading3">Ravi Bachu</h4>
          <h5>Chief Financial Officer</h5>
          <p>A Qualified Chartered Accountant and also a Certified Company Secretary with about 17 years of 
            rich corporate experience in the areas of Finance, Accounts, Taxation, Auditing, Management 
            Information Systems and Annual/ Strategic Planning. Worked in various capacities in Multi National 
            firms in India and abroad engaged in the domain of Oil & Gas, manufacturing and consultancy.</p>

        <img src = "\images\man4.png" id = "boardImg4"/>      

        </div>
    </div>
    <br></br>


















    <div className = "directorsList1">

      <div className = "leftBoard">
        <img src ="\images\board2.png" id = "boardImg1"/>
          <h4 id = "heading1">Adetunji Oyebanji</h4>
          <h5>Managing Director</h5>
          <p>An Economics graduate from the University of Lagos (1978), he proceeded to the City University 
            of London for an MBA degree which he bagged in 1980. Tunji thereafter joined Mobil Oil Sales team 
            in December 1980. he rose through the ranks having been involved in various local and foreign 
            assignments. He was appointed a Director in 2002 and in 2008 he assumed leadership of the company 
            becoming MD/CEO Mobil Oil Nigeria. With the acquisition of 60% ExxonMobil controlling shares in 
            October 2016 by Nipco investment and after Change in Control (CIC) in April 2017, Tunji retains 
            his role on the board and oversees the entire operations in 11PLC.</p>

            <img src = "\images\board3.png" id = "boardImg3"/>
            <h4 id = "heading3">Ramesh Virwani</h4>
          <h5>Executive Director/ Chief Operating Officer</h5>
          <p>A Chartered Accountant by profession, Ramesh Virwani has experience of over 25 years in the 
            field of Finance and Accounts. He worked for Purebond Ltd., UK in various capacities in different 
            parts of Nigeria. He joined Nipco Plc as General Manager, Finance & Accounts in 2008, he became 
            the Executive Director, Finance in Jan 2011. He assumed the same role in 11plc in April 2011 and 
            he oversees the financial & commercial aspects of the company in supervisory capacity.</p>

        <img src = "\images\man3.png" id = "boardImg3"/>
        <h4 id = "heading3">Ravi Bachu</h4>
          <h5>Chief Financial Officer</h5>
          <p>A Qualified Chartered Accountant and also a Certified Company Secretary with about 17 years of 
            rich corporate experience in the areas of Finance, Accounts, Taxation, Auditing, Management 
            Information Systems and Annual/ Strategic Planning. Worked in various capacities in Multi National 
            firms in India and abroad engaged in the domain of Oil & Gas, manufacturing and consultancy.</p>

            <img src = "\images\man4.png" id = "boardImg4"/>  
            <h4 id = "heading4">Umesh Malik</h4>
            <h5>Chief Business Officer</h5>
            <p>Holds an Engineering degree from the University of Roorkee (Indian Institute of Technology), 
            India and a Master’s in Business Administration (International Business) from Indian Institute of 
            Foreign Trade (IIFT), India. A proactive leader and a seasoned management professional, Umesh has 
            26 years of corporate experience, mostly in US MNCs. Umesh worked with ExxonMobil Lubricants for 
            18 years as a senior manager in Business and Technical profiles at Asia-Pacific level and at India 
            Subcontinent level. Umesh joined 11 Plc (formerly Mobil Oil Nigeria) in October 2017 to take 
            complete ownership of entire value chain of Mobil™ branded Lubricants with a vision to make Mobil™ 
            as “The Most Preferred International Lubricant Brand Amongst Nigerian Consumers”.</p>
          </div>
        <br/>
    </div>
    </div>
    <Outlet/>
    </>
    )
}

export default ManagementTeam