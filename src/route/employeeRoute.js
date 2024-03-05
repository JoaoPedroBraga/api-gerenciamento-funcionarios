const express = require('express');
const router = express.Router();
const employeeController = require('./../controller/employeeController')

router.get('/', employeeController.getEmployee)
router.post('/', employeeController.createEmployee)
router.get('/:id', employeeController.getOneEmployee)


module.exports = router;