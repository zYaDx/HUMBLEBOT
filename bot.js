const Discord = require("discord.js");
const client = new Discord.Client();
var prefix = "#";
client.on('message', message => {
    if (message.content == "#سرعddصبسه") {
        var x = ["DreamKing",
"DeathGames",
"زيرو كنج",
"أرض الأحلام",
"ألبرازيل",
"العراق",
"ألمملكة ألعربية ألسعودية",
"القسطنطينية",
"النهاية",
"امازون",
"جافاسكربت",
"سهله مو صعبه",
"طبق رطب مرق بقر",
"متجر",
"شجرة الأوغيري",
"عش العصفور",
"هلا بلخميس",
"الحوت الأزرق",
"بلاد الرافدين",
"كانيكي",
"توكا",
"عادل امام",
"عمرو ذياب",
"عمان",
"مسقط",
"بغداد عاصمة العراق",
"Playing Minecraft",
"Music",
"FaceBooK",
"YouTube",
"Infinity",
"احبك دريم",
"Don't Let Me Down",
"Space",
"Instgram",
"Google",
"Viber",
];
        var x2 = ['DreamKing',
        "DeathGames",
        "زيرو كنج",
        "أرض الأحلام",
		"ألبرازيل",
		"العراق",
		"ألمملكة ألعربية ألسعودية",
		"القسطنطينية",
		"النهاية",
		"امازون",
		"جافاسكربت",
		"سهله مو صعبه",
		"طبق رطب مرق بقر",
		"متجر",
		"شجرة الأوغيري",
		"عش العصفور",
		"هلا بلخميس",
		"الحوت الأزرق",
        "بلاد الرافدين",
        "كانيكي",
        "توكا",
        "عادل امام",
        "عمرو ذياب",
        "عمان",
        "مسقط",
        "بغداد عاصمة العراق",
        "Playing Minecraft",
        "Music",
        "FaceBooK",
        "YouTube",
        "Infinity",
        "احبك دريم",
        "Don't Let Me Down",
		"Space",
		"Instgram",
		"Google",
		"Viber",
		
        
        
        
        
        ];
        
        var x3 = Math.floor(Math.random()*x.length)
        message.channel.send(` اول شخص يكتب :  __**${x[x3]}**__
لديك 15 ثانية للاجابة`).then(msg1=> {
            var r = message.channel.awaitMessages(msg => msg.content == x2[x3], {
                maxMatches : 1,
                time : 15000,
                errors : ['time']
            })
        r.catch(() => {
            return message.channel.send(`:negative_squared_cross_mark: لقد انتهى الوقت ولم يقم أحد بالأجابة بشكل صحيح 
            الإجآبة الصحيحةة هي __**${x2[x3]}**__`)
        })
        
        r.then((collected)=> {
            message.channel.send(`${collected.first().author} لقد قمت بكتابة الكلمة في الوقت المناسب  `);
        })
        })
    }
})

client.on('message', puz => {
    if (puz.content == "#لdst3weبسغز") {
        var x = ["ما هي حاسة الشم عند الثعبان ؟",
"ما هو الشي الذي يكسو الناس و هو عار بدون ملابس ؟",
"ما هو الشي الذي لا يجري و لا يمشي ؟",
"ما هو إسم الشهر الميلادي الذي إذا حذفت أوله , تحول إلى إسم فاكهه ؟",
"ما هو الشي الذي لا يدخل الإ إذا ضرب على رأسه ؟",
"ما هو الشيء الذي اسمه على لونه ؟",
"ما هو الشي الذي كلما زاد نقص ؟",
"ما هي التي تحرق نفسها لتفيد غيرها ؟",
"كله ثقوب و مع ذلك يحفظ الماء ؟",
"ما هو الذي لحمه من الداخل و عظمه من الخارج ؟",
"يستطيع ان يخترق الزجاج من دون كسره .. فما هو ؟",
];
        var x2 = ['اللسان',
		"الابره",
        "الماء",
		"تموز",
		"المسمار",
		"البيضة",
		"العمر",
		"الشمعة",
		"الاسفنج",
		"السلحفاة",
		"الضوء",
        
        
        
        
        ];
        
        var x3 = Math.floor(Math.random()*x.length)
        puz.channel.send(`السؤال هو:  __**${x[x3]}**__
لديك 20 ثانية للاجابة`).then(msg1=> {
            var r = puz.channel.awaitMessages(msg => msg.content == x2[x3], {
                maxMatches : 1,
                time : 20000,
                errors : ['time']
            })
        r.catch(() => {
            return puz.channel.send(`:negative_squared_cross_mark: لقد انتهى الوقت ولم يقم أحد بالأجابة بشكل صحيح 
            `)
        })
        
        r.then((collected)=> {
            puz.channel.send(`${collected.first().author} لقد قمت بحل اللغز في الوقت المناسب  `);
        })
        })
    }
})

