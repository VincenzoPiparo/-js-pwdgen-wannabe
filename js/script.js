// Chiedi all’utente il suo nome,
// poi chiedi il suo cognome,
// poi chiedi il suo colore preferito
// Infine scrivi sulla pagina nomecognomecolorepreferito21

const nomeUtente = prompt ('Immetti qui il tuo nome');
console.log (nomeUtente)

const cognomeUtente = prompt ('Immetti qui il tuo cognome');
console.log (cognomeUtente)

const colorePreferito = prompt ('Immetti qui il tuo colore preferito');
console.log (colorePreferito)

document.getElementById ('user_data').innerHTML = nomeUtente + cognomeUtente + colorePreferito + 21

