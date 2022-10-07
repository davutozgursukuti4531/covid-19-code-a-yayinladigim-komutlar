const { Discord, EmbedBuilder } = require("discord.js")
const turkceSozlukApi = require("turkce-sozluk-api").default//modül Rexar#7189 a aittir

module.exports = {
    slash: false, 
    enable: true,
    name: ['tdk-isim', "tdk-isim-ara"],
    async execute(client, message, args) {

  let covid = args[0]

  if(!covid) return message.reply("Lütfen TDK'de aratmak istediğiniz isimi yazınız.")
  try {

const fetchedDatas = await turkceSozlukApi.IsimAnlamCekme(covid)
turkceSozlukApi.on("isimApiHata", () => {
return message.reply("Belirtilen isimi bulamadım.")
})
let embed = new EmbedBuilder()
.setTitle(covid+" Adının bilgileri")
.addFields{
{ name: "Ad:", value: fetchedDatas.ad },
{ name: "Anlam:", value: fetchedDatas.anlam },
{ name: "Cinsiyet", fetchedDatas.anlam },
)
.setColor("#FF0000")
      
 message.channel.send({ embeds: [embed]})
    }
}
