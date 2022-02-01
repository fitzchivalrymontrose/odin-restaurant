'use strict';
import './style.css';

console.log(`It's working for now...`);

const content = document.createElement('div');
content.classList.add('content');

const navBar = document.createElement('nav');
navBar.classList.add('nav-bar');

const homeLink = document.createElement('a');
homeLink.classList.add('home-link');
homeLink.href = '#';
homeLink.textContent = 'Home';

const menuLink = document.createElement('a');
menuLink.classList.add('menu-link');
menuLink.href = '#';
menuLink.textContent = 'Menu';

const contactLink = document.createElement('a');
contactLink.classList.add('contact-link');
contactLink.href = '#';
contactLink.textContent = 'Contact';

navBar.appendChild(homeLink);
navBar.appendChild(menuLink);
navBar.appendChild(contactLink);

const pageContent = document.createElement('div');
pageContent.classList.add('page-content');

const pageContentText = document.createElement('p');
pageContentText.textContent = 'COFFEE, coffee coffee coffee coffee!!!';
pageContent.appendChild(pageContentText);

content.appendChild(navBar);
content.appendChild(pageContent);

document.body.appendChild(content);