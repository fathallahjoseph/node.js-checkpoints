var generator = require('generate-password');

var password = generator.generate({
	length: 10,
	numbers: true
});console.log(password);
// I Install password generator with this key  npm install generate-password and
// i import it with var generator = require('generate-password') to make random password 