const mongoose = require('mongoose')

const esquema = mongoose.Schema({
   actionName: {
      type: String,
      required: true
   },

   opponent:{
       type: mongoose.ObjectId,
       ref: 'Opponent'
   },
   customer: {
      type: mongoose.ObjectId,
      ref: 'Customer'
   }
   
})

/*
   Parâmetros de mongoose.model():
   1º -> o nome do modelo (entidade)
   2º -> a descrição da estrutura (esquema) da entidade
   3º -> o nome da coleção (collection) onde os objetos
      criados a partir do modelo serão armazenados no MongoDB
*/
module.exports = mongoose.model('Action', esquema, 'actions')