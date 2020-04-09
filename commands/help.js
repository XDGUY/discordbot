const main = require("../index.js");

module.exports = {
    name:"pleh",
    description:"Get help",
    exec(m,args){
    m.channel.send(main.embedFrom(main.name(), `help:information_source:`, 
    `prefix is %(some commands start with %)
    
    throw: throw things
    speak: I can speak to you
    dlm: 
    `, `ffffff`));
  }
}

//command not found type %pleh for more info:information_source:
//upside down word throw clear