


let persona = {
nome : 'Marco',
cognome : 'Rossi',
età : '46',

saluto : function(){
    console.log(`Ciao mi chiamo ${this.nome} ${this.cognome} ed ho ${this.età} anni.`);
},

};

persona.saluto();









// Selfwork Oggetti 2 //

let agenda = {
    contatti : [
        {nome : 'Marco',
        phone : 23354456},
        {nome : 'Franco',
        phone : 23334456},
        {nome : 'Claudia',
        phone : 233511456},
        {nome : 'Maria',
        phone : 23354457},
        {nome : 'Sara',
        phone : 23354458},
        ],
// Elenco dei contatti
showContacts : function(){
    this.contatti.forEach((contact) => console.log(contact));
    
},
// Vedi singolo contatto
seeContact : function (contatto) {

    let cerca = this.contatti.find((contact) => contact.nome === contatto);
    if (cerca) {
        console.log(`${ cerca.nome }: ${ cerca.phone } `);
        
    }else {
        console.log(`${contatto} Non Presente in Agenda!`);
    }
    
},
// Rimuovi Contatto
removeContact : function (contattoDaRimuovere) {
    let index = this.contatti.findIndex((contact) => contact.nome === contattoDaRimuovere)
    if (index >= 0) {
this.contatti.splice(index, 1);
console.log(`${contattoDaRimuovere} è stato Rimosso`);
        
    }else{
        console.log(`${contattoDaRimuovere} non Trovato!`);
    };
    
},

// Aggiunge un nuovo contatto
addContact : function (aggiugiContatto, aggiungiTelefono ){
    let obj = { nome : aggiugiContatto, phone : aggiungiTelefono};
    this.contatti.push(obj);
},

// Modifica contatto

modifyContact : function (params) {
    
},

// Modifica contatto

modifyContact : function (nome, nuovoNumero) {
    let modifica = this.contatti.find((contact) => contact.nome === nome);
    if (modifica){
modifica.phone = nuovoNumero;
     console.log(`Telefono di ${nome} modificato! `)}
    else{
        console.log(`${nome} non presente in agenda!`)};

},





};


// Chiama Funzioni
agenda.showContacts();
agenda.seeContact('Marco');
agenda.removeContact('Sara');
agenda.addContact('Fabiana', 88776655)
agenda.modifyContact('Maria', 2314515);
agenda.showContacts();





// Selfwork Oggetti Nr. 3 

let bowling = {
    players: [
        {'name': 'Livio', 'scores': []},
        {'name': 'Paola', 'scores': []},
        {'name': 'Filippo', 'scores': []},
        {'name': 'Giuseppe', 'scores': []}
    ],
    


    // Crea un Nuovo Giocatore
    
    creaNuovoGiocatore : function (nome) {
    let nuovoGiocatore = {
        'name' : nome,
        'scores' : []
    };
    this.players.push(nuovoGiocatore);

    // ciclo per 10 Punteggi
for (let i = 0; i < 10; i++){
    let caso = Math.floor(Math.random() * (10 - 1 + 1) + 1); 
    nuovoGiocatore.scores.push(caso);
    };

    },
    

    // Visualizzare giocatori e Punteggi
    visualizza : function(){
    console.log(this.players);
},
    

 // Creare Punteggio casuale 
 punteggi: function(){
    this.players.forEach((player) => { let casuale = Math.floor(Math.random() * (10 - 1 + 1) + 1); player.scores.push(casuale);

    });
},

// Creare Ordine Classifica punteggi 

sommaOrdina : function () {
    this.players.forEach((player) => { player.totale = player.scores.reduce((acc, cur) => acc + cur);
        this.players.sort((a,b) => a.totale - b.totale );
        
    });

  
    
},


};
    





// Ciclo funzione per 10 volte
for (let i = 0; i < 10; i++){
bowling.punteggi();
};



    
// Chiamo funzione    
bowling.visualizza();
bowling.creaNuovoGiocatore('Sandro');
bowling.sommaOrdina();
bowling.visualizza();

