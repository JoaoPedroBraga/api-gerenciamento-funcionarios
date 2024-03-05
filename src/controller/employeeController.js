const {employeeModel} = require('./../config/module/employee.model.js')

createEmployee = async (req, res) => {
    if (!req.body.id){
        return res.status(400).json({ message: "O campo ID e obrigtório"})   
    }
    if (!req.body.nome){
        return res.status(400).json({ message: "O campo Nome e obrigtório"})   
    }
    if (!req.body.nascimento){
        return res.status(400).json({ message: "O campo Nasicento e obrigtório"})   
    }
    if (!req.body.telefone){
        return res.status(400).json({ message: "O campo Telefone e obrigtório"})   
    }
    if (!req.body.salario){
        return res.status(400).json({ message: "O campo Salario e obrigtório"})   
    }
    if (!req.body.cargo){
        return res.status(400).json({ message: "O campo Cargo e obrigtório"})   
    }
    if (!req.body.setor){
        return res.status(400).json({ message: "O campo Setor e obrigtório"})   
    }

    const employeeExisente = await employeeModel.find({nome: req.body.nome});
    if (employeeExisente.length) {
        return res.status(200).json({ message:"Informação Cadastrada"});
    }

    const classExisente = await employeeModel.find({ nome: req.body.nome});
    if (classExisente.length) {
        return res.status(200).json({ message:"Informação Cadastrada"});
    }

    const employee = await employeeModel.create({
        id: req.body.id,
        nome: req.body.nome,
        nascimento: req.body.nascimento,
        telefone:req.body.telefone,
        salario: req.body.salario,
        cargo: req.body.cargo,
        setor: req.body.setor
    });

    return  res.status(201).json(employee);
}

getEmployee = async (req, res) => {
    const funcionarios = await employeeModel.find({});
    return  res.status(200).json(funcionarios);
}


getOneEmployee = async (req, res) => {
    try {
        const employee = await employeeModel.findOne({id: req.params.id});
        return  res.status(200).json(employee);
    }catch (erro) { 
        return res.status(400).json({
            message:'Não foi possivel encontrar ID'
        });
    }
}


updateEmployee = async (req, res) => {  

    const employee = await employeeModel.updateOne({id: req.params.id}, req.body);

    return  res.status(200).json(employee);
}

module.exports = { getEmployee, createEmployee, getOneEmployee, updateEmployee }