client.on('message', fkk => {
    if (fkk.content == "#فشصبسAwfsكك") {
        var x = ["المتاح للجميع لا يتاح لي",
"خعاخع",
"فيلا",
"بريء",
"بسم الله الرحمن الرحيم",
"الضرورة",
"دنيا",
"صارم",
"مات",
"شعبان شبعان",
"ألعراق",
];
        var x2 = ['ا ل م ت ا ح ل ل ج م ي ع ل ا ي ت ا ح ل ى',
		"خ ع ا خ ع",
        "ف ي ل ا",
		"ب ر ي ء",
		"ب س م ا ل ل ه ا ل ر ح م ن ا ل ر ح ي م",
		"ا ل ض ر و ر ة",
		"د ن ي ا",
		"ص ا ر م",
		"م ا ت",
		"ش ع ب ا ن ش ب ع ا ن",
		"أ ل ع ر ا ق",
        
        
        
        
        ];
        
        var x3 = Math.floor(Math.random()*x.length)
        fkk.channel.send(`اول شخص يفكك :  __**${x[x3]}**__
لديك 15 ثانية للاجابة`).then(msg1=> {
            var r = fkk.channel.awaitMessages(msg => msg.content == x2[x3], {
                maxMatches : 1,
                time : 15000,
                errors : ['time']
            })
        r.catch(() => {
            return fkk.channel.send(`:negative_squared_cross_mark: لقد انتهى الوقت ولم يقم أحد بالأجابة بشكل صحيح 
            الإجآبة الصحيحةة هي __**${x2[x3]}**__`)
        })
        
        r.then((collected)=> {
            fkk.channel.send(`${collected.first().author} لقد قمت بفكيك الجملة في الوقت المناسب`);
        })
        })
    }
})


client.on('ready', () => {
   console.log(`----------------`);
      console.log(`Cyhper Script By : ZyTon#5555 `);
        console.log(`----------------`);
      console.log(`ON ${client.guilds.size} Servers '     Script By : ZyTon#5555 ' `);
    console.log(`----------------`);
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(``,"")
client.user.setStatus("online")
});



// Giveaway BOT

client.on('message',async message => {
    const moment = require('moment'); 
const ms = require('ms') 
  var time = moment().format('Do MMMM YYYY , hh:mm');
  var room;
  var title;
  var duration;
  var currentTime = new Date(),
hours = currentTime.getHours() + 3 ,
minutes = currentTime.getMinutes(),
done = currentTime.getMinutes() + duration,
seconds = currentTime.getSeconds();
if (minutes < 10) {
minutes = "0" + minutes;
}
var suffix = "AM";
if (hours >= 12) {
suffix = "PM";
hours = hours - 12;
}
if (hours == 0) {
hours = 12;
}
 
  var filter = m => m.author.id === message.author.id;
  if(message.content.startsWith(prefix + "gcreate")) {
 
 
 
 
 
    if(!message.guild.member(message.author).hasPermission('MANAGE_GUILD')) return message.channel.send("You dont have MANAGE_GUILD Permission!");
    message.channel.send("!يرجى إدخال أسم الروم").then(msg => {
      message.channel.awaitMessages(filter, {
        max: 1,
        time: 20000,
        errors: ['time']
      }).then(collected => {
        let room = message.guild.channels.find('name' , collected.first().content);
        if(!room) return message.channel.send("!لا يوجد روم بهذا الأسم");
        room = collected.first().content;
        collected.first().delete();
        msg.edit("Please send the time..").then(msg => {
          message.channel.awaitMessages(filter, {
            max: 1,
            time: 20000,
            errors: ['time']
          }).then(collected => {
            if(!collected.first().content.match(/[1-60][s,m,h,d,w]/g)) return message.channel.send("Wrong Time format EXample: \n1s / 1m /1h / 1d/ 1w");
            duration = collected.first().content
            collected.first().delete();
            msg.edit("!يرجى كتابة اسم القيف اواي").then(msg => {
              message.channel.awaitMessages(filter, {
                max: 1,
                time: 20000,
                errors: ['time']
              }).then(collected => {
                title = collected.first().content;
                collected.first().delete();
                msg.delete();
                message.delete();
                try {
                  let giveEmbed = new Discord.RichEmbed()
                  .setColor("GREEN")
                  .setTitle(`${title}`)
                  .setDescription(`React With 🎉 To Enter! \nTime remaining : ${duration} \n **Created at :** ${hours}:${minutes}:${seconds} ${suffix}`)
                  message.guild.channels.find("name" , room).send(' :tada: **Giveaway** :tada:' , {embed: giveEmbed}).then(m => {
                     let re = m.react('🎉');
                     setTimeout(() => {
                       let users = m.reactions.get("🎉").users;
                       let list = users.array().filter(u => u.id !== m.author.id !== client.user.id);
                       let gFilter = list[Math.floor(Math.random() * list.length) + 1]
                       if(gFilter === undefined) { 
                       let endEmbed = new Discord.RichEmbed()
                       .setColor("RED")
                       .setTitle(title)
                       .setDescription(`Winners : لا يــوجد عدد كـافي من المشـاركين لـذلك لا يــوجد فائـزين`)
                       .setFooter("Ended at :")
                       .setTimestamp()
                     m.edit('** 🎉 GIVEAWAY ENDED 🎉**' , {embed: endEmbed});
                     m.clearReactions();
                       } else {
                         let endEmbed = new Discord.RichEmbed()
                       .setColor("GREEN")
                       .setTitle(title)
                       .setDescription(`Winners : ${gFilter}`)
                       .setFooter("Ended at :")
                       .setTimestamp()
                     m.edit('** 🎉 GIVEAWAY ENDED 🎉**' , {embed: endEmbed});
                       }
                       if(gFilter === undefined) { 
 
                       } else {
                    message.guild.channels.find("name" , room).send(`**Congratulations ${gFilter}! You won The \`${title}\`**`) }
                }, ms(duration));
                     
            });
                } catch(e) {
                message.channel.send(`:heavy_multiplication_x:| **لآ امتلك صلاحية**`);
                  console.log(e);
                }
              });
            });
          });
        });
      });
    });
  }
});







