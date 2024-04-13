import {motion} from "framer-motion";
import TopMenu from "../components/TopMenu";

const Home = ()=> {
    return (
        <motion.div 
        className="h-screen w-screen bg-pink-800"
        >
            <TopMenu />
            <div className="text-white font-black">HOME!!!!!</div>
        </motion.div>
    )
};

export default Home;