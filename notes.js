const chalk = require('chalk')
const fs = require('fs')

// const getNotes = (arg) => {
//     return arg
// }

const readNote = (title) => {
    const allnotes = loadNotes()
    const fnote = allnotes.find((note) => note.title === title)
    if(fnote){
        console.log(chalk.inverse(fnote.title))
        console.log(fnote.body)
    }
    else{
        console.log(chalk.red('No Note Found'))
    }
}

const addNote = (title, body) => {
    const notes = loadNotes()
    // const duplicateNotes = notes.filter((note) => note.title === title)
    const duplicateNote = notes.find((note) => note.title === title)
    
    if(!duplicateNote){
        notes.push({
            title: title,
            body: body
        })
    
        saveNotes(notes)
        console.log(chalk.bgGreen('New Note Added'))
    }
    else{
        console.log(chalk.bgRed('Note title Taken'))
    }

    
}

const listNotes = ()=>{
    const allnotes = loadNotes()
    console.log(chalk.inverse('Your Notes'))

    // allnotes.forEach((note)=>{
    //     console.log('Title:-> ' + note.title)
    // })
    allnotes.forEach((note)=>{
        console.log('Note Title: '+note.title)
    })
}

const removeNotes = (title) => {
    const notes = loadNotes()
    const notesp = notes.filter((note) => note.title !== title)
    if(notes.length > notesp.length){
       const msg = chalk.bgGreen('Note Removed')
        console.log(msg)
        saveNotes(notesp)
    }
    else{
        console.log(chalk.bgRed('Note Not Found'))
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
    }
    catch (e){
        return []
    }

    
}

module.exports = {
    addNote: addNote,
    removeNotes: removeNotes,
    listNotes: listNotes,
    readNote: readNote
}