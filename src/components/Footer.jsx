import React from 'react'
import "./Footer.css"
import { TiSocialFacebookCircular } from "react-icons/ti";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
   <footer style={{backgroundColor:"black",paddingBottom:"5px",margin:"0px"}}>
    <div style={{display:"flex",flexWrap:"wrap",justifyContent:"space-between"}}>
        <div style={{padding:"8px"}}>
            <h4 style={{color:"white"}}>Recommended</h4>
            <ul>
                <li className='footerli'>realme C75</li>
                <li className='footerli'>realme 13+ 5G</li>
                <li className='footerli'>realme Note 60</li>
                <li className='footerli'>realme C61</li>
                <li className='footerli'>realme C65</li>
                <li className='footerli'>realme 12</li>
                <li className='footerli'>realme 12+ 5G</li>
            </ul>
        </div>
        <div style={{padding:"8px"}}>
            <h4 style={{color:"white"}}>Support</h4>
            <ul>
                <li className='footerli'>FAQ</li>
                <li className='footerli'>Troubleshooting</li>
                
            </ul>
        </div>
        <div style={{padding:"8px"}}>
            <h4 style={{color:"white"}}>About Realme</h4>
            <ul>
                <li className='footerli'>Our Brand</li>
                <li className='footerli'>Newsroom</li>
                
            </ul>
        </div>
        <div style={{padding:"8px"}}>
            <h4 style={{color:"white"}}>Contact Realme</h4>
            <ul>
                <li className='footerli'>Whatsapp</li>
                <li className='footerli'>service.pk@realme.com</li>
                
            </ul>
        </div>
        <div style={{padding:"8px"}}>
            <h2 style={{color:"white"}}>04238048018</h2>
            <ul>
                <li className='footerli'>09:30 - 18:00， MON - SAT
                Exclude Holidays</li>
                <li className='footerli' style={{display:"flex",alignItems:"center",justifyContent:"space-between"}}>
                    <a style={{textDecoration:"none",fontSize:"40px"}} href=""><TiSocialFacebookCircular />
                    </a>
                    <a style={{textDecoration:"none",fontSize:"33px"}} href=""><FaXTwitter />
                    </a>
                    <a style={{textDecoration:"none",fontSize:"33px"}} href=""><FaYoutube />

                    </a>
                    <a style={{textDecoration:"none",fontSize:"33px"}} href=""><FaInstagram />


                    </a>
                </li>
            </ul>
        </div>
    </div>

    <div style={{border:"1px solid grey",margin:"4px 20px"}}></div>

    <div style={{display:"flex",justifyContent:"space-between"}}>
        <div>
            <div style={{padding:"0px 20px",display:"flex"}}>
                <p style={{color:"white"}}>Pakistan ( English / PKR )</p>
                <p style={{color:"grey",padding:"0px 10px"}}>© 2019-2024 realme. All Rights Reserved.
                </p>
            </div>
            
        </div>
        {/* <div>
            <ul style={{display:"flex",justifyContent:""}}>
            <li style={{paddingRight:"8px",}}>
                <a style={{textDecoration:"none",color:"grey"}} href="">Use Agreement</a>
            </li>
            <li style={{paddingRight:"8px",}}>
                <a style={{textDecoration:"none",color:"grey"}} href=""> Use Agreement </a>
            </li>
            <li style={{paddingRight:"8px",}}>
                <a style={{textDecoration:"none",color:"grey"}} href=""> Use Agreement</a>
            </li>
            <li style={{paddingRight:"8px",}}>
                <a style={{textDecoration:"none",color:"grey"}} href=""> Use Agreement</a>
            </li>
            
            </ul>
        </div> */}
    </div>
   </footer>
  )
}

export default Footer