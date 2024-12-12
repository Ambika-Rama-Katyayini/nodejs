let fs = require('fs');

fs.readdir('./day4/test', (err, data)=>{
    if(err){
        console.log('readdir not success');
    }
    else{
        console.log('readdir success');
        console.log(data);
        for(f of data){
            fs.readdir('./day4/test/' + f, (err, subdata)=>{
                if(err){
                    console.log(err);
                }
                else{
                    console.log(subdata);
                }
            })
        }
    }
})
console.log('before readdir');