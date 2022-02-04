'use strict';
import './style.css';
import { renderHomePage } from './home.js';
import { renderMenuPage } from './menu';
import { renderContactPage } from './contact';

export function renderPage(){
    const content = document.createElement('div');
    content.classList.add('content');

    const navBar = document.createElement('nav');
    navBar.classList.add('nav-bar');

    const homeLink = document.createElement('a');
    homeLink.href = '#';
    homeLink.textContent = 'Home';

    const menuLink = document.createElement('a');
    menuLink.href = '#';
    menuLink.textContent = 'Menu';

    const contactLink = document.createElement('a');
    contactLink.href = '#';
    contactLink.textContent = 'Contact';

    navBar.appendChild(homeLink);
    navBar.appendChild(menuLink);
    navBar.appendChild(contactLink);
    
    homeLink.addEventListener('click', renderHomePage);
    menuLink.addEventListener('click', renderMenuPage);
    contactLink.addEventListener('click', renderContactPage);

    content.appendChild(navBar);

    document.body.appendChild(content);
}

export function clearContent(){
    while(content.lastChild){
        content.removeChild(content.lastChild);
    }
}

renderHomePage();