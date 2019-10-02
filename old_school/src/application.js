/* eslint-env browser */
import moment from 'moment';

let item = document.querySelector('.j-a');
item.innerText = 'Hello from JavaScript!';
item = document.querySelector('.j-b');
item.innerText = `${moment().startOf('day').fromNow()} starts today`;
item = document.querySelector('.j-c');
const name = 'Bob';
const time = 'today';
item.innerText = `Hello ${name}, how are you ${time}?`;
