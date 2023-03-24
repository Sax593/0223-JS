// Un paysagiste doit faire une haie pour une cliente le long de sa cloture. La cliente désire avoir des troènes. Un plan de troène une fois adulte couvre un surface de 1.5m de large et coute 45€/pcs. La surface a couvrir est de 30m. Votre objectif est décrire un fonction en JS permettant de determiner le nombre de plan que le paysagiste va devoir commander et la somme que cela va lui couter.

//30/1.5=?*45

function devis(longueurDeCloture) {
  let nbBuisson = longueurDeCloture / 1.5;
  let price = nbBuisson * 45;
  console.log("Nb de Buissons ", nbBuisson, "price: ", price);
}

devis(50);
