'use strict';
import '../node_modules/milligram/dist/milligram.min.css';
import './style.css';
import kao from 'kaomojilib';

const onClick = e => {
  if (navigator.clipboard) {
    navigator.clipboard.writeText(e.currentTarget.value);
  }
}

const col = document.querySelector('.container .row .column');
Object.entries(kao.library).forEach(([text, content]) => {
  const button = document.createElement('button');
  button.textContent = content.icon;
  button.value = content.icon;
  button.classList.add('button','button-outline');
  button.addEventListener('click', onClick, false);
  col.appendChild(button);
})
