'use strict';
import './style.css';

console.log(`It's working for now...`);

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'Is it visible?';

document.body.appendChild(content);