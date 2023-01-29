process.stdout.write('ask me someting ');
process.stdin.on('data',function (ans){
    console.log(ans.toString());
    process.exit();
})
