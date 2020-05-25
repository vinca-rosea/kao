'use strict';
import '../node_modules/milligram/dist/milligram.min.css';
import './style.css';
import kao from 'kaomojilib';

const onClick = e => {
  copy(e.currentTarget.value);
}

const copy = (str) => {
  if (!str || typeof (str) != "string") {
    return "";
  }

  //strを含んだtextareaをbodyタグの末尾に設置
  const textarea = document.createElement('textarea');
  textarea.id = 'tmp_copy';
  textarea.style = 'position:fixed;right:100vw;font-size:16px;';
  textarea.readOnly = true;
  textarea.value = str;
  document.body.appendChild(textarea);

  //select()でtextarea内の文字を選択
  textarea.select();

  //rangeでtextarea内の文字を選択
  var range = document.createRange();
  range.selectNodeContents(textarea);
  var sel = window.getSelection();
  sel.removeAllRanges();
  sel.addRange(range);
  textarea.setSelectionRange(0, 999999);

  //execCommandを実施
  document.execCommand("copy");

  //textareaを削除
  textarea.parentNode.removeChild(textarea);
}

const col = document.querySelector('.container .row .column');
Object.entries(kao.library).forEach(([text, content]) => {
  const button = document.createElement('button');
  button.textContent = content.icon;
  button.value = content.icon;
  button.classList.add('button', 'button-outline');
  button.addEventListener('click', onClick, false);
  col.appendChild(button);
})
