import React, {useState} from "react";
import { NavLink } from "react-router-dom";
import {motion} from "framer-motion";

const Landing = () => {

    const [fading, setFading] = useState(false);


    const handleFade = () => {
        setFading(true)
    }

    

    const background = "https://images.unsplash.com/photo-1623475173140-ad2f0369ca92?q=80&w=2824&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"


    // bg-[url('https://images.unsplash.com/photo-1623475173140-ad2f0369ca92?q=80&w=2824&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]
    return (
        // <div className="bg-pink-20 h-screen w-screen flex bg-center">
        //     <div className="font-black text-pink-300">ENTREEEE</div>
        // </div>
        <motion.div 
        className="relative w-screen h-screen bg-cover bg-center"
        initial={{opacity:0}}
        animate={{opacity:1}}
        exit={{opacity:0, transition:{ duration: 0.9}}}
        style={{backgroundImage: `url(${background})`}}>

           <div className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 text-3xl text-white">
                <div className="m-5 text-center">LOGO HERE</div>
                <button className=""
                    onClick={()=> console.log("help")}>

                    <NavLink to="/main" className="m-5 bg-black px-12 p-2 hover:bg-gray-200 text-3xl ">ENTER</NavLink></button>
            </div>
        </motion.div>
    )
};

export default Landing;