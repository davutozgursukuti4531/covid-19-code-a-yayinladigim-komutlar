const { Discord, EmbedBuilder } = require("discord.js")
const rexarTools = require("rexar-tools").default//modül Rexar#7189 a aittir

module.exports = {
    slash: false, 
    enable: true,
    name: ['npm', 'npm-paket', "npm-paket-ara"],
    async execute(client, message, args) {

  let covid = args[0]

  if(!covid) return message.reply("Lütfen NPM de aratmak istediğiniz paketi yazınız.")
  try {

const fetchedDatas = await rexarTools.npm(covid)
let embed = new EmbedBuilder()
.setTitle(covid+" isimli paketin bilgileri")
.addFields(
    { name: "Paket Adı:", value: String(fetchedDatas.name)},
    { name: "Paket Sürümü:", value: String(fetchedDatas.version)},
    { name: "Paket Açıklaması:", value: String(fetchedDatas.description)},
    { name: "Anahtar Kelimeler:", value: String(fetchedDatas.keywords)},
    { name: "Paket Oluşturulma Tarihi:",
    value: String(fetchedDatas.createdDate)},
    { name: "Paket Son Modifiye Tarihi:",
     value: String(fetchedDatas.modifiedDate)},
    { name: "Github Repository:", value: String(fetchedDatas.repository)},
    { name: "Bugs:", value: String(fetchedDatas.bugs)},
    { name: "Anasayfa:", value: String(fetchedDatas.homepage)},
    { name: "Yapımcı:", value: String(fetchedDatas.author)},
    { name: "Lisans:", value: String(fetchedDatas.license)},
)
.addField("Lisans:", fetchedDatas.license)
.setColor("#FF0000")
      
 message.channel.send({ embeds: [embed]})
    }
}
