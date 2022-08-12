import './App.css';
import './Assets/css/default.css';
import TypeAnimation from 'react-type-animation';
import { Parallax } from 'react-scroll-parallax';
import Header from "./components/header/header";
import HomePage from './components/pages/homePage';
function App() {
  return ( 
    <div className="App">
      <HomePage/>
    </div>
  );
}
export default App;
