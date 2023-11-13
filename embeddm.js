const Discord = require("discord.js")
const whitelist = require("../../whitelist.json")
module.exports.execute = async (client, message) => {

  if(message.author.id !== whitelist.id && message.author.id !== whitelist.id2) return message.reply("Sai mlk tu não pode fazer isso")

    let timedOut = false
  
    const { channel, author } = message
  
    const isFromAuthor = m => m.author.id == author.id
  
    const options = {
      max: 1,
      time: 60 * 1000
    }
  
    await channel.send('Qual a mensagem fofo?')
    const firstColl = await channel.awaitMessages(isFromAuthor, options)
  
    if (firstColl.size > 0) {
      const title = firstColl.first().content

        const Embed = new Discord.MessageEmbed()
        .setAuthor(message.guild.name, message.guild.iconURL())
        .setDescription(title)
        .setFooter("oi fofo")
        .setTimestamp()

        message.guild.members.cache.forEach(member => {
          if (member.id !== client.user.id && !member.user.bot) member.send(Embed).catch(() => {});
        });

      } else timedOut = true

    if (timedOut)
    channel.send('Comando cancelado')

}



module.exports.help = {
    name: "edm",
    aliases: [],
    category: "MassDM",
    usage: "<message>",
    description: "Colocar mensagem no anúncio"
}