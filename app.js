const express = require('express');
const app = express();
const produitRoute = require('./routes/produit_route');
const clientRoute = require('./routes/client_route');
const factureRoute = require('./routes/facture_route');
const EntrepriseRoute = require('./routes/entreprise_route');


app.use(express.json());
app.use('/produits', produitRoute);
app.use('/clients', clientRoute);
app.use('/factures', factureRoute);
app.use('/entreprises', EntrepriseRoute);

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

