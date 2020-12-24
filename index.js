// require the discord.js module
const Discord = require('discord.js');

// create a new Discord client
const client = new Discord.Client();

// when the client is ready, run this code
// this event will only trigger one time after logging in
client.once('ready', () => {
	console.log('Ready!');
});

// listen for messages
client.on('message', message => {
	if (message.content === 'prefixhelp') {
		message.channel.send('PREFIX IS j/ (case sensitive, use a lovercase j');
	}
	if (message.content === 'j/help') {
		message.channel.send('ALL COMMANDS ARE ALL LOWERCASE: Known commands: prefixhelp, j/hello, j/test, j/suggest');
	}
	if (message.content === 'j/hello') {
		message.channel.send('Hi!');
	}
	if (message.content === 'j/test') {
		message.channel.send('yes very');
	}
	if (message.content === 'j/suggest') {
		message.channel.send('Join this server and follow the instructions to suggest: https://discord.gg/nT655UJMZk');
	}
});

// login to Discord with your app's token
client.login('NzYzNDQ0Nzk1NjgyOTc5ODk1.X33zXw.Z7s2W9bzFZzpl-IMF1m1R4pyip4');

