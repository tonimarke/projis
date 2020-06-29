const mongoose = require('mongoose')
const Usuario = require('./Usuarios')
const Pcontraria = require('./Pcontraria')
const Supervisor = require('./Supervisor')
const Estagiario = require('./Estagiarios')

const AcaoSchema = mongoose.Schema({
   nomeAcao: {
      type: String,
      required: true
   },
   tipoacao: {
      type: String,
      required: true
   },
   usuario: {
      type: mongoose.ObjectId,
      ref: 'Usuarios'
   },
   pcontraria: {
       type: mongoose.ObjectId,
       ref: 'Pcontraria'
   },
   data_atendimento : {
      type: Date,
      default: Date.now
   },
   supervisor: {
      type: mongoose.ObjectId,
      ref: 'Supervisor'
   },
   estagiario: {
      type: mongoose.ObjectId,
      rev: 'Estagiarios'
   },
   providencias: {
      type: String,
   }
})

/*
   Parâmetros de mongoose.model():
   1º -> o nome do modelo (entidade)
   2º -> a descrição da estrutura (esquema) da entidade
   3º -> o nome da coleção (collection) onde os objetos
      criados a partir do modelo serão armazenados no MongoDB
*/
module.exports = mongoose.model('Acao', AcaoSchema, 'acoes')