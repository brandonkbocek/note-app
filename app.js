const chalk = require('chalk')
const yargs = require('yargs')
const myNotes = require('./notes.js')

//Customize yargs version
yargs.version('1.1.0')

//Create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    handler: function () {
        console.log('Adding a new note!')
    }
})

//Create remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    handler: function () {
        console.log('Removiong the note')
    }
})

//Create list command
yargs.command({
    command: 'list',
    describe: 'List the notes',
    handler: function () {
        console.log('Listing the notes')
    }
})

//reate read command
yargs.command({
    command: 'read',
    describe: 'reading the note',
    handler: function () {
        console.log('Reading the note')
    }
})



// add, remove, read, list

console.log(yargs.argv)
