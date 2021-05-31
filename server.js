const Discord = require('discord.js');
const client = new Discord.Client({ partials: ['MESSAGE', 'CHANNEL', 'REACTION'] });

var http = require("http");
  setInterval(function() {
    http.get("http://https://faster-than-love.herokuapp.com");
}, 300000);

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  
});

// client.on('', () => {
	
// });

client.on('messageReactionAdd', async (reaction, user) => {
	
	if (reaction.message.id == "848889467241758771"){
		
		var role;
		const message = reaction.message;
		const member = message.guild.members.cache.get(user.id);
		const emoji = reaction.emoji.name;
		
		if (emoji == "VALORANT"){
			role = message.guild.roles.cache.get("848886853607489557");
		}else
		if (emoji == "LOL"){
			role = message.guild.roles.cache.get("848892168876720189");
		}else
		if (emoji == "Brawlhalla"){
			role = message.guild.roles.cache.get("848893644252381234");
		}else return;
		
		member.roles.add(role);
	}
});

client.on('messageReactionRemove', async (reaction, user) => {
	
	if (reaction.message.id == "848889467241758771"){
		
		var role;
		const message = reaction.message;
		const member = message.guild.members.cache.get(user.id);
		const emoji = reaction.emoji.name;
		
		if (emoji == "VALORANT"){
			role = message.guild.roles.cache.get("848886853607489557");
		}else
		if (emoji == "LOL"){
			role = message.guild.roles.cache.get("848892168876720189");
		}else
		if (emoji == "Brawlhalla"){
			role = message.guild.roles.cache.get("848893644252381234");
		}else return;
		
		member.roles.remove(role);
	}
});

function rand_num(min, max) {
	return Math.floor((Math.random() * max) + min);
}

client.on('message', msg => {
	
	if (msg.author.bot) return;
	if (msg.content.split(" ")[0] != "!love") return;
		
	const command = msg.content.split(" ")[1];
	
	if (command == "help"){
		msg.channel.send("tu a tapé help");
	}
	
	if (command == "bifle"){
		msg.channel.send("🤨");
	}
	
});

client.login('ODQ4OTA1MTQyODcwMDgxNTk3.YLTahQ.6YeyWrE5hVLlaJPwAqDEvg7gKMU');