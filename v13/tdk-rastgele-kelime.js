const { Discord, MessageEmbed } = require("discord.js")
const turkceSozlukApi = require("turkce-sozluk-api").default//modül Rexar#7189 a aittir

module.exports = {
    slash: false, 
    enable: true,
    name: ['tdk-rastgele-eklime'],
    async execute(client, message, args) {
  let covid = args[0]//hangi harfle başlayacağı
  const randomSayi = Math.floor(Math.random()*(Math.floor(5000) - Math.ceil(1) + 1)) + 1;//5000 i arttırabilirsiniz, fakat 1 yazan yerlere ellemeyin.
  if(covid){
        const fetchedDatas = await turkceSozlukApi.IdIleKelimeAnlamCekme(covid + randomSayi)
 let embed = new MessageEmbed()
.addField('Kelime:', fetchedDatas.kelime)
.setColor("AQUA")   
message.channel.send({ embeds: [embed]})
    } else {
//eğer harf belirtilmemişse
const fetchedDatas = await turkceSozlukApi.IdIleKelimeAnlamCekme(randomSayi)
 let embed = new MessageEmbed()
.addField('Kelime:', fetchedDatas.kelime)
.setColor("AQUA")   
message.channel.send({ embeds: [embed]})
    }
}
}
