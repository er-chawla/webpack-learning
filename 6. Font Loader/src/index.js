import _ from 'lodash';
import * as style from './index.css';
import './clearButton';
import logo from './assets/logo-on-white-bg.png';
import './assets/fonts/MonsieurLaDoulaise-Regular.ttf';

const button = document.getElementById('buttonClick');
const logoEl = document.getElementById('logo');
button.addEventListener('click', () => {
    const el = document.getElementById('header');
    el.classList.add([style.header]);

    const list = document.getElementById('list');
    const listItem = ['apple', 'orange', 'banana'];

    _.forEach(listItem, (item) => {
        const temp = document.createElement('li');

        temp.innerHTML = item;
        list.appendChild(temp);
    });

    el.innerHTML = 'My journey of webpack has started';
});

button.classList.add([style.button]);
logoEl.src = logo;
