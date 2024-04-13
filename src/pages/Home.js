import {motion} from "framer-motion";
import TopMenu from "../components/TopMenu";
import Testimonials from "../components/Testimonials";

const Home = ()=> {
    return (
        <motion.div 
        className="h-screen w-screen bg-stone-900"
        >
            <TopMenu />
            <div className="text-white font-black">HOME!!!!!</div>
            <Testimonials />
        </motion.div>
    )
};

export default Home;