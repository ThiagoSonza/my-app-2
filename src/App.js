
import React from 'react';

function App() {
return (
    <div className="App">
      <div className="menu-wrapper ui menu">
        <div className="icon-wrapper ui item">
          <svg className="outside-square" viewBox="0 0 18 18" zoomAndPan="disable" preserveAspectRatio="none">        
            <path d="M0 0, L3 0, L3 3, L0 3, Z"></path>
            <path d="M7.5 0, L10.5 0, L10.5 3, L7.5 3, Z"></path>
            <path d="M15 0, L18 0, L18 3, L15 3, Z"></path>

            <path d="M0 7.5, L3 7.5, L3 10.5, L0 10.5, Z"></path>
            <path d="M7.5 7.5, L10.5 7.5, L10.5 10.5, L7.5 10.5, Z"></path>
            <path d="M15 7.5, L18 7.5, L18 10.5, L15 10.5, Z"></path>

            <path d="M0 15, L3 15, L3 18, L0 18, Z"></path>
            <path d="M7.5 15, L10.5 15, L10.5 18, L7.5 18, Z"></path>
            <path d="M15 15, L18 15, L18 18, L15 18, Z"></path>
          </svg>        
        </div>
        <div className="menu-content ui item">
          <a href="http://localhost:3000"> 
            <span> Portal E-Desk </span>
          </a>
        </div>
        <div className="menu menu-search">
          <div className="item">
            <div className="ui icon input">
              <input type="text" placeholder="Search..."/>
              <i className="search link icon"></i>        
            </div>
          </div>
        </div>
        <div className="right menu">
          <a href="http://localhost:3000" className="ui item">
            <i className="user outline icon"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
