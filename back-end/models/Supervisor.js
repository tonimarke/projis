const mongoose = require('mongoose')

const SupervisorSchema = mongoose.Schema({
   nome: String,
   cpf: {
      type: String,
      required: true,
      index: { 
         unique: true // Não deixa repetir CPF no cadastro
      }
   },
   email: String,
   profissao: {
      type: String,
      // ADV = Advogado
      // ASS = Assistente Social
      enum: ['ADV', 'ASS'],
      required: true
   },
});
/*
   Parâmetros de mongoose.model():
   1º -> o nome do modelo (entidade)
   2º -> a descrição da estrutura (esquema) da entidade
   3º -> o nome da coleção (collection) onde os objetos
      criados a partir do modelo serão armazenados no MongoDB
*/
module.exports = mongoose.model('Supervisor', SupervisorSchema, 'supervisores')