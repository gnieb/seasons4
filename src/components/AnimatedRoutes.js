import { Route, Routes,useLocation } from "react-router-dom";

const AnimatedRoutes = () => {

    const location = useLocation();

    return (
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Landing />} />
          <Route path="main" element={<Home />} />
        </Routes>
    )
};

export default AnimatedRoutes;