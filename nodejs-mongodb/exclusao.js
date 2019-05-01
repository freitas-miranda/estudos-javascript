var MongoClient = require('mongodb').MongoClient;

var servidor = 'mongodb://localhost:27017/db_devmedia';

MongoClient.connect(servidor, function(erro, db) {
    if(erro)
        console.log("Erro ao estabelecer conexão:" + erro);
    else  
        console.log("Conexão estabelecida com sucesso.");

    var colecao = db.collection("clientes");   

    colecao.deleteMany({status : "Inativo"}, function(erro, resultado){
      if(erro)
          console.log("Erro ao excluir documento: " + erro);
      else    
          console.log("Documento excluído com sucesso");
    });

    db.close();
});