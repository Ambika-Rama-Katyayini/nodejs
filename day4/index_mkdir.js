let fs = require('fs');

fs.mkdir('./day4/test/sub1/index.txt', (err)=>{
    if(err){
        console.log('mkdir not success');
    }
    else{
        console.log('mkdir success');
    }
})
console.log('before mkdir');