var fs = require('fs')

fs.readFile(process.argv[2], 'utf-8', function (err, buffer) {
    if(err) {
       return console.log(err)
    }
    console.log(buffer.split('\n').length - 1)
})


//异步的读取