const Discord = require("discord.js");
const client = new Discord.Client();
var prefix = "-";


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
client.user.setGame(`Evloved Server`,"Evloved Server")
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





// Reaction Role
var stopReacord = true;
var reactionRoles = [];
var definedReactionRole = null;
 
client.on("message", async message => {
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
    if(message.author.bot) return;
    if(message.content.indexOf(prefix) !== 0) return;
    if (command == "autoc") {
      if(!message.channel.guild) return message.reply(`**this ~~command~~ __for servers only__**`);
      if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("sorry you can't do this");
      if(!args[0] || args[1]) return message.channel.send(`\`\`\`${prefix}autoC <role-name>\`\`\``);
      var role = message.guild.roles.find( role => { return role.name == args[0] });
      if(!role) return message.channel.send(`no role with name ${definedRoleName} found, make sure you entered correct name`);
      if(definedReactionRole != null  || !stopReacord) return message.channel.send("another reaction role request is running");
      message.channel.send(`now go and add reaction in the message you want for role ${role.name}`);
      definedReactionRole = role;
      stopReacord = false;
    }    
})
client.on('raw', raw => {
  if (!['MESSAGE_REACTION_ADD', 'MESSAGE_REACTION_REMOVE'].includes(raw.t)) return;
  var channel = client.channels.get(raw.d.channel_id);
  if (channel.messages.has(raw.d.message_id)) return;
  channel.fetchMessage(raw.d.message_id).then(message => {
    var reaction = message.reactions.get( (raw.d.emoji.id ? `${raw.d.emoji.name}:${raw.d.emoji.id}` : raw.d.emoji.name) );
    if (raw.t === 'MESSAGE_REACTION_ADD') return client.emit('messageReactionAdd', reaction, client.users.get(raw.d.user_id));
    if (raw.t === 'MESSAGE_REACTION_REMOVE') return client.emit('messageReactionRemove', reaction, client.users.get(raw.d.user_id));
  });
});
client.on('messageReactionAdd', (reaction, user) => {
    if(user.id == client.user.id) return;
    if(!stopReacord) {
      var done = false;
      reactionRoles[reaction.message.id] = { role: definedReactionRole, message_id: reaction.message.id, emoji: reaction.emoji};
      stopReacord =  true;
      definedReactionRole = null;
      reaction.message.react(reaction.emoji.name)
      .catch(err => {done = true; reaction.message.channel.send(`sorry i can't use this emoji but the reaction role done! anyone react will get the role!`)})
      if(done) reaction.remove(user);
    } else {
      var request = reactionRoles[reaction.message.id];
      if(!request) return;
      if(request.emoji.name != reaction.emoji.name) return reaction.remove(user);
      reaction.message.guild.members.get(user.id).addRole(request.role);
    }
})
 
client.on('messageReactionRemove', (reaction, user) => {
  if(user.id == client.user.id) return;
  if(!stopReacord) return;
  let request = reactionRoles[reaction.message.id];
  if(!request) return;
  reaction.message.guild.members.get(user.id).removeRole(request.role);
});



// UNBANNED
client.on('message', message =>{
  let command = message.content.split(" ")[0];
  if (command == prefix + "unban") {
  if(!message.member.hasPermission('BAN_MEMBERS')) return;
  let args = message.content.split(" ").slice(1).join(" ");
  if(args == 'all') {message.guild.fetchBans().then(zg => {
  zg.forEach(NoNo => {message.guild.unban(NoNo);})});
  return message.channel.send('**✅ Unbanned all members **')}
  if(!args) return message.channel.send('**Please Type the member ID / all**');
  message.guild.unban(args).then(m =>{message.channel.send(`**✅ Unbanned ${m.username}**`);
  }).catch(stry =>{message.channel.send(`**🙄 - I can't find \`${args}\` in the ban list**`)});
  }});



// BOT RESTART
client.on('message',message =>{
if(message == prefix + 'restart') {
let BOT_OWNERS = ['283880597095710721']
if(!BOT_OWNERS.includes(message.author.id)) return message.channel.send('**🙄 This command only for the bot owner!**')
client.destroy();
client.login(process.env.BOT_TOKEN)
console.log(`Restart by ${message.author.tag}`)
message.channel.send('**✅ Done Restart The Bot**')
}
});



