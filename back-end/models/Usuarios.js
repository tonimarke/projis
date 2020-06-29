const mongoose = require('mongoose')
const Estagiario = require('./Estagiarios')

const UsuarioSchema = mongoose.Schema({
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
   rg: String,
   enderecos:{ 
      type: Array,
      itens:{
            logradouro: String,
            numero: Number,
            bairro: String,
            complemento: String,
            cep: String,
            cidade: String,
            estado: String
            }
   },
   telefones:{ 
      type: Array,
      itens:{
            numero: String,
            tipo: String
            }
   },
   data_nascimento: Date,
   registrado_por:{
      type: mongoose.ObjectId,
      ref: 'Estagiario', // Nome do model referenciado
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
module.exports = mongoose.model('Usuario', UsuarioSchema, 'usuarios')
