'use strict';
import {clearContent, renderPage, content, navBar, homeLink, menuLink, contactLink} from './index.js';

export function renderMenuPage(){
    clearContent();
    renderPage();
    menuLink.classList.add('selected-page-link');

    const pageContent = document.createElement('div');
    pageContent.classList.add('page-content-menu');

    const card1 = document.createElement('div');
    card1.classList.add('card1');
    const card1Pic = document.createElement('div');
    card1Pic.classList.add('card-1-pic');
    const card1Text = document.createElement('p');
    card1Text.textContent = 'Classic Coffee';
    card1.appendChild(card1Pic);
    card1.appendChild(card1Text);

    const card2 = document.createElement('div');
    card2.classList.add('card2');
    const card2Pic = document.createElement('div');
    card2Pic.classList.add('card-2-pic');
    const card2Text = document.createElement('p');
    card2Text.textContent = 'Creamy Coffee';
    card2.appendChild(card2Pic);
    card2.appendChild(card2Text);

    const card3 = document.createElement('div');
    card3.classList.add('card3');
    const card3Pic = document.createElement('div');
    card3Pic.classList.add('card-3-pic');
    const card3Text = document.createElement('p');
    card3Text.textContent = 'Croissant';
    card3.appendChild(card3Pic);
    card3.appendChild(card3Text);

    pageContent.appendChild(card1);
    pageContent.appendChild(card2);
    pageContent.appendChild(card3);

    content.appendChild(pageContent);
    document.body.appendChild(content);
}