var reportcool = new Set();
client.on('message', message => {
    if(message.content.startsWith(prefix+"watchdogreport") || message.content.startsWith(prefix+"wdr") || message.content.startsWith(prefix+"report")||message.content.startsWith(prefix+"wdreport")){
       message.delete()
        if(message.author.bot) return botMSG();
        if(message.channel.type == "dm") return DMMSG();
 
        if(reportcool.has(message.author)) return message.channel.send("You can report every 3min!")
        var usedcmd = message.content.split(" ")[0]
        var mention = message.mentions.users.first();
        var proof = message.content.split(" ")[2];
 
 
        var channel = message.guild.channels.find('name', 'reports');
 
        if(!channel) return message.channel.send("I cant find reports channel please contact a staff member!")
 
 
        var reason = message.content.split(" ").slice(3).join(" ");
 
 
        if(!mention) return message.reply("please mention the user")
        if(mention.id == message.author.id) return message.reply("You can not report your self") 
        if(mention.bot) return message.reply('You cant report bots!')
        if(message.guild.member(mention).hasPermission("MANAGE_ROLES")) return message.reply('You are not able to report '+mention.username+'.');
 
 
        if(!proof) return message.channel.send("Please give us proof example picture link.")
 
 
        if(!reason) return message.channel.send(`You need to write the reason.. (Usage: ${usedcmd} <mention user> <proof> <reason>)`)
 
 
        var embed1 = new Discord.RichEmbed()
        .setTitle(`New Report by ${message.author.username}`)
        .setThumbnail(message.author.avatarURL)
        .setColor('RED')
        .addField('reporter: ', `${message.author.username}#${message.author.discriminator} (ID: ${message.author.id})`, true)
        .addField('Reported: ', `${mention.username}#${mention.discriminator} (ID: ${mention.id})`, false)
        .addField('Time: ', `${moment(message.createdAt).format('DD/MM/YYYY h:mm a')}`, true)
        .addField('InChannel: ', `#${message.channel.name}`, false)
        .addField('Proof: ', `${proof}`, true)
        .addField('Reason: ', reason, false)
        .setFooter(message.guild.name, message.guild.iconURL)
 
        channel.send(embed1)
        message.channel.send("You report was sent. Thanks for your report!")
        reportcool.add(message.author)
        setTimeout(async function(){
            reportcool.delete(message.author)
 
        }, 1000 * 192)
 
 
 
    }
})



client.login(process.env.BOT_TOKEN);// لا تغير فيها شيء
