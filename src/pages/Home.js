import {motion} from "framer-motion";

const Home = ()=> {
    return (
        <motion.div className="h-screen w-screen bg-pink-800"
        initial={{opacity:0}}
        animate={{opacity:1}}
        exit={{opacity:0}}>
            HOME!!!!!
        </motion.div>
    )
};

export default Home;