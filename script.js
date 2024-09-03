// Inverser une chaîne :

function inverserChaine(chaine) {
  return chaine.split('').reverse().join('');
}



//Compter les caractères :

function compterCaracteres(chaine) {
  return chaine.length;
}

//Mettre les mots en majuscule :

function mettreMotsEnMajuscule(phrase) {
  return phrase.split(' ').map(mot => mot.charAt(0).toUpperCase() + mot.slice(1)).join(' ');
}

//Fonctions de tableau

//Rechercher le maximum :


function trouverMaximum(tableau) {
  return Math.max(...tableau);
}

//Rechercher le minimum :

function trouverMinimum(tableau) {
  return Math.min(...tableau);
}

//Somme d'un tableau :

function sommeTableau(tableau) {
  return tableau.reduce((accumulateur, valeur) => accumulateur + valeur, 0);
}

//Filtrer le tableau :

function filtrerTableau(tableau, condition) {
  return tableau.filter(condition);
}


//                                             Fonctions mathématiques


//Factorielle :

function factorielle(n) {
  if (n === 0 || n === 1) return 1;
  return n * factorielle(n - 1);
}

//Vérification des nombres premiers :

function estPremier(nombre) {
  if (nombre <= 1) return false;
  for (let i = 2; i <= Math.sqrt(nombre); i++) {
    if (nombre % i === 0) return false;
  }
  return true;
}

//Suite de Fibonacci :

function suiteFibonacci(n) {
  const fibonacci = [0, 1];
  for (let i = 2; i < n; i++) {
    fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
  }
  return fibonacci.slice(0, n);
}