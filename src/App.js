import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router } from "react-router-dom";
import Landing from './pages/Landing';
import Home from './pages/Home';
import AnimatedRoutes from './components/AnimatedRoutes';
import Footer from './components/Footer';
import TopMenu from './components/TopMenu';

function App() {
  return (
    <div className="App overflow-y-hidden overflow-x-hidden">
      
      <Router>
          <TopMenu />
          <AnimatedRoutes />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
