import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Nav.css'; // Importe o arquivo de estilo Nav.css aqui
import Nome from "./logo.js"

function Navbar1() {
  return (
    <nav class="menu">

        <nav class="navbar navbar-expand-lg navegaçao">
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0"> 
                    <li class="nav-item">     
                        <a class="nav-link" aria-current="page" href="#">Home</a>
                    </li>
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="agendademassagem.html">Agenda de Massagem</a></li>
                </ul>
              </ul>
            </div>
        </nav>
    </nav>
        );
}   

export default Navbar1;