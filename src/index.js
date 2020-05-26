'use strict';
import '../node_modules/milligram/dist/milligram.min.css';
import './style.css';
import kao from 'kaomojilib';
import kaocsv from '../node_modules/kao.moji/data/kaomoji.json';
import kaodata from "./kaomoji";

const HISTORY_SIZE = 50;

const onClick = e => {
  copy(e.currentTarget.value);
  history = addHistory(history, e.currentTarget.value);
  drawHistory(history);
  saveHistory(history);
}

const addHistory = (history, icon) => {
  let newHistory = history.filter(v => v != icon);
  newHistory.unshift(icon);
  newHistory = newHistory.slice(0, HISTORY_SIZE);
  return newHistory;
};

const copy = (str) => {
  if (!str || typeof (str) != "string") {
    return;
  }
  const textarea = document.createElement('textarea');
  textarea.style = 'position:fixed;right:100vw;font-size:16px;';
  textarea.readOnly = true;
  textarea.value = str;
  document.body.appendChild(textarea);
  textarea.select();
  var range = document.createRange();
  range.selectNodeContents(textarea);
  var sel = window.getSelection();
  sel.removeAllRanges();
  sel.addRange(range);
  textarea.setSelectionRange(0, 999999);
  document.execCommand("copy");
  textarea.parentNode.removeChild(textarea);
}

const button = (icon, onClickFunction ,classList) => {
  const button = document.createElement('button');
  button.textContent = icon;
  button.value = icon;
  button.classList.add(...classList);
  button.addEventListener('click', onClickFunction, false);
  return button;
};

const normalButtonClass = ['button', 'button-outline'];
const utilityButtonClass = ['button','button-utility'];

let history = localStorage.getItem('history');
if (history != null) {
  history = JSON.parse(history);
} else {
  history = [];
}

let userIcon = localStorage.getItem('userIcon');
if (userIcon != null) {
  userIcon = JSON.parse(userIcon);
} else {
  userIcon = [];
}

const saveHistory = (history) => {
  localStorage.setItem('history', JSON.stringify(history));
};

const historyElm = document.querySelector('#history');
const drawHistory = () => {
  while (historyElm.firstChild) {
    historyElm.removeChild(historyElm.firstChild);
  }
  history.forEach(h => {
    historyElm.appendChild(button(h, onClick, normalButtonClass));
  });
};

drawHistory(history);

const main = document.querySelector('#main');

const addIcon = (e) => {
  const kaomoji = prompt('input kaomoji.'); 
  let newUserIcon = userIcon.filter(v => v != kaomoji);
  newUserIcon.unshift(kaomoji);
  userIcon = newUserIcon;
  localStorage.setItem('userIcon', JSON.stringify(userIcon));
  location.reload();
};

main.appendChild(button('⊞ ADD', addIcon, utilityButtonClass));

userIcon.forEach(i => {
  main.appendChild(button(i, onClick, normalButtonClass));
});

kaodata.forEach(k => {
    main.appendChild(button(k, onClick, normalButtonClass));
});

Object.values(kaocsv).forEach(k => {
  k.forEach(i => {
    main.appendChild(button(i, onClick, normalButtonClass));
  });
});

Object.entries(kao.library).forEach(([text, content]) => {
  main.appendChild(button(content.icon, onClick, normalButtonClass));
});