// SERVER INFORMATION
client.on('message', async message => {
  if(!message.channel.guild) return;
  if(message.content.startsWith(prefix + 'server')) {
    let guild = message.guild;
    let channel = message.channel;
    let guildicon = guild.icon_url;
    let members = guild.memberCount;
    let bots = guild.members.filter(m => m.user.bot).size;
    let humans = members - bots;
    let allchannels = guild.channels.size;
    let textchannels = guild.channels.filter(e => e.type === "text");
    let voicechannels = guild.channels.filter(e => e.type === "voice");
      var embed = new Discord.RichEmbed()
      .setColor("#000000")
      .setTitle(`معلومات عن السيرفر`)
      .setDescription(`معلومات عن : ${guild.name}`)
      .addField("صاحب السيرفر :", `${guild.owner}`, true)
      .addField("ايدي السيرفر :", `${guild.id}`, true)
      .addField("موقع السيرفر :", `${guild.region}`, true)
      .addField("عدد الاشخاص :", `${message.guild.members.filter(m => !m.user.bot).size}`, true)
      .addField("عدد البوتات", `${message.guild.members.filter(member => member.user.bot).size}`, true)
      .addField("عدد الرومات الكتابية", `${textchannels.size}`, true)
      .addField("عدد الرومات الصوتية", `${voicechannels.size}`, true)
      .addField("مستوى حماية السيرفر", `${message.guild.verificationLevel}`, true)
      .addField("صنع هذا السيرفر في", `${guild.createdAt}`, true)
      message.channel.send({ embed: embed });
    }
  });




// sendAfterTime
client.on('message', message => {
    var command = message.content.split(" ")[0];
    if(command == prefix+"sendAfterTime"){ // كيف الكوماند اسطوري صح؟
        message.delete();
        if(!message.guild.member(message.author).hasPermission("MANAGE_GUILD")) return message.reply('Nope')
        var time = message.content.split(" ")[1]
        if(!time) return message.channel.send("Specify a time.").then(msg => {msg.delete(2000)})
        if(!time.match(/['1-60'][s,min,h,hour,d,day,w,week,month]/g)) return message.reply('Incorecct Time format examples: 1min, 1h, 1d, 1w, 1month').then(msg => {msg.delete(3000)})
        var msg = message.content.split(" ").slice(2).join(" ")
        if(!msg) return message.channel.send("specify a رسالة").then(msg => {msg.delete(2000)})
        message.channel.send("✅")
        .then(msg => {
            msg.delete(3000)})
        setTimeout(async function(){
            message.channel.send(msg)
        }, ms(time))
    }
})



// Promote or Demote
client.on('message',message =>{
  let command = message.content.split(" ")[0];
  let lev1 = message.guild.roles.find("name", "Support Team");
  let lev2 = message.guild.roles.find("name", "Mod");
  let lev3 = message.guild.roles.find('name','General');
if (command == prefix + "promotion") {
  let user = message.mentions.members.first() || message.guild.members.get(message.content.split(" ")[1]);if(!user) return;if(user.highestRole == lev3) return;
  if(user.highestRole == lev1) {user.removeRole(lev1).catch(({}));user.addRole(lev2).catch(({}));message.channel.send(new Discord.RichEmbed().setDescription(`**Successfully promoted ${user} to a server Modrator 🤗**`)
  .setColor('#0fffff'))}
 if(user.highestRole == lev2) {user.removeRole(lev2).catch(({}));user.addRole(lev3).catch(({}));
  message.channel.send(new Discord.RichEmbed().setDescription(`**Successfully promoted ${user} to a server General 🤗**`).setColor('#0fffff'))}}
if (command == prefix + "demotion") {
  let user = message.mentions.members.first() || message.guild.members.get(message.content.split(" ")[1])
  if(!user) return
  if(user.highestRole == lev2) {user.removeRole(lev2).catch(({}));user.addRole(lev1).catch(({}));
    message.channel.send(new Discord.RichEmbed().setDescription(`**Successfully demoted ${user} to a server Support ☹**`).setColor('RED'))}
    if(user.highestRole == lev3) {user.removeRole(lev3).catch(({}));user.addRole(lev2).catch(({}));
    message.channel.send(new Discord.RichEmbed().setDescription(`**Successfully demoted ${user} to a server Modrator ☹**`).setColor('RED'))}
    if(user.highestRole == lev1) {user.removeRole(lev1).catch(({}));
    message.channel.send(new Discord.RichEmbed().setDescription(`**Successfully demoted ${user} ☹**`).setColor('RED'))}}})




