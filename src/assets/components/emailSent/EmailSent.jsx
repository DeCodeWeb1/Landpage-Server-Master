import React from 'react'

function EmailSent() {

const redirect = () => {
    window.location.href('https://servemaster.netlify.app/#home');
}

setTimeout(redirect, 5000);

  return (
    <div id='emailSent'>
        <p>Mensaje enviado con exito</p>
        <p>Nos estaremos comunicando con usted a la brevedad</p>
        <p>Sera redirigido a la pagina de inicio en 5 segundos...</p>
    </div>
  )
}

export default EmailSent