const { error } = require('console');
const Discord = require('discord.js');
const { cpuUsage, disconnect } = require('process');
const bot = new Discord.Client({ partials: ['MESSAGE', 'CHANNEL', 'REACTION', 'USER'] });
const prefix = ".";
let cooldown = new Set()
/*const sqlite = require("sqlite3").verbose()*/

bot.login(process.env.TOKEN);

bot.on("ready", () => {
    console.log("Je suis connecté !");
    bot.user.setActivity(" vos commandes", { type: "WATCHING" })
});

bot.on("message", async message => {
    if (message.content === ".ping") {
        message.channel.send('Chargement...').then(sent => sent.edit("Pong  :ping_pong:  ! (" + (sent.createdTimestamp - message.createdTimestamp) + " ms)."))
    }
});

bot.on("message", async message => {
    if(message.content === ".fermer") {
        message.delete()
        if(message.channel.parentID != "809858478285521037" && message.channel.parentID != "810936071973371995") return;
        let embedd = new Discord.MessageEmbed()
        .setColor("#FF0000")
        .setDescription("Fermeture du ticket...")
        message.channel.send(embedd).then(message => {
            setTimeout(function () { message.channel.delete() }, 5000)
        })
    }
    if (message.content.startsWith(".clear")) {
        message.delete();
        let args = message.content.slice(7)
        if (!message.member.permissions.has("MANAGE_MESSAGES")) return message.channel.send("Tu n'as pas la permission de supprimer des messages.").then(msg => msg.delete({ timeout: 5000 }));
        if (!args) return message.channel.send("Erreur : Merci de spécifier un nombre de messages à supprimer").then(msg => msg.delete({ timeout: 5000 }));
        if (isNaN(args)) return message.channel.send("Erreur : Merci d'écrire un nombre dans la commande.\nEx : `/clear 1`").then(msg => msg.delete({ timeout: 5000 }));
        if (args > 50 || args <= 1) return message.channel.send("Erreur : Plus de 50 messages à supprimer.").then(msg => msg.delete({ timeout: 5000 }));
        message.channel.bulkDelete(args).then(() => {
            message.channel.send("Succès : **" + args + "** message(s) supprimé(s).").then(msg => msg.delete({ timeout: 5000 }));
        })
    }
    if (message.content.startsWith(".cat ")) {
        message.delete()
        let color = message.guild.me.displayHexColor
        let arg = message.content.slice(5)
        let args = arg.split(",")
        if (args[2] && !args[3]) {
            if (!args[0].startsWith("http://") && !args[0].startsWith("https://") && !args[0].startsWith(" http://") && !args[0].startsWith(" https://")) {
                let embedd = new Discord.MessageEmbed()
                    .addField(args[1], "Prix : **" + args[2] + "**$")
                    .setFooter("PalaDiscount Market")
                    .setColor(color)
                message.channel.send(embedd).then(message => {
                    message.react("809855031318282270")
                })
            }
            else {
                let embedd = new Discord.MessageEmbed()
                    .setThumbnail(args[0])
                    .addField(args[1], "Prix : **" + args[2] + "**$")
                    .setFooter("PalaDiscount Market")
                    .setColor(color)
                message.channel.send(embedd).then(message => {
                    message.react("809855031318282270")
                })
            }
        }
        if (args[5] && !args[6]) {
            if (!args[1].startsWith("http://") && !args[1].startsWith("https://") && !args[1].startsWith(" http://") && !args[1].startsWith(" https://")) {
                let embedd = new Discord.MessageEmbed()
                    .setAuthor(args[0])
                    .addField(args[2], "Prix : **" + args[3] + "**$")
                    .addField(args[4], "Prix : **" + args[5] + "**$")
                    .setFooter("PalaDiscount Market")
                    .setColor(color)
                message.channel.send(embedd).then(async message => {
                    await message.react("809855031318282270")
                    await message.react("809855012833984553")
                })
            }
            else {
                let embedd = new Discord.MessageEmbed()
                    .setAuthor(args[0])
                    .setThumbnail(args[1])
                    .addField(args[2], "Prix : **" + args[3] + "**$")
                    .addField(args[4], "Prix : **" + args[5] + "**$")
                    .setFooter("PalaDiscount Market")
                    .setColor(color)
                message.channel.send(embedd).then(async message => {
                    await message.react("809855031318282270")
                    await message.react("809855012833984553")
                })
            }
        }
        if (args[7] && !args[8]) {
            if (!args[1].startsWith("http://") && !args[1].startsWith("https://") && !args[1].startsWith(" http://") && !args[1].startsWith(" https://")) {
                let embedd = new Discord.MessageEmbed()
                    .setAuthor(args[0])
                    .addField(args[2], "Prix : **" + args[3] + "**$")
                    .addField(args[4], "Prix : **" + args[5] + "**$")
                    .addField(args[6], "Prix : **" + args[7] + "**$")
                    .setFooter("PalaDiscount Market")
                    .setColor(color)
                message.channel.send(embedd).then(async message => {
                    await message.react("809855031318282270")
                    await message.react("809855012833984553")
                    await message.react("809854936174821498")
                })
            }
            else {
                let embedd = new Discord.MessageEmbed()
                    .setAuthor(args[0])
                    .setThumbnail(args[1])
                    .addField(args[2], "Prix : **" + args[3] + "**$")
                    .addField(args[4], "Prix : **" + args[5] + "**$")
                    .addField(args[6], "Prix : **" + args[7] + "**$")
                    .setFooter("PalaDiscount Market")
                    .setColor(color)
                message.channel.send(embedd).then(async message => {
                    await message.react("809855031318282270")
                    await message.react("809855012833984553")
                    await message.react("809854936174821498")
                })
            }
        }
        if (args[9] && !args[10]) {
            if (!args[1].startsWith("http://") && !args[1].startsWith("https://") && !args[1].startsWith(" http://") && !args[1].startsWith(" https://")) {
                let embedd = new Discord.MessageEmbed()
                    .setAuthor(args[0])
                    .addField(args[2], "Prix : **" + args[3] + "**$")
                    .addField(args[4], "Prix : **" + args[5] + "**$")
                    .addField(args[6], "Prix : **" + args[7] + "**$")
                    .addField(args[8], "Prix : **" + args[9] + "**$")
                    .setFooter("PalaDiscount Market")
                    .setColor(color)
                message.channel.send(embedd).then(async message => {
                    await message.react("809855031318282270")
                    await message.react("809855012833984553")
                    await message.react("809854936174821498")
                    await message.react("809854906856374292")
                })
            }
            else {
                let embedd = new Discord.MessageEmbed()
                    .setAuthor(args[0])
                    .setThumbnail(args[1])
                    .addField(args[2], "Prix : **" + args[3] + "**$")
                    .addField(args[4], "Prix : **" + args[5] + "**$")
                    .addField(args[6], "Prix : **" + args[7] + "**$")
                    .addField(args[8], "Prix : **" + args[9] + "**$")
                    .setFooter("PalaDiscount Market")
                    .setColor(color)
                message.channel.send(embedd).then(async message => {
                    await message.react("809855031318282270")
                    await message.react("809855012833984553")
                    await message.react("809854936174821498")
                    await message.react("809854906856374292")
                })
            }
        }
        if (args[10] && !args[12]) {
            if (!args[1].startsWith("http://") && !args[1].startsWith("https://") && !args[1].startsWith(" http://") && !args[1].startsWith(" https://")) {
                let embedd = new Discord.MessageEmbed()
                    .setAuthor(args[0])
                    .addField(args[2], "Prix : **" + args[3] + "**$")
                    .addField(args[4], "Prix : **" + args[5] + "**$")
                    .addField(args[6], "Prix : **" + args[7] + "**$")
                    .addField(args[8], "Prix : **" + args[9] + "**$")
                    .addField(args[10], "Prix : **" + args[11] + "**$")
                    .setFooter("PalaDiscount Market")
                    .setColor(color)
                message.channel.send(embedd).then(async message => {
                    await message.react("809855031318282270")
                    await message.react("809855012833984553")
                    await message.react("809854936174821498")
                    await message.react("809854906856374292")
                    await message.react("807999094638247976")
                })
            }
            else {
                let embedd = new Discord.MessageEmbed()
                    .setAuthor(args[0])
                    .setThumbnail(args[1])
                    .addField(args[2], "Prix : **" + args[3] + "**$")
                    .addField(args[4], "Prix : **" + args[5] + "**$")
                    .addField(args[6], "Prix : **" + args[7] + "**$")
                    .addField(args[8], "Prix : **" + args[9] + "**$")
                    .addField(args[10], "Prix : **" + args[11] + "**$")
                    .setFooter("PalaDiscount Market")
                    .setColor(color)
                message.channel.send(embedd).then(async message => {
                    await message.react("809855031318282270")
                    await message.react("809855012833984553")
                    await message.react("809854936174821498")
                    await message.react("809854906856374292")
                    await message.react("807999094638247976")
                })
            }
        }
        if (args[12]) {
            message.channel.send("Erreur : Pas plus de 12 items par message.")
        }
        if (!args[0] || (args[1] && !args[2]) || (args[4] && !args[5] || (args[6] && !args[7]) || (args[8] && !args[9]) || (args[10] && !args[11]))) {
            message.channel.send("Erreur - Syntaxe :\n`.cat <lien img>,<item>,<prix>\n.cat <titre>,<lien img>,<item>,<prix>...`.")
        }
    }
    if (message.content.startsWith(".edit ")) {
        message.delete()
        let args = message.content.slice(6).split(" ")
        if(isNaN(args[2])) return message.channel.send("Syntaxe :\n\n `Changer un prix : .edit <id du message> p <numero de l'item (dans l'ordre du message)> <nouveau prix>`\n`Indisponible : .edit <id du message> p <numero de l'item (dans l'ordre du message : Allant de 0 à 4 max)>`").then(message => {message.delete({timeout: 10000})})
        message.channel.messages.fetch(args[0]).then(message => {
            if(args[1] === "p") {
                    /*const fetchedMsg = message.first()*/
                    if(!message.embeds[0]) return message.channel.send("Ce message n'est pas un message du bot / de catalogue.").then(message => {message.delete({timeout: 5000})})
                    const receivedEmbed = message.embeds[0];
                    if(!receivedEmbed.fields[args[2]]) return message.channel.send("Ce message n'a pas d'item **n°" + args[2] + "** (les numeros vont de 0 à 4 max)").then(message => {message.delete({timeout: 5000})})
                    let newembed = new Discord.MessageEmbed(receivedEmbed)
                    newembed.fields[args[2]].value = "Prix : **" + args[3] + "**$"
                    message.edit(newembed)
            }
            if(args[1] === "i") {
                    /*const fetchedMsg = message.first()*/
                    if(!message.embeds[0]) return message.channel.send("Ce message n'est pas un message du bot / de catalogue.").then(message => {message.delete({timeout: 5000})})
                    const receivedEmbed = message.embeds[0];
                    if(!receivedEmbed.fields[args[2]]) return message.channel.send("Ce message n'a pas d'item **n°" + args[2] + "** (les numeros vont de 0 à 4 max)").then(message => {message.delete({timeout: 5000})})
                    let newembed = new Discord.MessageEmbed(receivedEmbed)
                    newembed.fields[args[2]].value = "<:crosss:810109715194970122> Indisponible"
                    message.edit(newembed)
            }
            if(args[1] === "d") {
                if(!message.embeds[0]) return message.channel.send("Ce message n'est pas un message du bot / de catalogue.").then(message => {message.delete({timeout: 5000})})
                const receivedEmbed = message.embeds[0];
                if(args[2] === "0" && !receivedEmbed.fields[1]) return message.channel.send("Si vous retirez le seul item du message, autant le supprimer xd.").then(message => {message.delete({timeout: 5000})})
                if(!receivedEmbed.fields[args[2]]) return message.channel.send("Ce message n'a pas d'item **n°" + args[2] + "** (les numeros vont de 0 à 4 max)").then(message => {message.delete({timeout: 5000})})
                let newembed = new Discord.MessageEmbed(receivedEmbed)
                newembed.fields[args[2]] = []
                message.edit(newembed)
                let nombre = newembed.fields.length - 1
                message.reactions.removeAll().catch(error => console.error('Failed to clear reactions: ', error))
                .then(async message => {
                if(nombre === 1) {
                    await message.react("809855031318282270")
                }
                if(nombre === 2) {
                    await message.react("809855031318282270")
                    await message.react("809855012833984553")
                }
                if(nombre === 3) {
                    await message.react("809855031318282270")
                    await message.react("809855012833984553")
                    await message.react("809854936174821498")
                }
                if(nombre === 4) {
                    await message.react("809855031318282270")
                    await message.react("809855012833984553")
                    await message.react("809854936174821498")
                    await message.react("809854906856374292")
                }
                if(nombre === 5) {
                    await message.react("809855031318282270")
                    await message.react("809855012833984553")
                    await message.react("809854936174821498")
                    await message.react("809854906856374292")
                    await message.react("807999094638247976")
                }
        })
        }
        })
        .catch(err => {
            message.channel.send("Syntaxe :\n\n `Changer un prix : .edit <id du message> p <numero de l'item (dans l'ordre du message)> <nouveau prix>`\n`Indisponible : .edit <id du message> p <numero de l'item (dans l'ordre du message : Allant de 0 à 4 max)>`").then(message.delete({timeout: 10000}))
        })
        
    }
    if (message.content.startsWith(".add ")) {
        message.delete()
        let args = message.content.slice(5).split(",")
        if(!args[2]) return message.channel.send("Syntaxe :\n\n `.add <id du message> <item> <prix>`").then(message => {message.delete({timeout: 5000})})
        if(isNaN(args[2])) return message.channel.send("Le prix ne doit contenir que des chiffres.").then(message => {message.delete({timeout: 5000})})
        message.channel.messages.fetch(args[0]).then(message => {
            if(!message.embeds[0]) return message.channel.send("Ce message n'est pas un message du bot / de catalogue.").then(message => {message.delete({timeout: 5000})})
            const receivedEmbed = message.embeds[0];
            if(receivedEmbed.fields[4]) return message.channel.send("Ce message a déjà le nombre d'items maximum atteint (5).").then(message => {message.delete({timeout: 5000})})
            let newembed = new Discord.MessageEmbed(receivedEmbed)
            newembed.addField(args[1], "Prix : **" + args[2] + "**$")
            message.edit(newembed)
            message.reactions.removeAll().catch(error => console.error('Failed to clear reactions: ', error))
            .then(async message => {
            if(newembed.fields[0] && !newembed.fields[1]) {
                await message.react("809855031318282270")
            }
            if(newembed.fields[1] && !newembed.fields[2]) {
                await message.react("809855031318282270")
                await message.react("809855012833984553")
            }
            if(newembed.fields[2] && !newembed.fields[3]) {
                await message.react("809855031318282270")
                await message.react("809855012833984553")
                await message.react("809854936174821498")
            }
            if(newembed.fields[3] && !newembed.fields[4]) {
                await message.react("809855031318282270")
                await message.react("809855012833984553")
                await message.react("809854936174821498")
                await message.react("809854906856374292")
            }
            if(newembed.fields[4] && !newembed.fields[5]) {
                await message.react("809855031318282270")
                await message.react("809855012833984553")
                await message.react("809854936174821498")
                await message.react("809854906856374292")
                await message.react("807999094638247976")
            }
            })

        })
        .catch(err => {
            message.channel.send("Syntaxe :\n\n `.add <id du message> <item> <prix>`").then(message => {message.delete({timeout: 5000})})
        })
    }
});

