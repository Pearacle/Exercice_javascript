let ticket = {
    nomFilm: "The FORGE",
    prix: 5000,
    numeroSalle: "S02"
}

let nom = "Peace"

// “Bonjour NOM, votre film NOMDEFILM est en salle NUMERODELASALLE”.

let texteAffichage = "Bonjour " + nom + ", Votre film " + ticket.nomFilm + " est en salle " + ticket.numeroSalle


console.log(texteAffichage)