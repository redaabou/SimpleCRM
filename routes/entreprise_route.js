const express = require('express');
const router = express.Router();
const {createEntreprise, getAllEntreprises, getEntrepriseById, updateEntreprise, deleteEntreprise} = require('../controllers/entreprise_controller');

router.route('/').post(createEntreprise).get(getAllEntreprises);
router.route('/:id').get(getEntrepriseById).put(updateEntreprise).delete(deleteEntreprise);

module.exports = router;