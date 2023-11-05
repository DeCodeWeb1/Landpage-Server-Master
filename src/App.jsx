import 'bootstrap/dist/css/bootstrap.min.css';
import Section01 from './assets/components/section01/Section01'
import Section02 from './assets/components/section02/Section02'
import Section03 from './assets/components/section03/Section03'
import Navv from './assets/components/nav/Navv';
import Footer from './assets/components/footer/Footer';
import OurClients from './assets/components/ourClients/OurClients';
import OurWorks from './assets/components/works/Works';
import AOS from 'aos';
import 'aos/dist/aos.css'; 

function App() {
  
  AOS.init({
    duration: '900'   
  } );


  return (
    <div>
    <Navv/>
    <Section01/>
    <div style={{backgroundColor:'#EDEDF3'}}>
    <Section02/>
    <OurClients/>
    <OurWorks/>
    <Section03/>
    </div>
    <Footer/>
    </div>
  )
}

export default App
