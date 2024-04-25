import { Route, Routes,useLocation } from "react-router-dom";
// import {} from "framer-motion/dist/framer-motion";
import { AnimatePresence } from "framer-motion";
import Home from "../pages/Home";
import Landing from "../pages/Landing";
import Services from "../pages/Services";
import About from './pages/About';


const AnimatedRoutes = () => {

    const location = useLocation();

    return (
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<Landing />} />
                <Route path="main" element={<Home />} />
                <Route path="/services" element={<Services />} />
                <Route path="/about" element={<About />} />
            </Routes>
        </AnimatePresence>
    )
};

export default AnimatedRoutes;