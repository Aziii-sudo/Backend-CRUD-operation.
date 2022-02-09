const express =require('express')
var router = express()
const create = require('../controller/student')
const view =require ('../controller/student')
const update =require ('../controller/student')
const remove = require ('../controller/student')
const bodyparser = require('body-parser');




router.use(bodyparser.json())
router.post('/create',create.create)
router.get('/',view.view)
router.patch('/:id',update.update)
router.delete('/delete/:id',remove.remove)

module.exports = router

