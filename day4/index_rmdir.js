let fs = require('fs');

fs.rmdir('./day4/test', (err)=>{
    if(err){
        console.log("rmdir not success");
    }
    else{
        console.log('rmdir success');
    }
})
console.log("before rmdir");