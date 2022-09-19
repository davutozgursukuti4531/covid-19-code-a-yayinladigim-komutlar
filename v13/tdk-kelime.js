const { Discord, MessageEmbed } = require("discord.js")
const turkceSozlukApi = require("turkce-sozluk-api").default//modül Rexar#7189 a aittir

module.exports = {
    slash: false, 
    enable: true,
    name: ['tdk-kelime', 'tdk-kelime-ara'],
    async execute(client, message, args) {

  let covid = args[0]

  if(!covid) return message.reply('Lütfen Tdk Da aratmak istediğiniz kelimeyi yazınız')
  try {

        const fetchedDatas = await turkceSozlukApi.KelimeAnlamCekme(covid)
turkceSozlukApi.on("kelimeApiHata", () => {
message.reply("Kelime Bulunamadı.")
})
 let embed = new MessageEmbed()
.setTitle(covid+' isimli Kelimenin tdk bilgileri')
.addField('Arattığınız Kelimenin Anlamı:', fetchedDatas.anlam)
.addField('Arattığınız Kelimenin 2. Anlamı:', fetchedDatas.ikinci_anlam === undefined ? "Bulunamadı": fetchedDatas.ikinci_anlam)
.addField('Arattığınız Kelimenin 3. Anlamı:', fetchedDatas.ucuncu_anlam === undefined ? "Bulunamadı": fetchedDatas.ucuncu_anlam)
.addField('Arattığınız Kelimenin 4. Anlamı:', fetchedDatas.dorduncu_anlam === undefined ? "Bulunamadı": fetchedDatas.dorduncu_anlam)
.addField('Arattığınız Kelimenin 5. Anlamı:', fetchedDatas.besinci_anlam === undefined ? "Bulunamadı": fetchedDatas.besinci_anlam)
.addField('Örnek:', fetchedDatas.ornek !== undefined ? fetchedDatas.ornek : "Örnek Bulunamadı")
.addField('İkinci Örnek:', fetchedDatas.ikinci_ornek !== undefined ? fetchedDatas.ikinci_ornek : "2. Örnek Bulunamadı")
.addField("Atasözü/Deyim", fetchedDatas.atasozu_deyim !== undefined ? fetchedDatas.atasozu_deyim : "Atasözü/Deyim bulunamadı")
.addField('Çoğul mu:', fetchedDatas.cogul_mu ? "Evet" : "Hayır")
.addField('Özel Mi:', fetchedDatas.ozel_mi ? "Evet" : "Hayır")
.addField('Birleşikler:', fetchedDatas.birlesikler !== undefined ? fetchedDatas.birlesikler : "Bulunamadı" )
.addField("Ses Dosya URL:", `https://sozluk.gov.tr/ses/${fetchedDatas.ses_kodu}.wav`)
.setColor("AQUA")
      
      message.channel.send({ embeds: [embed]})
    }
}
