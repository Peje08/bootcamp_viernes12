
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


    //PRACTICAS//
    
const axios = require('axios');

/*const instance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'
});
instance.get('/todos/1')
.then(res => {console.log(res.data)})
.catch(err => console.log(err));
*/

/*CLIENTE HTTP PERSONALIZADO
const pokeHTTP = axios.create({
    baseURL: 'https://pokeapi.co/api/v2'    
});

pokeHTTP.get('/pokemon/1')
.then(res => console.log('Pokemon: ', res.data.forms[0].name))*/

/*const swapiHTTP =axios.create({
    baseURL: 'https://swapi.dev/api/'
});

swapiHTTP.get('/people/1')
.then(res => console.log('Star Wars: ', res.data.name))
.catch(err => console.log(err))*/

/*const climaHTTP = axios.create({
    baseURL: 'https://climate-change-news.herokuapp.com/news'
});

climaHTTP.get('/thetimes')
.then(res => console.log('Clima: ', res.data))
.catch(err => console.log(err))*/

/*const placeholderHTTP = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'
});

const searchId= {
    params: {
        id: 4
    }
};

placeholderHTTP.get('/todos', searchId)
.then(res => console.log('Placeholder: ', res.data))
.catch(err => console.log(err))
*/




















