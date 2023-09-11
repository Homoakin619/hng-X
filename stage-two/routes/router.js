const express = require('express');
const router = express.Router();
const {getEntity, deleteEntity, updateEntity, postEntity} = require('../controllers/conroller')

router.get('/:user_id',getEntity);
router.delete('/:user_id',deleteEntity);
router.patch('/:user_id',updateEntity);
router.post('/', postEntity);

module.exports = router