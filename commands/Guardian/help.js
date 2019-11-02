const Command = require('../../structures/Command');
const { MessageEmbed } = require('discord.js');

class Help extends Command {
    constructor(client) {
        super({
            name: 'help'
        });
        
        this.client = client;

    }
    
    exec(message) {
        
      // Create Embed
      const embed = new MessageEmbed()
        .setColor(0x7289DA)
        .setTitle('Server Protections.')
        .addField('➜ Getting Started', 'Ensure Guardian has the **administrator** permission and is **highest** on the role list.\nYou can view the action limits & change them using **\`#limits\`**.')
        .addField('➜ Commands', '\`#limits, #config, #recent, #pings, #help, #ping\`')
        .setFooter('Created By A39aR **!');
      
      // Send Embed
      message.channel.send(embed)
      
    }
    
}

module.exports = Help;
