import React from 'react'
import '../ourClients/ourClients.css'
import FotoSV1 from '../../img/sv-foto1.jpg'
import FotoSV2 from '../../img/sv-foto2.jpeg'
import FotoSV3 from '../../img/sv-foto3.jpeg'

function OurWorks() {
  return (
    <div className='container-fluid mt-5 mx-auto' style={{ minHeight: '100vh' }}>
      <div className='row justify-content-center align-items-start' style={{ minHeight: '50%' }}>
        <div className="container-fluid d-flex align-items-center mt-5 ms-4 mb-4" >
          <h5 className='about m-0 text-secondary'>NUESTROS TRABAJOS</h5>
          <div className='line rounded'></div>
        </div>
        <div className="row justify-content-evenly align-items-center gap-4" style={{ height: '70vh' }}>
          <div className='col-lg-3 d-flex justify-content-center'>
            <img src={FotoSV1} alt="" className="border shadow border-5 border-light img-fluid img-sv" />
          </div>
          <div className='col-lg-3 d-flex justify-content-center'>
            <img src={FotoSV2} alt="" className="border shadow border-5 border-light img-fluid img-sv" />
          </div>
          <div className='col-lg-3 d-flex justify-content-center'>
            <img src={FotoSV3} alt="" className="border shadow border-5 border-light img-sv img-fluid" />
          </div>
        </div>
      </div>
    </div>

  )
}

export default OurWorks