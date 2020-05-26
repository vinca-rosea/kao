'use strict';
import '../node_modules/milligram/dist/milligram.min.css';
import './style.css';
import kao from 'kaomojilib';
import kaocsv from '../node_modules/kao.moji/data/kaomoji.json';

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

const button = (icon) => {
  const button = document.createElement('button');
  button.textContent = icon;
  button.value = icon;
  button.classList.add('button', 'button-outline');
  button.addEventListener('click', onClick, false);
  return button;
};

let history = localStorage.getItem('history');
if (history != null) {
  history = JSON.parse(history);
} else {
  history = [];
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
    historyElm.appendChild(button(h));
  });
};

drawHistory(history);

const main = document.querySelector('#main');
Object.values(kaocsv).forEach(k => {
  k.forEach(i => {
    main.appendChild(button(i));
  });
});

Object.entries(kao.library).forEach(([text, content]) => {
  main.appendChild(button(content.icon));
});


