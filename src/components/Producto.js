import React from 'react';

let nombre = 'Cafetera'
let precio = '$100'

function Producto() {
    return (
        <div className="container">
            <p>{nombre}</p>
            <p>{precio}</p>
        </div>
    )
}

export default Producto