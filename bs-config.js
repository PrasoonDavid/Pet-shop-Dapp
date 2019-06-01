module.export ={
    port:process.env.PORT,
    files: ["./**/*.{htm,css,html,js}"],
    server:{
        baseDir:["./src","./build/contracts"]
    }
}