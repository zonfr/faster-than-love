const Discord = require('discord.js');
const client = new Discord.Client({ partials: ['MESSAGE', 'CHANNEL', 'REACTION'] });
const keepAlive = require("./server");

var qwant = require("qwant-api");

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
	if (msg.content.split(" ")[0] != "!love" || msg.content.split(" ").length == 0) return;
		
	const command = msg.content.split(" ")[1];
	const args1 = msg.content.split(" ").length > 2 ? msg.content.split(" ")[2] : null;
	const args2 = msg.content.split(" ").length > 3 ? msg.content.split(" ")[3] : null;
	
	if (command == "help"){
		msg.channel.send("tu a tapé help");
	}
	
	if (command == "kiss"){
		
		if (!args1 || !args2) return;
		
		qwant.search("images", { query: "manga bisous", count: 1, offset: 1, language: "french" }, function(err, data){
			if (err) return console.log(err)
			
			const kissEmbed = new Discord.MessageEmbed()
			kissEmbed.setColor('#FF448F');
			kissEmbed.setTitle("hhoHoooho");
			kissEmbed.setDescription("Une belle histoire d'amour commence entre " + msg.mentions.users.first.username +  + msg.mentions.users.last.username);
			kissEmbed.setImage(data["data"]["result"]["items"][int(rand_num(0, 35))]["media"]);
			
			msg.channel.send(kissEmbed);
		});
	}
	
	if (command == "bifle"){
		msg.channel.send("🤨");
	}
	
});

keepAlive();
client.login(process.env.TOKEN);