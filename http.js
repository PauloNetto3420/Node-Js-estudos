var http = require("http");

http.createServer(function(requisicao, resposta){
    resposta.end("<h1>Bem vindo ao meu site</h1><br><h4>PAULAO SOLUCOES</h4>")
}).listen(3685);

console.log("Meu servidor está rodando")