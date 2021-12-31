const { describe, string, argv, number } = require('yargs')
const yargs = require('yargs')
const data = require('./movie.js')

// create add
yargs.command({
    command: 'add',
    describe: 'add a Movie',
    builder:{
        Moviename:{
            describe:'Adding a Movie',
            demandOption: true,
            type: string
        },
        director:{
            describe:'Directed a Movie',
            demandOption: true,
            type: string
        },
        MusicDirector:{
            describe: 'Music director',
            demandOption: true,
            type: string
        },
        Cast:{
            describe: 'Casting',
            demandOption: true,
            type: Number
        },
        Rating:{
            describe:"Rating a Movie",
            demandOption: true,
            type: Number
        }

    },
    handler: function(argv){
        data.addMovie(argv.Moviename,argv.director,argv.MusicDirector,argv.Cast,argv.Rating)
    }
})

// create remove
yargs.command({
    command: 'remove',
    describe: 'Remove a Movie',
    builder:{
        Moviename:{
            describe: 'remove a title',
            demandOption: true,
            type:string
        }
    },
    handler: function(argv){
        data.removeMovie(argv.Moviename)
    }
})

//create director to filter
yargs.command({
    command:'directorlist',
    describe:'filtering a movie',
    builder:{
        director:{
            describe: 'Directing',
            demandOption: true,
            type: string
        }
    },
    handler: function(argv){
        data.filterDirector(argv.director)
    }
})

//create cast to filter
yargs.command({
    command: 'Actor',
    describe: 'Casting a Movie',
    builder:{
        Cast:{
            describe: 'Casting',
            demandOption: true,
            type: Number
        }
    },
    handler: function(argv){
        data.listbycast(argv.Cast)
    }
})

// create list
yargs.command({
    command:'list',
    describe:'List all Movies',
    handler: function(){
        data.ListMovie()
    }
})

yargs.parse()