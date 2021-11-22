
/////// PROMESAS /////////

/*new Promise((resolve, reject) => {
    if(true){
        resolve(true);
    }else{
        reject(false);
    }
})
.then(() => {
    console.log('succes');
})
.catch(() => {
    console.log('fail');
})*/

/////////FETCH //////////////////
/*fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(json => console.log(json))
    .catch(err => console.log('Error'));*/




    /// AXIOS ///
/*
const axios = require('axios');

axios.get('https://jsonplaceholder.typicode.com/todos/1')
    .then(function (response) {
        console.log(response.data);
    })
    .catch(function (error) {
        console.log(error);
    })
    .then(function () {
        console.log('exec')
    }); */

    
const axios = require('axios');

/*const instance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'
});

instance.get('/todos/1')
.then(res => {console.log(res.data)})
.catch(err => console.log(err));
*/

//CLIENTE HTTP PERSONALIZADO

const pokeHTTP = axios.create({
    baseURL: 'https://pokeapi.co/api/v2'    
});

pokeHTTP.get('/pokemon/1')
.then(res => console.log('Pokemon: ', res.data.forms[0].name))






