// Temp Room
const fs = require('fs') // npm i fs
let temp = JSON.parse(fs.readFileSync('./temp.json' , 'utf8'));
client.on('message', async message => {
 if(message.channel.type === "dm") return;
  if(message.author.bot) return;
 if(message.content == prefix+'temp on') {
if(!message.member.hasPermission(`MANAGE_GUILD`)) return;
if(temp[message.guild.id]) return message.channel.send('**The TempVoice Room Is Allready setup ✅**')
 message.guild.createChannel('Temporary Channels', 'category').then(cg => {
 message.guild.createChannel('Join to create temp room', 'voice').then(ch => {
ch.setParent(cg)
 message.channel.send('**The TempVoice Room Successfully setup ✅**')
 temp[message.guild.id] = {time: "3000", category : cg.id,  channel :ch.id}
});
 })
 }fs.writeFile("./temp.json", JSON.stringify(temp),(err)=>{if(err)console.error(err)})
    });
//
client.on('message' , message => {
  if(message.content == prefix+'temp off') {
    if(!temp[message.guild.id])return message.channel.send('**The TempVoice Room Is Allready Disabled ✅**')
   if(!message.member.hasPermission(`MANAGE_GUILD`)) return;
let cg = message.guild.channels.get(temp[message.guild.id].category);let ch = message.guild.channels.get(temp[message.guild.id].channel)
if(cg&&ch) {ch.delete().then(()=>{cg.delete()});message.channel.send('**The TempVoice Room has been Disabled ✅**')}
else {message.channel.send('**The TempVoice Room Is Allready Disabled ✅**')};delete temp[message.guild.id]} });

//
client.on('message' , message => {
if (message.content.startsWith(prefix + "temp time")) {
if(!message.member.hasPermission(`MANAGE_GUILD`)) return;
let newTime= message.content.split(' ').slice(2);
if(!newTime) return message.channel.send(`**You Must type the number after the command** ❎`)
if(isNaN(newTime)) return message.channel.send(`**Please Type The a Correct Number \🔢\❌**`);
if(newTime < 3) return message.channel.send(`**The Time Must Be More Than \`3s\` ❌**`)
let Time = Math.floor((newTime*(1000)));
temp[message.guild.id].time = Time
message.channel.send(`**✅ The Time Set To: \`${newTime}s\`**`);
}})
////
client.on('voiceStateUpdate', (old, neww) => {
if(!temp[old.guild.id]) return
if(!neww.guild.member(client.user).hasPermission('ADMINISTRATOR'))return;;
let newUserChannel = neww.voiceChannel;let oldUserChannel = old.voiceChannel
if(newUserChannel == oldUserChannel) return;
let channel = temp[neww.guild.id].channel
let category = temp[neww.guild.id].category
let ch = old.guild.channels.get(channel);if(!ch) return
let ct = old.guild.channels.get(category);if(!ct) return

if(newUserChannel !== undefined && newUserChannel.id == channel) {
neww.guild.createChannel(neww.displayName , 'voice').then(c => {
c.setParent(category).then(()=>{c.setParent(category).catch(err=>{return})})
c.overwritePermissions(neww.user, {MANAGE_CHANNELS:true,MUTE_MEMBERS:true})
.then(()=>{ch.overwritePermissions(neww,{CONNECT:false})});return neww.setVoiceChannel(c)});}
if(oldUserChannel !== undefined) {
setTimeout(()=>{
let chh = neww.guild.channels.find('name',neww.displayName)
if(!chh) return
if(chh.type === 'voice')return[chh.delete(),
ch.overwritePermissions(neww, {
CONNECT:null})]
}, temp[neww.guild.id].time);}
client.on('channelDelete',channel =>{
  if(oldUserChannel !== undefined) {
    setTimeout(()=>{
    let chh = neww.guild.channels.find('name',neww.displayName)
    if(!chh) return
    if(chh.type === 'voice')return[chh.delete(),
    ch.overwritePermissions(neww, {
    CONNECT:null})]
    }, temp[neww.guild.id].time);}
})
});








