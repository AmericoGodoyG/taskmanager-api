const mongoose = require('mongoose');

const tarefaSchema = new mongoose.Schema({
  descricao: { type: String, required: true },
  detalhes: { type: String }, // descrição detalhada
  dataEntrega: { type: Date, required: true },
  status: {
    type: String,
    enum: ['pendente', 'em andamento', 'concluído'],
    default: 'pendente'
  },
  aluno: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  equipe: { type: mongoose.Schema.Types.ObjectId, ref: 'Equipe', required: true },
  tempoEstimado: { type: Number }, // tempo em minutos
  tempoGasto: { type: Number, default: 0 }, // tempo em minutos
  cronometroAtivo: { type: Boolean, default: false },
  ultimaAtualizacaoCronometro: { type: Date },
  urgencia: {
    type: String,
    enum: ['alta', 'media', 'baixa'],
    default: 'baixa'
  },
  tempoExcedido: { type: Boolean, default: false }
}, { timestamps: true });

module.exports = mongoose.model('Tarefa', tarefaSchema);
