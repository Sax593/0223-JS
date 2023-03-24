// Vous êtes en l'an 3054. Vous êtes responsable de la maitenance du plus grand space port terrestre.
// Vous gérer une flottes de 30 vaisseaux, vous venez de recevoir une alerte de l'IA du Space port, l'approvisionnement en crburnt est vivre est en panne. Aprés vérification, vous vous rendez compte que le logiciel est en panne. Vous devez donc réécricre l'algorythme sui gére les robot.
//
// Ecrivez un script JS qui vous permetra de transmettre les informations suivante au robot.

// Tout les vaisseaux paire on besoin de carburant.
// Tout les vaisseaux impaire on besoin d'eau.

const ship = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24, 25, 26, 27, 28, 29, 30,
];

// CReer un tableau
// push les paires dans le tableau

function supply(ship) {
  const pair = [];
  const impair = [];
  for (let i = 0; i < ship.length; i++) {
    if (ship[i] % 2 === 0) {
      pair.push(ship[i]);
    } else {
      impair.push(ship[i]);
    }
  }
  console.log("carburant: ", pair, "eau: ", impair);
}

supply(ship);
