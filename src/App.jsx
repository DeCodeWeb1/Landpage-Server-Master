import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Section01 from './assets/components/section01/Section01'
import Section02 from './assets/components/section02/Section02'
import Section03 from './assets/components/section03/Section03'
import Navv from './assets/components/nav/Navv';
import Footer from './assets/components/footer/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css'; 

function App() {
  
  AOS.init({
    duration: '500',
    once: true
  } );


  return (
    <div>
    <Navv/>
    <Section01/>
    <Section02/>
    <Section03/>
    <Footer/>
    </div>
  )
}

export default App