bot.on('messageReactionAdd', async (reaction, user) => {
    if (reaction.partial) {
        // If the message this reaction belongs to was removed the fetching might result in an API error, which we need to handle
        try {
          await reaction.fetch();
        } catch (error) {
          console.log('Erreur lors du fetching du message : ', error);
          // Return as `reaction.message.author` may be undefined/null
          return;
        }
      }
      if (user.partial) {
        // If the message this reaction belongs to was removed the fetching might result in an API error, which we need to handle
        try {
          await user.fetch();
        } catch (error) {
          console.log('Erreur lors du fetching du message : ', error);
          // Return as `reaction.message.author` may be undefined/null
          return;
        }
      }
      if (reaction.message.partial) {
        // If the message this reaction belongs to was removed the fetching might result in an API error, which we need to handle
        try {
          await reaction.message.fetch();
        } catch (error) {
          console.log('Erreur lors du fetching du message : ', error);
          // Return as `reaction.message.author` may be undefined/null
          return;
        }
      }
    reaction.users.fetch().then(user => {
    if(!reaction.users.cache.has(bot.user.id)) return;
    })
    if (reaction.emoji.id === "809855031318282270") {
        if (user.id === bot.user.id) return
        else {
            reaction.users.remove(user)
        };
        if (cooldown.has(user)) {
            let nononon = new Discord.MessageEmbed()
                .setDescription(" Merci d'attendre **2 minutes** avant de pouvoir réouvrir un ticket.")
                .setColor("#FF0000")
            reaction.message.channel.send(nononon).then(message => message.delete({ timeout: 4000 }))
        }
        else {
            let guild = reaction.message.guild;
            let receivedEmbed = reaction.message.embeds[0]
            reaction.message.guild.channels.create(user.username, {
                type: "text",
                setTopic: user.id,
                permissionOverwrites: [
                    {
                        allow: 'VIEW_CHANNEL',
                        id: user.id
                    },
                    {
                        deny: 'VIEW_CHANNEL',
                        id: guild.id
                    }
                ]
            }).then(async channel => {
                channel.setTopic(user.id);
                channel.setParent("809858478285521037");
                let achat = new Discord.MessageEmbed()
                    .setAuthor("Nouvel Achat")
                    .addField(receivedEmbed.fields[0].name, receivedEmbed.fields[0].value)
                    .setDescription("Pour continuer, merci de cliquer sur <:next:810144983993548880>.")
                    .setFooter("Commande de " + user.username, user.displayAvatarURL())
                    .setColor("#4169E1")
                channel.send("Bienvenue, " + user.toString() + " !")
                let theid = channel.send(achat).then(async message => {
                    await message.reactions.removeAll()
                    await message.react("810144983993548880")
                    await message.react("810092638967431179")
                })

                cooldown.add(user)
                setTimeout(() => {
                    cooldown.delete(user)
                }, 120000)
            })
        }
    }
    if (reaction.emoji.id === "809855012833984553") {
        if (user.id === bot.user.id) return
        else {
            reaction.users.remove(user)
        };
        if (cooldown.has(user)) {
            let nononon = new Discord.MessageEmbed()
                .setDescription(" Merci d'attendre **2 minutes** avant de pouvoir réouvrir un ticket.")
                .setColor("#FF0000")
            reaction.message.channel.send(nononon).then(message => message.delete({ timeout: 4000 }))
        }
        else {
            let guild = reaction.message.guild;
            let receivedEmbed = reaction.message.embeds[0]
            reaction.message.guild.channels.create(user.username, {
                type: "text",
                setTopic: user.id,
                permissionOverwrites: [
                    {
                        allow: 'VIEW_CHANNEL',
                        id: user.id
                    },
                    {
                        deny: 'VIEW_CHANNEL',
                        id: guild.id
                    }
                ]
            }).then(async channel => {
                channel.setTopic(user.id);
                channel.setParent("809858478285521037");
                let achat = new Discord.MessageEmbed()
                    .setAuthor("Nouvel Achat")
                    .addField(receivedEmbed.fields[1].name, receivedEmbed.fields[1].value)
                    .setDescription("Pour continuer, merci de cliquer sur <:next:810144983993548880>.")
                    .setFooter("Commande de " + user.username, user.displayAvatarURL())
                    .setColor("#4169E1")
                channel.send("Bienvenue, " + user.toString() + " !");
                let theid = channel.send(achat).then(async message => {
                    await message.reactions.removeAll()
                    await message.react("810144983993548880")
                    await message.react("810092638967431179")
                })

                cooldown.add(user)
                setTimeout(() => {
                    cooldown.delete(user)
                }, 120000)
            })
        }
    }
    if (reaction.emoji.id === "809854936174821498") {
        if (user.id === bot.user.id) return;
        else {
            reaction.users.remove(user)
        };
        if (cooldown.has(user)) {
            let nononon = new Discord.MessageEmbed()
                .setDescription(" Merci d'attendre **2 minutes** avant de pouvoir réouvrir un ticket.")
                .setColor("#FF0000")
            reaction.message.channel.send(nononon).then(message => message.delete({ timeout: 4000 }))
        }
        else {
            let guild = reaction.message.guild;
            let receivedEmbed = reaction.message.embeds[0]
            reaction.message.guild.channels.create(user.username, {
                type: "text",
                setTopic: user.id,
                permissionOverwrites: [
                    {
                        allow: 'VIEW_CHANNEL',
                        id: user.id
                    },
                    {
                        deny: 'VIEW_CHANNEL',
                        id: guild.id
                    }
                ]
            }).then(async channel => {
                channel.setTopic(user.id);
                channel.setParent("809858478285521037");
                let achat = new Discord.MessageEmbed()
                    .setAuthor("Nouvel Achat")
                    .addField(receivedEmbed.fields[2].name, receivedEmbed.fields[2].value)
                    .setDescription("Pour continuer, merci de cliquer sur <:next:810144983993548880>.")
                    .setFooter("Commande de " + user.username, user.displayAvatarURL())
                    .setColor("#4169E1")
                channel.send("Bienvenue, " + user.toString() + " !");
                let theid = channel.send(achat).then(async message => {
                    await message.reactions.removeAll()
                    await message.react("810144983993548880")
                    await message.react("810092638967431179")
                })

                cooldown.add(user)
                setTimeout(() => {
                    cooldown.delete(user)
                }, 120000)
            })
        }
    }
    if (reaction.emoji.id === "809854906856374292") {
        if (user.id === bot.user.id) return;
        else {
            reaction.users.remove(user)
        };
        if (cooldown.has(user)) {
            let nononon = new Discord.MessageEmbed()
                .setDescription(" Merci d'attendre **2 minutes** avant de pouvoir réouvrir un ticket.")
                .setColor("#FF0000")
            reaction.message.channel.send(nononon).then(message => message.delete({ timeout: 4000 }))
        }
        else {
            let guild = reaction.message.guild;
            let receivedEmbed = reaction.message.embeds[0]
            reaction.message.guild.channels.create(user.username, {
                type: "text",
                setTopic: user.id,
                permissionOverwrites: [
                    {
                        allow: 'VIEW_CHANNEL',
                        id: user.id
                    },
                    {
                        deny: 'VIEW_CHANNEL',
                        id: guild.id
                    }
                ]
            }).then(async channel => {
                channel.setTopic(user.id);
                channel.setParent("809858478285521037");
                let achat = new Discord.MessageEmbed()
                    .setAuthor("Nouvel Achat")
                    .addField(receivedEmbed.fields[3].name, receivedEmbed.fields[3].value)
                    .setDescription("Pour continuer, merci de cliquer sur <:next:810144983993548880>.")
                    .setFooter("Commande de " + user.username, user.displayAvatarURL())
                    .setColor("#4169E1")
                channel.send("Bienvenue, " + user.toString() + " !");
                let theid = channel.send(achat).then(async message => {
                    await message.reactions.removeAll()
                    await message.react("810144983993548880")
                    await message.react("810092638967431179")
                })

                cooldown.add(user)
                setTimeout(() => {
                    cooldown.delete(user)
                }, 120000)
            })
        }
    }
    if (reaction.emoji.id === "807999094638247976") {
        if (user.id === bot.user.id) return;
        else {
            reaction.users.remove(user)
        };
        if (cooldown.has(user)) {
            let nononon = new Discord.MessageEmbed()
                .setDescription(" Merci d'attendre **2 minutes** avant de pouvoir réouvrir un ticket.")
                .setColor("#FF0000")
            reaction.message.channel.send(nononon).then(message => message.delete({ timeout: 4000 }))
        }
        else {
            let guild = reaction.message.guild;
            let receivedEmbed = reaction.message.embeds[0]
            reaction.message.guild.channels.create(user.username, {
                type: "text",
                setTopic: user.id,
                permissionOverwrites: [
                    {
                        allow: 'VIEW_CHANNEL',
                        id: user.id
                    },
                    {
                        deny: 'VIEW_CHANNEL',
                        id: guild.id
                    }
                ]
            }).then(async channel => {
                channel.setTopic(user.id);
                channel.setParent("809858478285521037");
                let achat = new Discord.MessageEmbed()
                    .setAuthor("Nouvel Achat")
                    .addField(receivedEmbed.fields[4].name, receivedEmbed.fields[4].value)
                    .setDescription("Pour continuer, merci de cliquer sur <:next:810144983993548880>.")
                    .setFooter("Commande de " + user.username, user.displayAvatarURL())
                    .setColor("#4169E1")
                channel.send("Bienvenue, " + user.toString() + " !");
                let theid = channel.send(achat).then(async message => {
                    await message.reactions.removeAll()
                    await message.react("810144983993548880")
                    await message.react("810092638967431179")
                })

                cooldown.add(user)
                setTimeout(() => {
                    cooldown.delete(user)
                }, 120000)
            })
        }
    }
    if (reaction.emoji.id === "810144983993548880") {
        if (user.id === bot.user.id) return;
        else {
            reaction.remove()
        };
        let receivedEmbed = reaction.message.embeds[0]
        let news = new Discord.MessageEmbed()
        .setAuthor("Nouvel Achat")
        .addField(receivedEmbed.fields[0].name, receivedEmbed.fields[0].value)
        .setDescription("Quelle quantité ?\nMerci de n'écrire **que des chiffres**.")
        .setFooter("Commande de " + user.username, user.displayAvatarURL())
        .setColor("#4169E1")
        reaction.message.edit(news)
        m = {}
        const filter = m => m.author.id === user.id
        try {
            const prix = await reaction.message.channel.awaitMessages(filter, { max: 1, time: 30000, errors: ['time'] })
            prix.first().delete()
            if (isNaN(prix.first().content)) {
                reaction.message.react("810151142629310495")
                let nouveau = new Discord.MessageEmbed()
                .setDescription("La réponse n'était pas un nombre. Pour réessayer, cliquer sur <:return:810151142629310495>.")
                .setColor("FF0000")
                reaction.message.channel.send(nouveau).then(message => message.delete({ timeout: 5000 }))
            }
            else {
                let nouveau = new Discord.MessageEmbed()
                    .setAuthor("Finalisation Achat")
                    .setDescription("Pour valider la commande, cliquer sur <:tick:810092620507250688>. Pour annuler, cliquer sur <:cross:810092638967431179>.")
                    .addField(receivedEmbed.fields[0].name, receivedEmbed.fields[0].value + "\nQuantité : **" + prix.first().content + "**")
                    .setFooter("Commande de " + user.username, user.displayAvatarURL())
                    .setColor("#4169E1")
                reaction.message.edit(nouveau).then(async message => {
                    await message.react("810268790537453618")
                    await message.react("810092638967431179")
                })
            }
        }
        catch (error) {
            reaction.message.channel.delete({ timeout: 5000 });
        }
    }

    if (reaction.emoji.id === "810151142629310495") {
        if (user.id === bot.user.id) return;
        else {
            reaction.remove()
        };
        let nouveau = new Discord.MessageEmbed()
                .setDescription("<:return:810151142629310495> Réessayer :")
                .setColor("#4169E1")
                reaction.message.channel.send(nouveau).then(message => message.delete({ timeout: 5000 })).then(message => message.delete({ timeout: 5000 }))
        m = {}
        const filter = m => m.author.id === user.id
        try {
            const prix = await reaction.message.channel.awaitMessages(filter, { max: 1, time: 30000, errors: ['time'] })
            prix.first().delete()
            if (isNaN(prix.first().content)) {
                reaction.message.channel.send("La réponse n'était pas un nombre. Pour réessayer, cliquer sur <:return:810151142629310495>.").then(message => message.delete({ timeout: 5000 }))
                reaction.message.react("810151142629310495")
            }
            else {
                let receivedEmbed = reaction.message.embeds[0]
                let nouveau = new Discord.MessageEmbed()
                    .setAuthor("Finalisation Achat")
                    .setDescription("Pour valider la commande, cliquer sur <:tick:810092620507250688>. Pour annuler, cliquer sur <:cross:810092638967431179>.")
                    .addField(receivedEmbed.fields[0].name, receivedEmbed.fields[0].value + "\nQuantité : **" + prix.first().content + "**")
                    .setFooter("Commande de " + user.username, user.displayAvatarURL())
                    .setColor("#4169E1")
                reaction.message.edit(nouveau).then(async message => {
                    await message.react("810268790537453618")
                    await message.react("810092638967431179")
                })
            }
        }
        catch (error) {
            reaction.message.channel.delete({ timeout: 5000 });
        }
    }
    if (reaction.emoji.id === "810092638967431179") {
        if (user.id === bot.user.id) return;
        else {
            reaction.users.remove(user)
        };
        let theembed = new Discord.MessageEmbed()
            .setDescription("Etes-vous sûr de vouloir annuler votre commande ?")
            .setColor("#FF0000")
        reaction.message.channel.send(theembed).then(async message => {
            await message.react("810092620507250688")
            await message.react("810109715194970122")
            const filter = (reaction, user) => {
                return ['tick', 'crosss'].includes(reaction.emoji.name) && user.id != bot.user.id;
            };
            message.awaitReactions(filter, { max: 1, time: 30000, errors: ['time'] })
                .then(collected => {
                    const reaction2 = collected.first();
                    message.reactions.removeAll()

                    if (reaction2.emoji.name === "tick") {
                        let theembed = new Discord.MessageEmbed()
                            .setDescription("Commande annulée. Fermeture du ticket...")
                            .setColor("#FF0000")
                        message.edit(theembed).then(message => {
                            setTimeout(function () { message.channel.delete() }, 5000)
                        })
                    }
                    if (reaction2.emoji.name === "crosss") {
                        message.delete({timeout: 500})
                    }
                })
                .catch(collected => {
                    message.channel.delete({ timeout: 5000 });
                })
        })
    }
    if (reaction.emoji.id === "810268790537453618") {
        if (user.id === bot.user.id) return;
        else {
            reaction.users.remove(user)
        };
        let receivedEmbed = reaction.message.embeds[0]
        let newembed = new Discord.MessageEmbed()
        .setAuthor("Nouvelle Commande")
        .setColor("#4169E1")
        .addField(receivedEmbed.fields[0].name, receivedEmbed.fields[0].value)
        .addField("Commande de ", user.toString())
        .setFooter("PalaDicount Market", bot.user.displayAvatarURL())
        .setTimestamp()
        reaction.message.guild.channels.cache.get("810263048177713152").send("<@&810272296739536936>, " + user.toString(), newembed).then(message => {
            message.react("📋")
        })
        let embedd = new Discord.MessageEmbed()
        .setColor("#4169E1")
        .setDescription("Commande ajoutée : vous serez averti lorsqu'un vendeur la prendra. Fermeture du ticket...")
        reaction.message.edit(embedd).then(message => {
            setTimeout(function () { message.channel.delete() }, 5000)
        })
    }
    if (reaction.emoji.name === "📋") {
        if (user.id === bot.user.id) return;
        else {
            reaction.users.remove(user)
        };
        let receivedEmbed = reaction.message.embeds[0]
        reaction.message.delete({timeout: 500})
        let neuu = new Discord.MessageEmbed()
        .setAuthor("En préparation")
        .setColor("#4169E1")
        .addField(receivedEmbed.fields[0].name, receivedEmbed.fields[0].value)
        .addField(receivedEmbed.fields[1].name, receivedEmbed.fields[1].value)
        .addField("Prise par", user.toString())
        .setFooter("PalaDiscount Market", bot.user.displayAvatarURL())
        bot.channels.cache.get("810520720127950898").send(reaction.message.mentions.users.first().toString() + ", " + user.toString(), neuu).then(message => {
            message.react("810931822783103006")
        })
        let newe = new Discord.MessageEmbed()
        .setAuthor("Votre Commande")
        .setDescription("📋 Votre commande a été prise par **" + user.username + "** sur le serveur **PalaDiscount**.\n*Vous serez averti lorsque elle sera prête*.")
        .addField(receivedEmbed.fields[0].name, receivedEmbed.fields[0].value)
        .setFooter("PalaDiscount Market", bot.user.displayAvatarURL())
        .setColor("#4169E1")
        reaction.message.mentions.users.first().send(newe)
    }
    if (reaction.emoji.id === "810931822783103006") {
        if (user.id === bot.user.id) return;
        else {
            reaction.users.remove(user)
        };
        let membre = reaction.message.mentions.users.first()
        let guild = reaction.message.guild;
        let receivedEmbed = reaction.message.embeds[0]
        reaction.message.guild.channels.create(user.username, {
                type: "text",
                setTopic: user.id,
                permissionOverwrites: [
                    {
                        id: user.id,
                        allow: ['VIEW_CHANNEL', 'SEND_MESSAGES'],
                    },
                    {
                        id: membre.id,
                        allow: ['VIEW_CHANNEL', 'SEND_MESSAGES'],
                    },
                    {
                        id: guild.roles.everyone,
                        deny: ['VIEW_CHANNEL'],
                    }
                ]
            }).then(async channel => {
                channel.setTopic(user.id);
                channel.setParent("810936071973371995");
                let achat = new Discord.MessageEmbed()
                    .setAuthor("Livraison")
                    .addField(receivedEmbed.fields[0].name, receivedEmbed.fields[0].value)
                    .addField(receivedEmbed.fields[1].name, receivedEmbed.fields[1].value)
                    .addField(receivedEmbed.fields[2].name, receivedEmbed.fields[2].value)
                    .setDescription("<:colis:810931822783103006> Livraison de la commande.")
                    .setFooter("PalaDiscount Market", bot.user.displayAvatarURL())
                    .setColor("#FFA500")
                channel.send("Bienvenue, " + user.toString() + " et " + receivedEmbed.fields[1].value + " !", achat).then(message => {
                    message.react("811208692418609172")
                });
            })
            let newe = new Discord.MessageEmbed()
            .setAuthor("Votre Commande")
            .setDescription("<:colis:810931822783103006> Votre commande est prête à être livrée sur le serveur **PalaDiscount**.\n*Vous avez été mentionné dans un salon*.")
            .addField(receivedEmbed.fields[0].name, receivedEmbed.fields[0].value)
            .setFooter("PalaDiscount Market", bot.user.displayAvatarURL())
            .setColor("#FFA500")
            reaction.message.mentions.users.first().send(newe)
            reaction.message.delete({timeout: 500})
        }
        if (reaction.emoji.id === "811208692418609172") {
            if (user.id === bot.user.id) return;
            else {
                reaction.users.remove(user)
            };
            let receivedEmbed = reaction.message.embeds[0]
            let membre = reaction.message.guild.member(user)
                if(!membre.roles.cache.has("810272296739536936")) return
            let theembed = new Discord.MessageEmbed()
            .setDescription("Commande terminée ?")
            .setColor("#4169E1")
            reaction.message.channel.send(theembed).then(async message => {
            await message.react("810092620507250688")
            await message.react("810109715194970122")
            const filter = (reaction, user) => {
                return ['tick', 'crosss'].includes(reaction.emoji.name) && user.id != bot.user.id && membre.roles.cache.has("810272296739536936")
            };
            message.awaitReactions(filter, { max: 1, time: 30000, errors: ['time'] })
                .then(collected => {
                    const reaction2 = collected.first();

                    if (reaction2.emoji.name === "tick") {
                        let achat = new Discord.MessageEmbed()
                        .setAuthor("Commande Livrée")
                        .addField(receivedEmbed.fields[0].name, receivedEmbed.fields[0].value)
                        .addField(receivedEmbed.fields[1].name, receivedEmbed.fields[1].value)
                        .addField(receivedEmbed.fields[2].name, receivedEmbed.fields[2].value)
                        .setFooter("PalaDiscount Market", bot.user.displayAvatarURL())
                        .setColor("#32CD32")
                        bot.channels.cache.get("811333460496482304").send(achat)
                        let newe = new Discord.MessageEmbed()
                        .setAuthor("Commande Livrée")
                        .setDescription("<:cadis:809855031318282270> Merci d'avoir commandé chez le **PalaDiscount**. A bientôt chez nous ^^ !")
                        .addField(receivedEmbed.fields[0].name, receivedEmbed.fields[0].value)
                        .setFooter("PalaDiscount Market", bot.user.displayAvatarURL())
                        .setColor("#32CD32")
                        let topic = reaction.message.channel.topic
                        bot.users.cache.get(topic).send(newe)
                        let theembed = new Discord.MessageEmbed()
                            .setDescription("Commande terminée. Fermeture du ticket...")
                            .setColor("#32CD32")
                        message.edit(theembed).then(message => {
                            setTimeout(function () { message.channel.delete() }, 5000)
                        })
                    }
                    else if (reaction2.emoji.name === "crosss") {
                        message.delete({timeout: 500})
                    }
                })
                .catch(collected => {
                    message.delete({timeout: 500})
                })
        })
    }
});

/*process.on("unhandledRejection", error => {
    console.error("Unhandled promise rejection:", error);
});*/
