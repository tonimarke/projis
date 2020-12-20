let pdf = require ("html-pdf");

var nomeUsuario = "nomeTeste";
var cpfUsuario ="cpfteste";

let conteudo = `
    <h1 style="text-align: center"> Declaração de hipossuficiência </h1>
    <p style="padding: 50px 20px 50px 30px"> Texto pra ser inserido na declaração de hipossuficiência de ${nomeUsuario}, portador do CPF : ${cpfUsuario}


`

pdf.create(conteudo,{}).toFile("../declaracaoDeHipossuficiencia.pdf",(err, res) => {
    if(err){
        console.log('erro ao gerar o pdf')
    }
    else{
        console.log(res);
    }

})