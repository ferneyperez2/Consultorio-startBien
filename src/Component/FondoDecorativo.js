import React from 'react';
import './FondoDecorativo.css';

function FondoDecorativo({ children }) {
    return (
        <div className="fondo-decorativo">
            {children}
        </div>
    );
}

export default FondoDecorativo;