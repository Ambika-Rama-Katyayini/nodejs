let fs = require('fs');

fs.unlink('./day4/topics3.txt', (err)=>{
    if(err){
        console.log("unlink not success");
    }
    else{
        console.log("unlink success");
    }
})
console.log("before unlink");