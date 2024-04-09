import React from "react";
import { NavLink } from "react-router-dom";

const Landing = () => {

    const background = "https://images.unsplash.com/photo-1623475173140-ad2f0369ca92?q=80&w=2824&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"


    // bg-[url('https://images.unsplash.com/photo-1623475173140-ad2f0369ca92?q=80&w=2824&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]
    return (
        // <div className="bg-pink-20 h-screen w-screen flex bg-center">
        //     <div className="font-black text-pink-300">ENTREEEE</div>
        // </div>
        <div className="relative w-screen h-screen bg-cover bg-center"
        style={{backgroundImage: `url(${background})`}}>
           <div className="absolute top-1/2 left-1/2 text-3xl text-white">
                <NavLink to="/home" className="">ENTER</NavLink>
            </div>
        </div>
    )
};

export default Landing;