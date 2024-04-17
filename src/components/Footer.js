import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faFacebook } from "@fortawesome/free-solid-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
    return (
        <div className="bg-black h-52 w-screen text-white flex items-center justify-between ">
            <div className="text-center px-20">
                <div><NavLink className="hover:text-gray-600">OUR STORY</NavLink></div>
                <div><NavLink className="hover:text-gray-600">PAST EVENTS</NavLink></div>
                <div><NavLink className="hover:text-gray-600">CATERING SERVICES</NavLink></div>
            </div>
            <div className="text-center px-20">
                <div><NavLink className="hover:text-gray-600">LOGO</NavLink></div>
                <div><NavLink className="hover:text-gray-600">LOGO</NavLink></div>
                <div><NavLink className="hover:text-gray-600">SEASONS4</NavLink></div>
            </div>
            <div className="text-center italic px-20">
                <div>Custom Catering</div>
                <div>We source locally</div>
                <div>
                    <NavLink to="/" className="px-2 hover:text-gray-600"><FontAwesomeIcon icon ={faFacebook} /></NavLink>
                    <NavLink to="/" className="px-2 hover:text-gray-600"><FontAwesomeIcon icon ={faInstagram} /></NavLink>
                </div>
            </div>
        </div>
    )
};


export default Footer;