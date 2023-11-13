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

      message.guild.members.cache.forEach(member => {
        if (member.id !== client.user.id && !member.user.bot) member.send(title).catch(() => {});
      });

      } else timedOut = true

    if (timedOut)
    channel.send('Comando cancelado')

}



module.exports.help = {
    name: "dm",
    aliases: [],
    category: "MassDM",
    usage: "<message>",
    description: "Manda Mensagem pra geral kk"
}