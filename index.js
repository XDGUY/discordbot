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
    console.log('Ready! set! go!');
    client.user.setActivity(`chilling`, {type: "CUSTOM_STATUS"});
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
var deletes = false;
var delchannel;
function delid(id){
    delchannel = id;
}
function delboo(deltf){
    deletes = deltf;
}

exports.delboo = delboo;
exports.delid = delid;

client.on("message", m => {
    var args = m.content.slice(prefix.length).split(/ +/);
    if(!((m.author.id == "645608642627764236"))&&(deletes)&&(!(args[0]==="dlm")) && (m.channel.id === delchannel)){
        return m.delete();
    }
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
synatax error
on line 32.
                `);
            }else{
                return m.channel.send(`

                    Violets are Blue
A face like yours
belongs in a zoo
Don't you worry
I'll be there too,
Not in the cage
But laughing at you
                
                `);
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
