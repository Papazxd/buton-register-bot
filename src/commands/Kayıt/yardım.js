const moment = require("moment");
require("moment-duration-format");
const config = require("../../../config.json")

module.exports = {
    name: "yardım",
    aliases: ["y", "help"],

    execute: async (client, message, args, embed, author, channel, guild) => {
        message.reply({ embeds: [embed.setDescription(`
\`- ${config.bot.prefix}kke [@Kişi/ID]
- ${config.bot.prefix}isimler [@Kişi/ID]
- ${config.bot.prefix}kayıtsız-etiketle
- ${config.bot.prefix}ping
- ${config.bot.prefix}kayıt [@Kişi/ID] (isim-yaş)
- ${config.bot.prefix}isim [@Kişi/ID] (isim-yaş)
- ${config.bot.prefix}kayıtsız
- ${config.bot.prefix}top-kayıt [@Kişi/ID]
- ${config.bot.prefix}müzisyen [@Kişi/ID]
- ${config.bot.prefix}sponsor [@Kişi/ID]
- ${config.bot.prefix}vip [@Kişi/ID]
- ${config.bot.prefix}veri-sıfırla [@Kişi/ID]
- ${config.bot.prefix}eval (kod)
- ${config.bot.prefix}rolsüz (ver)
- ${config.bot.prefix}reboot\`
`)] }).catch((err) => console.log(err), client.ytick(message)).then((e) => setTimeout(() => { e.delete(); }, 60000));

    }
}
