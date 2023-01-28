const http = require('http')
const { url } = require('inspector')
const characters = require('../utils/data.js')

http.createServer((req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*') // Esta línea le da permisos al fron para que le haga peticiones al backend

    if(req.url.includes('rickandmorty/character')){
       // console.log(req.url.split('/').at(-1));
       let id = req.url.split('/').at(-1);
       let characterFilter = characters.find(char => char.id === Number(id)) // Devuelve directamente el elemento que buscamos, en este caso un obj
       
       //Otra Forma de filtrar:
       //let characterFilter = characters.filter(char => char.id === Number(id)) // Devuelve un array con un solo elemento que en este caso es el obj que buscamos.
       //console.log(characterFilter);

       res
       .writeHead(200, {'Content-type': 'application/json'})
       .end(JSON.stringify(characterFilter)) // Si a characterFilter lo hubiéramos obtenido con Filter sería un array y tendríamos que agregarle [0]
    }
}).listen(3001, 'localhost')

