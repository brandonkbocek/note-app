const fs = require('fs')

fs.writeFileSync('notes.txt','My name is Brandon.')
fs.appendFileSync('notes.txt','\nNew line added.')

