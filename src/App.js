import './App.css';
import { BrowserRouter as Router } from "react-router-dom";
import AnimatedRoutes from './components/AnimatedRoutes';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App overflow-y-hidden overflow-x-hidden">
      
      <Router>
          <AnimatedRoutes />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
