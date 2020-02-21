import React from 'react';

import confLogo from '../images/badge-header.svg'; 

class Badge extends React.Component {
  render() {
    return (
    <div>
      <div>
        <img src={confLogo} alt="Logo de la conferencia"></img>
      </div>
    
      <div>
        <img src="https://www.gravatar.com/avatar?d=identicon" alt="Avatar"></img>
        <h1>Carlos <br/> Santaniello</h1>
      </div>

      <div>
        <p>Desarrollador Frontend</p>
        <p>@cesantaniello</p>
      </div>

      <div>
        #PlatziConf
      </div>
    </div>
    );  
  }
}

export default Badge;