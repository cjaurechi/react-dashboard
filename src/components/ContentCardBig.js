import React from 'react'
import avatar from '../assets/images/dummy-avatar.jpg'
import PropTypes from 'prop-types'

function ContentCardBig (props) {
    let listadoEnlaces;
    if(props.enlaces != null) {
        listadoEnlaces = 
        <ul>
            {props.enlaces.map ( (enlace, i) => <li key={enlace + i} > {enlace} </li>)}
        </ul>
    } else {
        listadoEnlaces = "Acá no hay nada";
    }

    return (
        <div class="col-lg-6 mb-4">
            <div class="card shadow mb-4">
                <div class="card-header py-3">
                    <h6 class="m-0 font-weight-bold text-primary">{props.titulo}</h6>
                </div>
                <div class="card-body">
                    <div class="text-center">
                        <img class="img-fluid px-3 px-sm-4 mt-3 mb-4" src={avatar} alt="dummy"/>
                    </div>
                    <p>{props.descripcion}</p>
                    <a target="_blank" rel="nofollow" href="/">{props.link}</a>
                    { listadoEnlaces }
                </div>
            </div>
        </div>
    )
}


ContentCardBig.defaultProps = {
    titulo: 'Hola',
    enlaces: null
}

ContentCardBig.propTypes = {
    titulo: PropTypes.string,
    descripcion: PropTypes.string,
    link: PropTypes.string,
    enlaces: PropTypes.array
}

export default ContentCardBig;