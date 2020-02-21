import React from 'react';

import './styles/Badge.css';
import confLogo from '../images/badge-header.svg'; 

class Badge extends React.Component {
  render() {
    return (
    <div className="Badge">
      <div className="Badge__header">
        <img src={confLogo} alt="Logo de la conferencia"></img>
      </div>
    
      <div className="Badge__section-name">
        <img 
        className="Badge__avatar"
        src="https://www.gravatar.com/avatar?d=identicon" alt="Avatar"></img>
        <h1>Carlos <br/> Santaniello</h1>
      </div>

      <div className="Badge__section-info">
        <h3>Desarrollador Frontend</h3>
        <div>@cesantaniello</div>
      </div>

      <div className="Badge__footer">
        #PlatziConf
      </div>
    </div>
    );  
  }
}

export default Badge;