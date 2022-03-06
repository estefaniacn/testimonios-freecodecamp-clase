import React from 'react';
import '../hojas-de-estilo/Testimonio.css';

class Testimonio extends React.Component {
  render() {
    return (
      <div className='contenedor-testimonio'>
        <img 
          className='imagen-testimonio'
          src={require(`../imagenes/testimonio-${this.props.imagen}.png`)}
          alt={`Foto de ${this.props.nombre}`} />
        <div className='contenedor-texto-testimonio'>
          <p className='nombre-testimonio'>
            <strong>{this.props.nombre}</strong> en {this.props.pais}
          </p>
          <p className='cargo-testimonio'>
            {this.props.cargo} en <strong>{this.props.empresa}</strong>
          </p>
          <p className='texto-testimonio'>"{this.props.testimonio}"</p>
        </div>
      </div>
    );
  }
}

export default Testimonio;