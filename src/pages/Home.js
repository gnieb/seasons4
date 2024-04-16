import {motion} from "framer-motion";
import TopMenu from "../components/TopMenu";
import Testimonials from "../components/Testimonials";

const Home = ()=> {
    return (
        <motion.div 
        className="h-screen w-screen bg-stone-900"
        >
            <TopMenu />

            <div className="text-white font-black h-1/3 bg-center bg-white bg-cover bg-opacity-50 opacity-65 bg-no-repeat bg-[url('https://images.unsplash.com/photo-1628294897055-a9bfca0f47ba?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDExfHx8ZW58MHx8fHx8')]">HOME!!!!!</div>
            <Testimonials />
        </motion.div>
    )
};

export default Home;