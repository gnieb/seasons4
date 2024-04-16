import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faFacebook } from "@fortawesome/free-solid-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
    return (
        <div className="bg-black h-52 w-screen text-white flex items-center justify-between ">
            <div className="text-center px-20">
                <div>OUR STORY</div>
                <div>PAST EVENTS</div>
                <div>CATERING SERVICES</div>
            </div>
            <div className="text-center px-20">
                <div>LOGO</div>
                <div>LOGO</div>
                <div>SEASONS4</div>
            </div>
            <div className="text-center italic px-20">
                <div>Custom Catering</div>
                <div>We source locally</div>
                <div>
                    <NavLink to="/" className="px-2"><FontAwesomeIcon icon ={faFacebook} /></NavLink>
                    <NavLink to="/" className="px-2"><FontAwesomeIcon icon ={faInstagram} /></NavLink>
                </div>
            </div>
        </div>
    )
};


export default Footer;