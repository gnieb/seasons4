import {motion} from "framer-motion";
import TopMenu from "../components/TopMenu";
import { NavLink } from "react-router-dom";
import ReviewGrid from "../components/ReviewGrid";

const Home = ()=> {
    return (
        <div>
            <TopMenu />
        <motion.div 
        className="w-screen p-10 bg-stone-900"
        >
            <div className="flex items-center justify-center py-16 text-black bg-center bg-white bg-cover bg-opacity-50 opacity-65 bg-no-repeat bg-[url('https://images.unsplash.com/photo-1628294897055-a9bfca0f47ba?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDExfHx8ZW58MHx8fHx8')]">
                <div className="">   
                    <div className="text-3xl text-black py-5 ">Catering Services</div>
                    <div className="italic py-5 font-black font-serif">We serve locally sourced custom catering.</div>
                    <div><NavLink className="hover:bg-stone-900 bg-black italic text-white px-6 p-3">SEE MORE</NavLink></div>
                </div> 
            </div>
            {/* <Testimonials /> */}
            <ReviewGrid />
        </motion.div>
        </div>
    )
};

export default Home;