client.on("message", message => {
  if(message.content.startsWith("$apply")) {
        if(!message.channel.guild) return;
                if(message.author.bot) return;
        let channel = message.guild.channels.find("name", "مقدمين")
            if(!channel) return message.reply("**هلا ولا كيفيك**")
            if(channel) {
            message.channel.send( message.member + ', **:timer:**').then( (m) =>{
              m.edit( message.member + ', **اسمك الحقيقى بالكامل ✍**' )
              m.channel.awaitMessages( m1 => m1.author == message.author,{ maxMatches: 1, time: 60*1000 } ).then ( (m1) => {
                  m1 = m1.first();
                  var name = m1.content;
                  m1.delete();
                  m.edit(message.member + ', **:timer:**').then( (m) =>{
                      m.edit( message.member + ', **كم عمرك؟ 🎓**' )
                      setTimeout(() => {
                        m.delete()
                      }, 10000);
                      m.channel.awaitMessages( m2 => m2.author == message.author,{ maxMatches: 1, time: 60*1000 } ).then ( (m2) => {
                          m2 = m2.first();
                          var age = m2.content;
                          m2.delete()
                          message.channel.send( message.member + ', **:timer:**').then( (m) =>{
                            m.edit( message.member + ', **كم ساعه تكون متفاعل بالسيرفر؟ 🎙**' )
                            setTimeout(() => {
                              m.delete()
                            }, 10000);
                            m.channel.awaitMessages( m1 => m1.author == message.author,{ maxMatches: 1, time: 60*1000 } ).then ( (m3) => {
                                m3 = m3.first();
                                var ask = m3.content;
                                m3.delete();
                                message.channel.send( message.member + ', **:timer:**').then( (m) =>{
                                  m.edit( message.member + ', **هل ستحترم القوانين ؟ 📑**' )
                                  setTimeout(() => {
                                    m.delete()
                                  }, 10000);
                                  m.channel.awaitMessages( m1 => m1.author == message.author,{ maxMatches: 1, time: 60*1000 } ).then ( (m4) => {
                                      m4 = m4.first();
                                      var ask2 = m4.content;
                                      m4.delete();
                                      message.channel.send( message.member + ', **:timer:**').then( (m) =>{
                                        m.edit( message.member + ', **لماذا يجب علينا ان نقبلك ؟ اعطنا سبباً وجيهاً 🤔**' )
                                        m.channel.awaitMessages( m1 => m1.author == message.author,{ maxMatches: 1, time: 60*1000 } ).then ( (m5) => {
                                            m5 = m5.first();
                                            var ask3 = m5.content;
                                            m5.delete();
                      m.edit(message.member + ', **....جارى جمع البيانات**').then( (mtime)=>{
                        setTimeout(() => {
                          let embed = new Discord.RichEmbed()
                        .setColor('RANDOM')
                        .setTitle(`**تقديم ادارة** [__**${message.guild.name}**__]`)
                        .addField('**`الاسم`**', `${name}` , true)
                        .addField('**`العمر`**', `${age}` , true)
                        .addField('**`ساعات تفاعله`**',`${ask}`)
                        .addField('**`هل سيحترم القوانين ؟`**',`${ask2}`)
                        .addField('**`لماذا يجب علينا قبوله ؟`**',`${ask3}`)
                        .setFooter(message.author.username,'https://images-ext-2.discordapp.net/external/JpyzxW2wMRG2874gSTdNTpC_q9AHl8x8V4SMmtRtlVk/https/orcid.org/sites/default/files/files/ID_symbol_B-W_128x128.gif')
                        channel.send(embed)
                        }, 2500);
                        setTimeout(() => {
                          mtime.delete()
                        }, 3000);

                  })
                })
                })
              })
            })
          })
        })
        })
              })
          })
        })
    }
}
        });






// قبول والرفض
client.on('message',message =>{
  let command = message.content.split(" ")[0];
  if (command == prefix + "قبول") {
    if(!message.member.hasPermission('ADMINISTRATOR')) return;
    let member = message.mentions.members.first();if(!member) return;
    let role = message.guild.roles.find("name", "Helper");if(!role) return;
    member.addRole(role);
    let embed = new Discord.RichEmbed().setColor('#36393e')
    .setThumbnail(message.author.avatarURL)
    .setDescription('» [ \`✅\` ] **::** \`- تم قبول العضو بنجاح ! واعطائه رتبة السبورت\`')
    let results = message.guild.channels.find("name", "الرفض-القبول");
    if(results) results.send(embed)}if(command == prefix + 'رفض') {
      let member = message.mentions.members.first();if(!member) return;
      let embed = new Discord.RichEmbed().setColor('#36393e')
      .setThumbnail(message.author.avatarURL)
      .setDescription('» [ \`❌\` ] **::** \`- تم رفض العضو .\`')
      let results = message.guild.channels.find("name", "الرفض-القبول");
      if(results) results.send(embed)
    }
  });


