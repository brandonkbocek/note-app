const fs = require('fs')
const chalk = require('chalk')

const getNotes = () => 'Your notes...'


const addNote = (title, body) => {
    const notes = loadNotes()
    const duplicateNote = notes.find((note) => note.title === title)

    if (!duplicateNote) {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log(chalk.green.inverse('New note added!'))
    } else {
        console.log(chalk.red.inverse('Note title taken'))
    }
    
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = () => {
    try{
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (e) {
        return []
    }
    
}

const removeNote = (title) => {
    const notes = loadNotes()
    const updatedNotes = notes.filter((note) => note.title !== title)

    if (updatedNotes.length < notes.length) {
        saveNotes(updatedNotes)
        console.log(chalk.green.inverse('Note was removed'))
    } else {
        console.log(chalk.red.inverse('That note does not exist'))
    }
}

const listNotes = () => {
    const notes = loadNotes()
    console.log(chalk.bgBlack.underline.bold('-- Your notes below --'))
    notes.forEach(note => console.log(chalk.bgBlack.bold(note.title)));
}

const readNote = (title) => {
    const notes = loadNotes()
    const readNote = notes.find((note) => note.title === title)
    if(!readNote){
        console.log(chalk.red('That note does not exist'))
    } else {
        console.log(chalk.underline.bgBlack("-- Note Found --"))
        console.log(chalk.bgBlack(readNote.title))
        console.log(chalk.bgBlack(readNote.body))
    }
}

module.exports = {
    getNote: getNotes,
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
}