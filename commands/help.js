const main = require("../index.js");

module.exports = {
    name:"pleh",
    description:"Get help",
    exec(m,args){
    m.channel.send(main.embedFrom(main.name(), `help:information_source:`, 
    `prefix is %(some commands start with %)
    
    throw: throw things
    speak: I can speak to you
    dlm: I delete everything you say. (Type on and off the activate and deactivate this function.)
    `, `0xe91e63`));
  }
}

//command not found type %pleh for more info:information_source:
//upside down word throw clear