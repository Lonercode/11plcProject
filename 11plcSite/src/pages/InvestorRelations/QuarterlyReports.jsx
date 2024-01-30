import {Outlet, Link} from 'react-router-dom'


function QuarterlyReports(){
  return (
    <>
    <div class = "quarterly">
        <div id = "sideP">
        <p>Participate in our growth journey by downloading and reading our Financial Qurterly Reports.</p>
        
        <p>3RD QUARTER 2023 - UNAUDITED FINANCIAL REPORT</p>
        <a href = "\docs\Mobim1.pdf">Click to download</a>
        </div>
    <img src = "\images\quarter.jpg" id = "quarterImg"/>
    <br/>
    <Outlet/>
    </div>
    
    </>

  )
}

export default QuarterlyReports