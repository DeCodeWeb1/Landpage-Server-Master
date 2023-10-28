import React, { useState } from 'react';

function ZoomableImage() {
    const [isZoomed, setIsZoomed] = useState(false);

    const toggleZoom = () => {
        setIsZoomed(!isZoomed);
    };

    return (
        <div
            className={`image-container ${isZoomed ? 'zoomed' : ''}`}
            onClick={toggleZoom}
        >
            <img
                src="img-mantenimiento.jpg"
                alt="Imagen para hacer zoom"
                className="zoomable-image"
            />
        </div>
    );
}

export default ZoomableImage;