const config = require("../../../config.json")
const db = require('quick.db');
const Discord = require("discord.js");
const moment = require("moment");
const limit = new Map();
moment.locale("tr");
module.exports = {
    name: "etkinlik-seçim",
    aliases: ["etkinlik"],

    execute: async (client, message, args, embed, author, channel, guild) => {
        if (!message.member.permissions.has("ADMINISTRATOR") && !message.member.roles.cache.has(config.BoranGkdn.OwnerRole)) return message.reply({ embeds: [embed.setDescription(`Bu komutu kullanabilmek için öncelikle gerekli yetkin olmalı!`)] }).catch((err) => console.log(err), client.tick(message)).then((e) => setTimeout(() => { e.delete(); }, 10000));
  
      let button1 = new Discord.MessageButton()
          .setStyle('SUCCESS')
          .setEmoji('✔')
          .setLabel('Erişim AL')
          .setCustomId('etkinlik')
  
 
     
  
  
      let row = new Discord.MessageActionRow()
          .addComponents(button1, )
      
    
  
      message.channel.send({ content:`Kural filan yazmama Gerek olduğunu Düşünmüyorum hepiniz benim gibi Ruh Hastası Sinirli olduğunuzu 

biliyorum Konuyu uzatmadan Butona Tıkla Kanalların bazılarını göreceksin ilk adımda.
 
 Boost basarsan Crding kanalları açılacaktır Seviyorum seni Tekrar dan hoşgeldin.
  
      `, components: [row]  }) ;
  
  
  
  
    }
}
