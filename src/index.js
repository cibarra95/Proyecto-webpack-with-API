import './style/main.scss';

// importamos los estilos de la carpeta style

import Consulta from './API.js';
import axios from 'axios';
// const request = require('request');
// traer la consulta

const init = () => {
    const consultaAPI = [];
    // Todo: Consultar API

    axios.get('https://opentdb.com/api.php?amount=10')
        .then(function (response){
            // handle success
            console.log(response);
        })
        
    const trivia = new Consulta
    (consultaAPI);
    console.log(trivia);
};

init();