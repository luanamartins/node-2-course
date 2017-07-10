console.log('Starting notes.js');

const fs = require('fs');


var fetchNotes = () => {
    try {
        var notesString = fs.readFileSync('data/notes-data.json');
        return JSON.parse(notesString);
    } catch(e) {
        return [];
    }
};

var saveNotes = (notes) => {
    fs.writeFileSync('data/notes-data.json', JSON.stringify(notes));
};

var addNote = (title, body) => {
    var notes = fetchNotes();
    var note = {
        title,
        body
    };

    var duplicateNotes = notes.filter((note) => note.title == title);

    if(duplicateNotes.length == 0){
        notes.push(note);
        saveNotes(notes);
        return note;
    }
};

var getAll = () => {
    console.log('Getting all notes.');
};

var getNote = (title) => {
    console.log('Getting note', title);
    var notes = fetchNotes();
    var filteredNodes = notes.filter((note) => note.title === title);
    return filteredNodes[0];
};

var removeNote = (title) => {
    console.log('Removing note', title);
    var notes = fetchNotes();
    var filteredNotes = notes.filter((note) => note.title !== title);
    saveNotes(filteredNotes);
    return notes.length !== filteredNotes.length;
};

module.exports = {
    addNote,
    getAll,
    getNote,
    removeNote
};


// module.exports.addNote = function(){
//   console.log('addNote');
//   return 'New Note';
// };
//
//
// module.exports.add = function(number1, number2){
//   return number1 + number2;
// };
