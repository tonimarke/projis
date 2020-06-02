const mongoose = require('mongoose')

const esquema = mongoose.Schema({
   name: {
      type: String,
      required: true
   },
   cpf: {
      type: String,
      required: true,
      index: { 
         unique: true // Não deixa repetir CPF no cadastro
      }
   },
   rg: {
      type: String
   },
   address: {
      type: String,
      required: true
   },
   phone: {
      type: String,
      required: true
   },
   birth: {
      type: Date
   },
   registred_by:{
      type: mongoose.ObjectId,
      ref: 'Intern', // Nome do model referenciado
      required: true
   },
})


/*
   Parâmetros de mongoose.model():
   1º -> o nome do modelo (entidade)
   2º -> a descrição da estrutura (esquema) da entidade
   3º -> o nome da coleção (collection) onde os objetos
      criados a partir do modelo serão armazenados no MongoDB
*/
module.exports = mongoose.model('Customer', esquema, 'customers')
