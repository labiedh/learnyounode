  var lsMod = require("./mymodule");

lsMod(process.argv[2],process.argv[3],function(err,files){
    if(err){
        console.err(err);
    } else {
        files.forEach(function(file){
            console.log(file);
        })
    }
})