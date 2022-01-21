const chalk = require('chalk')
const myNotes = require('./notes.js')


const notes = myNotes()
console.log(notes)

console.log(chalk.green.bold.inverse("Success!"))