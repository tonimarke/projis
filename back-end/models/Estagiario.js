const mongoose = require('mongoose')

const EstagiarioSchema = mongoose.Schema({
   //_id: mongoose.Schema.Types.ObjectId,
   nome: {
      type:String,
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
   email: String,
   data_nascimento: Date,
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
   inicio_vinculo: { 
       type: Date,
       default: Date.now
   },
   fim_vinculo: Date,
   curso: {
      type: String,
      // DI = direito
      // SS = serviço social
      enum: ['DI', 'SS'],
      required: true
   },
   status: Boolean
});

mongoose.model('Estagiario', EstagiarioSchema);

/*
   Parâmetros de mongoose.model():
   1º -> o nome do modelo (entidade)
   2º -> a descrição da estrutura (esquema) da entidade
   3º -> o nome da coleção (collection) onde os objetos
      criados a partir do modelo serão armazenados no MongoDB
*/
module.exports = mongoose.model('Estagiario', EstagiarioSchema, 'estagiarios')
