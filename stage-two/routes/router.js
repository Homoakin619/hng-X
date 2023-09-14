const express = require('express');
const router = express.Router();
const {getPerson, deletePerson, updatePerson, postPerson} = require('../controllers/conroller')

router.get('/:user_id',getPerson);
router.delete('/:user_id',deletePerson);
router.patch('/:user_id',updatePerson);
router.post('/', postPerson);

module.exports = router