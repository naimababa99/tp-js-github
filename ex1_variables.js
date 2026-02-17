function infosEtudiant(nom, note) {
  const resultat = note >= 10 ? "Admis" : "Ajourné";
  return `${nom} : ${note}/20 → ${resultat}`;
}

// Test
console.log(infosEtudiant("Hiba", 14)); // Hiba : 14/20 → Admis
console.log(infosEtudiant("Ali", 8));   // Ali : 8/20 → Ajourné