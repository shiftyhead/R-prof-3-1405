import React from 'react';
import ReactDom from 'react-dom';
import 'bootstrap';

import './layout/style/main.css'
import Message from './components/Message/Message.jsx';


let container = document.getElementById('app');

let massages = ['Я не знаю, кто вы и откуда вы, но с этого момента вы делаете так, как скажу я.', 'Разрешите мне кое-что прояснить, ваша милость. Я подчиняюсь приказаниям только одного человека: себя.'];

let button = document.getElementById('button');
button.addEventListener('click', () => {
    massages.push('Удивительно, что вы еще живы.');
    ReactDom.render(
        <Message massages = { massages } />
    , container)
})

ReactDom.render(
        <Message massages = { massages } />
    , container);
