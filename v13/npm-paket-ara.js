const { Discord, MessageEmbed } = require("discord.js")
const rexarTools = require("rexar-tools").default//modül Rexar#7189 a aittir

module.exports = {
    slash: false, 
    enable: true,
    name: ['npm', 'npm-paket', "npm-paket-ara"],
    async execute(client, message, args) {

  let covid = args[0]

  if(!covid]) return message.reply("Lütfen NPM de aratmak istediğiniz paketi yazınız.")
  try {

const fetchedDatas = await rexarTools.npm(covid)
let embed = new MessageEmbed()
.setTitle(covid+" isimli paketin bilgileri")
.addField("Paket Adı:", fetchedDatas.name)
.addField("Paket Sürümü:", fetchedDatas.anlam)
.addField("Paket Açıklaması:", fetchedDatas.description)
.addField("Anahtar Kelimeler:", fetchedDatas.keywords)
.addField("Paket Oluşturulma Tarihi:", fetchedDatas.createdDate)
.addField("Paket Son Modifiye Tarihi:", fetchedDatas.modifiedDate)
.addField("Github Repository:", fetchedDatas.repository)
.addField("Bugs:", fetchedDatas.bugs)
.addField("Anasayfa:", fetchedDatas.homepage)
.addField("Yapımcı:", fetchedDatas.author)
.addField("Lisans:", fetchedDatas.license)
.setColor("#FF0000")
      
 message.channel.send({ embeds: [embed]})
    }
}
