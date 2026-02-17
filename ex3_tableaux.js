const notes = [12, 8, 15, 10, 7];

// 1. Calcul de la moyenne
let somme = 0;
for (let i = 0; i < notes.length; i++) {
  somme += notes[i];
}
// const somme = notes.reduce((acc, note) => acc + note, 0);

const moyenne = somme / notes.length;

// 2. Meilleure note
let meilleureNote = notes[0]; // On commence avec la première note
for (let i = 1; i < notes.length; i++) {
  if (notes[i] > meilleureNote) {
    meilleureNote = notes[i];
  }
}
// const meilleureNote = Math.max(...notes); 
// Math.max() retourne la plus grande valeur, et n'accepte pas un tableau directement.
// //L'opérateur Spread ... (trois petits points) décompose un tableau en une liste de valeurs séparées.

// 3. Nombre de notes ≥ 10
let notesSupOuEgal10 = 0;
for (let i = 0; i < notes.length; i++) {
  if (notes[i] >= 10) {
    notesSupOuEgal10++;
  }
}
// const notesSupOuEgal10 = notes.filter(note => note >= 10).length;

// Affichage du résumé
console.log("=== Résumé des notes ===");
console.log(`Notes : [${notes.join(", ")}]`);
console.log(`Moyenne : ${moyenne.toFixed(2)}/20`);
console.log(`Meilleure note : ${meilleureNote}/20`);
console.log(`Nombre de notes ≥ 10 : ${notesSupOuEgal10}`);