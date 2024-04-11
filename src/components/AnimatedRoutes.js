import { Route, Routes,useLocation } from "react-router-dom";
// import {} from "framer-motion/dist/framer-motion";
import { AnimatePresence } from "framer-motion";

const AnimatedRoutes = () => {

    const location = useLocation();

    return (
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<Landing />} />
                <Route path="main" element={<Home />} />
            </Routes>
        </AnimatePresence>
    )
};

export default AnimatedRoutes;