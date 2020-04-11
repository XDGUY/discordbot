const main = require("../index.js");
const fs = require('fs');

module.exports = {
    name:"dlm",
    description:"delete every word u typed",
    exec(m,args){
        if(args[0]==="on"){
            m.channel.send('delete mode on. channel is very dangerous now. GG');
            return main.delidboo(m.channel.id,true);
        }
        else if(args[0]==="off"){
            m.channel.send('delete mode off. You can type now. Yeah!');
            return main.delidboo(false);
        }
        return  m.channel.send(`
type 'dlm on' to activate the delete mode, 
            'dlm off' to turn off the delete mode. 
            Alert! this is dangerous.
            `)
    }
}