// SERVER STATS
let count = JSON.parse(fs.readFileSync('./count.json' , 'utf8'));
client.on('message',message=>{
if(message==prefix+'setup'){
if(!message.member.hasPermission('MANAGE_GUILD'))return
message.channel.send('processins... 🔄').then(msg=>{
message.guild.createChannel('📊 Server Stats 📊','category').then(category=>{
message.guild.createChannel(`Role Count: ${message.guild.roles.size}`,'voice').then(roles=>{
message.guild.createChannel(`Bot Count: ${message.guild.members.filter(m=>m.user.bot).size}`,'voice').then(bots=>{
message.guild.createChannel(`User Count: ${message.guild.memberCount - message.guild.members.filter(m=>m.user.bot).size}`,'voice').then(users=>{
message.guild.createChannel(`Channel Count: ${message.guild.channels.size}`,'voice').then(channels=>{
message.guild.createChannel(`Member Count: ${message.guild.members.size}`,'voice').then(members=>{
roles.setParent(category);bots.setParent(category);users.setParent(category);channels.setParent(category);members.setParent(category);
count[message.guild.id]= {category:category.id,roles:roles.id,bots:bots.id,users:users.id,channels:channels.id,members:members.id
};fs.writeFile("./count.json", JSON.stringify(count),(err)=>{if(err)console.error(err)})
msg.edit('**The Rooms Has Been SetUp ✅**')})})})})})})})
}if(message==prefix+'turn off'){
  if(!message.member.hasPermission('MANAGE_GUILD'))return
if(!count[message.guild.id])return message.channel.send('**The Command is Allready Turn off**\ntype `'+prefix+'setup` to turn it on')
let g = count[message.guild.id]
message.channel.send('processins... 🔄').then(msg=>{
if(g.role) {let ch = message.guild.channels.get(g.role);if(ch) ch.delete().catch(err=>{return})}
if(g.bots) {let ch = message.guild.channels.get(g.bots);if(ch) ch.delete().catch(err=>{return})}
if(g.users) {let ch = message.guild.channels.get(g.users);if(ch) ch.delete().catch(err=>{return})}
if(g.channels) {let ch = message.guild.channels.get(g.channels);if(ch) ch.delete().catch(err=>{return})} 
if(g.members) {let ch = message.guild.channels.get(g.members);if(ch) ch.delete().catch(err=>{return})} 
if(g.category) {let ch = message.guild.channels.get(g.category);if(ch) ch.delete().catch(err=>{return})}
delete count[message.guild.id] ;msg.edit('**The Rooms Has Been Removed ✅**')})}})
client.on('roleCreate',role=>{
if(!count[role.guild.id])return
let ch = role.guild.channels.get(count[role.guild.id].role);if(ch) ch.setName(`Role Count: ${role.guild.roles.size}`).catch(err=>{return})})
client.on('roleDelete',role=>{
if(!count[role.guild.id])return
let ch = role.guild.channels.get(count[role.guild.id].role);if(ch) ch.setName(`Role Count: ${role.guild.roles.size}`).catch(err=>{return})})
////////////////////
client.on('channelCreate',channel=>{
  if(!count[channel.guild.id])return
  let ch = channel.guild.channels.get(count[channel.guild.id].channels);if(ch) ch.setName(`Channel Count:${channel.guild.channels.size}`).catch(err=>{return})})
  client.on('channelDelete',channel=>{
    if(!count[channel.guild.id])return
    let ch = channel.guild.channels.get(count[channel.guild.id].channels);if(ch) ch.setName(`Channel Count: ${channel.guild.channels.size}`).catch(err=>{return})})
///////////////
client.on('guildMemberAdd',member =>{
  if(!count[member.guild.id])return;
  let ch = member.guild.channels.get(count[member.guild.id].members);if(ch)ch.setName(`Members Count: ${member.guild.members.size}`).catch(err=>{return});
  if(member.bot){
    let ch = member.guild.channels.get(count[member.guild.id].bots);if(ch)ch.setName(`Bot Count:${member.guild.members.filter(m=>m.user.bot).size}`).catch(err=>{return});
  }if(!member.bot){
    let ch = member.guild.channels.get(count[member.guild.id].users);if(ch)ch.setName(`User Count: ${member.guild.memberCount - member.guild.members.filter(m=>m.user.bot).size}`).catch(err=>{return});
  }
})








client.login(process.env.BOT_TOKEN);// لا تغير فيها شيء
