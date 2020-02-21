// const element = document.createElement('h1');
// element.innerText = 'Hello, Platzi Badges!';

// const container = document.getElementById('app');

// container.appendChild(element);

import React from 'react';
import ReactDOM from 'react-dom';

//const jsx = <h1>Hello, Platzi Badges!</h1>;
//const name = 'Stephanie';
//const element = React.createElement('h1', {}, `Hola, soy ${name}`); 
//const jsx = <h1>Hola soy, {name}</h1>

const jsx = (
  <div>
    <h1>Hola, Soy Carlos</h1>
    <p>Desarrollador fronted</p>
  </div>
);

const element = React.createElement(
  'div',
  {},
  React.createElement('h1',{},'Hola, soy Carlos'),
  React.createElement('p',{},'Programador web')
);
const container = document.getElementById('app');

// ReactDOM.render(__qué__, __dónde__);
ReactDOM.render(element, container);
