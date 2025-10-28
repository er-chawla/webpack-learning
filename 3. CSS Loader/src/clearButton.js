import * as style from './clearButton.css';

console.log(style);
const el = document.createElement('button');

el.innerHTML = 'Clear';
el.classList.add([style.button]);
el.onclick = function () {
    alert('Clear button clicked');
};

document.body.appendChild(el);
