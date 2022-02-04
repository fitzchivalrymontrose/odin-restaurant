'use strict';
import './style.css';
import { renderHomePage } from './home.js';
import { renderMenuPage } from './menu';
import { renderContactPage } from './contact';

export const content = document.createElement('div');
export const navBar = document.createElement('nav');
export const homeLink = document.createElement('a');
export const menuLink = document.createElement('a');
export const contactLink = document.createElement('a');


export function renderPage(){
    content.classList.add('content');

    navBar.classList.add('nav-bar');

    homeLink.href = '#';
    homeLink.textContent = 'Home';

    menuLink.href = '#';
    menuLink.textContent = 'Menu';

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
    homeLink.classList.remove('selected-page-link');
    menuLink.classList.remove('selected-page-link');
    contactLink.classList.remove('selected-page-link');
    while(content.lastChild){
        content.removeChild(content.lastChild);
    }
}

renderHomePage();