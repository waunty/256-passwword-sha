const prompt = require('prompt');
const bcrypt = require('bcrypt');

prompt.start();
    prompt.get(['password', 'repeat_password'], function (err, result) {
    
    console.log('Command-line input received:');
    console.log('  password: ' + result.password);
    console.log('  repeat password: ' + result.repeat_password);

    if (result.password == result.repeat_password){
    bcrypt.hash(result.password, 10, function(err, hash) {
        console.log(hash);
    });
}
  });

  