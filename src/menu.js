'use strict';
import {clearContent, renderPage, content, navBar, homeLink, menuLink, contactLink} from './index.js';

export function renderMenuPage(){
    clearContent();
    renderPage();
    menuLink.classList.add('selected-page-link');

    const pageContent = document.createElement('div');
    pageContent.classList.add('page-content');

    const testContent = document.createElement('p');
    testContent.textContent = 'MENU PAGE TEXT AND IMAGES GO HERE';

    pageContent.appendChild(testContent);


    content.appendChild(pageContent);
    document.body.appendChild(content);
}
