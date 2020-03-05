const express = require('express')
const app = express()
const path = require('path')
const files = path.join(__dirname,'/views')

app.use(express.static(path.join(__dirname, '/public')))

app.get('/',(request,response)=>{ //Index
    response.sendFile(`${files}/index.html`)
})

app.route('/experiencias')
.get((request,response)=>{
    response.sendFile(`${files}/experiencias.html`)
})

app.route('/referencias')
.get((request, response)=>{
    response.sendFile(`${files}/referencias.html`)
})

app.route('/estudios')
.get((request, response)=>{
    response.sendFile(`${files}/estudios.html`)
})

app.route('/contactame')
.get((request, response)=>{
    response.sendFile(`${files}/contactame.html`)
})

app.route('/mensaje-usuario')
.get((request,response)=>{
    if (request.query.usuario ==='' || request.query.asunto==='' || request.query.mensaje==='') {
        response.sendFile(`${files}/loginFail.html`)
        
    }else{
        response.sendFile(`${files}/loginExito.html`)
    }
    console.log('->>>',request.query) //me captura lo que digito el usuario
    let nombreUsuario = request.query.usuario
})

app.listen(4300)


