var MongoClient = require('mongodb').MongoClient;

var servidor = 'mongodb://localhost:27017';

MongoClient.connect(servidor, function (erro, client) {
    if (erro)
        console.log("Erro ao estabelecer conexão:" + erro);
    else
        console.log("Conexão estabelecida com sucesso.");

    var topico = {
        titulo: "Erro de compilação",
        conteudo: "Não consigo compilar meu projeto",
        tags: ["Java", "Android", "Mobile", "Alan Miranda"]
    };

    var db = client.db("db_devmedia");

    db.collection('topicos').insertOne(topico, function (erro, resultado) {
        if (erro)
            console.log("Erro ao inserir documento: " + erro);
        else
            console.log("Documento inserido com sucesso");
    });

    client.close();
});