const Discord = require('discord.js');
const client = new Discord.Client();
const {prefix} = require ("./bot.json");
const fs = require('fs');
const token = process.env.token;

function name(){
    return `ʇoq 0773H`;
}

exports.name = name;

function embedFrom(author,title,msg,color){
    const embed = new Discord.MessageEmbed()
    .setColor(color)
    .setTitle(title)
    .setAuthor(author)
    .setDescription(msg);
    return embed;
}

exports.embedFrom = embedFrom;

client.once('ready', () => {
    console.log('Ready!');
});



client.login(token);

//commands
client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}

var isLastThrow = false;


const exampleEmbed = new Discord.MessageEmbed()
    .setColor('#0099ff')
	.setTitle('Some title')
	.setURL('https://discord.js.org/')
	.setAuthor('ʇoq 0773H', 'data:image/jpeg;base64,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', 'https://discord.js.org')
	.setDescription('你好')
	.setThumbnail('https://i.imgur.com/wSTFkRM.png')
	.addFields(
		{ name: 'Regular field title', value: 'Some value here' },
		{ name: '\u200B', value: '\u200B' },
		{ name: 'Inline field title', value: 'Some value here', inline: true },
		{ name: 'Inline field title', value: 'Some value here', inline: true },
	)
	.addField('Inline field title', 'Some value here', true)
	.setImage('https://i.imgur.com/wSTFkRM.png')
	.setTimestamp()
    .setFooter('Some footer text here', 'https://i.imgur.com/wSTFkRM.png');
    


client.on("message", m => {
    var args = m.content.slice(prefix.length).split(/ +/);
    if(m.content === "Eric..."){
        return m.channel.send("You know, you should be delighted to be an easter egg of all bots. ")
        }


    if(m.content === "bot rule"){
        return m.channel.send(
        embedFrom('', `bot rule：:robot:`, `First Law
            A robot may not injure a human being or, through inaction, allow a human being to come to harm.
            Second Law
            A robot must obey the orders given it by human beings except where such orders would conflict with the First Law.
            Third Law
            A robot must protect its own existence as long as such protection does not conflict with the First or Second Laws.`,`#ffffff`));
        }

        if(m.content === "roses are red"){
            if(Math.floor(Math.random()*2) == 1){
                return m.channel.send(`
                Violets are Blue
                Unexpected '{'
                on line 32.`);
            }else{
                return m.channel.send(`
                Violets are Blue
                A face like yours
                belongs in a zoo
                Don't you worry
                I'll be there too,
                Not in the cage
                But laughing at you`);
            }
        }

    if(m.content === "this is the word of the lord"){
        return m.channel.send("Thanks be to god!")
        }

    if(m.content === "all for each"){
        return m.channel.send("each for all.")
        }
    
    if(!(m.content.startsWith(prefix))){
        return ;
    }

    var cmd = args.shift().toLowerCase();

    if (cmd==="speak"){
        return m.channel.send(`0773H Nice to meet you:grin: ${m.author}`);
    }
    if (cmd==="echo"){
        return m.channel.send("echoooooooo0000000000000");
    }
    
    if(cmd === "throw"){
    isLastThrow = true;
    return m.channel.send("I don't have a strong arm. Please recommend me a gym.");
    }
    if(cmd === "gym" && isLastThrow){
        return m.channel.send("I am strong enough to perform projectile motion now. What do you want me to throw?");
    }
    isLastThrow = false;
    if (cmd==="name"){
        return m.channel.send("Try to read my name upside down.");
    }
    if(cmd==="shutdown"){
        m.channel.send("No, why are you doing this, please, nooooooooooooooooooooooooo!!!!!!!!!!");
        return m.channel.send("just kidding, I am always here watching you :eyes:");
    }
    if (cmd==="birthday"){
        return m.channel.send(":birthday:23-3-2020:birthday:");
    }
    
    if(!client.commands.has(cmd)){
        return m.channel.send('command not found type %pleh for more info:information_source:');
    }

    const command = client.commands.get(cmd);
    try{
        command.exec(m,args);
    }catch(error){
        console.error(error);
        m.reply('Error trying to execute that command!');
    }
});
