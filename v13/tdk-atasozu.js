const { Discord, MessageEmbed } = require("discord.js")
const turkceSozlukApi = require("turkce-sozluk-api").default//modül Rexar#7189 a aittir

module.exports = {
    slash: false, 
    enable: true,
    name: ['tdk-atasozu', 'tdk-atasozu-ara'],
    async execute(client, message, args) {

  let covid = args.join(" ")

  if(!args[0]) return message.reply("Lütfen Tdk Da aratmak istediğiniz Atasözü/Deyim'i yazınız.")
  try {

const fetchedDatas = await turkceSozlukApi.AtasozuDeyimAnlamCekme(covid)
turkceSozlukApi.on("atasozuDeyimApiHata", () => {
message.reply("Atasözü/Deyim Bulunamadı.")
})
 let embed = new MessageEmbed()
.setTitle(covid+" isimli Atasözü/Deyim'in tdk bilgileri")
.addField("Söz:", fetchedDatas.soz)
.addField("Anlam:", fetchedDatas.anlam)
.addField("Anahtar Kelimeler:", fetchedDatas.anahtar_kelimeler)
.addField("Atasözü Mü? Deyim Mi?", fetchedDatas.atasozu_deyim)
.setColor("AQUA")
      
 message.channel.send({ embeds: [embed]})
    }
}
