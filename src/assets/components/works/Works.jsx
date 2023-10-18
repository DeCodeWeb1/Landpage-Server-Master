import React from 'react'
import '../ourClients/ourClients.css'
import FotoSV1 from '../../img/sv-foto1.jpg'
import FotoSV4 from '../../img/sv-foto4.jpg'
import FotoSV3 from '../../img/sv-foto3.jpeg'
import FotoSV5 from '../../img/sv-foto5.jpg'
import FotoSV6 from '../../img/sv-foto6.jpg'


function OurWorks() {
  return (
    <div className='container-fluid mt-5 mx-auto' style={{ minHeight: '100vh' }}>
      <div className='row justify-content-center align-items-start' style={{ minHeight: '50%' }}>
        <div className="container-fluid d-flex align-items-center mt-5 ps-4 mb-4" >
          <h5 className='about m-0 text-secondary'>NUESTROS TRABAJOS</h5>
          <div className='line rounded'></div>
        </div>
        <div className="row justify-content-evenly align-items-center " style={{ minHeight: '70vh' }}>
          <div className='col-lg-4 d-flex justify-content-center mb-4' style={{ height: '50vh' }} data-aos="fade-right">
            <img src={FotoSV1} alt="" className="img-fluid border shadow border-5 border-light w-100 object-fit-cover" />
          </div>
          <div className='col-lg-4 d-flex justify-content-center  mb-4' style={{ height: '50vh' }} data-aos="fade-right">
            <img src={FotoSV3} alt="" className="img-fluid border shadow border-5 border-light w-100 object-fit-cover" />
          </div>
          <div className='col-lg-4 d-flex justify-content-center  mb-4' style={{ height: '50vh' }} data-aos="fade-right">
            <img src={FotoSV4} alt="" className="img-fluid border shadow border-5 border-light img-fluid w-100 object-fit-cover" />
          </div>
          <div className='col-lg-4 d-flex justify-content-center  mb-4' style={{ height: '50vh' }} data-aos="fade-right">
            <img src={FotoSV5} alt="" className="img-fluid border shadow border-5 border-light img-fluid w-100 object-fit-cover" />
          </div>
          <div className='col-lg-4 d-flex justify-content-center  mb-4' style={{ height: '50vh' }} data-aos="fade-right">
            <img src={FotoSV6} alt="" className="img-fluid border shadow border-5 border-light img-fluid w-100 object-fit-cover" />
          </div>
        </div>
      </div>
    </div>

  )
}

export default OurWorks