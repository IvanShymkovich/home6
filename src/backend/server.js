const fs = require('fs');
const http = require('http');
const PORT = 3000;

const server = http.createServer((req, res) => {
    res.writeHead(200, {
        'Content-Type': 'text/html'
    }) 
    fs.readFile('../home6/src/frontend/templates/index.html',(err, data) => {//прочитай файлы (метод)
        err//в случае ошибки
        ? res.writeHead (404) && res.write('Error: Not Found!')
        : res.write(data)

        res.end()
    })  
})

server.listen(PORT, err =>{
    err
        ? console.log(`Something went wrong` , err) //Если есть ошибка то мы слушаем следующий порт
        : console.log(`Something is listening on port: ${PORT}`)
})