import { Outlet} from "react-router-dom";

function OurHistory(){
    return (
        <>
        <div id = "history">
            <img src = "\images\history1.jpg"/>
            <div id = "text">
            <h4>Our History</h4>
            <p>A Rich Legacy.</p>
            </div>
            <p id = "hist">Our history in Nigeria dates back to 1907 when Socony Vacuum Oil Company 
            began marketing operations in Nigeria, through the sale of Sunflower Kerosene. In 1951, 
            the company became a limited liability company with a change in name from Socony Vacuum to 
            Mobil Oil Nigeria Limited. Twenty seven years later in 1978, the company became a publicly 
            quoted company and assumed the name Mobil Oil Nigeria Plc. In October 2016, NIPCO Investment 
            Company acquired 60% shareholding of ExxonMobil and in pursuant of a special resolution passed 
            at her Annual General Meeting in May 2017, changed its name from Mobil Oil Nigeria Plc to 11 PLC 
            (Pronounced Double One PLC).
            <br/><br/>
            11 PLC is the sole authorized distributor of Mobil fuel and lubricant brands in Nigeria and continues 
            to posts superior returns to its shareholders. She is committed to lead the oil industry in efficiency, 
            brand image and safety.
            <br/><br/>
            We are one of the six major petroleum products marketers in the country. It currently has over 250 
            retail outlets located in all 36 states of Nigeria; these include many state-of-the-art outlets.
            <br/><br/>
            11 PLC is respected in the industry for its high ethical standards and adherence to safety, health 
            and environmental standards. It also plays a leading in the promotion and sharing of best practices 
            in the downstream sector of Nigeria’s oil and gas industry.
            <br/><br/>
            We have our fuel facility and an ultra-modern lube oil plant in Apapa Lagos, with a capacity of 300,000 
            barrels per annum. Our plant is regarded as one of the most sophisticated in Africa.
            <br/><br/>
            Its talented and diverse workforce remains the most prized asset. Through their efforts, the company has 
            met and in many cases exceeded its key objectives. 11 PLC cherishes its workforce and invests significantly 
            in the upgrading of their knowledge and leadership skills required to maintain the cornerstone of the business. 
            11 PLC continues to receive complimentary feedbacks about the quality and value of its products and services.
            <br/><br/>
            As a caring corporate citizen, 11 PLC Corporate Social Responsibility (CSR) aims to supports health and malaria 
            control, science and mathematics education, youth and women empowerment and other charitable programs especially 
            for the less privileged within the immediate community and beyond.
            <br/><br/>
            Our backcourts partnership with Mr Biggs at some Mobil retail outlets are models in Nigeria. Our product 
            haulage vehicles continue to set the standard in transportation safety in the industry. The company remains 
            the industry benchmark for ethics, safety, operational excellence and quality standards.
            <br/><br/>
            </p>
        </div>
        <Outlet/>
        </>
    )
}

export default OurHistory