const fs = require('fs');
fs.readdir('./',(err, content)=>{
    if(err) return err;
  //  console.log(content);
});
fs.readFile('global.html','ascii',(err,content)=>{
    if (err) return err;
   // console.log(content);
});
// fs.writeFile('lol.txt','hello this is nd file :\') ','utf-8',(err)=>{
//     if (err) return err;
// });
if(!fs.existsSync('test')){
fs.mkdir('test',(err)=>{
    if(err) return err;
});
}else{
    fs.rmdir('test',(err)=>{
        if (err) return err;
    });
}
fs.rename('test','nooo',(err)=>{
   if (err) console.log(err);
})