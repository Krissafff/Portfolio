import Navbar from '../src/components/Nav/Navbar';
import Home from './Pages/Home';
import Career from './Pages/Career';
import Certificate from './Pages/Certificate';
import Project from './Pages/Project';
import Footer from './Pages/Footer';

function  App (){
  return(
    <>

    <Navbar />
    <Home/>
    <Career/>
    <Certificate/>
    <Project/>
    <Footer/>
    

    </>
  );
}

export default App;

