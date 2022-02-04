'use strict';
import {clearContent, renderPage} from './index.js';

export function renderContactPage(){
    clearContent();
    renderPage();
    contactLink.classList.add('selected-page-link');

    const pageContent = document.createElement('div');
    pageContent.classList.add('page-content');

    const testContent = document.createElement('p');
    testContent.textContent = 'CONTACT INFO GOES HERE';

    pageContent.appendChild(testContent);


    content.appendChild(pageContent);
    document.body.appendChild(content);
}