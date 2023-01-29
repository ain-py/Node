var rl = require('readline');
var util = require('util');
var RL = rl.createInterface(process.stdin,process.stdout);
RL.question('YOOO : >>?',(ans)=>{
    console.log(ans);
    RL.setPrompt(`${ans} hpw old are you?`);
    RL.prompt();
    RL.on('line',(age)=>{
        if(age <18){
            console.log(`${ans}  you are ${age}`);
            RL.close();
        }else{
            console.log(`${age}`);
            RL.close();
        }
    })

})