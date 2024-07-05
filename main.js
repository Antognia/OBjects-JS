


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

// Crea un oggetto agenda con una proprietà che comprenda una lista di contatti con un nome e un numero di telefono, ed abbia diverse funzionalità tra cui:
// mostrare tutti i contatti dell’agenda
// mostrare un singolo contatto
// eliminare un contatto dall’agenda
// aggiungere un nuovo contatto
// modificare un contatto esistente  


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

modifyContact : function (contattoDaModificare) {
    let modifica = this.contatti.findIndex((contact) => contact.nome === contattoDaModificare);
    if (modifica){
        




};


// Chiama Funzioni
agenda.showContacts();
agenda.seeContact('Marco');
agenda.removeContact('Sara');
agenda.showContacts();
agenda.addContact('Fabiana', 6271093);
agenda.showContacts();
