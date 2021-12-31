const fs = require('fs')
const chalk = require('chalk')
const { title } = require('process')

const addMovie = function(Moviename, director, MusicDirector, Cast, Rating){
    
    const task = loadMovie()
    const newValue = task.filter(function (fill){
        return fill.Moviename === Moviename
    })

    if(newValue.length === 0){
        task.push({
            Moviename: Moviename,
            director: director,
            MusicDirector: MusicDirector,
            Cast: Cast,
            Rating: Rating
        })
        
        Savedata(task)
        console.log(chalk.green.inverse('New Movie Added'))
    }else{
        console.log(chalk.red.inverse('Movie Already Added!'))
    }
}


const removeMovie = function(Moviename){
    const task = loadMovie()
    const gone = task.filter( function(fill) {
        return fill.Moviename !== Moviename
    })
    if(task.length > gone.length){
        console.log(chalk.green.inverse('Movie Removed!'))
        Savedata(gone)
    } else {
        console.log(chalk.red.inverse('Movie Not Found!'))
    }
}


const filterDirector = function(director){
    const task = loadMovie()
    const name = task.filter( function(fill) {
        return fill.director === director
    });
    for(let i = 0; i < name.length; i++){
        console.log(name[i].Moviename)
    }

}

const listbycast = function(Cast){
    const task = loadMovie()
    const listCast = task.filter(function(fill){
        return fill.Cast.includes(Cast)
    })
       console.log(listCast)
    
    // for(let i = 0; i< listCast.length; i++){
    //     console.log(listCast[i].Moviename)
    // }
}
const ListMovie = function(){
    const task = loadMovie()
    const listallmovies = task.forEach( function (fill) {
        console.log(fill.Moviename)
     })
}

const Savedata = function(task){
      const dataJSON = JSON.stringify(task)
      fs.writeFileSync('jsontask.json',dataJSON)
}
     
const loadMovie = function(){
     try{
        const databuffer = fs.readFileSync('jsontask.json')
        const dataJSON = databuffer.toString()
        return JSON.parse(dataJSON)
      }catch(e){
        return []
    }
}

module.exports = {
    addMovie: addMovie,
    removeMovie: removeMovie,
    filterDirector: filterDirector,
    listbycast: listbycast,
    ListMovie: ListMovie
}