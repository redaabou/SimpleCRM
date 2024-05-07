const express = require('express');
const router = express.Router();
const {cearteProduit, getAllProduits, getProduitById, updateProduit, deleteProduit} = require('../controllers/produit_controller');

router.route('/').post(cearteProduit).get(getAllProduits);
router.route('/:id').get(getProduitById).put(updateProduit).delete(deleteProduit);
module.exports = router;


