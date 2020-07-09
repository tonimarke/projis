const mongoose = require('mongoose')

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
      ref: 'Usuario'
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
      ref: 'Estagiario'
   },
   providencias: {
      type: String,
   }
})

/* ['nomeAcao', 'tipoacao', 'usuario', 'pcontraria', 'data_atendimento', 'supervisor', 'estagiario', 'providencias']
   Parâmetros de mongoose.model():
   1º -> o nome do modelo (entidade)
   2º -> a descrição da estrutura (esquema) da entidade
   3º -> o nome da coleção (collection) onde os objetos
      criados a partir do modelo serão armazenados no MongoDB
*/
module.exports = mongoose.model('Acao', AcaoSchema, 'acoes')