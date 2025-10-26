const mongoose = require('mongoose')

async function connectDB() {
  try {
    await mongoose.connect('mongodb://127.0.0.1:27017/todo')
    console.log('MongoDB conectado com sucesso!')
  } catch (err) {
    console.error('Erro ao conectar ao MongoDB:', err.message)
    process.exit(1) // encerra o processo se não conseguir conectar
  }
}

module.exports = connectDB