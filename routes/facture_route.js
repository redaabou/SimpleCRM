const express = require('express');
const router = express.Router();
const {createFacture, getAllFactures, getFactureById, updateFacture, deleteFacture} = require('../controllers/factures_controllers');

router.route('/').post(createFacture).get(getAllFactures);
router.route('/:id').get(getFactureById).put(updateFacture).delete(deleteFacture);

module.exports = router;