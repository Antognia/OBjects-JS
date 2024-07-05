// Crea un oggetto persona con le seguenti caratteristiche:
// nome
// cognome
// eta'
// un metodo che permetta di salutare


let persona = {
nome : 'Marco',
cognome : 'Rossi',
età : '46',

saluto : function(){
    console.log(`Ciao mi chiamo ${this.nome} ${this.cognome} ed ho ${this.età} anni.`);
},

};

persona.saluto();
