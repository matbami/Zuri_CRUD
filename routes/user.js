const express = require('express')
const router = express.Router()

const { Create,ReadOne,Read,Update,Delete} = require('../controller/user')

router.route('/user').post(Create)

router.route('/users').get(Read)

router.route('/user/:id').get(ReadOne)

router.route('/user/:id').patch(Update)

router.route('/user/:id').delete(Delete)


module.exports = router