'use strict';
import {clearContent, renderPage} from './index.js';

export function renderHomePage(){
    clearContent();
    renderPage()
    homeLink.classList.add('selected-page-link');

    const pageContent = document.createElement('div');
    pageContent.classList.add('page-content');

    const pageContentText = document.createElement('p');
    pageContentText.textContent = 'COFFEE, coffee coffee coffee coffee!!!\nLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Orci ac auctor augue mauris augue. Purus sit amet volutpat consequat mauris nunc congue. Et malesuada fames ac turpis. Viverra nibh cras pulvinar mattis nunc sed. Eu mi bibendum neque egestas congue quisque egestas diam in. Sed felis eget velit aliquet sagittis id consectetur. Cursus sit amet dictum sit amet justo. Id consectetur purus ut faucibus pulvinar elementum. Cursus eget nunc scelerisque viverra mauris in aliquam sem. Tincidunt arcu non sodales neque sodales. Ullamcorper velit sed ullamcorper morbi. Interdum consectetur libero id faucibus. A diam sollicitudin tempor id eu nisl. Pulvinar pellentesque habitant morbi tristique senectus et netus et malesuada.\nLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Orci ac auctor augue mauris augue. Purus sit amet volutpat consequat mauris nunc congue. Et malesuada fames ac turpis. Viverra nibh cras pulvinar mattis nunc sed. Eu mi bibendum neque egestas congue quisque egestas diam in. Sed felis eget velit aliquet sagittis id consectetur. Cursus sit amet dictum sit amet justo. Id consectetur purus ut faucibus pulvinar elementum. Cursus eget nunc scelerisque viverra mauris in aliquam sem. Tincidunt arcu non sodales neque sodales. Ullamcorper velit sed ullamcorper morbi. Interdum consectetur libero id faucibus. A diam sollicitudin tempor id eu nisl. Pulvinar pellentesque habitant morbi tristique senectus et netus et malesuada.';
    pageContent.appendChild(pageContentText);

    content.appendChild(pageContent);

    document.body.appendChild(content);
}