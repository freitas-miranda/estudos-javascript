var MongoClient = require('mongodb').MongoClient;

var servidor = 'mongodb://localhost:27017/db_devmedia';

MongoClient.connect(servidor, function(erro, db) {
    if(erro)
        console.log("Erro ao estabelecer conexão:" + erro);
    else  
        console.log("Conexão estabelecida com sucesso.");

    var colecao = db.collection("clientes");   

    colecao.find({status:"Ativo"}).toArray(function(erro, documentos){
        documentos.forEach(function(doc) {
            console.log("_______________________");
            console.log("Codigo: " + doc.codigo);
            console.log("Nome: " + doc.nome);
            console.log("Status: " + doc.status);
        }, this);
    });

    db.close();
});