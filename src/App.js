import './App.css';
import { NavBar } from './component/NavBar';
import { Banner } from './component/Banner';
import { Footer } from './component/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Skills } from './component/Skills';


function App() {
  return (
    <div className = "App">
      <NavBar/>
      <Banner/>
      <Skills/>
      <Footer/>
    </div>
  );
}

export default App;
