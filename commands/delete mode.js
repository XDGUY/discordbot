const main = require("../index.js");

module.exports = {
    name:"dlm",
    description:"delete every word u typed",
    exec(m,args){
        if(args[0]==="on"){
            m.channel.send('delete mode on. channel is very dangerous now. GG');
            main.delid(m.channel.id);
            let data = JSON.stringify(m.channel.id);
            fs.writeFileSync('bot.json', data);
            return main.delboo(true);
        }
        else if(args[0]==="off"){
            m.channel.send('delete mode off. You can type now. Yeah!');
            return main.delboo(false);
        }
        return  m.channel.send(`
type 'dlm on' to activate the delete mode, 
            'dlm off' to turn off the delete mode. 
            Alert! this is dangerous.
            `)
    }
}