const mongoose = require('mongoose');   

const employeeSchema =  new mongoose.Schema(
    {
        nome: String,
        nascimento: Date,
        telefone: Number,
        salario: String,
        cargo: String,
        setor: String
    },
    { 
        timestamps: true 
    }
);

const employeeModel = mongoose.model('funcionarios', employeeSchema);

module.exports =  {employeeModel};