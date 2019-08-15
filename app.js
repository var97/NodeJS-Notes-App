const notes = require('./notes.js')
// const validator = require('validator')
const chalk = require('chalk')
const yargs  = require('yargs')

// const command = process.argv[2]

// console.log(process.argv)

//Customize Yargs Version
yargs.version('1.1.0')

// Create add command

yargs.command({
    command: 'add',
    description: 'Add a new note',
    builder: {
        title: {
            desrcibe: 'Note Title',
            demandOption: true,
            type: 'string'
        },
        body:{
            describe: 'Body of the Note',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        notes.addNote(argv.title, argv.body)
    }
})

//Create a remove command

yargs.command({
    command: 'remove',
    description: 'Remove a note',
    builder: {
        title:{
            describe: 'Remove the note',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        notes.removeNotes(argv.title)
    }
})

//Create a listing command

yargs.command({
    command: 'list',
    description: 'List all notes',
    handler(){
        notes.listNotes()
    }
})

//Create a read command

yargs.command({
    command: 'read',
    description: 'Read the note',
    builder:{
        title:{
            describe: 'Read a note',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        notes.readNote(argv.title)
    }
})

yargs.parse()

// console.log(yargs.argv)

// if(command === 'add') {
//     console.log('Adding Note')
// }
// else if (command === 'remove'){
//     console.log('Removing Note')
// }
// else{
//     console.log('No Data')
// }

// const notes = getNotes('Your Notes...')

// console.log(notes)

// const greenMsg = chalk.red.inverse.bold('Error!') 

// console.log(greenMsg)
// // console.log(validator.isURL('gmail.com'))

// console.log(process.argv[2])


