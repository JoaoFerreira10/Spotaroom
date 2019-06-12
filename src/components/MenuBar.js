import React from 'react';
import './MenuBar.css';

class MenuBar extends React.Component{

    render () {
        return (<nav className="navbar fixed-top navbar-expand-lg navbar-dark">
                <a className="navbar-brand" href="#">spotaroom</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                  <ul className="nav navbar-nav">
                    <li className="nav-item">
                      <a className="nav-link" href="#">The Company <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">How We Work</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">Contact Us</a>
                    </li>
                  </ul>
                </div>
              </nav>);
    }
}

export default MenuBar;