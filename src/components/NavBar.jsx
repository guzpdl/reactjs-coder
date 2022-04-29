import React from "react";
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

const NavBar = () => {
  return (
    <div>
      <div>
        <h1>Mercado Rey</h1>
      </div>
      <div>
        <ul>
          <li>
          <Button variant="primary">Inicio</Button>{' '}
          </li>
          <li>
          <Button variant="secondary">Contacto</Button>{' '}
          </li>
          <li>
          <Button variant="success">Productos</Button>{' '}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
