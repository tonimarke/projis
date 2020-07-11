const mongoose = require('mongoose')

// É necessário instalar: yarn add mongoose-sequence
// mongoose está sendo passado como parâmetro para mongoose-sequence
const mongooseSeq = require('mongoose-sequence')(mongoose);

const AcaoSchema = mongoose.Schema({
   num_acao: {
      type: Number,
      index: {
         unique: true
      } // Número da acaovenda não pode se repetir
   },
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
   data_atendimento: {
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

// inc_field: o campo a ser autoincrementado
// start_seq: o número que irá iniciar a contagem. Default: 1
AcaoSchema.plugin(mongooseSeq, {
   inc_field: 'num_acao',
   start_seq: 1
});

/* ['num_acao'nomeAcao', 'tipoacao', 'usuario', 'pcontraria', 'data_atendimento', 'supervisor', 'estagiario', 'providencias']
   Parâmetros de mongoose.model():
   1º -> o nome do modelo (entidade)
   2º -> a descrição da estrutura (esquema) da entidade
   3º -> o nome da coleção (collection) onde os objetos
      criados a partir do modelo serão armazenados no MongoDB

      pra criar contadores sequenciais:
      AcaoSchema.plugin(MongooseSeq, {inc_field: 'num_acao', start_seq: 1});
*/
module.exports = mongoose.model('Acao', AcaoSchema, 'acoes')