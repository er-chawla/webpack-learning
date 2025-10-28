import _ from 'lodash';
import * as style from './index.css';
import './clearButton';

const button = document.getElementById('buttonClick');
button.addEventListener('click', () => {
    const el = document.getElementById('header');

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
