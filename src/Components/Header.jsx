import React, { useState } from 'react'
import imagenes from './imagenes';

const Header = () => {
    
    const imagenTitle = useState(
        <img src={imagenes.Clinica} 
        className="imagenTitle"     
        />
    );
        const navBar = useState(
            


        );
    return imagenTitle;
}

export default Header
