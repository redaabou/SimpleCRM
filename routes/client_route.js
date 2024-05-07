const express = require('express');
const router = express.Router();
const {createClient, getAllClients, getClientById, updateClient, deleteClient} = require('../controllers/client_controller');

router.route('/').post(createClient).get(getAllClients);
router.route('/:id').get(getClientById).put(updateClient).delete(deleteClient);



module.exports = router;