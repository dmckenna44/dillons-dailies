const fullList = [
    {
      name: "Boromir",
      movie: "The Two Towers ",
      quote: "Remember today, little brother. Today, life is good.",
    },
    {
      name: "Boromir",
      movie: "The Two Towers ",
      quote:
        "This city was once the jewel of our kingdom. A place of light and beauty and music. And so it shall be once more!Let the armies of Mordor know this: Never again will the land of my people fall into enemy hands. This city of Osgiliath has been reclaimed,for Gondor!",
    },
    {
      name: "Boromir",
      movie: "The Two Towers ",
      quote: "They exaggerate. The victory belongs to Faramir also.",
    },
    {
      name: "Boromir",
      movie: "The Two Towers ",
      quote:
        "Leaves more time for drinking! Break out the ale! These men are thirsty!",
    },
    {
      name: "Boromir",
      movie: "The Two Towers ",
      quote: "One moment of peace, can he not give us that?",
    },
    {
      name: "Boromir",
      movie: "The Two Towers ",
      quote: "You give him no credit, and yet he tries to do your will.",
    },
    {
      name: "Boromir",
      movie: "The Fellowship of the Ring",
      quote:
        "The shards of Narsil, The blade that cut the Ring from Sauron's hand, Ah! Its still sharp, but no more than a broken heirloom",
    },
    {
      name: "Boromir",
      movie: "The Fellowship of the Ring",
      quote: "Then we are here on a common purpose, friend.",
    },
    {
      name: "Boromir",
      movie: "The Two Towers ",
      quote: "No. My place is here with my people. Not in Rivendell.",
    },
    {
      name: "Boromir",
      movie: "The Fellowship of the Ring",
      quote:
        "In a dream, I saw the Eastern sky grow dark, In the West a pale light lingered. A voice was crying, your doom is near at hand, Isildur's bane is found, Isildur's Bane",
    },
    {
      name: "Boromir",
      movie: "The Fellowship of the Ring",
      quote:
        "It is a strange fate that we should suffer so much fear and doubt over so small a thing,such a little thing",
    },
    {
      name: "Boromir",
      movie: "The Fellowship of the Ring",
      quote: "and what would a ranger know of this matter?",
    },
    {
      name: "Boromir",
      movie: "The Fellowship of the Ring",
      quote:
        "We must get off the mountain! Make for the Gap of Rohan and take the west road to my city!",
    },
    {
      name: "Boromir",
      movie: "The Fellowship of the Ring",
      quote:
        "Aye it is a gift! A gift to the foes of Mordor. Why not use this Ring? Long has my father, the Steward of Gondor, kept the forces of Mordor at bay. By the blood of our people are your lands kept safe. Give Gondor the weapon of the enemy, let us use it against him",
    },
    {
      name: "Arwen",
      movie: "The Two Towers ",
      quote: "Ae '-esteliach nad... estelio han. Estelio ammen.",
    },
    {
      name: "Boromir",
      movie: "The Fellowship of the Ring",
      quote: "We make for the gap of Rohan. We should never have come here",
    },
    {
      name: "Arwen",
      movie: "The Two Towers ",
      quote:
        "The light of the Evenstar does not wax and wane. It is mine to give to whom I will. Like my heart. Go to sleep.",
    },
    {
      name: "Boromir",
      movie: "The Fellowship of the Ring",
      quote:
        "One does not simply walk into Mordor. Its black gates are guarded by more than just orcs. There is evil there that does not sleep and the great eye is ever watchful. Tis a barren wasteland, riddled with fire and ash and dust. The very air you breathe is a poisonous fume. Not with ten thousand men could you do this. It is folly",
    },
    {
      name: "Boromir",
      movie: "The Fellowship of the Ring",
      quote:
        "and if we fail what then?, What happens when Sauron takes back what is his?",
    },
    {
      name: "Boromir",
      movie: "The Fellowship of the Ring",
      quote: "We cannot stay here! This will be the death of the hobbits!",
    },
    {
      name: "Arwen",
      movie: "The Two Towers ",
      quote: "Si peliannen i v'd na dail l'n. Si boe '-dhannathach.",
    },
    {
      name: "Arwen",
      movie: "The Fellowship of the Ring",
      quote:
        "Your time will come. You will face the same evil and you will defeat it A si i-Dh'ath '-orthor, Aragorn. ' or le a ' or nin.",
    },
    {
      name: "Arwen",
      movie: "The Two Towers ",
      quote: "' i vethed... n' i onnad. Boe bedich go Frodo. Han b'd l'n.",
    },
    {
      name: "Arwen",
      movie: "The Two Towers ",
      quote: "Ma nathach hi gwannathach or minuial archened?",
    },
    {
      name: "Arwen",
      movie: "The Fellowship of the Ring",
      quote:
        "Why do you fear the past. You are Isildur's heir, not Isildur himself. You are not bound to his fate",
    },
    {
      name: "Arwen",
      movie: "The Fellowship of the Ring",
      quote: "It is mine to give to whom I will. Like my heart",
    },
    {
      name: "Arwen",
      movie: "The Fellowship of the Ring",
      quote:
        "and to that I hold. I would rather share one lifetime with you than face all the ages of this world alone",
    },
    {
      name: "Arwen",
      movie: "The Fellowship of the Ring",
      quote: "Frodo Im Arwen. Telin le thaed. Lasto beth nin. Tolo dan na galad",
    },
    {
      name: "Arwen",
      movie: "The Fellowship of the Ring",
      quote: "What's this? a Ranger caught off his guard?",
    },
    {
      name: "Arwen",
      movie: "The Fellowship of the Ring",
      quote:
        "Gwenwin in enninath...U-arnech in naeth i si celich. Renech i beth i pennen?",
    },
    {
      name: "Arwen",
      movie: "The Fellowship of the Ring",
      quote: "He's not going to last. We must get him to my father.",
    },
    {
      name: "Arwen",
      movie: "The Return of the King",
      quote: "You have the gift of foresight. What did you see?",
    },
    {
      name: "Arwen",
      movie: "The Fellowship of the Ring",
      quote:
        "I've been looking for you for two days. There are five wraiths behind you, where the other four are I do not know",
    },
    {
      name: "Arwen",
      movie: "The Fellowship of the Ring",
      quote: "Frodo f'r. Ae athradon i hir, tur gwaith nin beriatha hon.",
    },
    {
      name: "Arwen",
      movie: "The Return of the King",
      quote: "But there is also life. You saw there was a child. You saw my son.",
    },
    {
      name: "Arwen",
      movie: "The Return of the King",
      quote:
        "From the ashes of fire shall be woken, A light from the shadow shall spring, Renewed shall be blade that was broken, The crownless again shall be king.",
    },
    {
      name: "Arwen",
      movie: "The Return of the King",
      quote:
        "This was my choice. Ada, whether by your will or not there is no ship now that can bear me hence.",
    },
    {
      name: "Arwen",
      movie: "The Return of the King",
      quote: "If I leave him now, I will regret it forever. It is time.",
    },
    {
      name: "Galadriel",
      movie: "The Return of the King",
      quote:
        "And you Frodo Baggins, I give you the light of E'rendil, our most beloved star. May it be a light for you in dark places, when all other lights go out.",
    },
    {
      name: "Galadriel",
      movie: "The Two Towers ",
      quote:
        "I amar prestar aen... han mathon ne nen, han mathon ne chae a han noston ned 'wilith.",
    },
    {
      name: "Galadriel",
      movie: "The Return of the King",
      quote:
        "This task was appointed to you, Frodo of the Shire. If you do not find a way, no one will.",
    },
    {
      name: "Galadriel",
      movie: "The Fellowship of the Ring",
      quote:
        "I amar prestar aen Han mathon ne nen Han mathon ne chae A han noston ned gwilith Much that once was is lost. For none now live who remember it.",
    },
    {
      name: "Galadriel",
      movie: "The Fellowship of the Ring",
      quote:
        "Your coming to us, is as the footsteps of doom. You bring great evil here! Ringbearer!",
    },
    {
      name: "Galadriel",
      movie: "The Return of the King",
      quote:
        "The power of the three rings is ended. The time has come for the dominion of men.",
    },
    {
      name: "Galadriel",
      movie: "The Fellowship of the Ring",
      quote:
        "For within these rings was bound the strength and will to govern each race. But they were all of them deceived. For another ring was made. In the land of Mordor, in the fires of Mount Doom (the dark Lord Sauron forged in secret a master Ring, to control all others and into this Ring he poured all his cruelty, his malice, and his will to dominate all life. One Ring to rule them all.",
    },
    {
      name: "Galadriel",
      movie: "The Fellowship of the Ring",
      quote:
        "One by one the free lands of Middle Earth fell to the power of the Ring. But there were some who resisted. A last alliance of Elves and Men marched against the armies of Mordor. And on the slopes of Mount Doom they fought for the freedom of Middle Earth.",
    },
    {
      name: "Galadriel",
      movie: "The Fellowship of the Ring",
      quote:
        "Three were given to the elves. Immortal, wisest and fairest of all beings. Seven to the dwarf lords, great miners and craftsmen of the mountain halls. And nine, nine rings were gifted to the race of men. Who above all else, desire power.",
    },
    {
      name: "Galadriel",
      movie: "The Fellowship of the Ring",
      quote: "It began with the forging of the Great Rings.",
    },
    {
      name: "Galadriel",
      movie: "The Fellowship of the Ring",
      quote:
        "It was in this moment, that Isildur, son of the King, took up his father's sword.",
    },
    {
      name: "Galadriel",
      movie: "The Fellowship of the Ring",
      quote:
        "The Ring came to the creature Gollum who took it deep into the tunnels of the Misty Mountains. And there it consumed him.",
    },
    {
      name: "Galadriel",
      movie: "The Fellowship of the Ring",
      quote:
        "It betrayed Isildur, to his death. And some things that should not have been forgotten were lost. History became legend, legend became myth and for two and a half thousand years the Ring passed out of all knowledge. Until, when chance came, it ensnared a new bearer.",
    },
    {
      name: "Galadriel",
      movie: "The Fellowship of the Ring",
      quote:
        "Sauron, the enemy of the Free Peoples of Middle Earth was defeated. The Ring passed to Isildur. Who had this one chance to destroy evil forever. But the hearts of Men are easily corrupted. And the Ring of Power has a will of its own.",
    },
    {
      name: "Galadriel",
      movie: "The Fellowship of the Ring",
      quote: "Victory was near. But the power of the Ring, could not be undone.",
    },
    {
      name: "Galadriel",
      movie: "The Fellowship of the Ring",
      quote:
        "The Ring brought to Gollum unnatural long life. For five hundred years it poisoned his mind. And in the gloom of Gollum's cave it waited. Darkness crept back into the forests of the world. Rumour grew of a shadow in the East, whispers of a nameless fear. And the Ring of Power perceived. Its time had now come. It abandoned Gollum. But something happened then that the Ring did not intend, it was picked up by the most unlikely creature imaginable.",
    },
    {
      name: "Elrond",
      movie: "The Return of the King",
      quote:
        "You ride to war but not to victory. Sauron's armies ride on Minas Tirith, this you know. But in secret he sends another force, which will attack, from the river. A fleet of Corsair ships sails from the South. They will be in the city in two days. You're outnumbered Aragorn. You need more men.",
    },
    {
      name: "Elrond",
      movie: "The Return of the King",
      quote:
        "They will answer to the King of Gondor. And'ril, the Flame of the West, forged from the shards of Narsil.",
    },
    {
      name: "Elrond",
      movie: "The Return of the King",
      quote:
        "I come on behalf of one whom I love. Arwen is dying. She will not long survive the evil that now spreads from Mordor. The light of the evenstar is failing. As Sauron's power grows her strength wanes. Arwen's life is now tied to the fate of the Ring. The Shadow is upon us Aragorn. The end has come.",
    },
    {
      name: "Elrond",
      movie: "The Return of the King",
      quote: "There are those that dwell in the mountain.",
    },
    {
      name: "Sauron",
      movie: "The Fellowship of the Ring",
      quote:
        "You cannot hide! I see you! There is no life in the void, Only death!",
    },
    {
      name: "Elrond",
      movie: "The Two Towers ",
      quote:
        "If Aragorn survives this waryou will still be parted.If Sauron is defeated and Aragorn made king......and all that you hope for comes true......you will still have to taste the bitterness of mortality.",
    },
    {
      name: "Elrond",
      movie: "The Return of the King",
      quote:
        "The man who can wield the power of this sword can summon to him an army more deadly than any that walks this earth. Put aside the Ranger. Become who you were born to be 'nen i-Estel Edain.",
    },
    {
      name: "Elrond",
      movie: "The Two Towers ",
      quote:
        "Whether by the swordor the slow decay of time......Aragorn will die. And there will be no comfort for you......no comfort to ease the painof his passing. He will come to death......an image of the splendor of the kings of Men......in glory undimmed before the breaking of the world.",
    },
    {
      name: "Elrond",
      movie: "The Two Towers ",
      quote:
        "Arwen. Tollen i l'. I chair gwannar na Valannor. Si bado, no c'rar.",
    },
    {
      name: "Elrond",
      movie: "The Two Towers ",
      quote: "He is not coming back.Why do you linger herewhen there is no hope?",
    },
    {
      name: "Galadriel",
      movie: "The Fellowship of the Ring",
      quote:
        "For the time will soon come when Hobbits will shape the fortunes of all.",
    },
    {
      name: "Elrond",
      movie: "The Two Towers ",
      quote: "Arwen. There is nothing for you here......only death.",
    },
    {
      name: "Elrond",
      movie: "The Return of the King",
      quote:
        "Take her by the safest road. A ship lies anchored in the Grey Havens. It waits to carry her across the sea. The last journey of Arwen Und'miel.",
    },
    {
      name: "Elrond",
      movie: "The Two Towers ",
      quote:
        "But you, my daughter......you will linger on in darknessand in doubt......as nightfall in winterthat comes without a star. Here you will dwell......bound to your grief under the fading trees...... until all the world is changed......and the long years of your life are utterly spent.",
    },
    {
      name: "Elrond",
      movie: "The Fellowship of the Ring",
      quote: "You have only one choice. The Ring must be destroyed.",
    },
    {
      name: "Elrond",
      movie: "The Two Towers ",
      quote: "She stays for you. She belongs with her people.",
    },
    {
      name: "Elrond",
      movie: "The Return of the King",
      quote: "There is nothing for you here only death.",
    },
    {
      name: "Elrond",
      movie: "The Fellowship of the Ring",
      quote:
        "The Ringbearer is setting out on the quest of Mount Doom and you who travel with him, no oath nor bond is laid to go further than you will. Farewell. Hold to your purpose and may the blessings of elves, and men, and all free folk, go with you.",
    },
    {
      name: "Elrond",
      movie: "The Fellowship of the Ring",
      quote:
        "Never before has anyone uttered words of that tongue here in Imladris",
    },
    {
      name: "Elrond",
      movie: "The Fellowship of the Ring",
      quote:
        "The Ring cannot be destroyed, Gimli, son of Gloin, by any craft that we here possess. The Ring was made in the fires of Mount Doom. Only there can it be unmade. It must be taken deep into Mordor and cast back into the firey chasm from whence it came. One of you........... must do this",
    },
    {
      name: "Elrond",
      movie: "The Return of the King",
      quote: "I looked into your future and I saw death.",
    },
    {
      name: "Elrond",
      movie: "The Fellowship of the Ring",
      quote:
        "Strangers from distant lands, friends of old. You have been summoned here to answer the threat of Mordor. Middle Earth stands upon the brink of destruction. None can escape it. You will unite or you will fall. Each race is bound to this fate, this one doom. Bring forth the Ring, Frodo",
    },
    {
      name: "Elrond",
      movie: "The Two Towers ",
      quote:
        "Our time here is ending. Arwen's time is ending. Let her go. Let her take the ship into the west. Let her bear away her love for you to the Undying Lands. There it will be ever green.",
    },
    {
      name: "Elrond",
      movie: "The Return of the King",
      quote: "Your hands are cold. The life of the Eldar is leaving you.",
    },
    {
      name: "Legolas",
      movie: "The Return of the King",
      quote: "The horses are restless and the men are quiet.",
    },
    {
      name: "Legolas",
      movie: "The Return of the King",
      quote:
        "Pale banners like shreds of cloud. Spears rise like winter thickets through a shroud of mist. The dead are following. They have been summoned.",
    },
    {
      name: "Legolas",
      movie: "The Return of the King",
      quote: "It is the road to the Dimholt, the door under the mountain.",
    },
    {
      name: "Legolas",
      movie: "The Two Towers ",
      quote:
        "Shall I describe it to you? Or would you like me to find you a box?",
    },
    {
      name: "Legolas",
      movie: "The Return of the King",
      quote:
        "The way is shut. It was made by those who are dead, and the dead keep it. The way is shut.",
    },
    {
      name: "Legolas",
      movie: "The Return of the King",
      quote:
        "One that is cursed. Long ago the men of the mountains swore an oath to the last King of Gondor, to come to his aid, to fight. But when the time came, when Gondor's need was dire, they fled vanishing into the darkness of the mountain. And so Isildur cursed them, never to rest until they had fulfilled their pledge. Who shall call them from the grey twilight, the forgotten people? The heir of him to whom the oath they swore. From the North shall he come, need shall drive him. He shall pass the door to the Paths of the Dead.",
    },
    {
      name: "Legolas",
      movie: "The Two Towers ",
      quote:
        "They've run as if the very whips of their masters were behind them.",
    },
    {
      name: "Legolas",
      movie: "The Return of the King",
      quote: "Have you learnt nothing of the stubbornness of dwarves?",
    },
    {
      name: "Legolas",
      movie: "The Return of the King",
      quote:
        "Your kinsmen may have no need to ride to war. I fear war already marches on their own lands.",
    },
    {
      name: "Legolas",
      movie: "The Fellowship of the Ring",
      quote: "Govannas v'n gwennen le, Haldir o L'rien.",
    },
    {
      name: "Legolas",
      movie: "The Two Towers ",
      quote: "A red sun rises. Blood has been spilled this night.",
    },
    {
      name: "Legolas",
      movie: "The Two Towers ",
      quote: "The Uruks turn northeast. They are taking the Hobbits to lsengard.",
    },
    {
      name: "Legolas",
      movie: "The Two Towers ",
      quote: "This forest is old. Very old. Full of memory......and anger.",
    },
    {
      name: "Éowyn",
      movie: "The Return of the King",
      quote: "Whatever happens, stay with me. I'll look after you.",
    },
    {
      name: "Legolas",
      movie: "The Return of the King",
      quote:
        "The stars are veiled. Something stirs in the East, a sleepless malice. The eye of the enemy is moving.",
    },
    {
      name: "Legolas",
      movie: "The Two Towers ",
      quote:
        "They have feelings, my friend. The Elves began it. Waking up the trees, teaching them to speak.",
    },
    {
      name: "Éowyn",
      movie: "The Return of the King",
      quote:
        "Why are you doing this? The war lies to the East. You cannot leave on the eve of battle. You cannot abandon the men.",
    },
    {
      name: "Éowyn",
      movie: "The Two Towers ",
      quote:
        "Women of this country learned long ago: Those without swords can still die upon them. I fear neither death nor pain.",
    },
    {
      name: "Éowyn",
      movie: "The Two Towers ",
      quote: "Where is she? The woman who gave you that jewel.",
    },
    {
      name: "Legolas",
      movie: "The Fellowship of the Ring",
      quote:
        "Have you heard nothing Lord Elrond has said? The Ring must be destroyed",
    },
    {
      name: "Legolas",
      movie: "The Return of the King",
      quote:
        "I feel something. A slight tingle in my fingers. I think it's affecting me.",
    },
    {
      name: "Éowyn",
      movie: "The Return of the King",
      quote:
        "Why should Merry be left behind? He has as much cause to go to war as you. Why can he not fight for those he loves?",
    },
    {
      name: "Éowyn",
      movie: "The Two Towers ",
      quote:
        "My uncle told me a strange thing. He said that you rode to war with Thengel, my grandfather. But he must be mistaken.",
    },
    {
      name: "Éowyn",
      movie: "The Two Towers ",
      quote: "I made some stew. It isn't much, but it's hot.",
    },
    {
      name: "Legolas",
      movie: "The Two Towers ",
      quote:
        "That is one of the Mearas......unless my eyes are cheated by some spell.",
    },
    {
      name: "Éowyn",
      movie: "The Two Towers ",
      quote:
        "A cage. To stay behind bars until use and old age accept them. And all chance of valor has gone beyond recall or desire.",
    },
    {
      name: "Éowyn",
      movie: "The Two Towers ",
      quote:
        "You are one of the Dunedain. A descendant of Numenor blessed with long life. It was said that your race had passed into legend.",
    },
    {
      name: "Éowyn",
      movie: "The Two Towers ",
      quote:
        "My lord, your son......he is dead. My lord? Uncle? Will you not go to him? Will you do nothing?",
    },
    {
      name: "Merry",
      movie: "The Two Towers ",
      quote: "Still, I suppose the view would be quite nice from up there.",
    },
    {
      name: "Merry",
      movie: "The Return of the King",
      quote:
        "All my friends have gone to battle. I would be ashamed to be left behind.",
    },
    {
      name: "Éowyn",
      movie: "The Two Towers ",
      quote:
        "I have heard of the magic of Elves......but I did not look for it in a Ranger from the North.You speak as one of their own.",
    },
    {
      name: "Merry",
      movie: "The Return of the King",
      quote:
        "My lady. You are fair and brave and have much to live for, and many who love you. I know it is too late to turn aside. I know there is not much point now in hoping. If I were a knight of Rohan capable of great deeds'but I'm not. I'm a Hobbit. And I know I can't save Middle Earth. I just want to help my friends; Frodo, Sam, Pippin. More than anything I wish I could see them again.",
    },
    {
      name: "Merry",
      movie: "The Return of the King",
      quote:
        "We're under orders from Treebeard who's taken over management of Isengard.",
    },
    {
      name: "Merry",
      movie: "The Return of the King",
      quote: "Only, you've never done a hard day's work.",
    },
    {
      name: "Merry",
      movie: "The Two Towers ",
      quote:
        "Good luck trying to find something decent around here. Probably only dead rats and mouldy bread.",
    },
    {
      name: "Merry",
      movie: "The Two Towers ",
      quote: "Nothing. The world's back to normal, that's all.",
    },
    {
      name: "Merry",
      movie: "The Return of the King",
      quote:
        "I'm ready! Sorry. It isn't all that dangerous. It's not even sharp.",
    },
    {
      name: "Éowyn",
      movie: "The Return of the King",
      quote:
        "Just to the encampment. It's tradition for the women of the court to farewell the men. The men have found their captain. They will follow you into battle. Even to death. You have given us hope.",
    },
    {
      name: "Merry",
      movie: "The Return of the King",
      quote: "It's good. Definitely from the Shire. Longbottom leaf eh?",
    },
    {
      name: "Éowyn",
      movie: "The Return of the King",
      quote:
        "I dreamed I saw a great wave climbing over green lands and above the hills. I stood upon the brink. It was utterly dark in the abyss before my feet. A light shone behind me but I could not turn, I could only stand there, waiting.",
    },
    {
      name: "Éowyn",
      movie: "The Two Towers ",
      quote: "His name is Brego. He was my cousin's horse.",
    },
    {
      name: "Merry",
      movie: "The Two Towers ",
      quote: "But you're part of this world! Aren't you?!",
    },
    {
      name: "Merry",
      movie: "The Two Towers ",
      quote:
        "The fires of lsengard will spread......and the woods of Tuckborough and Buckland will burn. And.... And all that was once green and good in this world will be gone. There won't be a Shire, Pippin.",
    },
    {
      name: "Merry",
      movie: "The Two Towers ",
      quote: "You must help. Please. You must do something.",
    },
    {
      name: "Merry",
      movie: "The Two Towers ",
      quote:
        "Did you hear that? There it is again. Something's not right here. Not right at all.",
    },
    {
      name: "Merry",
      movie: "The Two Towers ",
      quote: "And what about Saruman? Have you come to a decision about him?",
    },
    {
      name: "Merry",
      movie: "The Two Towers ",
      quote: "I think we might have made a mistake leaving the Shire, Pippin.",
    },
    {
      name: "Merry",
      movie: "The Two Towers ",
      quote:
        "Hasty? Our friends are out there. They need our help. They cannot fight this war on their own.",
    },
    {
      name: "Merry",
      movie: "The Two Towers ",
      quote: "Pippin, everyone knows I'm the tall one.You're the short one.",
    },
    {
      name: "Merry",
      movie: "The Two Towers ",
      quote: "Trees that could whisper......talk to each other......even move.",
    },
    {
      name: "Merry",
      movie: "The Two Towers ",
      quote: "No! You don't understand. We're Hobbits! Halflings! hire-folk!",
    },
    {
      name: "Merry",
      movie: "The Two Towers ",
      quote:
        "You remember the Old Forest on the borders of Buckland? Folk used to say there was something in the water that made the trees grow tall......and come alive.",
    },
    {
      name: "Merry",
      movie: "The Two Towers ",
      quote: "Longbottom Leaf. The finest pipe-weed in South Farthing.",
    },
    {
      name: "Merry",
      movie: "The Two Towers ",
      quote: "Ssh! As soon as they find out we don't we're dead.",
    },
    {
      name: "Merry",
      movie: "The Fellowship of the Ring",
      quote: "What are they eating when they can't get hobbit?",
    },
    {
      name: "Merry",
      movie: "The Return of the King",
      quote:
        "Excuse me! I have a sword. Please accept it! I offer you my service Theoden King.",
    },
    {
      name: "Merry",
      movie: "The Two Towers ",
      quote:
        "Share it? No. No. Dead plant and all that. Don't think he'd understand. Could be a distant relative.",
    },
    {
      name: "Merry",
      movie: "The Return of the King",
      quote: "Why did you look? Why do you always have to look?",
    },
    {
      name: "Merry",
      movie: "The Return of the King",
      quote: "I know you've run out. You smoke too much Pippin.",
    },
    {
      name: "Merry",
      movie: "The Fellowship of the Ring",
      quote: "How do we know this Strider is a friend of Gandalf?",
    },
    {
      name: "Gríma Wormtongue",
      movie: "The Two Towers ",
      quote:
        "No, from the North.One of the Dunedain Rangers I thought he was. His cloth was poor.And yet he bore a strange ringTwo serpents with emerald eyes... One devouring the other crowned with golden flowers.",
    },
    {
      name: "Merry",
      movie: "The Fellowship of the Ring",
      quote: "Yes Pippin, my point is, he's clearly over reacting! Run!",
    },
    {
      name: "Merry",
      movie: "The Return of the King",
      quote:
        "He's always followed me everywhere I went since before we were tweens. I would get him into the worst sort of trouble but I was always there to get him out. Now he's gone. Just like Frodo and Sam.",
    },
    {
      name: "Merry",
      movie: "The Two Towers ",
      quote: "See? I fooled you too. Don't worry about me, Pippin.",
    },
    {
      name: "Merry",
      movie: "The Return of the King",
      quote: "I don't know! I don't know whats going to happen.",
    },
    {
      name: "Merry",
      movie: "The Fellowship of the Ring",
      quote: "Don't think he knows about second breakfast Pippin",
    },
    {
      name: "Merry",
      movie: "The Fellowship of the Ring",
      quote: "You're supposed to stick it in the ground",
    },
    {
      name: "Gríma Wormtongue",
      movie: "The Two Towers ",
      quote:
        "Helm's Deep has one weakness. Its outer wall is solid rock......but for a small culvert at its base...... which is little more than a drain.",
    },
    {
      name: "Gríma Wormtongue",
      movie: "The Two Towers ",
      quote:
        "Theoden will not stay at Edoras. It's vulnerable. He knows this. He will expect an attack on the city. They will flee to Helm's Deep......the great fortress of Rohan. It is a dangerous road to takethrough the mountains. They will be slow. They will have women and children with them.",
    },
    {
      name: "Gríma Wormtongue",
      movie: "The Two Towers ",
      quote:
        "There were three who followed the wizard. An Elf, a Dwarf and a Man.",
    },
    {
      name: "Gríma Wormtongue",
      movie: "The Two Towers ",
      quote: "What kind of device could bring down the wall?",
    },
    {
      name: "Merry",
      movie: "The Fellowship of the Ring",
      quote: "That black rider was looking for something. Or someone... Frodo?",
    },
    {
      name: "Merry",
      movie: "The Fellowship of the Ring",
      quote: "Dunno why he's so upset! Its only a couple of carrots",
    },
    {
      name: "Merry",
      movie: "The Return of the King",
      quote:
        "Don't you understand? The enemy thinks you have the ring! He is going to be looking for you Pip. They have to get you out of here.",
    },
    {
      name: "Gríma Wormtongue",
      movie: "The Two Towers ",
      quote:
        "Even if it is breached, it would take a number beyond reckoning......thousands, to storm the Keep.",
    },
    {
      name: "Gríma Wormtongue",
      movie: "The Two Towers ",
      quote: "My lord, Gandalf the Grey is coming. He's a herald of woe.",
    },
    {
      name: "Gríma Wormtongue",
      movie: "The Two Towers ",
      quote:
        "That is a lie. Saruman the White has ever been our friend and ally.",
    },
    {
      name: "Gríma Wormtongue",
      movie: "The Two Towers ",
      quote:
        "I understand. His passing is hard to accept. Especially now that your brother has deserted you.",
    },
    {
      name: "Gríma Wormtongue",
      movie: "The Two Towers ",
      quote:
        "Why do you lay these troubleson an already troubled mind? Can you not see? Your uncle is weariedby your malcontent......your warmongering.",
    },
    {
      name: "Treebeard",
      movie: "The Two Towers ",
      quote: "South? But that will lead you past lsengard.",
    },
    {
      name: "Gríma Wormtongue",
      movie: "The Two Towers ",
      quote:
        "Too much. You are banished forthwith from the kingdom of Rohan......and all its domains under pain of death.",
    },
    {
      name: "Treebeard",
      movie: "The Two Towers ",
      quote:
        "I will leave you at the western borders of the forest. You can make your way north to your homeland from there.",
    },
    {
      name: "Treebeard",
      movie: "The Two Towers ",
      quote:
        "And those little family of field mice......that climb up sometimes, and they tickle me awfully.",
    },
    {
      name: "Treebeard",
      movie: "The Two Towers ",
      quote:
        "There is no curse in Elvish......Entish or the tongues of Men......for this treachery.",
    },
    {
      name: "Treebeard",
      movie: "The Return of the King",
      quote:
        "The filth of Saruman is washing away. Trees will come back to live here. Young trees. Wild trees.",
    },
    {
      name: "Treebeard",
      movie: "The Return of the King",
      quote:
        "Hoooom, young master Gandalf, I'm glad you've come. Wood and water, stock and stone I can master, but there is a Wizard to manage here locked in his tower",
    },
    {
      name: "Gríma Wormtongue",
      movie: "The Two Towers ",
      quote: "His staff. I told you to take the wizard's staff.",
    },
    {
      name: "Treebeard",
      movie: "The Two Towers ",
      quote:
        "That doesn't make sense to me. But then......you are very small. Perhaps you're right. South it is, then. Hold on, little Shirelings. I always like going south. Somehow it feels like going downhill.",
    },
    {
      name: "Gríma Wormtongue",
      movie: "The Two Towers ",
      quote:
        "A just question, my liege. Late is the hour......in which this conjurer chooses to appear. Lathspell I name him. Ill news is an ill guest.",
    },
    {
      name: "Gríma Wormtongue",
      movie: "The Two Towers ",
      quote:
        "Oh, he must have died sometime in the night. What a tragedy for the king......to lose his only son and heir.",
    },
    {
      name: "Gríma Wormtongue",
      movie: "The Two Towers ",
      quote:
        "This order does not come from me. It comes from the king. He signed it this morning.",
    },
    {
      name: "Gríma Wormtongue",
      movie: "The Two Towers ",
      quote:
        "Oh, but you are alone. Who knows what you've spoken to the darkness......in the bitter watches of the night......when all your life seems to shrink. The walls of your bower closing in about you. A hutch to trammel some wild thing in. So fair. So cold. Like a morning of pale spring......still clinging to winter's chill.",
    },
    {
      name: "Treebeard",
      movie: "The Two Towers ",
      quote:
        "Many of these trees were my friends. Creatures I had known from nut and acorn.",
    },
    {
      name: "Treebeard",
      movie: "The Two Towers ",
      quote:
        "You are young and brave, Master Merry. But your part in this tale is over. Go back to your home.",
    },
    {
      name: "Treebeard",
      movie: "The Two Towers ",
      quote:
        "They have business with the Orcs. My business is with lsengard tonight......with rock and stone.",
    },
    {
      name: "Treebeard",
      movie: "The Two Towers ",
      quote:
        "Come, my friends. The Ents are going to war. It is likely......that we go to our doom. Last march......of the Ents.",
    },
    {
      name: "Treebeard",
      movie: "The Two Towers ",
      quote:
        "Side? I am on nobody's side......because nobody's on my side little Orc. Nobody cares for the woods anymore.",
    },
    {
      name: "Treebeard",
      movie: "The Two Towers ",
      quote:
        "I have told your names to the Entmoot......and we have agreed......you are not Orcs.",
    },
    {
      name: "Treebeard",
      movie: "The Two Towers ",
      quote:
        "It isn't safe. The trees have grown wildand dangerous. Anger festers in their hearts. Black are their thoughts. Strong is their hate. They will harm you if they can. There are too few of us now. Too few of us Ents left to manage them.",
    },
    {
      name: "Treebeard",
      movie: "The Two Towers ",
      quote:
        "Beech. Oak. Chestnut. Ash. Good. Good. Good. Many have come. Now we must decide if the Ents......will go to war.",
    },
    {
      name: "Treebeard",
      movie: "The Two Towers ",
      quote:
        "War? Yes. It affects us all. Tree, root and twig. But you must understand, young Hobbit......it takes a long time......to say anything in Old Entish... ...and we never say anything......unless it is worth taking......a long time to say.",
    },
    {
      name: "Treebeard",
      movie: "The Two Towers ",
      quote:
        "Bru-ra-hroom. There have been no Entings for a terrible long count of years.",
    },
    {
      name: "Treebeard",
      movie: "The Two Towers ",
      quote:
        "We Ents have not troubled......about the wars of Men and wizards......for a very long time. But now, something is about to happen......that has not happened......for an age. Entmoot.",
    },
    {
      name: "Treebeard",
      movie: "The Two Towers ",
      quote:
        "Hobbits? Never heard of a Hobbit before. Sounds like Orc mischief to me! They come with fire. They come with axes. Gnawing, biting, breaking hacking, burning! Destroyers and usurpers! Curse them!",
    },
    {
      name: "Treebeard",
      movie: "The Two Towers ",
      quote:
        "There was a time......when Saruman would walk in my woods. But now he has a mind of metal......and wheels. He no longer cares for growing things.",
    },
    {
      name: "Treebeard",
      movie: "The Two Towers ",
      quote: "There is always smoke rising......from lsengard these days.",
    },
    {
      name: "Treebeard",
      movie: "The Two Towers ",
      quote:
        "Maybe you are......and maybe you aren't. The White Wizard will know.",
    },
    {
      name: "Treebeard",
      movie: "The Two Towers ",
      quote: "Go to sleep. Away with you. Come, the forest is waking up.",
    },
    {
      name: "Treebeard",
      movie: "The Two Towers ",
      quote:
        "Away with you. You should not be waking. Eat earth. Dig deep. Drink water.",
    },
    {
      name: "Treebeard",
      movie: "The Two Towers ",
      quote: "They're always trying to get somewhere where they....",
    },
    {
      name: "Treebeard",
      movie: "The Two Towers ",
      quote:
        "The Ents cannot hold back this storm. We must weather such things as we have always done.",
    },
    {
      name: "Théoden",
      movie: "The Return of the King",
      quote: "Bring it down! Bring it down! Bring it down!",
    },
    {
      name: "Théoden",
      movie: "The Return of the King",
      quote:
        "It is a three-day gallop to Minas Tirith and none of my riders can bear you as a burdon.",
    },
    {
      name: "Treebeard",
      movie: "The Two Towers ",
      quote:
        "Sleep, little Shirelings. Heed no nightly noise. Sleep till morning light. I have business in the forest. There are many to call. Many that must come. The Shadow lies on Fangorn. The withering of all woods is drawing near.",
    },
    {
      name: "Théoden",
      movie: "The Two Towers ",
      quote: "So much death. What can Men do against such reckless hate?",
    },
    {
      name: "Théoden",
      movie: "The Return of the King",
      quote:
        "I have left instruction. The people are to follow your rule in my stead. Take up my seat in the Golden Hall. Long may you defend Edoras, if the battle goes ill.",
    },
    {
      name: "Théoden",
      movie: "The Return of the King",
      quote: "Eomer, take your Eored down the left flank",
    },
    {
      name: "Théoden",
      movie: "The Return of the King",
      quote:
        "Duty? No. I would have you smile again, not grieve for those whose time has come. You shall live to see these days renewed, and no more despair",
    },
    {
      name: "Théoden",
      movie: "The Return of the King",
      quote: "Sound the charge. Take them head-on. Chaaarge!",
    },
    {
      name: "Théoden",
      movie: "The Return of the King",
      quote: "Little Hobbits do not belong in war Master Meriadoc.",
    },
    {
      name: "Théoden",
      movie: "The Return of the King",
      quote:
        "Gamling, follow the King's banner down the centre. Grimbold! Take your company right after you pass the wall. Forth and fear no darkness! Arise! Arise riders of Theoden. Spears shall be shaken, shields shall be splintered, a sword day, a red day ere the sun rises!!",
    },
    {
      name: "Théoden",
      movie: "The Two Towers ",
      quote: "Aragorn! Fall back to the Keep! Get your men out of there!",
    },
    {
      name: "Théoden",
      movie: "The Return of the King",
      quote:
        "Grima! You need not follow him! You were not always as you are now. You were once a man of Rohan. Come down.",
    },
    {
      name: "Théoden",
      movie: "The Return of the King",
      quote:
        "We must ride light and swift. It is a long road ahead and man and beast must reach the end with the strength to fight.",
    },
    {
      name: "Théoden",
      movie: "The Return of the King",
      quote: "Six thousand spears, less than half of what I had hoped for.",
    },
    {
      name: "Théoden",
      movie: "The Return of the King",
      quote: "No, we cannot. But we will meet them in battle nonetheless.",
    },
    {
      name: "Théoden",
      movie: "The Return of the King",
      quote:
        "We shall have peace'. We shall have peace when you answer for the burning of the Westfold and the children that lie dead there! We shall have peace when the lives of the soldiers whose bodies were hewn even as they lay dead against the gates of the Hornburg' are avenged! When you hang from a gibbet for the sport of your own crows' we shall have peace!",
    },
    {
      name: "Treebeard",
      movie: "The Two Towers ",
      quote:
        "Bru-ra-hroom. Don't be hasty.You might call it far, perhaps. My home lies deep in the forest......near the roots of the mountain. I told Gandalf I would keep you safe. And safe is where I'll keep you. I believe you will enjoy this next one too. It's one of my own compositions. Right.",
    },
    {
      name: "Théoden",
      movie: "The Two Towers ",
      quote:
        "Yes.........Yes.........The horn of Helm Hammerhand......shall sound in the Deep......one last time.",
    },
    {
      name: "Treebeard",
      movie: "The Two Towers ",
      quote:
        "Die? No. We lost them. And now we cannot find them. I don't suppose you've seen Entwives in the Shire?",
    },
    {
      name: "Théoden",
      movie: "The Return of the King",
      quote:
        "Ride now, ride now! Ride! Ride for ruin and the world's ending! DEATH!",
    },
    {
      name: "Théoden",
      movie: "The Two Towers ",
      quote: "Fell deeds, awake. Now for wrath......now for ruin and a red dawn.",
    },
    {
      name: "Théoden",
      movie: "The Two Towers ",
      quote:
        "They will break upon this fortress like water on rock. Saruman's hordes will pillage and burn. We've seen it before. Crops can be resown......homes rebuilt. Within these walls......we will outlast them.",
    },
    {
      name: "Théoden",
      movie: "The Two Towers ",
      quote:
        "Draw all our forces behind the wall. Bar the gate. And set a watch on the surround.",
    },
    {
      name: "Théoden",
      movie: "The Two Towers ",
      quote:
        "Simbelmyne. Ever has it grown on the tombs of my forebearers. Now it shall cover the grave of my son. Alas that these evil days should be mine. The young perish and the old linger. That I should live......to see the last days of my house.",
    },
    {
      name: "Théoden",
      movie: "The Two Towers ",
      quote:
        "Get the wounded on horses.The wolves of lsengard will return.Leave the dead.",
    },
    {
      name: "Théoden",
      movie: "The Two Towers ",
      quote:
        "Gondor?! Where was Gondor when the Westfold fell?! Where was Gondor when our enemies closed in around us?! Where was Gon--? No, my Lord Aragorn......we are alone. Get the women and children into the caves.",
    },
    {
      name: "Théoden",
      movie: "The Two Towers ",
      quote: "They have broken through! The castle is breached. Retreat!",
    },
    {
      name: "Théoden",
      movie: "The Two Towers ",
      quote: "Our people are safe. We have paid for it with many lives.",
    },
    {
      name: "Théoden",
      movie: "The Two Towers ",
      quote:
        "Then she was left alone to tend her king in growing fear. Doomed to wait upon an old man who should have loved her as a father.",
    },
    {
      name: "Théoden",
      movie: "The Two Towers ",
      quote: "No parent should have to bury their child.",
    },
    {
      name: "Théoden",
      movie: "The Two Towers ",
      quote:
        "We will cover the causeway and the gate from above. No army has ever breached the Deeping Wall......or set foot inside the Hornburg!",
    },
    {
      name: "Théoden",
      movie: "The Two Towers ",
      quote:
        "And who will come? Elves? Dwarves? We are not so lucky in our friends as you. The old alliances are dead.",
    },
    {
      name: "Théoden",
      movie: "The Two Towers ",
      quote:
        "I want every man and strong lad able to bear arms......to be ready for battle by nightfall.",
    },
    {
      name: "Théoden",
      movie: "The Two Towers ",
      quote:
        "What would you have me do? Look at my men. Their courage hangs by a thread. If this is to be our end, then I would have them make such an end......as to be worthy of remembrance.",
    },
    {
      name: "Théoden",
      movie: "The Two Towers ",
      quote:
        "I haven't seen my niece smile for a long time. She was a girl when they brought her father back dead. Cut down by Orcs. She watched her mother succumb to grief.",
    },
    {
      name: "Théoden",
      movie: "The Two Towers ",
      quote: "You must lead the people to Helm's Deep, and make haste.",
    },
    {
      name: "Théoden",
      movie: "The Two Towers ",
      quote:
        "I have fought many wars, Master Dwarf. I know how to defend my own keep.",
    },
    {
      name: "Théoden",
      movie: "The Two Towers ",
      quote: "Let this be the hour when we draw swords together.",
    },
    {
      name: "Théoden",
      movie: "The Two Towers ",
      quote: "There is no time. War is upon us. Secure the gate.",
    },
    {
      name: "Théoden",
      movie: "The Two Towers ",
      quote: "This is not a defeat. We will return. We will return.",
    },
    {
      name: "Théoden",
      movie: "The Two Towers ",
      quote: "Is this it? Is this is all you can conjure Saruman?",
    },
    {
      name: "Théoden",
      movie: "The Two Towers ",
      quote:
        "Get them into the caves. Saruman's arm will have grown long indeed if he thinks he can reach us here.",
    },
    {
      name: "Théoden",
      movie: "The Two Towers ",
      quote: "Why should I welcome you......Gandalf Stormcrow?",
    },
    {
      name: "Théoden",
      movie: "The Return of the King",
      quote:
        "I go to my fathers, in whose mighty company; I shall not now feel ashamed.",
    },
    {
      name: "Théoden",
      movie: "The Return of the King",
      quote:
        "Make haste across the Riddermark. Summon every able-bodied man to Dunharrow.",
    },
    {
      name: "Théoden",
      movie: "The Return of the King",
      quote:
        "Tonight we remember those who gave their blood to defend this country.",
    },
    {
      name: "Théoden",
      movie: "The Two Towers ",
      quote: "You have no power here...... Gandalf the Grey!",
    },
    {
      name: "Théoden",
      movie: "The Return of the King",
      quote: "I am very happy for you. He is an honourable man.",
    },
    {
      name: "Théoden",
      movie: "The Two Towers ",
      quote: "When last I looked......Theoden, not Aragorn, was King of Rohan.",
    },
    {
      name: "Théoden",
      movie: "The Two Towers ",
      quote:
        "They will be 300 leagues from here by now. Eomer cannot help us. I know what it is you want of me......but I will not bring further death to my people. I will not risk open war.",
    },
    {
      name: "Théoden",
      movie: "The Return of the King",
      quote: "Ach, don't listen to me. You are young and tonight is for you.",
    },
    {
      name: "Théoden",
      movie: "The Return of the King",
      quote: "You already did. Eowyn, my body is broken. You have to let me go.",
    },
    {
      name: "Théoden",
      movie: "The Return of the King",
      quote:
        "And Rohan will answer! Muster the Rohirrim. Assemble the army at Dunharrow, as many men as can be found. You have two days. On the third, we ride for Gondor, and war.",
    },
    {
      name: "Théoden",
      movie: "The Return of the King",
      quote: "And gladly, I accept it. You shall be Meriadoc, esquire of Rohan.",
    },
    {
      name: "Théoden",
      movie: "The Two Towers ",
      quote:
        "Your leechcraft would have had me crawling on all fours like a beast!",
    },
    {
      name: "Faramir",
      movie: "The Return of the King",
      quote: "It's just the damp of the first spring rain.",
    },
    {
      name: "Faramir",
      movie: "The Return of the King",
      quote: "I do not believe this darkness will endure.",
    },
    {
      name: "Faramir",
      movie: "The Return of the King",
      quote:
        "It was well done. A generous deed should not be checked with cold counsel. You are to join the tower guard.",
    },
    {
      name: "Faramir",
      movie: "The Return of the King",
      quote: "The City has fallen silent. There is no warmth left in the sun.",
    },
    {
      name: "Théoden",
      movie: "The Return of the King",
      quote: "It was not Theoden of Rohan who led our people to victory.",
    },
    {
      name: "Faramir",
      movie: "The Return of the King",
      quote: "Yes, it was mine. My father had it made for me.",
    },
    {
      name: "Théoden",
      movie: "The Return of the King",
      quote:
        "Tell me! Why should we ride to the aid of those who did not come to ours? What do we owe Gondor?",
    },
    {
      name: "Faramir",
      movie: "The Return of the King",
      quote:
        "It once belonged to a young boy of the city. A very foolish one who wasted many hours slaying dragons instead of attending his studies.",
    },
    {
      name: "Faramir",
      movie: "The Two Towers ",
      quote: "Go, Frodo. Go with the goodwill of all Men.",
    },
    {
      name: "Faramir",
      movie: "The Return of the King",
      quote: "Fall back! Retreat! Retreat! Run for your lives!",
    },
    {
      name: "Faramir",
      movie: "The Return of the King",
      quote:
        "He would have kept it for his own. And when he returned you would not have known your son.",
    },
    {
      name: "Faramir",
      movie: "The Return of the King",
      quote: "Take cover! Nazgul! Fall back. Fall back to Minas Tirith!",
    },
    {
      name: "Faramir",
      movie: "The Return of the King",
      quote: "What other duty would you have me do my lord?",
    },
    {
      name: "Faramir",
      movie: "The Two Towers ",
      quote:
        "Frodo......they say a dark terror dwells in the passes above Minas Morgul. You cannot go that way.",
    },
    {
      name: "Faramir",
      movie: "The Return of the King",
      quote:
        "Mithrandir! They broke through our defences. They've taken the bridge and the West bank. Battalions of Orcs are crossing the river.",
    },
    {
      name: "Faramir",
      movie: "The Return of the King",
      quote:
        "I would not use the Ring. Not if Minas Tirith were falling in ruin and I alone could save her.",
    },
    {
      name: "Faramir",
      movie: "The Two Towers ",
      quote:
        "This is the old sewer. Runs right under the river through to the edge of the city. You'll find cover in the woods there.",
    },
    {
      name: "Faramir",
      movie: "The Two Towers ",
      quote: "I would have done, but our numbers were too few.",
    },
    {
      name: "Faramir",
      movie: "The Two Towers ",
      quote: "What road will you take once you reach the woods?",
    },
    {
      name: "Faramir",
      movie: "The Two Towers ",
      quote:
        "The Shire must truly be a great realm Master Gamgee......where gardeners are held in high honor.",
    },
    {
      name: "Faramir",
      movie: "The Return of the King",
      quote:
        "Since you are robbed of Boromir I will do what I can in his stead. If I should return, think better of me father.",
    },
    {
      name: "Faramir",
      movie: "The Return of the King",
      quote:
        "In Ithilien. Not two days ago. Gandalf, they're taking the road to the Morgul vale.",
    },
    {
      name: "Faramir",
      movie: "The Return of the King",
      quote: "Tell the men to break cover. We ride for Minas Tirith.",
    },
    {
      name: "Faramir",
      movie: "The Two Towers ",
      quote: "I think at last we understand one another, Frodo Baggins.",
    },
    {
      name: "Faramir",
      movie: "The Return of the King",
      quote:
        "You wish now that our places had been exchanged. That I had died and Boromir had lived.",
    },
    {
      name: "Faramir",
      movie: "The Two Towers ",
      quote: "May death find you quickly if you bring them to harm.",
    },
    {
      name: "Faramir",
      movie: "The Two Towers ",
      quote: "Stay here. Keep out of sight. Take cover!",
    },
    {
      name: "Faramir",
      movie: "The Return of the King",
      quote:
        "Boromir would not have brought the Ring. He would have stretched out his hand to this thing and taking it he would have fallen.",
    },
    {
      name: "Faramir",
      movie: "The Return of the King",
      quote:
        "Where does my allegiance lie if not here? This is the city of the men of N'menor. I will gladly give my life to defend her beauty, her memory, her wisdom.",
    },
    {
      name: "Faramir",
      movie: "The Two Towers ",
      quote:
        "Take them to my father. Tell him Faramir sends a mighty gift. A weapon that will change our fortunes in this war.",
    },
    {
      name: "Faramir",
      movie: "The Return of the King",
      quote:
        "It never fitted me either. Boromir was always the soldier. They were so alike he and my father. Proud, stubborn even, but strong.",
    },
    {
      name: "Faramir",
      movie: "The Two Towers ",
      quote: "lf there is need to go to Rivendell......send me in his stead.",
    },
    {
      name: "Faramir",
      movie: "The Two Towers ",
      quote: "Prepare to leave. The Ring will go to Gondor.",
    },
    {
      name: "Bilbo",
      movie: "The Return of the King",
      quote: "I think I'm quite ready for another adventure.",
    },
    {
      name: "Bilbo",
      movie: "The Return of the King",
      quote: "Oh! Well here is a sight I have never seen before.",
    },
    {
      name: "Faramir",
      movie: "The Two Towers ",
      quote:
        "They had no warning. They were unarmed. Now the Wild Men are moving through the Westfold, burning as they go. Rick, cot and tree.",
    },
    {
      name: "Faramir",
      movie: "The Return of the King",
      quote: "They're not coming from the North! To the river quick, quick!",
    },
    {
      name: "Faramir",
      movie: "The Two Towers ",
      quote:
        "His horn washed up upon the riverbank, about six days past. It was cloven in two. But more than this, I know it in my heart. He was my brother.",
    },
    {
      name: "Faramir",
      movie: "The Two Towers ",
      quote: "That's enough. Where are you leading them? Answer me.",
    },
    {
      name: "Bilbo",
      movie: "The Fellowship of the Ring",
      quote:
        "My my old ring. Well I should... very much like to hold it again, one last time.",
    },
    {
      name: "Faramir",
      movie: "The Two Towers ",
      quote:
        "Saruman attacks from lsengard. Sauron from Mordor. The fight will come to Men on both fronts. Gondor is weak. Sauron will strike us soon. And he will strike hard. He knows now we do not have the strength to repel him.",
    },
    {
      name: "Faramir",
      movie: "The Two Towers ",
      quote:
        "To enter the Forbidden Pool bears the penalty of death. They wait for my command. Shall I shoot?",
    },
    {
      name: "Bilbo",
      movie: "The Fellowship of the Ring",
      quote:
        "I'm sorry I brought this upon you my boy, I'm sorry that you must carry this burden. I'm sorry for everything",
    },
    {
      name: "Faramir",
      movie: "The Two Towers ",
      quote: "It will grieve you then to learn that he is dead.",
    },
    {
      name: "Faramir",
      movie: "The Two Towers ",
      quote:
        "And where is your skulking friend? That gangrel creature. He had an ill-favored look.",
    },
    {
      name: "Bilbo",
      movie: "The Return of the King",
      quote:
        "Frodo, any chance of seeing that old Ring of mine again? The one I gave you?",
    },
    {
      name: "Faramir",
      movie: "The Two Towers ",
      quote:
        "The enemy?,His sense of duty was no lessthan yours, I deem. You wonder what his name is......where he came from. And if he was really evil at heart. What lies or threats led himon this long march from home. If he would not rather have stayed there......in peace. War will make corpses of us all. Bind their hands.",
    },
    {
      name: "Bilbo",
      movie: "The Fellowship of the Ring",
      quote: "Hello, Hello, Fatty Bolger, Lovely to see you, Welcome, Welcome",
    },
    {
      name: "Bilbo",
      movie: "The Fellowship of the Ring",
      quote:
        "Yes Yes, Made by the elves you know. The blade glows blue when orcs are close and its times like that my lad, when you have to be extra careful. Here's a pretty thing. Mithril! as light as a feather and as hard as dragon scales. Let me see you put it on, go on.",
    },
    {
      name: "Faramir",
      movie: "The Two Towers ",
      quote:
        "There are no travelers in this land. Only servants of the Dark Tower.",
    },
    {
      name: "Faramir",
      movie: "The Two Towers ",
      quote: "Well, if you're not spies, then who are you?",
    },
    {
      name: "Bilbo",
      movie: "The Fellowship of the Ring",
      quote: "My old sword, Sting, Here, take it, take it.",
    },
    {
      name: "Faramir",
      movie: "The Two Towers ",
      quote: "As one of his companions, I'd hoped you would tell me.",
    },
    {
      name: "Faramir",
      movie: "The Two Towers ",
      quote:
        "So this is the answer to all the riddles. Here in the Wild I have you......two Halflings......and a host of men at my call. The Ring of Power within my grasp. A chance for Faramir, captain of Gondor......to show his quality.",
    },
    {
      name: "Bilbo",
      movie: "The Return of the King",
      quote: "Oh, pity. I would have like to have held it one last time.",
    },
    {
      name: "Bilbo",
      movie: "The Fellowship of the Ring",
      quote:
        "Alas, elevnty-one years is far too short a time to live among such excellent and admirable hobbits. I don't know half of you half as well as I should like and I like less than half of you, half as well as you deserve.",
    },
    {
      name: "Bilbo",
      movie: "The Fellowship of the Ring",
      quote:
        "No thank you! We don't want any more visitors, well wishers or distant relations!",
    },
    {
      name: "Bilbo",
      movie: "The Fellowship of the Ring",
      quote: "Today is my One Hundred and Eleventh birthday!",
    },
    {
      name: "Bilbo",
      movie: "The Fellowship of the Ring",
      quote:
        "The 22nd day of September in the year 1400,by Shire reckoning. Bag End, Bagshot Row, Hobbiton, West Farthing, The Shire, Middle Earth. The Third Age of this world.",
    },
    {
      name: "Bilbo",
      movie: "The Fellowship of the Ring",
      quote:
        "Hobbits have been living and farming in the four Farthings of the Shire for many hundreds of years. quite content to ignore and be ignored by the world of the Big Folk. Middle Earth being, after all, full of strange creatures beyond count. Hobbits must seem of little importance, being neither renowned as great warriors, nor counted amongst the very wise.",
    },
    {
      name: "Bilbo",
      movie: "The Fellowship of the Ring",
      quote: "Frodo, the door! sticklebacks, where is that boy! FRODO!",
    },
    {
      name: "Bilbo",
      movie: "The Fellowship of the Ring",
      quote:
        "Mrs Bracegirdle, how nice to see you. Welcome welcome. Are all these children yours?",
    },
    {
      name: "Bilbo",
      movie: "The Fellowship of the Ring",
      quote:
        "No. Well yes, b-b-b but thats not the point. The point is, Frodo, you'll be alright.",
    },
    {
      name: "Bilbo",
      movie: "The Fellowship of the Ring",
      quote:
        "They're after the house! They've never forgiven me for living this long. I've got to get away from these confounded relatives hanging on the bell all day, never giving me a moment's peace. I want to see mountains again, mountains Gandalf. And then find somewhere quiet where I can finish my book. Oh, tea!",
    },
    {
      name: "Bilbo",
      movie: "The Fellowship of the Ring",
      quote: "I'm not at home! It's the Sackville-Bagginses.",
    },
    {
      name: "Bilbo",
      movie: "The Fellowship of the Ring",
      quote:
        "Frodo, someone at the door. In fact, it has been remarked by some that Hobbits' only real passion is for food. A rather unfair observation, As we have also developed a keen interest in the brewing of ales,and the smoking of pipeweed. But where our hearts truly lie, is in peace and quiet,and good tilled earth. For all Hobbits share a love of all things that grow. And yes, no doubt to others, our ways seem quaint, But today of all days, it is brought home to me it is no bad thing to celebrate a simple life.",
    },
    {
      name: "Bilbo",
      movie: "The Fellowship of the Ring",
      quote: "Oh right. You don't mind if I do, do you?",
    },
    {
      name: "Bilbo",
      movie: "The Fellowship of the Ring",
      quote:
        "So there I was at the mercy of three monstrous trolls and they were all arguing amongst themselves about how they were going to cook us. Whether it be turned on a spit or whether they should sit on us one by one and squash us into jelly. They spent so much time arguing the witherto's and whyfor's that the sun's first light cracked open over the top of the trees. Poof! and turned them all into stone!",
    },
    {
      name: "Bilbo",
      movie: "The Fellowship of the Ring",
      quote:
        "Oh! Thank you my boy You're a good lad Frodo. I'm very selfish you know. Yes, I am. Very selfish. I don't know why I took you in after your mother and father died, but it wasn't out of charity. I think it was because, of all my numerous relations, you were the one Baggins that showed real spirit.",
    },
    {
      name: "Bilbo",
      movie: "The Fellowship of the Ring",
      quote:
        "My dear Bagginses and Boffins, Tooks and Brandybucks, Grubbs, Chubbs, Hornblowers, Bulgers, Bracegirdles, and Proudfoots.",
    },
    {
      name: "Bilbo",
      movie: "The Fellowship of the Ring",
      quote: "Come on, come in! Welcome, welcome. Oh, here we are.",
    },
    {
      name: "Bilbo",
      movie: "The Fellowship of the Ring",
      quote:
        "There and back again, A Hobbit's tale, by Bilbo Baggins. Now, where to begin? Ah, yes. Concerning Hobbits.",
    },
    {
      name: "Bilbo",
      movie: "The Fellowship of the Ring",
      quote:
        "I was expecting you sometime last week. Not that it matters; you come and go as you please. Always have done and always will.",
    },
    {
      name: "Bilbo",
      movie: "The Fellowship of the Ring",
      quote:
        "You've caught me a bit unprepared I'm afraid urm we've only got cold chicken and a bit of pickle oh and there's some cheese here, oh no that wont do! Urm we've got raspberry jam, an apple tart, but we've not much for afters. Oh no we're all right, I've found some sponge cake! I can make you some eggs if you ' oh'. Gandalf?",
    },
    {
      name: "Bilbo",
      movie: "The Fellowship of the Ring",
      quote:
        "Of course he does, he's a Baggins, not some blockheaded Bracegirdle from Hardbottle.",
    },
    {
      name: "Bilbo",
      movie: "The Fellowship of the Ring",
      quote:
        "Dragon! Nonsense, there hasn't been a dragon in these parts for a thousand years.",
    },
    {
      name: "Bilbo",
      movie: "The Fellowship of the Ring",
      quote: "It was laid down by my father, what say we open one eh?",
    },
    {
      name: "Bilbo",
      movie: "The Fellowship of the Ring",
      quote:
        "Yes, yes, it's all in hand. All the arrangements are made. Oh, thank you.",
    },
    {
      name: "Bilbo",
      movie: "The Fellowship of the Ring",
      quote:
        "And so life in the Shire goes on, very much as it has this past age. Full of its own comings and goings with change coming slowly, if it comes at all. For things are made to endure in the Shire, passing from one generation to the next. There's always been a Baggins living here under the Hill, in Bag End",
    },
    {
      name: "Bilbo",
      movie: "The Fellowship of the Ring",
      quote:
        "Tea or maybe something a little stronger? I've got a few bottles of the Old Winyard left, 1296, a very good year, almost as old as I am.",
    },
    {
      name: "Bilbo",
      movie: "The Fellowship of the Ring",
      quote:
        "I know, he'd probably come with me if I asked him to. I think in his heart Frodo's still in love with the Shire, the woods, the fields and the little rivers. I am old Gandalf. I know I don't look it, but I'm beginning to feel it in my heart. I feel thin, sort of stretched like butter scraped over too much bread. I need a holiday, a very long holiday. And I don't expect that I shall return. In fact, I mean not to.",
    },
    {
      name: "Aragorn",
      movie: "The Return of the King",
      quote:
        "It has been remade. Fight for us and regain your honour. What say you? What say you?",
    },
    {
      name: "Bilbo",
      movie: "The Fellowship of the Ring",
      quote: "Old Toby, the finest weed in the Southfarthing.",
    },
    {
      name: "Bilbo",
      movie: "The Fellowship of the Ring",
      quote: "Gandalf my old friend, this will be a night to remember.",
    },
    {
      name: "Aragorn",
      movie: "The Return of the King",
      quote:
        "Every hour lost hastens Gondor's defeat. We have until dawn then we must ride.",
    },
    {
      name: "Aragorn",
      movie: "The Return of the King",
      quote:
        "Murderers, traitors. You would call upon them to fight? They believe in nothing. They answer to no one",
    },
    {
      name: "Aragorn",
      movie: "The Two Towers ",
      quote: "Ride out with me. Ride out and meet them.",
    },
    {
      name: "Aragorn",
      movie: "The Two Towers ",
      quote: "A Eruch'n, '-dano i faelas a hyn an uben tanatha le faelas!",
    },
    {
      name: "Aragorn",
      movie: "The Two Towers ",
      quote:
        "You said this fortress would never fall while your men defend it. They still defend it. They have died defending it.",
    },
    {
      name: "Aragorn",
      movie: "The Return of the King",
      quote:
        "It is but a shadow and a thought that you love. I cannot give you what you seek.",
    },
    {
      name: "Aragorn",
      movie: "The Return of the King",
      quote:
        "Et E'rello Endorenna ut'lien. Sinome maruvan ar Hildinyar tenn' Ambar-metta!",
    },
    {
      name: "Aragorn",
      movie: "The Two Towers ",
      quote:
        "Tell the women and children to make for the mountain pass. And barricade the entrance!",
    },
    {
      name: "Aragorn",
      movie: "The Return of the King",
      quote: "Legolas, fire a warning shot past the boson's ear.",
    },
    {
      name: "Aragorn",
      movie: "The Return of the King",
      quote: "I have wished you joy since first I saw you.",
    },
    {
      name: "Aragorn",
      movie: "The Return of the King",
      quote: "The blade that was broken shall return to Minas Tirith.",
    },
    {
      name: "Aragorn",
      movie: "The Return of the King",
      quote: "Sauron will not have forgotten the sword of Elendil.",
    },
    {
      name: "Aragorn",
      movie: "The Return of the King",
      quote: "Not this time. This time you must stay Gimli.",
    },
    {
      name: "Aragorn",
      movie: "The Return of the King",
      quote: "Six thousand will not be enough to break the lines of Mordor.",
    },
    {
      name: "Aragorn",
      movie: "The Return of the King",
      quote:
        "You have my word! Fight and I will release you from this living death! What say you?",
    },
    {
      name: "Aragorn",
      movie: "The Two Towers ",
      quote:
        "Is there no other way for the women and children to get out of the caves?",
    },
    {
      name: "Aragorn",
      movie: "The Two Towers ",
      quote:
        "They do not come to destroy Rohan's crops or villages. They come to destroy its people......down to the last child.",
    },
    {
      name: "Aragorn",
      movie: "The Return of the King",
      quote:
        "This day does not belong to one man, but to all. Let us together rebuild this world, that we may share in the days of peace.",
    },
    {
      name: "Aragorn",
      movie: "The Return of the King",
      quote:
        "Let the Lord of the Black Land come forth! Let justice be done upon him!",
    },
    {
      name: "Aragorn",
      movie: "The Two Towers ",
      quote:
        "It is an army bred for a single purpose: To destroy the world of Men. They will be here by nightfall.",
    },
    {
      name: "Aragorn",
      movie: "The Return of the King",
      quote:
        "I am Isildur's heir. Fight for me and I will hold your oaths fulfilled. What say you?",
    },
    {
      name: "Aragorn",
      movie: "The Two Towers ",
      quote: "Nan Barad! Nan Barad! Haldir, nan Barad! (",
    },
    {
      name: "Aragorn",
      movie: "The Two Towers ",
      quote: "Edra le men, men na guil edwen. Haer o auth a n'r a naeth.",
    },
    {
      name: "Aragorn",
      movie: "The Two Towers ",
      quote:
        "She is sailing to the Undying Lands with all that is left of her kin.",
    },
    {
      name: "Aragorn",
      movie: "The Two Towers ",
      quote: "Send out riders, my lord. You must call for aid.",
    },
    {
      name: "Aragorn",
      movie: "The Two Towers ",
      quote:
        "King Theoden has a good memory. He was only a small child at the time.",
    },
    {
      name: "Aragorn",
      movie: "The Two Towers ",
      quote: "F'ste, stille n', f'ste, stille n'. Lac is drefed, gefr'gon.",
    },
    {
      name: "Aragorn",
      movie: "The Two Towers ",
      quote:
        "He's only doing what he thinks is best for his people. Helm's Deep has saved them in the past.",
    },
    {
      name: "Aragorn",
      movie: "The Fellowship of the Ring",
      quote:
        "He's passing into the Shadow world. He'll soon become a wraith like them.",
    },
    {
      name: "Aragorn",
      movie: "The Return of the King",
      quote:
        "Not for ourselves. But we can give Frodo his chance if we keep Sauron's eye fixed upon us. Keep him blind to all else that moves.",
    },
    {
      name: "Aragorn",
      movie: "The Fellowship of the Ring",
      quote:
        "These are for you. Keep them close, I'm going to have a look round, Stay here",
    },
    {
      name: "Aragorn",
      movie: "The Return of the King",
      quote:
        "Long have you hunted me. Long have I eluded you. No more! Behold, the Sword of Elendil!",
    },
    {
      name: "Aragorn",
      movie: "The Two Towers ",
      quote:
        "I was raised in Rivendell......for a time. Turn this fellow free. He's seen enough of war.",
    },
    {
      name: "Aragorn",
      movie: "The Two Towers ",
      quote: "Open war is upon you, whether you would risk it or not.",
    },
    {
      name: "Aragorn",
      movie: "The Return of the King",
      quote:
        "Sons of Gondor, of Rohan, my brothers. I see it in your eyes, the same fear that would take the heart of me. A day may come when the courage of men fails, when we forsake our friends and break all bonds of fellowship, but it is not this day! An hour of wolves and shattered shields when the age of men comes crashing down, but it is not this day! This day we fight!",
    },
    {
      name: "Aragorn",
      movie: "The Two Towers ",
      quote:
        "I am Aragorn, son of Arathorn. This is Gimli, son of Gloin and Legolas of the Woodland Realm. We are friends of Rohan and of Theoden, your king.",
    },
    {
      name: "Aragorn",
      movie: "The Two Towers ",
      quote: "Riders of Rohan......what news from the Mark?",
    },
    {
      name: "Aragorn",
      movie: "The Return of the King",
      quote: "The beacons of Minas Tirith! The beacons are lit!",
    },
    {
      name: "Aragorn",
      movie: "The Fellowship of the Ring",
      quote:
        "Tis the Lady of L'thien. The Elf Maiden who gave her love to Beren ... a mortal.",
    },
    {
      name: "Aragorn",
      movie: "The Two Towers ",
      quote: "Their pace has quickened. They must have caught our scent. Hurry!",
    },
    {
      name: "Aragorn",
      movie: "The Two Towers ",
      quote:
        "You're a daughter of kings......a shield maiden of Rohan. I do not think that would be your fate.",
    },
    {
      name: "Aragorn",
      movie: "The Two Towers ",
      quote: "I am mortal. You are Elf-kind.It was a dream, Arwen. Nothing more.",
    },
    {
      name: "Aragorn",
      movie: "The Return of the King",
      quote: "I hold your oath fulfilled. Go. Be at peace.",
    },
    {
      name: "Aragorn",
      movie: "The Return of the King",
      quote:
        "No. There is still hope for Frodo. He needs time and safe passage across the plains of Gorgoroth. We can give him that.",
    },
    {
      name: "Aragorn",
      movie: "The Two Towers ",
      quote:
        "You have 2000 good men riding north as we speak. Eomer is loyal to you. His men will return and fight for their king.",
    },
    {
      name: "Aragorn",
      movie: "The Two Towers ",
      quote:
        "There are few of us left. The Northern Kingdom was destroyed long ago.",
    },
    {
      name: "Aragorn",
      movie: "The Return of the King",
      quote:
        "Draw out Sauron's armies. Empty his lands. Then we gather our full strength and march on the Black Gate.",
    },
    {
      name: "Aragorn",
      movie: "The Return of the King",
      quote:
        "By all that you hold dear on this good earth, I bid you stand! Men of the West!",
    },
    {
      name: "Aragorn",
      movie: "The Two Towers ",
      quote:
        "Rohan. Home of the Horse-lords. There's something strange at work here. Some evil gives speed to these creatures. Sets its will against us.",
    },
    {
      name: "Aragorn",
      movie: "The Fellowship of the Ring",
      quote:
        "You said you would bind yourself to me, foresaking the immortal life of your people",
    },
    {
      name: "Aragorn",
      movie: "The Fellowship of the Ring",
      quote:
        "They were once men. Great Kings of Men. The Sauron the Deciever gave to them nine rings of power. Blinded by their greed they took them without question. One by one falling into darkness,Now they are slaves to his will. They are the Nazg'l. Ringwraiths. Neither living nor dead. At all times they feel the presence of the Ring, Drawn to the power of the One, They will never stop hunting you.",
    },
    {
      name: "Aragorn",
      movie: "The Fellowship of the Ring",
      quote:
        "You have a stout heart little hobbit! But that will not save you. You can no longer wait for the wizard Frodo. They're coming",
    },
    {
      name: "Aragorn",
      movie: "The Fellowship of the Ring",
      quote: "Not nearly frightened enough. I know what hunts you.",
    },
    {
      name: "Aragorn",
      movie: "The Return of the King",
      quote: "One thing I've learnt about Hobbits: They are a most hardy folk.",
    },
    {
      name: "Aragorn",
      movie: "The Return of the King",
      quote: "We have time. Every day Frodo moves closer to Mordor.",
    },
    {
      name: "Aragorn",
      movie: "The Two Towers ",
      quote:
        "We are no spies. We track a party of Uruk-hai westward across the plain. They have taken two of our friends captive.",
    },
    {
      name: "Aragorn",
      movie: "The Two Towers ",
      quote:
        "In one thing you have not changeddear friend. You still speak in riddles.",
    },
    {
      name: "Gimli",
      movie: "The Return of the King",
      quote: "I've heard enough! Shoot him! Stick an arrow in his gob!",
    },
    {
      name: "Aragorn",
      movie: "The Two Towers ",
      quote: "We hear of trouble in Rohan. It goes ill with the king.",
    },
    {
      name: "Aragorn",
      movie: "The Fellowship of the Ring",
      quote: "To Rivendell Master Gamgee. To the House of Elrond.",
    },
    {
      name: "Aragorn",
      movie: "The Two Towers ",
      quote:
        "No, my lord! No, my lord. Let him go. Enough blood has been spilt on his account.",
    },
    {
      name: "Gimli",
      movie: "The Return of the King",
      quote:
        "You young rascals. A merry hunt you've led us on and now we find you feasting and smoking!",
    },
    {
      name: "Aragorn",
      movie: "The Fellowship of the Ring",
      quote: "Dartho guin perian. Rych le ad tolthathon.",
    },
    {
      name: "Aragorn",
      movie: "The Return of the King",
      quote: "Night changes many thoughts. Sleep Eowyn. Sleep while you can.",
    },
    {
      name: "Gimli",
      movie: "The Return of the King",
      quote: "Well then let's just have his head and be done with it.",
    },
    {
      name: "Aragorn",
      movie: "The Fellowship of the Ring",
      quote: "The Gap of Rohan takes us too close to Isengard!",
    },
    {
      name: "Aragorn",
      movie: "The Two Towers ",
      quote: "Do not let him speak. He will put a spell on us.",
    },
    {
      name: "Aragorn",
      movie: "The Fellowship of the Ring",
      quote:
        "You cannot wield it. None of us can. The One Ring answers to Sauron alone. It has no other master",
    },
    {
      name: "Aragorn",
      movie: "The Fellowship of the Ring",
      quote: "A little more caution from you! That is no trinket you carry!",
    },
    {
      name: "Aragorn",
      movie: "The Fellowship of the Ring",
      quote: "You draw far too much attention to yourself Mr Underhill!",
    },
    {
      name: "Aragorn",
      movie: "The Fellowship of the Ring",
      quote:
        "He's trying to bring down the mountain! Gandalf! We must turn back!",
    },
    {
      name: "Aragorn",
      movie: "The Fellowship of the Ring",
      quote:
        "He's been stabbed by a Morgul blade. This is beyond my skill to heal. He needs elvish medicine",
    },
    {
      name: "Aragorn",
      movie: "The Fellowship of the Ring",
      quote: "The Mines are no place for a pony even one so brave as Bill.",
    },
    {
      name: "Aragorn",
      movie: "The Fellowship of the Ring",
      quote: "Go on, go on, don't worry Sam. He knows the way home.",
    },
    {
      name: "Aragorn",
      movie: "The Fellowship of the Ring",
      quote: "The same blood flows in my veins, The same weakness",
    },
    {
      name: "Aragorn",
      movie: "The Fellowship of the Ring",
      quote:
        "Indeed, I can avoid being seen if I wish. But to disappear entirely? That is a rare gift!",
    },
    {
      name: "Aragorn",
      movie: "The Two Towers ",
      quote: "They would be small. Only children to your eyes.",
    },
    {
      name: "Gimli",
      movie: "The Return of the King",
      quote: "There's plenty for the both of us, may be best Dwarf win!",
    },
    {
      name: "Gimli",
      movie: "The Return of the King",
      quote: "The very warmth of my blood seems stolen away.",
    },
    {
      name: "Gimli",
      movie: "The Two Towers ",
      quote:
        "Well, lad, whatever luck you live by, let's hope it lasts the night.",
    },
    {
      name: "Gimli",
      movie: "The Return of the King",
      quote: "Oh! That's it, right, we warned you! Prepare to be boarded!",
    },
    {
      name: "Gimli",
      movie: "The Return of the King",
      quote:
        "Bad idea! Very handy in a tight spot these lads, despite the fact they're dead.",
    },
    {
      name: "Gimli",
      movie: "The Return of the King",
      quote:
        "Well this is a thing unheard of. An elf will go underground, where a dwarf dare not. Oh. Oh, I'd never hear the end of it.",
    },
    {
      name: "Gimli",
      movie: "The Two Towers ",
      quote:
        "This is no rabble of mindless Orcs. These are Uruk-hai. Their armour is thick and their shields broad.",
    },
    {
      name: "Gimli",
      movie: "The Two Towers ",
      quote: "Tell me what happenedand I will ease your passing.",
    },
    {
      name: "Gimli",
      movie: "The Two Towers ",
      quote:
        "It's true, you don't see many Dwarf women. And in fact, they are so alike in voice and appearance......that they're often mistaken for Dwarf men.",
    },
    {
      name: "Gimli",
      movie: "The Two Towers ",
      quote:
        "He was twitching......because he's got my axe,embedded in his nervous system!",
    },
    {
      name: "Gimli",
      movie: "The Two Towers ",
      quote: "That one counts as mine! Stinking creature.",
    },
    {
      name: "Gimli",
      movie: "The Return of the King",
      quote:
        "The dead? Summoned? I knew that! Huh. Huh. Very good. Very good. Legolas!",
    },
    {
      name: "Gimli",
      movie: "The Two Towers ",
      quote:
        "Forty-two? That's not bad for a pointy-eared Elvish princeling. I myself am sitting pretty on 43.",
    },
    {
      name: "Gimli",
      movie: "The Two Towers ",
      quote: "Come on. Get me up here. I'm a rider. Come on!",
    },
    {
      name: "Gimli",
      movie: "The Two Towers ",
      quote:
        "Where is he? Where is he? Get out of the way! I'm going to kill him! You are the luckiest, the canniest.....and the most reckless man I ever knew. Bless you, laddie.",
    },
    {
      name: "Gimli",
      movie: "The Two Towers ",
      quote:
        "It's all right. Nobody panic. That was deliberate. It was deliberate.",
    },
    {
      name: "Gimli",
      movie: "The Two Towers ",
      quote: "What are you doing? What are you stopping for?",
    },
    {
      name: "Gimli",
      movie: "The Two Towers ",
      quote:
        "I'm wasted on cross-country. We Dwarves are natural sprinters. Very dangerous over short distances.",
    },
    {
      name: "Gimli",
      movie: "The Two Towers ",
      quote:
        "This, in turn, has given rise to the belief......that there are no Dwarf women......and that Dwarves just spring outof holes in the ground...",
    },
    {
      name: "Gimli",
      movie: "The Two Towers ",
      quote: "Seventeen! Eighteen! Nineteen! Twenty! Twenty-one!",
    },
    {
      name: "Gimli",
      movie: "The Return of the King",
      quote:
        "You might as well accept it. We're going with you laddie. Aragorn smiles.",
    },
    {
      name: "Gimli",
      movie: "The Two Towers ",
      quote: "I cannot jump the distance! You'll have to toss me!",
    },
    {
      name: "Gimli",
      movie: "The Return of the King",
      quote: "What kind of army would linger in such a place?",
    },
    {
      name: "Gimli",
      movie: "The Return of the King",
      quote:
        "Ach! You waste your time Aragorn. They had no honour in life and they have none now in death.",
    },
    {
      name: "Gimli",
      movie: "The Return of the King",
      quote: "Let him stay there! Let him rot! Why should we care?",
    },
    {
      name: "Gimli",
      movie: "The Two Towers ",
      quote:
        "Three days and nights pursuit. No food. No rest. And no sign of our quarry but what bare rock can tell.",
    },
    {
      name: "Gimli",
      movie: "The Fellowship of the Ring",
      quote:
        "Well! Here's one dwarf she won't ensnare so easily! I have the eyes of a hawk, and ears of a fox!",
    },
    {
      name: "Gimli",
      movie: "The Return of the King",
      quote: "Never thought I'd die fighting side by side with an elf.",
    },
    {
      name: "Gimli",
      movie: "The Two Towers ",
      quote:
        "They flee to the mountains when they should stand and fight. Who will defend them if not their king?",
    },
    {
      name: "Gimli",
      movie: "The Two Towers ",
      quote: "But there were two Hobbits. Did you see two Hobbits with them?",
    },
    {
      name: "Gimli",
      movie: "The Two Towers ",
      quote:
        "Then we have run all this way for nothing? Are we to leave those poor Hobbits here......in this horrid, dark, dank tree-infested--? I mean, charming......quite charming forest.",
    },
    {
      name: "Sam",
      movie: "The Return of the King",
      quote: "I don't think there will be a return journey Mr Frodo.",
    },
    {
      name: "Sam",
      movie: "The Return of the King",
      quote:
        "Fine, have it your own way. I'm sorry to wake you Mr Frodo but we have to be moving on.",
    },
    {
      name: "Sam",
      movie: "The Return of the King",
      quote:
        "There and Back Again, a Hobbits tale by Bilbo Baggins and the Lord of the Rings by Frodo Baggins. You finished it.",
    },
    {
      name: "Sam",
      movie: "The Return of the King",
      quote: "Get off of me! Nobody pushes me you filthy maggot! Get off of me!",
    },
    {
      name: "Gimli",
      movie: "The Fellowship of the Ring",
      quote:
        "Soon Mr Elf, you will enjoy the fabelled hospitality of the dwarves. Roaring fires! Malt Beer! Red Meat off the bone!",
    },
    {
      name: "Sam",
      movie: "The Return of the King",
      quote: "Not before Mr Frodo's had something to eat.",
    },
    {
      name: "Gimli",
      movie: "The Fellowship of the Ring",
      quote:
        "So much for the legendary courtesy of the Elves! Speak words we can also understand!",
    },
    {
      name: "Sam",
      movie: "The Return of the King",
      quote:
        "We're going that way, straight as we can. There's no point carrying anything we're not sure to need.",
    },
    {
      name: "Sam",
      movie: "The Return of the King",
      quote: "It's always dark here. It's gone! The elven bread!",
    },
    {
      name: "Gimli",
      movie: "The Fellowship of the Ring",
      quote:
        "Agh! Let them come There's one dwarf yet in Moria who still draws breath.",
    },
    {
      name: "Sam",
      movie: "The Return of the King",
      quote:
        "Mr Frodo, look. There is light and beauty up there that no shadow can touch.",
    },
    {
      name: "Sam",
      movie: "The Return of the King",
      quote:
        "Oh alright, but we don't have that much left. We have to be careful or we are going to run out. You go ahead and eat that Mr Frodo. I've rationed it, there should be enough.",
    },
    {
      name: "Sam",
      movie: "The Return of the King",
      quote: "Oh no, I'm not hungry, leastways not for lembas bread.",
    },
    {
      name: "Gimli",
      movie: "The Fellowship of the Ring",
      quote: "I will be dead before I see the Ring in the hands of an elf",
    },
    {
      name: "Gimli",
      movie: "The Fellowship of the Ring",
      quote:
        "This my friend is the home of my cousin Balin and they call it a Mine!",
    },
    {
      name: "Gimli",
      movie: "The Fellowship of the Ring",
      quote: "and I suppose you think you're the one to do it.",
    },
    {
      name: "Gimli",
      movie: "The Two Towers ",
      quote: "Fangorn? What madness drove them in there?",
    },
    {
      name: "Gimli",
      movie: "The Return of the King",
      quote: "heh heh heh, what did I say? He can't hold his liquor.",
    },
    {
      name: "Gimli",
      movie: "The Two Towers ",
      quote: "This new Gandalf's more grumpy than the old one.",
    },
    {
      name: "Gimli",
      movie: "The Return of the King",
      quote:
        "Heh heh heh heh,Here, here. Raaar it's the dwarves that go swimming with little, hairy women haha",
    },
    {
      name: "Gimli",
      movie: "The Return of the King",
      quote:
        "Certainty of death, small chance of success, what are we waiting for?",
    },
    {
      name: "Gimli",
      movie: "The Fellowship of the Ring",
      quote:
        "If we cannot pass over the mountain, let us go under it! Let us go through the Mines of Moria",
    },
    {
      name: "Gimli",
      movie: "The Two Towers ",
      quote:
        "Talking trees. What do trees have to talk about? Except the consistency of squirrel droppings.",
    },
    {
      name: "Gimli",
      movie: "The Return of the King",
      quote:
        "Horse men! I wish I could muster an army of Dwarves, fully armed and filthy.",
    },
    {
      name: "Gimli",
      movie: "The Two Towers ",
      quote: "Give me your name, horse-master and I shall give you mine.",
    },
    {
      name: "Sam",
      movie: "The Return of the King",
      quote:
        "Alright! Alright! You just startled me is all. What were you doing?",
    },
    {
      name: "Gimli",
      movie: "The Fellowship of the Ring",
      quote:
        "If anyone was to ask for my opinion, which I note that they're not, I'd say that we were taking the long way round. Gandalf, we could pass through the Mines of Moria. My cousin Balin would give us a royal welcome.",
    },
    {
      name: "Sam",
      movie: "The Return of the King",
      quote: "And I've gone and had too much. It must be getting late.",
    },
    {
      name: "Sam",
      movie: "The Return of the King",
      quote: "You're a lying rat! What did you do with it?",
    },
    {
      name: "Sam",
      movie: "The Two Towers ",
      quote:
        "We have to get out of here. You go. Go, now. You can do it. Use the Ring, Mr. Frodo. Just this once. Put it on. Disappear.",
    },
    {
      name: "Sam",
      movie: "The Two Towers ",
      quote: "Captain Faramir......you have shown your quality, sir.",
    },
    {
      name: "Sam",
      movie: "The Two Towers ",
      quote: "Very decent of you. Very decent, indeed Gollum.",
    },
    {
      name: "Sam",
      movie: "The Two Towers ",
      quote:
        "Folk in those stories......had lots of chances of turning back, only they didn't. They kept going......because they were holding on to something.",
    },
    {
      name: "Sam",
      movie: "The Two Towers ",
      quote: "Please. It's such a burden. Will you not help him?",
    },
    {
      name: "Sam",
      movie: "The Two Towers ",
      quote:
        "But in the end, it's only a passing thing...... this shadow. Even darkness must pass. A new day will come. And when the sun shines, it will shine out the clearer. Those were the stories that stayed with you......that meant something. Even if you were too small to understand why. But I think, Mr. Frodo, I do understand. I know now.",
    },
    {
      name: "Sam",
      movie: "The Return of the King",
      quote:
        "Oh my! I'm sorry. I didn't mean it to go so far. I was just so, so angry! Here just' let's just rest a bit.",
    },
    {
      name: "Sam",
      movie: "The Two Towers ",
      quote:
        "You'll make him sick, you will......behaving like that. There's only one way to eata brace of coneys.",
    },
    {
      name: "Sam",
      movie: "The Two Towers ",
      quote: "We're not going to wait for you. Come on.",
    },
    {
      name: "Sam",
      movie: "The Two Towers ",
      quote: "Can't you hear yourself? Don't you know who you sound like?",
    },
    {
      name: "Sam",
      movie: "The Two Towers ",
      quote: "Now, Mr. Frodo, you shouldn't make fun. I was being serious.",
    },
    {
      name: "Sam",
      movie: "The Two Towers ",
      quote: "Where is he? Where has he gone? Hey, Gollum! Where are you?",
    },
    {
      name: "Sam",
      movie: "The Two Towers ",
      quote:
        "Because. Because that's what he is, Mr. Frodo. There's naught left in him but lies and deceit. It's the Ring he wants. It's all he cares about.",
    },
    {
      name: "Sam",
      movie: "The Return of the King",
      quote: "That's a filthy lie! You stinking, two faced sneak!",
    },
    {
      name: "Sam",
      movie: "The Two Towers ",
      quote:
        "Boil them, mash them stick them in a stew. Lovely, big, golden chips with a nice piece of fried fish.",
    },
    {
      name: "Sam",
      movie: "The Two Towers ",
      quote:
        "Do you want to know what happened to Boromir? You want to know why your brother died? He tried to take the Ring from Frodo after swearing an oath to protect him! He tried to kill him! The Ring drove your brother mad!",
    },
    {
      name: "Sam",
      movie: "The Two Towers ",
      quote:
        'I wonder if people will ever say, "Let\'s hear about Frodo and the Ring." And they\'ll say, "Yes! That\'s one of my favourite stories." "Frodo was really courageous, wasn\'t he, Dad? " "Yes, my boy. The most famousest of Hobbits. And that\'s saying a lot."',
    },
    {
      name: "Sam",
      movie: "The Two Towers ",
      quote: "What's to ruin? There's hardly any meaton them.",
    },
    {
      name: "Sam",
      movie: "The Two Towers ",
      quote: "It's me. It's your Sam. Don't you know your Sam?",
    },
    {
      name: "Sam",
      movie: "The Two Towers ",
      quote:
        "Stop it! Leave him alone. Don't you understand? He's got to destroy it! That's where we're going, into Mordor. To the Mountain of Fire!",
    },
    {
      name: "Sam",
      movie: "The Two Towers ",
      quote: "Hey, stinker, don't go getting too far ahead.",
    },
    {
      name: "Sam",
      movie: "The Two Towers ",
      quote: "I wonder if we'll ever be put into songs or tales.",
    },
    {
      name: "Sam",
      movie: "The Return of the King",
      quote: "But he's a liar! He's poisoned you against me.",
    },
    {
      name: "Sam",
      movie: "The Two Towers ",
      quote:
        "Mr. Frodo didn't mean for them Rangers to hurt you. You know that, don't you? He was trying to save you, see?",
    },
    {
      name: "Sam",
      movie: "The Two Towers ",
      quote:
        "I know. It's all wrong. By rights, we shouldn't even be here. But we are. It's like in the great stories, Mr. Frodo. The ones that really mattered. Full of darkness and danger they were. And sometimes you didn't want to know the end.....because how could the end be happy? How could the world go back to the way it was...... when so much bad had happened?",
    },
    {
      name: "Sam",
      movie: "The Return of the King",
      quote: "I don't want to keep it. I just want to help.",
    },
    {
      name: "Sam",
      movie: "The Return of the King",
      quote:
        "No. No you're not all right, you're exhausted. It's that Gollum. It's this place. It's that thing around your neck. I could help a bit. I could carry it for a while, carry it for a while, I could carry it! I could carry it! Share the load! Share the load! Share the load!",
    },
    {
      name: "Sam",
      movie: "The Two Towers ",
      quote:
        "I do. It's the Ring. You can't take your eyes off it. I've seen you. You're not eating. You barely sleep. It's taken hold of you, Mr. Frodo. You have to fight it.",
    },
    {
      name: "Sam",
      movie: "The Two Towers ",
      quote: "So there's no hard feelings. Forgive and forget.",
    },
    {
      name: "Sam",
      movie: "The Two Towers ",
      quote:
        "That there's some good in this world, Mr. Frodo. And it's worth fighting for.",
    },
    {
      name: "Sam",
      movie: "The Return of the King",
      quote:
        "It's gone Mr Frodo. The light's passed on, away towards the North. Something's drawn its gaze.",
    },
    {
      name: "Sam",
      movie: "The Two Towers ",
      quote:
        "Let me see. Oh, yes. Lovely.Lembas bread. And look! More lembas bread.",
    },
    {
      name: "Sam",
      movie: "The Two Towers ",
      quote:
        "Nothing. Just a bit of seasoning. I thought maybe if we was havinga roast chicken one night or something.",
    },
    {
      name: "Sam",
      movie: "The Two Towers ",
      quote:
        "What is that horrid stink? I warrant there's a nasty bog nearby. Can you smell it?",
    },
    {
      name: "Sam",
      movie: "The Return of the King",
      quote:
        "Then let us be rid of it once and for all! Come on Mr Frodo, I can't carry it for you, but I can carry you! Come on!",
    },
    {
      name: "Sam",
      movie: "The Two Towers ",
      quote:
        "Quiet, you! It's hopeless. Every Orc in Mordor's going to hear this racket. Let's just tie him up and leave him.",
    },
    {
      name: "Sam",
      movie: "The Return of the King",
      quote: "We did it Mr Frodo. We made it to Mordor.",
    },
    {
      name: "Sam",
      movie: "The Two Towers ",
      quote:
        "Mordor. The one place in Middle-earth we don't want to see any closer. And it's the one place we're trying to get to. It's just where we can't get. Let's face it, Mr. Frodo, we're lost.I don't think Gandalf meant for us to come this way.",
    },
    {
      name: "Sam",
      movie: "The Fellowship of the Ring",
      quote: "Mr Frodo?, Frodo! Frodo! I thought I'd lost you",
    },
    {
      name: "Sam",
      movie: "The Fellowship of the Ring",
      quote: "It's six days from Rivendell! He'll never make it!",
    },
    {
      name: "Sam",
      movie: "The Two Towers ",
      quote:
        "Oh, save us. My old Gaffer would have a thing or two to say if he could see us now.",
    },
    {
      name: "Sam",
      movie: "The Return of the King",
      quote:
        "It must be getting near teatime. Leastways it would be in decent places where there is still teatime.",
    },
    {
      name: "Sam",
      movie: "The Return of the King",
      quote:
        "We have to go in there Mr Frodo. There's nothing for it. Come on let's just make it down the hill for starters.",
    },
    {
      name: "Sam",
      movie: "The Return of the King",
      quote: "You will not touch him again! Come on then, finish it!",
    },
    {
      name: "Sam",
      movie: "The Return of the King",
      quote:
        "Come on Mr Frodo. We'd best find you some clothes. You can't go walking through Mordor in nowt but your skin.",
    },
    {
      name: "Sam",
      movie: "The Return of the King",
      quote:
        "Rosie Cotton dancing. She had ribbons in her hair. If ever I was to marry someone, it would have been her. It would've been her.",
    },
    {
      name: "Sam",
      movie: "The Two Towers ",
      quote: "There are dead things! Dead faces in the water.",
    },
    {
      name: "Sam",
      movie: "The Two Towers ",
      quote:
        "Bogs and rope and goodness knows what. It's not natural. None of it.",
    },
    {
      name: "Sam",
      movie: "The Return of the King",
      quote: "What are you waiting for? Just let it go!",
    },
    {
      name: "Sam",
      movie: "The Return of the King",
      quote: "I thought I'd lost you. So I took it, only for safekeeping.",
    },
    {
      name: "Sam",
      movie: "The Return of the King",
      quote: "No! Don't you let go! Don't let go! Reeeaaach!",
    },
    {
      name: "Sam",
      movie: "The Two Towers ",
      quote:
        "Who's gonna follow us down here Mr. Frodo? It's a shame, really. Lady Galadriel gave me that. Real Elvish rope. Well, there's nothing for it. It's one of my knots. Won't come free in a hurry.",
    },
    {
      name: "Sam",
      movie: "The Two Towers ",
      quote:
        "I don't usually hold with foreign food.....but this Elvish stuff, it's not bad.",
    },
    {
      name: "Sam",
      movie: "The Return of the King",
      quote:
        "Oh no! Frodo, Mr Frodo. Wake up. Don't leave me here alone. Don't go where I can't follow. Wake up. Not asleep. Dead.",
    },
    {
      name: "Sam",
      movie: "The Return of the King",
      quote: "Look Mr Frodo, a doorway! We're almost there!",
    },
    {
      name: "Sam",
      movie: "The Two Towers ",
      quote:
        "I hate this place. It's too quiet. There's been no sight nor sound of a bird for two days.",
    },
    {
      name: "Sam",
      movie: "The Two Towers ",
      quote:
        "I know, Mr. Frodo. I doubt even these Elvish cloaks will hide us in there.",
    },
    {
      name: "Sam",
      movie: "The Return of the King",
      quote:
        "Do you remember the Shire Mr Frodo? It will be Spring soon and the orchards will be in blossom. And the birds will be nesting in the hazel thickets. And they will be sowing the summer barley in the lower fields, and eating the first of the strawberries and cream. Do you remember the taste of strawberries?",
    },
    {
      name: "Sam",
      movie: "The Two Towers ",
      quote: "Look! The gate. It's opening! I can see a way down.",
    },
    {
      name: "Sam",
      movie: "The Return of the King",
      quote:
        "Yes you will. Of course you will. That's just morbid thinking. We're going there and back again just like Mr Bilbo. You'll see.",
    },
    {
      name: "Sam",
      movie: "The Return of the King",
      quote: "Mr Frodo, look! The King has got a crown again.",
    },
    {
      name: "Sam",
      movie: "The Two Towers ",
      quote: "It's very special, that. It's the best salt in all the Shire.",
    },
    {
      name: "Sam",
      movie: "The Two Towers ",
      quote:
        "He's trying to trick us. If we let him go, he'll throttle us in our sleep.",
    },
    {
      name: "Gandalf",
      movie: "The Return of the King",
      quote:
        "Saruman! You were deep in the enemy's counsel. Tell us what you know!",
    },
    {
      name: "Gandalf",
      movie: "The Return of the King",
      quote:
        "Farewell my brave Hobbits. My work is now finished. Here at last, on the shores of the sea, comes the end of our Fellowship. I will not say do not weep for not all tears are an evil. It is time Frodo.",
    },
    {
      name: "Gandalf",
      movie: "The Return of the King",
      quote:
        "Send word to all our allies and to every corner of Middle Earth that still stands free. The enemy moves against us. We need to know where he will strike.",
    },
    {
      name: "Gandalf",
      movie: "The Return of the King",
      quote:
        "End? No, the journey doesn't end here. Death is just another path, one that we all must take. The grey rain curtain of this world rolls back and all turns to silvered glass. And then you see it.",
    },
    {
      name: "Sam",
      movie: "The Return of the King",
      quote:
        "I don't care! I can't do it Mr Frodo! I won't wait around for him to kill us!",
    },
    {
      name: "Sam",
      movie: "The Return of the King",
      quote: "I heard it from his own mouth. He means to murder us.",
    },
    {
      name: "Sam",
      movie: "The Fellowship of the Ring",
      quote: "D'you hear that! Rivendell! We're going to see the elves!",
    },
    {
      name: "Gandalf",
      movie: "The Return of the King",
      quote: "No, we need him alive. We need him to talk.",
    },
    {
      name: "Gandalf",
      movie: "The Return of the King",
      quote: "Fight! Fight to the last man. Fight for your lives.",
    },
    {
      name: "Gandalf",
      movie: "The Two Towers ",
      quote:
        "(looking back out to Mordor) All our hopes now lie with two little Hobbits...",
    },
    {
      name: "Sam",
      movie: "The Fellowship of the Ring",
      quote: "Don't you lose him Samwise Gamgee and I don't mean to.",
    },
    {
      name: "Sam",
      movie: "The Return of the King",
      quote:
        "Hey, what's in this tunnel? You listen to me! You listen good and proper. Anything happens to him, you'll have me to answer to. One sniff that something's not right, one hair that stands up on the back of my neck, its over. No more slinker, no more stinker. You're gone. Got it? I'm watching you.",
    },
    {
      name: "Gandalf",
      movie: "The Return of the King",
      quote: "Peregrin Took. I'll take that my lad! Quickly now!",
    },
    {
      name: "Gandalf",
      movie: "The Return of the King",
      quote:
        "Retreat! The city is breached. Fall back to the second level. Get the women and children out. Get them out. Retreat.",
    },
    {
      name: "Gandalf",
      movie: "The Return of the King",
      quote:
        "White shores and beyond, a far green country under a swift sunrise.",
    },
    {
      name: "Gandalf",
      movie: "The Return of the King",
      quote: "No! Come down Saruman and your life will be spared!",
    },
    {
      name: "Gandalf",
      movie: "The Return of the King",
      quote: "Now come the days of the King. May they be blessed.",
    },
    {
      name: "Gandalf",
      movie: "The Return of the King",
      quote:
        "Prepare for battle. Hurry men! To the wall! Defend the wall! Over here! Return to your posts.",
    },
    {
      name: "Gandalf",
      movie: "The Two Towers ",
      quote: "Sauron's wrath will be terrible, his retribution swift.",
    },
    {
      name: "Sam",
      movie: "The Fellowship of the Ring",
      quote: "That fellow's done nothing but stare at you since we arrived!",
    },
    {
      name: "Gandalf",
      movie: "The Return of the King",
      quote:
        "We do not come to treat with Sauron, faithless and accursed. Tell your master this. The armies of Mordor must disband. He is to depart these lands, never to return.",
    },
    {
      name: "Gandalf",
      movie: "The Return of the King",
      quote: "Faramir? This is not the first Halfling to have crossed your path.",
    },
    {
      name: "Gandalf",
      movie: "The Two Towers ",
      quote:
        "The battle for Helm's Deep is over. The battle for Middle-earth is about to begin.",
    },
    {
      name: "Gandalf",
      movie: "The Return of the King",
      quote: "Guard of the Citadel indeed! Now back up the hill quickly. Quick!",
    },
    {
      name: "Gandalf",
      movie: "The Return of the King",
      quote: "Fight them back! Peregrin Took! Go back to the Citadel.",
    },
    {
      name: "Gandalf",
      movie: "The Return of the King",
      quote: "Not at the towers! Aim for the trolls, kill the trolls!",
    },
    {
      name: "Gandalf",
      movie: "The Return of the King",
      quote:
        "Your treachery has already cost many lives. Thousands more are now at risk. But you could save them Saruman. You were deep in the enemy's counsel.",
    },
    {
      name: "Gandalf",
      movie: "The Return of the King",
      quote: "Be careful. Even in defeat, Saruman is dangerous.",
    },
    {
      name: "Gandalf",
      movie: "The Return of the King",
      quote:
        "Hold them back, do not give in to fear. Stand to your posts. Fight!",
    },
    {
      name: "Sam",
      movie: "The Return of the King",
      quote: "You miserable little maggot! I'll stove your head in!",
    },
    {
      name: "Sam",
      movie: "The Two Towers ",
      quote:
        "Hey! Come back now! Come back! There! What did I tell you? He's run off, the old villain. So much for his promises.",
    },
    {
      name: "Gandalf",
      movie: "The Return of the King",
      quote:
        "Go back to the abyss! Fall into the nothingness that awaits you and your master!",
    },
    {
      name: "Gandalf",
      movie: "The Return of the King",
      quote:
        "Faramir! Faramir! Your father's will has turned to madness. Do not throw away your life so rashly.",
    },
    {
      name: "Gandalf",
      movie: "The Return of the King",
      quote:
        "It's only a matter of time. He has suffered a defeat, yes, but behind the walls of Mordor our enemy is regrouping.",
    },
    {
      name: "Gandalf",
      movie: "The Two Towers ",
      quote:
        "There is no way out of that ravine. Theoden is walking into a trap. He thinks he's leading them to safety. What they will get is a massacre. Theoden has a strong will, but I fear for him. I fear for the survival of Rohan. He will need you before the end, Aragorn. The people of Rohan will need you. The defenses, to hold.",
    },
    {
      name: "Gandalf",
      movie: "The Two Towers ",
      quote:
        "I am a servant of the Secret Fire, wielder of the flame of Anor. Go back to the Shadow.The dark fire will not avail you,flame of Udun!",
    },
    {
      name: "Gandalf",
      movie: "The Return of the King",
      quote: "Because 10,000 Orcs now stand between Frodo and Mount Doom.",
    },
    {
      name: "Gandalf",
      movie: "The Two Towers ",
      quote:
        "The Grey Pilgrim. That's what they used to call me. Three hundred lives of Men I've walked this earth, and now I have no time. With luck, my search will not be in vain. Look to my coming at first light on the fifth day. At dawn, look to the east.",
    },
    {
      name: "Gandalf",
      movie: "The Return of the King",
      quote:
        "You're in the service of the steward now. You'll have to do as you are told Peregrin Took.",
    },
    {
      name: "Gandalf",
      movie: "The Two Towers ",
      quote:
        "Look to my coming at first light on the fifth day. At dawn......Iook to the east.",
    },
    {
      name: "Gandalf",
      movie: "The Two Towers ",
      quote:
        "Do not regret your decision to leave him. Frodo must finish this task alone.",
    },
    {
      name: "Gandalf",
      movie: "The Fellowship of the Ring",
      quote:
        "We must hold this course west of the Misty Mountains for forty days. If our luck holds the Gap of Rohan will still be open to us. and there are road turns east to Mordor.",
    },
    {
      name: "Gandalf",
      movie: "The Two Towers ",
      quote: "Did he?Did he, indeed? Good. Yes, very good.",
    },
    {
      name: "Gandalf",
      movie: "The Fellowship of the Ring",
      quote: "You must trust to yourself. Trust your own strength.",
    },
    {
      name: "Gandalf",
      movie: "The Fellowship of the Ring",
      quote: "Frodo, come and help an old man, How's your shoulder?",
    },
    {
      name: "Gandalf",
      movie: "The Two Towers ",
      quote:
        "Sauron fears you, Aragorn. He fears what you may become. And so he'll strike hard and fastat the world of Men. He will use his puppet Sarumanto destroy Rohan. War is coming. Rohan must defend itself and therein lies our first challenge......for Rohan is weak and ready to fall. The king's mind is enslaved it's an old device of Saruman's. His hold over King Theoden is now very strong. Sauron and Sarumanare tightening the noose. But for all their cunning......we have one advantage. The Ring remains hidden. And that we should seek to destroy it......has not yet enteredtheir darkest dreams. And so the weapon of the enemy is moving towards Mordor......in the hands of a Hobbit. Each day brings it closer to the fires of Mount Doom. We must trust now in Frodo. Everything depends upon speed......and the secrecy of his quest.",
    },
    {
      name: "Gandalf",
      movie: "The Return of the King",
      quote:
        "This will be the end of Gondor as we know it. Here the hammer stroke will fall hardest. If the river is taken, if the garrison at Osgiliath falls, the last defence of this city will be gone.",
    },
    {
      name: "Gandalf",
      movie: "The Return of the King",
      quote:
        "You are soldiers of Gondor. No matter what comes through that gate you will stand your ground.",
    },
    {
      name: "Gandalf",
      movie: "The Two Towers ",
      quote:
        "This is but a taste of the terror that Saruman will unleash. All the more potent for he is driven now by fear of Sauron. Ride out and meet him head on. Draw him away from your women and children. You must fight.",
    },
    {
      name: "Gandalf",
      movie: "The Return of the King",
      quote: "Frodo has passed beyond my sight. The darkness is deepening.",
    },
    {
      name: "Gandalf",
      movie: "The Return of the King",
      quote: "Your father loves you Faramir. He will remember it before the end.",
    },
    {
      name: "Gandalf",
      movie: "The Return of the King",
      quote: "Faramir tell me everything. Tell me all you know.",
    },
    {
      name: "Gandalf",
      movie: "The Fellowship of the Ring",
      quote:
        "No Gimli, I would not take the road through Moria unless I had no other choice.",
    },
    {
      name: "Gandalf",
      movie: "The Two Towers ",
      quote:
        "He was strong in life. His spirit will find its way to the halls of your fathers. Westu h'l. Fer'u, Th'odred, Fer'u.",
    },
    {
      name: "Gandalf",
      movie: "The Two Towers ",
      quote: "Hmmm,You would not part an old man from his walking stick.",
    },
    {
      name: "Gandalf",
      movie: "The Return of the King",
      quote:
        "There never was much hope. Just a fool's hope. Our enemy is ready. His full strength's gathered. Not only orcs, but men as well, Legions of Haradrim from the South, mercenaries from the coast, All will answer Mordor's call.",
    },
    {
      name: "Gandalf",
      movie: "The Two Towers ",
      quote:
        "Edoras and the Golden Hall of Meduseld. There dwells Theoden, King of Rohan...... whose mind is overthrown. Saruman's hold over King Theoden is now very strong.",
    },
    {
      name: "Gandalf",
      movie: "The Two Towers ",
      quote:
        "The veiling shadow that glowers in the east takes shape.Sauron will suffer no rival. From the summit of Barad-durhis Eye watches ceaselessly. But he is not so mighty yet that he is above fear. Doubt ever gnaws at him. The rumor has reached him. The heir of Numenor still lives.",
    },
    {
      name: "Gandalf",
      movie: "The Return of the King",
      quote:
        "Peregrin Took my lad, there is a task now to be done. Another opportunity for one of the Shire folk to prove their great worth. You must not fail me.",
    },
    {
      name: "Gandalf",
      movie: "The Return of the King",
      quote: "Sauron will suspect a trap. He will not take the bait.",
    },
    {
      name: "Gandalf",
      movie: "The Return of the King",
      quote: "Courage is the best defence that you have now.",
    },
    {
      name: "Gandalf",
      movie: "The Two Towers ",
      quote:
        "The courtesy of your hall is somewhat lessened of late......Theoden King.",
    },
    {
      name: "Gandalf",
      movie: "The Two Towers ",
      quote:
        "Be silent. Keep your forked tongue behind your teeth. I have not passed through fire and death......to bandy crooked words with a witless worm.",
    },
    {
      name: "Gandalf",
      movie: "The Two Towers ",
      quote: "Be careful what you say. Do not look for welcome here.",
    },
    {
      name: "Gandalf",
      movie: "The Return of the King",
      quote:
        "Sauron has yet to show his deadliest servant. The one who will lead Mordor's army in war. The one they say no living man can kill. The Witch King of Angmar. You've met him before. He stabbed Frodo on Weathertop. He is the lord of the Nazg'l. The greatest of the nine.",
    },
    {
      name: "Gandalf",
      movie: "The Fellowship of the Ring",
      quote:
        "and the Ring?, You feel its power growing don't you. I've felt it too. You must be careful now. Evil will be drawn to you from outside the Fellowship and I fear from within.",
    },
    {
      name: "Gandalf",
      movie: "The Fellowship of the Ring",
      quote: "Ando Eldarinwa'a lasta quettanya, Fenda Casarinwa'",
    },
    {
      name: "Gandalf",
      movie: "The Two Towers ",
      quote: "I will draw you, Saruman, as poison is drawn from a wound.",
    },
    {
      name: "Gandalf",
      movie: "The Fellowship of the Ring",
      quote:
        "Knock your head against these doors Peregrin Took! and if that does not shatter them and I'm allowed a little peace from foolish questions I will try to find the opening words.",
    },
    {
      name: "Gandalf",
      movie: "The Two Towers ",
      quote: "Hearken to me! I release you......from the spell.",
    },
    {
      name: "Gandalf",
      movie: "The Two Towers ",
      quote:
        "Stars wheeled overhead......and every day was as long as a life age of the Earth. But it was not the end. I felt life in me again.",
    },
    {
      name: "Gandalf",
      movie: "The Two Towers ",
      quote: "You are tracking the footsteps of two young Hobbits.",
    },
    {
      name: "Gandalf",
      movie: "The Return of the King",
      quote:
        "Yes the white tree of Gondor. The tree of the King. Lord Denethor however, is not the King. He is a steward only, a caretaker of the throne.",
    },
    {
      name: "Gandalf",
      movie: "The Fellowship of the Ring",
      quote:
        "Hold out your hand Frodo. Its quite cool. What can you see?, Can you see anything?",
    },
    {
      name: "Gandalf",
      movie: "The Two Towers ",
      quote:
        "It was more than mere chance that brought Merry and Pippin to Fangorn. A great power has been sleeping here for many long years. The coming of Merry and Pippin will be like the falling of small stones......that starts an avalanche in the mountains.",
    },
    {
      name: "Gandalf",
      movie: "The Two Towers ",
      quote:
        "Gandalf? Yes. That was what they used to call me. Gandalf the Grey. That was my name.",
    },
    {
      name: "Gandalf",
      movie: "The Two Towers ",
      quote: "You did not kill me......you will not kill him.",
    },
    {
      name: "Gandalf",
      movie: "The Two Towers ",
      quote: "I've been sent back...... until my task is done.",
    },
    {
      name: "Gandalf",
      movie: "The Fellowship of the Ring",
      quote: "No! Losto Caradhras, sedho, hodo, nuitho i 'ruith!",
    },
    {
      name: "Gandalf",
      movie: "The Two Towers ",
      quote:
        "One stage of your journey is over.Another begins. We must travel to Edoras with all speed.",
    },
    {
      name: "Gandalf",
      movie: "The Two Towers ",
      quote: "I am Saruman. Or rather, Saruman as he should have been.",
    },
    {
      name: "Gandalf",
      movie: "The Return of the King",
      quote: "We have just passed into the realm of Gondor.",
    },
    {
      name: "Gandalf",
      movie: "The Two Towers ",
      quote:
        "Theoden......son of Thengel......too long have you sat in the Shadows.",
    },
    {
      name: "Gandalf",
      movie: "The Fellowship of the Ring",
      quote:
        "Do you not understand that while we bicker amongst ourselves, Sauron's power grows?! None can escape it! You'll all be destroyed",
    },
    {
      name: "Gandalf",
      movie: "The Two Towers ",
      quote: "Darkness took me......and I strayed out of thought and time.",
    },
    {
      name: "Gandalf",
      movie: "The Return of the King",
      quote: "We come to it at last. The great battle of our time.",
    },
    {
      name: "Gandalf",
      movie: "The Fellowship of the Ring",
      quote:
        'It reads "The Doors of Durin, Lord of Moria, Speak Friend and Enter"',
    },
    {
      name: "Gandalf",
      movie: "The Two Towers ",
      quote:
        "Your fingers would remember their old strength better......if they grasped your sword.",
    },
    {
      name: "Gandalf",
      movie: "The Fellowship of the Ring",
      quote:
        "Oh it's quite simple. If you are a friend, you speak the password and the doors will open, Annon Edhellen, edro hi ammen! (",
    },
    {
      name: "Gandalf",
      movie: "The Return of the King",
      quote:
        "Now listen carefully. Lord Denethor is Boromir's father. To give him news of his beloved son's death would be most unwise. And do not mention Frodo or the Ring. And say nothing of Aragorn either. In fact, its better if you don't speak at all Peregrin Took.",
    },
    {
      name: "Gandalf",
      movie: "The Fellowship of the Ring",
      quote:
        "I do not ask your pardon Master Elrond for the Black Speech of Mordor may yet be heard in every corner of the West, The Ring is altogether evil",
    },
    {
      name: "Gandalf",
      movie: "The Fellowship of the Ring",
      quote:
        "Yes Gimli! Their own masters cannot find them, if their secrets are forgotten!",
    },
    {
      name: "Gandalf",
      movie: "The Two Towers ",
      quote:
        "Until at last I threw down my enemy......and smote his ruinupon the mountainside.",
    },
    {
      name: "Gandalf",
      movie: "The Fellowship of the Ring",
      quote:
        "There are few who can. The language is that of Mordor, which I will not utter here.",
    },
    {
      name: "Gandalf",
      movie: "The Fellowship of the Ring",
      quote: "I once knew every spell in all the tongues of elves, men and orcs",
    },
    {
      name: "Gandalf",
      movie: "The Two Towers ",
      quote:
        "From the lowest dungeon to the highest peak...... I fought with the Balrogof Morgoth.",
    },
    {
      name: "Gandalf",
      movie: "The Fellowship of the Ring",
      quote:
        "Spies of Saruman. The passage south is being watched, We must take the Pass of Caradhras",
    },
    {
      name: "Gandalf",
      movie: "The Fellowship of the Ring",
      quote:
        "Ash nazg durbatul'k, ash nazg gimbatul ash nazg thrakatul'k,agh burzum-ishi krimpatul.",
    },
    {
      name: "Gandalf",
      movie: "The Two Towers ",
      quote:
        "I am Gandalf the White.And I come back to you now......at the turn of the tide.",
    },
    {
      name: "Gandalf",
      movie: "The Two Towers ",
      quote:
        "A thing is about to happen that has nothappened since the Elder Days.The Ents are going to wake up.....and find that they are strong.",
    },
    {
      name: "Gandalf",
      movie: "The Fellowship of the Ring",
      quote:
        "There are many powers in this world for good or for evil. Some are greater than I am and against some I have not yet been tested",
    },
    {
      name: "Gandalf",
      movie: "The Fellowship of the Ring",
      quote:
        "Let me risk a little more light, Behold the great realm and dwarf city of Dwarrowdelf.",
    },
    {
      name: "Gandalf",
      movie: "The Fellowship of the Ring",
      quote:
        "Here lies Balin, son of Fundin, Lord of Moria. He is dead then. Its as I feared.",
    },
    {
      name: "Gandalf",
      movie: "The Fellowship of the Ring",
      quote:
        "A wizard is never late! Frodo Baggins. Nor is he early, he arrives precisely when he means to.",
    },
    {
      name: "Gandalf",
      movie: "The Return of the King",
      quote:
        "All had turned to vain ambition. He would use even his grief as a cloak! A thousand years this city has stood and now at the whim of a madman it will fall! And the white tree, the tree of the King will never bloom again.",
    },
    {
      name: "Gandalf",
      movie: "The Two Towers ",
      quote:
        "Shadowfax. He is the lord of all horses......and has been my friend through many dangers.",
    },
    {
      name: "Gandalf",
      movie: "The Return of the King",
      quote:
        "He told Sauron nothing of Frodo and the Ring. We've been strangely fortunate. Pippin saw in the Palantir a glimpse of the enemy's plan. Sauron moves to strike the city of Minas Tirith.",
    },
    {
      name: "Gandalf",
      movie: "The Fellowship of the Ring",
      quote: "Bilbo had a shirt of mithril rings that Thorin gave him",
    },
    {
      name: "Gandalf",
      movie: "The Return of the King",
      quote:
        "This is not the weather of the world. This is a device of Sauron's making. A broil of fume he sends ahead of his host. The Orcs of Mordor have no love of daylight, so he covers the face of the sun to ease their passage along the road to war. When the shadow of Mordor reaches this city it will begin.",
    },
    {
      name: "Gandalf",
      movie: "The Return of the King",
      quote:
        "Oh, it's too late for that Peregrin. There's no leaving this city. Help must come to us.",
    },
    {
      name: "Gandalf",
      movie: "The Two Towers ",
      quote:
        "So stop your fretting, Master Dwarf. Merry and Pippin are quite safe. In fact, they are far safer than you are about to be.",
    },
    {
      name: "Gandalf",
      movie: "The Return of the King",
      quote: "What did you tell him about Frodo and the Ring?",
    },
    {
      name: "Gandalf",
      movie: "The Return of the King",
      quote: "Hail Denethor son of Ecthelion, Lord and Steward of Gondor.",
    },
    {
      name: "Gandalf",
      movie: "The Return of the King",
      quote:
        "Authority is not given to you to deny the return of the King, steward.",
    },
    {
      name: "Gandalf",
      movie: "The Fellowship of the Ring",
      quote:
        "And I must follow if I can. The road goes ever on and on, down from the door where it began, now far ahead the road has gone, and I must follow if I can.",
    },
    {
      name: "Gandalf",
      movie: "The Fellowship of the Ring",
      quote: "The wealth of Moria is not in gold, or jewels, but Mithril",
    },
    {
      name: "Gandalf",
      movie: "The Fellowship of the Ring",
      quote:
        "If you're referring to the incident with the dragon, I was barely involved. All I did was give your uncle a little nudge out of the door.",
    },
    {
      name: "Gandalf",
      movie: "The Fellowship of the Ring",
      quote:
        "So do all who live to see such times, but that is not for them to decide. All we have to decide is what to do with the time that is given to us. There are other forces at work in this world, Frodo, besides the will of evil. Bilbo was meant to find the Ring, in which case you also were meant to have it and that is an encouraging thought. Oh! Its that way",
    },
    {
      name: "Gandalf",
      movie: "The Return of the King",
      quote:
        "There was no lie in Pippin's eyes. A fool but an honest fool he remains.",
    },
    {
      name: "Gandalf",
      movie: "The Fellowship of the Ring",
      quote:
        "It's good to see you. One hundred and eleven years old who would believe it. You haven't aged a day!",
    },
    {
      name: "Gandalf",
      movie: "The Fellowship of the Ring",
      quote:
        "Escaped, or was set loose and now the Ring has drawn him here, He won't ever be rid of his need for it. He hates and loves the Ring, as he hates and loves himself. Smeagol's life is a sad story, Yes, he was once called, before the Ring found him. Before it drove him mad",
    },
    {
      name: "Gandalf",
      movie: "The Fellowship of the Ring",
      quote:
        "So how is the old rascal? I hear it is going to be a party of special significance?",
    },
    {
      name: "Gandalf",
      movie: "The Fellowship of the Ring",
      quote:
        "They have taken the Bridge and the second hall. We have barred the gates, but cannot hold them for long. The ground shakes. Drums, Drums in the deep. We cannot get out. A shadow moves in the dark. We cannot get out. They are coming.",
    },
    {
      name: "Gandalf",
      movie: "The Fellowship of the Ring",
      quote:
        "Hmm hmm hmm hmm, Down from the door where it began, hmm hmm hmm hmm",
    },
    {
      name: "Gandalf",
      movie: "The Fellowship of the Ring",
      quote:
        "No, but the air doesnt smell so foul down here. If in doubt, Meriadoc, always follow your nose.",
    },
    {
      name: "Gandalf",
      movie: "The Return of the King",
      quote: "That Frodo is alive. Yes' yes he's alive.",
    },
    {
      name: "Gandalf",
      movie: "The Return of the King",
      quote:
        "My lord, there will be a time to grieve for Boromir but it is not now. War is coming. The enemy is on your doorstep. As steward, you are charged with the defence of this city. Where are Gondor's armies? You still have friends. You are not alone in this fight. Send word to Theoden of Rohan. Light the beacons.",
    },
    {
      name: "Gandalf",
      movie: "The Fellowship of the Ring",
      quote: "Meriadoc Brandybuck and Peregrin Took! I might have known!",
    },
    {
      name: "Gandalf",
      movie: "The Return of the King",
      quote:
        "Yes, there it lies. This city has dwelt ever in the sight of its shadow.",
    },
    {
      name: "Gandalf",
      movie: "The Fellowship of the Ring",
      quote:
        "Yes. I never told him, but its worth was greater than the value of The Shire!",
    },
    {
      name: "Gandalf",
      movie: "The Return of the King",
      quote:
        "They guard it because they have hope. A faint and fading hope that one day it will flower. That a king will come and this city will be as it once was before it fell into decay. The old wisdom born out of the west was forsaken. Kings made tombs more splendid than the houses of the living and counted the old names of their descent, dearer than the names of their sons. Childless lords sat in aged halls musing on heraldry or in high, cold towers asking questions of the stars. And so the people of Gondor fell into ruin. The line of Kings failed. The white tree withered. The rule of Gondor was given over to lesser men.",
    },
    {
      name: "Gandalf",
      movie: "The Return of the King",
      quote: "I come with tidings in this dark hour and with counsel.",
    },
    {
      name: "Gandalf",
      movie: "The Fellowship of the Ring",
      quote: "So you mean to go through with your plan then?",
    },
    {
      name: "Gandalf",
      movie: "The Fellowship of the Ring",
      quote: "You didn't think I'd miss your Uncle Bilbo's birthday?",
    },
    {
      name: "Gandalf",
      movie: "The Fellowship of the Ring",
      quote:
        "Fool of a Took! Throw yourself in next time, and rid us of your stupidity!",
    },
    {
      name: "Gandalf",
      movie: "The Fellowship of the Ring",
      quote:
        "We now have but one choice, we must face the long dark of Moria. Be on your guard, there are older and fouler things than orcs in the deep places of the world",
    },
    {
      name: "Gandalf",
      movie: "The Fellowship of the Ring",
      quote:
        "Pity? It was pity that stayed Bilbo's hand. Many that live deserve death and many that die, deserve life. Can you give it to them Frodo? Do not be too eager to deal out death and judgement Even the very wise cannot see all ends. My heart tells me that Gollum has some part to play, yet for good or ill.... before this is over. The pity of Bilbo, may rule the fate of many",
    },
    {
      name: "Gandalf",
      movie: "The Return of the King",
      quote:
        "His defeat at Helm's Deep showed our enemy one thing. He knows the Heir of Elendil has come forth, Men are not as weak as he supposed. There is courage still. Strength enough, perhaps, to challenge him. Sauron fears this. He will not risk the peoples of Middle Earth uniting under one banner. He will raze Minas Tirith to the ground, before he sees a King return to the throne of men. If the beacons of Gondor are lit Rohan must be ready for war.",
    },
    {
      name: "Frodo",
      movie: "The Two Towers ",
      quote:
        "There was no other. We set out from Rivendell with seven companions. One we lost in Moria......two were my kin......a Dwarf there was also. And an Elf and two Men. Aragorn, son of Arathorn, and Boromir of Gondor.",
    },
    {
      name: "Gandalf",
      movie: "The Return of the King",
      quote: "Run, Shadowfax show us the meaning of haste.",
    },
    {
      name: "Frodo",
      movie: "The Two Towers ",
      quote:
        "We are bound to an errand of secrecy. Those that claim to oppose the enemy would do well not to hinder us.",
    },
    {
      name: "Frodo",
      movie: "The Return of the King",
      quote: "Not quite. There's room for a little more.",
    },
    {
      name: "Frodo",
      movie: "The Two Towers ",
      quote:
        "You have no idea what it did to him......what it's still doing to him. I want to help him, Sam.",
    },
    {
      name: "Frodo",
      movie: "The Two Towers ",
      quote: "Call him names. Run him down all the time.",
    },
    {
      name: "Frodo",
      movie: "The Two Towers ",
      quote:
        "What do you know about it? Nothing! I'm sorry, Sam. I don't know why I said that.",
    },
    {
      name: "Frodo",
      movie: "The Two Towers ",
      quote: "Because I have to believe he can come back.",
    },
    {
      name: "Frodo",
      movie: "The Two Towers ",
      quote:
        "Gollum says there's a path......near Minas Morgul that climbs up into the mountains.",
    },
    {
      name: "Frodo",
      movie: "The Two Towers ",
      quote: "Smeagol. Master is here. Come, Smeagol. Trust master. Come.",
    },
    {
      name: "Gandalf",
      movie: "The Return of the King",
      quote:
        "They will be. You must come to Minas Tirith by another road. Follow the river. Look to the black ships. Understand this, things are now in motion that cannot be undone. I ride for Minas Tirith, and I wont be going alone.",
    },
    {
      name: "Frodo",
      movie: "The Two Towers ",
      quote: "We've lingered here too long.Come on, Sam.",
    },
    {
      name: "Frodo",
      movie: "The Return of the King",
      quote:
        "To the harbour Bilbo. The elves have accorded you a special honour. A place on the last ship to leave Middle Earth.",
    },
    {
      name: "Frodo",
      movie: "The Return of the King",
      quote:
        "It's been four years to the day since Weathertop, Sam. It's never really healed.",
    },
    {
      name: "Frodo",
      movie: "The Two Towers ",
      quote: "If something has happened to Boromir, we would have you tell us.",
    },
    {
      name: "Gandalf",
      movie: "The Return of the King",
      quote:
        "Of all the Hobbits, Peregrin Took, you are the worst! Hurry! Hurry!",
    },
    {
      name: "Frodo",
      movie: "The Two Towers ",
      quote:
        "Wait. This creature is bound to me. And I to him. He is our guide. Please......Iet me go down to him.",
    },
    {
      name: "Frodo",
      movie: "The Two Towers ",
      quote:
        "Smeagol, you must trust master. Follow me. Come on. Come. Come, Smeagol. Nice Smeagol. That's it. Come on.",
    },
    {
      name: "Frodo",
      movie: "The Two Towers ",
      quote: "Don't hurt him! Smeagol, don't struggle. Smeagol, listen to me.",
    },
    {
      name: "Frodo",
      movie: "The Two Towers ",
      quote:
        'Well, you\'ve left out one of the chief characters: "Samwise the Brave." I want to hear more about Sam.',
    },
    {
      name: "Frodo",
      movie: "The Two Towers ",
      quote:
        "We are Hobbits of the Shire. Frodo Baggins is my name, and this is Samwise Gamgee.",
    },
    {
      name: "Frodo",
      movie: "The Two Towers ",
      quote:
        "I can't. You were right, Sam. You tried to tell me but.... I'm sorry. The Ring's taking me, Sam. If I put it on......he'll find me. He'll see.",
    },
    {
      name: "Frodo",
      movie: "The Two Towers ",
      quote:
        "The Ring will not save Gondor. It has only the power to destroy. Please......Iet me go.",
    },
    {
      name: "Frodo",
      movie: "The Return of the King",
      quote: "Now that I'm here I don't think I want to.",
    },
    {
      name: "Frodo",
      movie: "The Return of the King",
      quote:
        "We set out to save the Shire Sam and it has been saved, but not for me.",
    },
    {
      name: "Frodo",
      movie: "The Return of the King",
      quote: "No, it isn't. It isn't midday yet. The days are growing darker.",
    },
    {
      name: "Frodo",
      movie: "The Return of the King",
      quote:
        "And thus it was a Fourth Age of Middle Earth began. And the Fellowship of the Ring, though eternally bound by friendship and love was ended. Thirteen months to the day since Gandalf sent us on our long journey we find ourselves looking upon a familiar sight.",
    },
    {
      name: "Frodo",
      movie: "The Return of the King",
      quote:
        "My dear Sam, you cannot always be torn in two. You will have to be one and whole for many years. You have so much to enjoy and to be and to do. Your part in the story will go on.",
    },
    {
      name: "Frodo",
      movie: "The Return of the King",
      quote:
        "How do you pick up the threads of an old life? How do you go on, when in your heart you begin to understand there is no going back? There are some things that time cannot mend. Some hurts that go too deep, that have taken hold.",
    },
    {
      name: "Frodo",
      movie: "The Return of the King",
      quote:
        "I have to destroy it Smeagol. I have to destroy it for both our sakes.",
    },
    {
      name: "Frodo",
      movie: "The Two Towers ",
      quote: "It's calling to him, Sam. His Eye is almost on me.",
    },
    {
      name: "Frodo",
      movie: "The Return of the King",
      quote: "He doesn't eat it. He can't have taken it.",
    },
    {
      name: "Frodo",
      movie: "The Return of the King",
      quote:
        "Bilbo once told me his part in this tale would end. That each of us must come and go in the telling. Bilbo's story was now over. There would be no more journeys for him, save one.",
    },
    {
      name: "Frodo",
      movie: "The Return of the King",
      quote: "There will be none left for the return journey.",
    },
    {
      name: "Frodo",
      movie: "The Return of the King",
      quote:
        "I can't! I can't' I can't manage the Ring Sam. It's, it's such a weight to carry. It's such a weight.",
    },
    {
      name: "Gandalf",
      movie: "The Return of the King",
      quote:
        "Three days ride as the Nazg'l flies. And you'd better hope we don't have one of those on our tail.",
    },
    {
      name: "Frodo",
      movie: "The Fellowship of the Ring",
      quote: "Bilbo have you been at the Gaffers homebrew?",
    },
    {
      name: "Frodo",
      movie: "The Fellowship of the Ring",
      quote: "You know Bilbo he's got the whole place in an uproar.",
    },
    {
      name: "Frodo",
      movie: "The Fellowship of the Ring",
      quote: "Sam! We're still in The Shire. What could possibly happen!",
    },
    {
      name: "Frodo",
      movie: "The Fellowship of the Ring",
      quote:
        "Nothing. There's nothing, Wait. There are markings, Its some form of Elvish. I can't read it",
    },
    {
      name: "Frodo",
      movie: "The Return of the King",
      quote:
        "No Sam. I can't recall the taste of food, nor the sound of water or the touch of grass. I'm naked in the dark. There's' there's nothing, no veil between me and the wheel of fire. I can see him with my waking eyes!",
    },
    {
      name: "Frodo",
      movie: "The Two Towers ",
      quote: "The Ring is treacherous. It will hold you to your word.",
    },
    {
      name: "Frodo",
      movie: "The Fellowship of the Ring",
      quote: "Before you came along we Bagginses were very well thought of.",
    },
    {
      name: "Frodo",
      movie: "The Fellowship of the Ring",
      quote: "We wish to at the Inn. Our business is our own.",
    },
    {
      name: "Frodo",
      movie: "The Fellowship of the Ring",
      quote: "He's up to something. All right then, keep your secrets!",
    },
    {
      name: "Frodo",
      movie: "The Two Towers ",
      quote:
        "Maybe he does deserve to die. But now that I see him, I do pity him.",
    },
    {
      name: "Frodo",
      movie: "The Fellowship of the Ring",
      quote:
        "To tell you the truth, Bilbo has been acting a bit odd lately. I mean, more than usual. He's taken to locking himself in his study. He spends hours and hours poring over old maps when he thinks I'm not looking.",
    },
    {
      name: "Frodo",
      movie: "The Fellowship of the Ring",
      quote: "But I know you have something to do with it.",
    },
    {
      name: "Frodo",
      movie: "The Fellowship of the Ring",
      quote: "Don't worry Sam, Rosie knows an idiot when she sees one!",
    },
    {
      name: "Frodo",
      movie: "The Return of the King",
      quote:
        "It's too late. It's over. They've taken it Sam, they took the Ring!",
    },
    {
      name: "Frodo",
      movie: "The Two Towers ",
      quote: "No! Don't look down, Sam! Just keep going!",
    },
    {
      name: "Frodo",
      movie: "The Return of the King",
      quote:
        "I can see the Shire. The Brandywine River. Bag End. Gandalf's fireworks. The lights on the party tree.",
    },
    {
      name: "Frodo",
      movie: "The Return of the King",
      quote: "It's just a feeling. I don't think I'll be coming back.",
    },
    {
      name: "Frodo",
      movie: "The Two Towers ",
      quote: "That was your name once, wasn't it? A long time ago.",
    },
    {
      name: "Frodo",
      movie: "The Two Towers ",
      quote: "Gandalf told me you were one of the river-folk.",
    },
    {
      name: "Frodo",
      movie: "The Two Towers ",
      quote: "Nothing ever dampens your spirits does it, Sam?",
    },
    {
      name: "Frodo",
      movie: "The Two Towers ",
      quote:
        "He didn't mean for a lot of things to happen, Sam......but they did.",
    },
    {
      name: "Frodo",
      movie: "The Two Towers ",
      quote: "It's because we've been here before. We're going in circles.",
    },
    {
      name: "Frodo",
      movie: "The Two Towers ",
      quote: "Are you saying there's another way into Mordor?",
    },
    {
      name: "Frodo",
      movie: "The Return of the King",
      quote: "Oh Sam, I'm so sorry. Sorry for everything.",
    },
    {
      name: "Frodo",
      movie: "The Return of the King",
      quote:
        "Give it to me! Give me the Ring Sam. Sam! Give me the Ring. You must understand. The Ring is my burden. It will destroy you Sam.",
    },
    {
      name: "Frodo",
      movie: "The Return of the King",
      quote: "I think these lands were once part of the Kingdom of Gondor.",
    },
    {
      name: "Frodo",
      movie: "The Two Towers ",
      quote: "We can't leave this here for someone to follow us down.",
    },
    {
      name: "Frodo",
      movie: "The Two Towers ",
      quote: "It is special. It's a little bit of home.",
    },
    {
      name: "Frodo",
      movie: "The Two Towers ",
      quote: "There's no promise you can make that I can trust.",
    },
    {
      name: "Frodo",
      movie: "The Return of the King",
      quote:
        "I'm glad to be with you Samwise Gamgee here at the end of all things.",
    },
    {
      name: "Frodo",
      movie: "The Two Towers ",
      quote:
        "You were not so very different from a Hobbit once. Were you? Smeagol.",
    },
    {
      name: "Frodo",
      movie: "The Return of the King",
      quote: "There are so many of them. We'll never get through unseen.",
    },
    {
      name: "Frodo",
      movie: "The Two Towers ",
      quote:
        "This is Sting. You've seen it before......haven't you, Gollum? Release him or I'll cut your throat.",
    },
    {
      name: "Frodo",
      movie: "The Fellowship of the Ring",
      quote: "Speak friend... and enter. What's the elvish word for friend?",
    },
    {
      name: "Frodo",
      movie: "The Fellowship of the Ring",
      quote: "I have to leave the Shire. Sam and I must get to Bree",
    },
    {
      name: "Frodo",
      movie: "The Fellowship of the Ring",
      quote:
        "Half the Shire's been invited. And the rest of them are turning up anyway.",
    },
    {
      name: "Frodo",
      movie: "The Two Towers ",
      quote: "Yes.....I can smell it.................We're not alone.",
    },
    {
      name: "Frodo",
      movie: "The Two Towers ",
      quote:
        "I know what I have to do, Sam. The Ring was entrusted to me. It's my task. Mine! My own!",
    },
    {
      name: "Pippin",
      movie: "The Return of the King",
      quote:
        "So I imagine this is just a ceremonial position. I mean, they don't actually expect me to do any fighting, do they?",
    },
    {
      name: "Pippin",
      movie: "The Return of the King",
      quote:
        "well, yes. At least well enough for my own people. But we have no songs for great halls and evil times.",
    },
    {
      name: "Pippin",
      movie: "The Return of the King",
      quote: "He's not dead. HE'S NOT DEAD, NO! NO! He's not dead.",
    },
    {
      name: "Pippin",
      movie: "The Fellowship of the Ring",
      quote: "You've got my arm... argh!... you've got my arm",
    },
    {
      name: "Pippin",
      movie: "The Fellowship of the Ring",
      quote:
        "and some cabbages and those few bags of potatoes that we lifted last week. And the mushrooms the week before.",
    },
    {
      name: "Frodo",
      movie: "The Fellowship of the Ring",
      quote: "We never had any adventures, or did anything unexpected.",
    },
    {
      name: "Pippin",
      movie: "The Two Towers ",
      quote: "Merry! No, Treebeard said that you shouldn't have any.",
    },
    {
      name: "Pippin",
      movie: "The Return of the King",
      quote: "But we have the white wizard. That's got to count for something.",
    },
    {
      name: "Pippin",
      movie: "The Fellowship of the Ring",
      quote: "Well that's nice! That's nice! Ash on my tomatoes!",
    },
    {
      name: "Pippin",
      movie: "The Two Towers ",
      quote:
        "Why are there so few of youwhen you have lived so long? Are there Ent children?",
    },
    {
      name: "Pippin",
      movie: "The Two Towers ",
      quote:
        "Please, Merry.You're what? Three-foot-six? At the most? Whereas me, I'm pushing 3'7\". 3'8\"!",
    },
    {
      name: "Frodo",
      movie: "The Return of the King",
      quote: "I know Sam, I know. Trust me. Come Smeagol.",
    },
    {
      name: "Pippin",
      movie: "The Two Towers ",
      quote:
        "Maybe Treebeard's right. We don't belong here, Merry. It's too big for us. What can we do in the end? We've got the Shire. Maybe we should go home.",
    },
    {
      name: "Pippin",
      movie: "The Return of the King",
      quote:
        "I don't want to be in a battle. But waiting on the edge of one I can't escape is even worse. Is there any hope Gandalf, for Frodo and Sam?",
    },
    {
      name: "Pippin",
      movie: "The Two Towers ",
      quote:
        "It's perfect. One barrel each. Wait. Do you think we should share it with Treebeard?",
    },
    {
      name: "Frodo",
      movie: "The Fellowship of the Ring",
      quote: "Excuse me. That man in the corner. Who is he?",
    },
    {
      name: "Pippin",
      movie: "The Two Towers ",
      quote:
        "Oh, yes. It's a quality establishment. I hear the staff are very good.",
    },
    {
      name: "Pippin",
      movie: "The Return of the King",
      quote: "uhh huh, I feel like I'm back at the Green Dragon.",
    },
    {
      name: "Pippin",
      movie: "The Return of the King",
      quote:
        "I think you have strength of a different kind. And one day your father will see it.",
    },
    {
      name: "Pippin",
      movie: "The Return of the King",
      quote:
        "What were you thinking Peregrin Took? What service can a Hobbit offer such a great lord of men?",
    },
    {
      name: "Pippin",
      movie: "The Return of the King",
      quote: "I didn't think they would find any livery that would fit me.",
    },
    {
      name: "Frodo",
      movie: "The Fellowship of the Ring",
      quote:
        "I wish the Ring had never come to me. I wish none of this had happened.",
    },
    {
      name: "Pippin",
      movie: "The Return of the King",
      quote:
        "Home is behind, The world ahead, And there are many paths to tread, Through shadow, to the edge of night, Until the stars are all alight. Mist and shadow cloud and shade, All shall fade, All shall, 'fade.",
    },
    {
      name: "Frodo",
      movie: "The Fellowship of the Ring",
      quote: "I think a servant of the enemy would look fairer, but feel fouler.",
    },
    {
      name: "Pippin",
      movie: "The Two Towers ",
      quote: "Wait! Stop! Stop! Turn around. Turn around. Take us south.",
    },
    {
      name: "Pippin",
      movie: "The Return of the King",
      quote:
        "Well, I'm taller than you were then. Though, I'm not likely to grow anymore, except sideways.",
    },
    {
      name: "Frodo",
      movie: "The Return of the King",
      quote:
        "We can't do this by ourselves Sam. Not without a guide. I need you on my side.",
    },
    {
      name: "Pippin",
      movie: "The Return of the King",
      quote: "What does that mean? What's wrong? He looks at Gandalf.",
    },
    {
      name: "Pippin",
      movie: "The Fellowship of the Ring",
      quote: "For the Shire. Hold him, hold him down Merry!",
    },
    {
      name: "Frodo",
      movie: "The Fellowship of the Ring",
      quote: "It's a pity Bilbo didnt kill him when he had the chance",
    },
    {
      name: "Pippin",
      movie: "The Two Towers ",
      quote: "Don't talk to it, Merry. Don't encourage it!",
    },
    {
      name: "Frodo",
      movie: "The Fellowship of the Ring",
      quote: "We're friends of Gandalf the Grey. Can you tell him we've arrived?",
    },
    {
      name: "Pippin",
      movie: "The Return of the King",
      quote:
        "Here do I swear fealty and service to Gondor in peace or war, in living or dying, from, from this hour henceforth until my lord release me or death take me.",
    },
    {
      name: "Pippin",
      movie: "The Return of the King",
      quote:
        "Gandalf! Gandalf! Denethor has lost his mind. He's burning Faramir alive!",
    },
    {
      name: "Pippin",
      movie: "The Two Towers ",
      quote:
        "Yes. Exactly. If we go south, we can slip past Saruman unnoticed. The closer we are to danger, the farther we are from harm. It's the last thing he'll expect.",
    },
    {
      name: "Pippin",
      movie: "The Two Towers ",
      quote:
        "I had the loveliest dream last night.There was this large barrelfull of pipe-weed. And we smoked all of it. And then......you were sick. I'd give anything for a whiff of Old Toby.",
    },
    {
      name: "Frodo",
      movie: "The Fellowship of the Ring",
      quote:
        "Whatever you did, you've been officially labelled as a 'disturber of the peace.'",
    },
    {
      name: "Pippin",
      movie: "The Return of the King",
      quote:
        "A mug of ale in my hand. Putting my feet up on a settle after a hard day's work.",
    },
    {
      name: "Pippin",
      movie: "The Return of the King",
      quote:
        "We are sitting on a field of victory enjoying a few well earned comforts, The salted pork is particularly good.",
    },
    {
      name: "Pippin",
      movie: "The Return of the King",
      quote: "I offer you my service, such as it is in payment of this debt.",
    },
    {
      name: "Pippin",
      movie: "The Return of the King",
      quote:
        "Oh you can search far and wide, You can drink the whole town dry, But you'll never find a beer so brown, But you'll never find a beer so brown, As the one we drink in our hometown, As the one we drink in our hometown. You can drink your fancy ales, You can drink them by the flagon But the only brew for the brave and true,",
    },
    {
      name: "Gollum",
      movie: "The Two Towers ",
      quote:
        "Come on, Hobbits. Long ways to go yet. Smeagol will show you the way.",
    },
    {
      name: "Gollum",
      movie: "The Two Towers ",
      quote: "Yes. No! No! It's too risky. It's too risky.",
    },
    {
      name: "Gollum",
      movie: "The Two Towers ",
      quote:
        "lt is the only way. Master says we must go to Mordor, so we must try.",
    },
    {
      name: "Gollum",
      movie: "The Return of the King",
      quote:
        "Careful master! Careful. Very far to fall. Very dangerous are the stairs.",
    },
    {
      name: "Gollum",
      movie: "The Return of the King",
      quote:
        "Sneaking? Sneaking? Fat Hobbit is always so polite. Smeagol shows them secret ways that nobody else could find and they say 'sneak!' Sneak? Very nice friend, oh yes my precious very nice, very nice!",
    },
    {
      name: "Pippin",
      movie: "The Fellowship of the Ring",
      quote:
        "Baggins? Sure I know a Baggins! He's over there. Frodo Baggins! He's my second cousin once removed on his mother's side, and my third cousin twice removed on his father's side, if you follow me.",
    },
    {
      name: "Pippin",
      movie: "The Return of the King",
      quote:
        "A tree, there was a white tree in a courtyard of stone. It was dead. The city was burning.",
    },
    {
      name: "Pippin",
      movie: "The Return of the King",
      quote: "He asked me my name. I didn't answer. He hurt me!",
    },
    {
      name: "Pippin",
      movie: "The Return of the King",
      quote:
        "Boromir died to save us, my kinsman and me. He fell defending us from many foes.",
    },
    {
      name: "Gollum",
      movie: "The Return of the King",
      quote:
        "Gollum' Gollum' Gollum', and we wept precious. We wept to be so alone.",
    },
    {
      name: "Pippin",
      movie: "The Return of the King",
      quote: "I saw' I saw him! I could hear his voice in my head.",
    },
    {
      name: "Gollum",
      movie: "The Return of the King",
      quote:
        "It wasn't us. It wasn't us. Smeagol wouldn't hurt master. We promised. You must believe us. It was the precious. The precious made us do it.",
    },
    {
      name: "Gollum",
      movie: "The Return of the King",
      quote:
        "Look, what's this? Crumbs on his jacketses. He took it! He took it! I've seen him, he's always stuffing his face when master's not looking.",
    },
    {
      name: "Pippin",
      movie: "The Fellowship of the Ring",
      quote: "We've had one yes. What about second breakfast?",
    },
    {
      name: "Gollum",
      movie: "The Return of the King",
      quote:
        "Naughty little fly. Why does he cry? Caught in a web. Soon you'll be eaten.",
    },
    {
      name: "Gollum",
      movie: "The Two Towers ",
      quote: "Then we stabs them out. Put out his eyeses and make him crawl.",
    },
    {
      name: "Pippin",
      movie: "The Return of the King",
      quote:
        "The mightiest man may be slain by one arrow and Boromir was pierced by many.",
    },
    {
      name: "Pippin",
      movie: "The Return of the King",
      quote: "I just want to look at it, just one more time.",
    },
    {
      name: "Pippin",
      movie: "The Fellowship of the Ring",
      quote:
        "What about elvenses? Luncheon, Afternoon Tea, Dinner? Supper! He knows about them, doesnt he?",
    },
    {
      name: "Gollum",
      movie: "The Two Towers ",
      quote:
        "Master betrayed us. Wicked. Tricksy. False. We ought to wring his filthy little neck. Kill him! Kill him! Kill them both! And then we take the precious......and we be the master!",
    },
    {
      name: "Gollum",
      movie: "The Return of the King",
      quote: "Orcses' filth. Orcses come in here sometimes.",
    },
    {
      name: "Pippin",
      movie: "The Return of the King",
      quote: "Well' Minas Tirith' very impressive. So where are off to next?",
    },
    {
      name: "Gollum",
      movie: "The Return of the King",
      quote:
        "Come Hobbitses, very close now. Very close to Mordor. No safe places here. Hurry.",
    },
    {
      name: "Pippin",
      movie: "The Two Towers ",
      quote: "My friend is sick. He needs water. Please!",
    },
    {
      name: "Gollum",
      movie: "The Return of the King",
      quote:
        "And we forgot the taste of bread, the sound of trees and the softness of the wind. We even forgot our own name.",
    },
    {
      name: "Gollum",
      movie: "The Return of the King",
      quote: "Because', it's my birthday and I wants it.",
    },
    {
      name: "Gollum",
      movie: "The Two Towers ",
      quote:
        "No, no, no hard feelings. Gollum, Gollum. Yes, master. Nice Hobbits.",
    },
    {
      name: "Gollum",
      movie: "The Return of the King",
      quote:
        "Wake up! Wake up! Wake up sleepies! We must go, yes, we must go at once.",
    },
    {
      name: "Gollum",
      movie: "The Return of the King",
      quote: "'Murderer' they called us. They cursed us and drove us away.",
    },
    {
      name: "Gollum",
      movie: "The Return of the King",
      quote: "Smeagol? No, no, not poor Smeagol. Smeagol hates nasty elf bread.",
    },
    {
      name: "Gollum",
      movie: "The Two Towers ",
      quote: "Master. Master looks after us. Master wouldn't hurt us.",
    },
    {
      name: "Gollum",
      movie: "The Two Towers ",
      quote:
        "The rock and pool Is nice and cool So juicy sweet Our only wish To catch a fish So juicy sweet",
    },
    {
      name: "Gollum",
      movie: "The Two Towers ",
      quote: "Yes, precious, she could. And then we takes it once they're dead.",
    },
    {
      name: "Gollum",
      movie: "The Return of the King",
      quote: "Pull it in! Go on, go on, go on, pull it in!",
    },
    {
      name: "Gollum",
      movie: "The Return of the King",
      quote:
        "Why does he hates poor Smeagol? What has Smeagol ever done to him? Master? Master carries a heavy burden Smeagol knows, heavy heavy burden. Fat one cannot know. He wants it. He needs it. Smeagol sees it in his eye. Very soon he will ask you for it. You will see. The fat one will take it from you!",
    },
    {
      name: "Gollum",
      movie: "The Return of the King",
      quote: "Got away did it precious? Not this time. Not this time.",
    },
    {
      name: "Gollum",
      movie: "The Two Towers ",
      quote: "But the fat Hobbit, he knows. Eyes always watching.",
    },
    {
      name: "Gollum",
      movie: "The Return of the King",
      quote:
        "and cool, so nice for feet' and we only wish to catch a fish, so juicy sweet.",
    },
    {
      name: "Gollum",
      movie: "The Two Towers ",
      quote: "Filthy little Hobbitses! They stole it from us!",
    },
    {
      name: "Gollum",
      movie: "The Two Towers ",
      quote: "Master looks after us now. We don't need you.",
    },
    {
      name: "Gollum",
      movie: "The Two Towers ",
      quote:
        "Master says to show himthe way into Mordor. So good Smeagol does master says so.",
    },
    {
      name: "Gollum",
      movie: "The Return of the King",
      quote:
        "Clever Hobbits to climb so high! Mustn't go that way. Mustn't hurt the precious!",
    },
    {
      name: "Gollum",
      movie: "The Two Towers ",
      quote: "No! There's another way. More secret. A dark way.",
    },
    {
      name: "Gollum",
      movie: "The Two Towers ",
      quote:
        "We wants it. We needs it. Must have the precious. They stole it from us. Sneaky little Hobbitses. Wicked. Tricksy. False.",
    },
    {
      name: "Gollum",
      movie: "The Two Towers ",
      quote: "Mustn't ask us. Not its business. Gollum. Gollum.",
    },
    {
      name: "Gollum",
      movie: "The Two Towers ",
      quote:
        "Wicked Men. Servants of Sauron. They are called to Mordor. The Dark One is gathering all armiesto him. It won't be long now. He will soon be ready.",
    },
    {
      name: "Gollum",
      movie: "The Two Towers ",
      quote:
        "We swears...... to serve the master........... of the precious. We will swear on..... on the precious. Gollum. Gollum.",
    },
    {
      name: "Gollum",
      movie: "The Two Towers ",
      quote:
        "What does it eats? Is it tasty? It tries to chokes us! We can't eats Hobbit food! We must starve!",
    },
    {
      name: "Gollum",
      movie: "The Two Towers ",
      quote:
        "They do not see what lies ahead When sun has failed and moon is dead",
    },
    {
      name: "Gollum",
      movie: "The Two Towers ",
      quote:
        "No! No! No, master! They catch you! They catch you! Don't take it to him. He wants the precious. Always he is looking for it. And the precious is wanting to go back to him. But we mustn't let him have it.",
    },
    {
      name: "Gollum",
      movie: "The Two Towers ",
      quote:
        "We be nice to them if they be nice to us. Take it off us. We swears to do what you wants................We swears.",
    },
    {
      name: "Gollum",
      movie: "The Two Towers ",
      quote:
        "To make his war. The last war that will cover all the world in Shadow.",
    },
    {
      name: "Gollum",
      movie: "The Two Towers ",
      quote: "Yes, precious. False. They will cheat you, hurt you, lie!",
    },
    {
      name: "Gollum",
      movie: "The Two Towers ",
      quote:
        "Where would you be without me? Gollum. Gollum. I saved us. It was me. We survived because of me.",
    },
    {
      name: "Gollum",
      movie: "The Two Towers ",
      quote: "You don't have any friends. Nobody likes you.",
    },
    {
      name: "Gollum",
      movie: "The Two Towers ",
      quote: "It burns! It burns us! It freezes! Nasty Elves twisted it.",
    },
    {
      name: "Gollum",
      movie: "The Two Towers ",
      quote: "Yes. There's a path......and some stairs.And then......a tunnel.",
    },
    {
      name: "Gollum",
      movie: "The Return of the King",
      quote: "The Dead City! Very nasty place full of enemies.",
    },
    {
      name: "Gollum",
      movie: "The Two Towers ",
      quote:
        "Of course he did. I told you he was tricksy. I told you he was false.",
    },
    {
      name: "Gollum",
      movie: "The Two Towers ",
      quote:
        "Careful now! Or Hobbits go down to join the dead ones......and light little candles of their own.",
    },
    {
      name: "Gollum",
      movie: "The Two Towers ",
      quote: "Quick! They will see us!They will see us!",
    },
    {
      name: "Gollum",
      movie: "The Two Towers ",
      quote:
        "Oh, cruel Hobbit. It does not care if we be hungry. Does not care if we should die. Not like master. Master cares. Master knows. Yes. Precious. Once it takes hold of us......it never lets go.",
    },
    {
      name: "Gollum",
      movie: "The Two Towers ",
      quote:
        "A swamp, yes, yes. Come, master. We will take you on safe paths through the mist. Come, Hobbits! Come! We go quickly. I found it. I did.The way through the marshes. Orcs don't use it. Orcs don't know it. They go around for miles and miles. Come quickly. Soft and quick as shadows we must be.",
    },
    {
      name: "Gollum",
      movie: "The Two Towers ",
      quote:
        "Wraiths! Wraiths on wings! They are calling for it. They are calling for the precious.",
    },
    {
      name: "Gollum",
      movie: "The Return of the King",
      quote: "Come on, Hobbits! Mustn't stop now. This way!",
    },
    {
      name: "Gollum",
      movie: "The Return of the King",
      quote: "Quick, quick! They will see, they will see!",
    },
    {
      name: "Gollum",
      movie: "The Two Towers ",
      quote: "Hurry, Hobbits. The Black Gate is very close.",
    },
    {
      name: "Gollum",
      movie: "The Two Towers ",
      quote: "Master should be resting. Master needs to keep up his strength.",
    },
    {
      name: "Gollum",
      movie: "The Two Towers ",
      quote:
        "See? See? We've led you out. Hurry, Hobbitses. Hurry! Very lucky we find you. Nice Hobbit.",
    },
    {
      name: "Gollum",
      movie: "The Return of the King",
      quote: "Come away, come away. Look we have found it. The way into Mordor.",
    },
    {
      name: "Gollum",
      movie: "The Two Towers ",
      quote: "Cold be heart and hand and bone Cold be travellers far from home",
    },
    {
      name: "Gollum",
      movie: "The Two Towers ",
      quote:
        "Oh, yes, we could. Spoil a nice fish. Give it to us raw... ...and wriggling. You keep nasty chips.",
    },
    {
      name: "Gollum",
      movie: "The Two Towers ",
      quote: "What's taters, precious? What's taters? Eh?",
    },
    {
      name: "Gollum",
      movie: "The Two Towers ",
      quote:
        "All dead. All rotten. Elves and Men and Orcses. A great battle long ago. Dead Marshes. Yes. Yes, that is their name. This way. Don't follow the lights.",
    },
    {
      name: "Gollum",
      movie: "The Two Towers ",
      quote:
        "The thieves............... The thieves. The filthy little thieves. Where is it?.............Where is it? They stole it from us.............My precious.........Curse them, we hates them! It's ours, it is, and we wants it!",
    },
    {
      name: "Gollum",
      movie: "The Two Towers ",
      quote:
        "We told him to go away. And away he goes, precious. Gone! Gone! Gone! Smeagol is free!",
    },
    {
      name: "Gollum",
      movie: "The Two Towers ",
      quote:
        "No, no birdses to eat. No crunchable birdses. We are famished! Yes! Famished we are, precious!",
    },
    {
      name: "Gollum",
      movie: "The Two Towers ",
      quote: "What's it doing? Stupid, fat Hobbit. It ruins it.",
    },
    {
      name: "Gollum",
      movie: "The Two Towers ",
      quote:
        "They are young. They are tender. They are nice. Yes, they are. Eat them. Eat them!",
    },
    {
      name: "The Witch-King of Angmar",
      movie: "The Return of the King",
      quote: "Do you not know death when you see it, old man?, This is my hour!",
    },
    {
      name: "Éomer",
      movie: "The Return of the King",
      quote: "I do not doubt his heart, only the reach of his arm.",
    },
    {
      name: "The Witch-King of Angmar",
      movie: "The Return of the King",
      quote: "Do not come between the Nazg'l and his prey.",
    },
    {
      name: "Gollum",
      movie: "The Return of the King",
      quote: "Sshh, quiet, mustn't wake them. Mustn't ruin it now.",
    },
    {
      name: "Éomer",
      movie: "The Two Towers ",
      quote:
        "Hasufel! Arod! May these horses bear you to better fortune than their former masters. Farewell.",
    },
    {
      name: "Gollum",
      movie: "The Return of the King",
      quote:
        "And we will! Smeagol did it once, he can do it again! Its ours! Ours!",
    },
    {
      name: "Éomer",
      movie: "The Return of the King",
      quote:
        "Now is the hour, Riders of Rohan. Oaths you have taken. Now fulfil them all, to Lord and Land! Hah!",
    },
    {
      name: "Gollum",
      movie: "The Return of the King",
      quote:
        "No! No! Never! Smeagol hates nasty Hobbitses. Smeagol wants to see them'. Dead!",
    },
    {
      name: "Gollum",
      movie: "The Return of the King",
      quote: "But they knows, they knows, they suspects us!",
    },
    {
      name: "Gollum",
      movie: "The Return of the King",
      quote: "Up, up, up the stairs we go. And then it's into the tunnel.",
    },
    {
      name: "Gollum",
      movie: "The Return of the King",
      quote:
        "What's it saying my precious, my love? Is Smeagol losing his nerve?",
    },
    {
      name: "Éomer",
      movie: "The Two Towers ",
      quote:
        "What business does an Elf, a Manand a Dwarf have in the Riddermark? Speak quickly!",
    },
    {
      name: "Éomer",
      movie: "The Two Towers ",
      quote: "We left none alive. We piled the carcasses and burned them.",
    },
    {
      name: "Gollum",
      movie: "The Return of the King",
      quote:
        "Too risky. Too risky. Thieves. They stole it from us. Kill them, kill them, kill them both!",
    },
    {
      name: "Éomer",
      movie: "The Return of the King",
      quote: "They grow nervous in the shadow of the mountain.",
    },
    {
      name: "The Witch-King of Angmar",
      movie: "The Return of the King",
      quote:
        "Send forth all legions. Do not stop the attack until the city is taken.",
    },
    {
      name: "Gollum",
      movie: "The Return of the King",
      quote: "Patience! Patience my love! First we must lead them to her!",
    },
    {
      name: "Gollum",
      movie: "The Return of the King",
      quote: "We must get the precious! We must get it back!",
    },
    {
      name: "Gollum",
      movie: "The Return of the King",
      quote: "And they doesn't taste very nice, does they Precious?",
    },
    {
      name: "The Witch-King of Angmar",
      movie: "The Return of the King",
      quote: "You have failed! The world of men will fall.",
    },
    {
      name: "Éomer",
      movie: "The Return of the King",
      quote:
        "The scouts report Minas Tirith is surrounded. The lower level's in flames. Everywhere, legions of the enemy advance.",
    },
    {
      name: "Gollum",
      movie: "The Two Towers ",
      quote:
        "No. Ashes and dust and thirst there isand pits, pits, pits. And Orcses, thousands of Orcses. And always the Great Eye watching, watching.",
    },
    {
      name: "Gollum",
      movie: "The Return of the King",
      quote:
        "No, not very nice at all, my love. She hungers for sweeter meats. Hobbit meat. And when she throws away the bones and the empty clothes, then we will find it.",
    },
    {
      name: "Gollum",
      movie: "The Two Towers ",
      quote:
        "No! We won't go back. Not there. Not to him. They can't make us. Gollum! Gollum!",
    },
    {
      name: "Gollum",
      movie: "The Return of the King",
      quote:
        "Yes, we meant for us! Gollum, gollum. The precious will be ours once the Hobbitses are dead!",
    },
    {
      name: "Éomer",
      movie: "The Return of the King",
      quote: "We cannot achieve victory through strength of arms.",
    },
    {
      name: "Gollum",
      movie: "The Return of the King",
      quote: "Up, up, up the stairs we go until we come to the tunnel.",
    },
    {
      name: "Éomer",
      movie: "The Two Towers ",
      quote:
        "He was ambushed by Orcs. If we don't defend our country Saruman will take it by force",
    },
    {
      name: "Éomer",
      movie: "The Two Towers ",
      quote: "The Uruks are destroyed. We slaughtered them during the night.",
    },
    {
      name: "Éomer",
      movie: "The Return of the King",
      quote:
        "You know as little of war as that Hobbit. When the fear takes him, and the blood and the screams and the horror of battle take hold. Do you think he would stand and fight? He would flee. And he would be right to do so. War is the province of men Eowyn.",
    },
    {
      name: "Gollum",
      movie: "The Return of the King",
      quote:
        "Never! Smeagol wouldn't hurt a fly! Aaaagh he is a horrid, fat Hobbit who hates Smeagol and who makes up nasty lies!",
    },
    {
      name: "Gollum",
      movie: "The Fellowship of the Ring",
      quote: "It came to me, my own, my love, my own, my Precious.",
    },
    {
      name: "Éomer",
      movie: "The Two Towers ",
      quote:
        "Theoden no longer recognizes friend from foe. Not even his own kin. Saruman has poisoned the mind of the king......and claimed lordship over these lands. My company are those loyal to Rohan. And for that, we are banished. The White Wizard is cunning. He walks here and there, they say......as an old man hooded and cloaked. And everywhere, his spies slip past our nets.",
    },
    {
      name: "Gollum",
      movie: "The Return of the King",
      quote:
        "And when they go in, there's no coming out. She's always hungry. She always needs to' feed. She must eat. All she gets is filthy Orcses.",
    },
    {
      name: "Éomer",
      movie: "The Two Towers ",
      quote:
        "Look for your friends. But do not trust to hope. It has forsaken these lands. We ride north!",
    },
    {
      name: "Gollum",
      movie: "The Two Towers ",
      quote: "But we swore to serve the master of the precious.",
    },
    {
      name: "Gollum",
      movie: "The Return of the King",
      quote: "Come away Hobbits. We climb. We must climb.",
    },
    {
      name: "Éomer",
      movie: "The Two Towers ",
      quote: "Stay out of the forest! Keep away from the trees!",
    },
    {
      name: "Gollum",
      movie: "The Two Towers ",
      quote: "To the Gate, to the Gate! To the Gate, the master says. Yes!",
    },
    {
      name: "Éomer",
      movie: "The Two Towers ",
      quote:
        "I would cut off your head, Dwarf......if it stood but a little higher from the ground.",
    },
    {
      name: "Éomer",
      movie: "The Return of the King",
      quote: "None who venture there ever return. That mountain is evil.",
    },
    {
      name: "Gollum",
      movie: "The Two Towers ",
      quote: "Yes......on the precious.....On the precious.",
    },
    {
      name: "Saruman",
      movie: "The Two Towers ",
      quote: "You stink of horse. The Man......was he from Gondor?",
    },
    {
      name: "Éomer",
      movie: "The Two Towers ",
      quote:
        "Too long have you watched my sister. Too long have you haunted her steps.",
    },
    {
      name: "Saruman",
      movie: "The Two Towers ",
      quote:
        "The Old World will burn in the fires of industry. The forests will fall. A new order will rise.We will drive the machine of war with the sword and the spear...... and the iron fists of the Orc. We have only to remove those who oppose us.",
    },
    {
      name: "Saruman",
      movie: "The Two Towers ",
      quote:
        "The world is changing. Who now has the strength to stand against the armies of Isengard......and Mordor? To stand against the might of Sauron and Saruman......and the union of the two towers?",
    },
    {
      name: "Saruman",
      movie: "The Two Towers ",
      quote:
        "The Horse-Men took your lands. They drove your people into the hills to scratch a living off rocks.",
    },
    {
      name: "Saruman",
      movie: "The Return of the King",
      quote:
        "So you have come here for information. I have some for you. Something festers in the heart of Middle Earth. Something that you have failed to see. But the great eye has seen it! Even now he presses his advantage. His attack will come soon. You are all going to die! But you know this don't you Gandalf? You cannot think that this Ranger will ever sit upon the throne of Gondor. This exile, crept from the shadows will never be crowned King. Gandalf does not hesitate to sacrifice those who are closest to him' those he professes to love! Tell me, what words of comfort did you give the Halfling before you sent him to his doom? The path that you have set him on can only lead to death.",
    },
    {
      name: "Saruman",
      movie: "The Fellowship of the Ring",
      quote: "Moria... you fear to go into those mines.",
    },
    {
      name: "Saruman",
      movie: "The Two Towers ",
      quote: "Build a dam, block the stream, work the furnaces night and day.",
    },
    {
      name: "Saruman",
      movie: "The Fellowship of the Ring",
      quote: "If the mountain defeats you will you risk a more dangerous road.",
    },
    {
      name: "Saruman",
      movie: "The Two Towers ",
      quote:
        "Gandalf the White. Gandalf the Fool! Does he seek to humble me with his newfound piety?",
    },
    {
      name: "Éomer",
      movie: "The Two Towers ",
      quote: "You have no authority here. Your orders mean nothing.",
    },
    {
      name: "Saruman",
      movie: "The Fellowship of the Ring",
      quote: "the dwarves delved too greadily and too deep.",
    },
    {
      name: "Saruman",
      movie: "The Return of the King",
      quote:
        "A man of Rohan? What is the house of Rohan but a thatched barn where brigands drink in the reek and their brats roll on the floor with the dogs? The victory at Helms Deep does not belong to you Theoden Horse Master. You are a lesser son of greater sires!",
    },
    {
      name: "Saruman",
      movie: "The Return of the King",
      quote:
        "You withdraw your guard and I will tell you where your doom will be decided. I will not be held prisoner here!",
    },
    {
      name: "Saruman",
      movie: "The Return of the King",
      quote: "Save your pity and your mercy. I have no use for it!",
    },
    {
      name: "Saruman",
      movie: "The Two Towers ",
      quote: "The Forest of Fangorn lies on our doorstep. Burn it.",
    },
    {
      name: "Saruman",
      movie: "The Fellowship of the Ring",
      quote:
        "So Gandalf, you try to lead them over Caradhras. And if that fails, where then will you go?",
    },
    {
      name: "Éomer",
      movie: "The Two Towers ",
      quote:
        "Warmongering? How long is it since Saruman bought you? What was the promised price, Grima? When all the Men are dead you will take your share of the treasure?",
    },
    {
      name: "Saruman",
      movie: "The Return of the King",
      quote:
        "Gibbets and crows! Dotard! What do you want Gandalf Grahame? Let me guess, the key of Orthanc? Or perhaps the keys of Barad D'r itself? Along with the crowns of the seven Kings and the rods of the Five Wizards!",
    },
    {
      name: "Saruman",
      movie: "The Two Towers ",
      quote: "I want them armed and ready to march ithin two weeks!",
    },
    {
      name: "Saruman",
      movie: "The Two Towers ",
      quote: "A new power is rising. Its victory is at hand.",
    },
    {
      name: "Saruman",
      movie: "The Two Towers ",
      quote: "If the wall is breached Helm's Deep will fall.",
    },
    {
      name: "Saruman",
      movie: "The Two Towers ",
      quote:
        "We have only to remove those who oppose us. It will begin in Rohan. Too long have these peasants stood against you. But no more.",
    },
    {
      name: "Saruman",
      movie: "The Two Towers ",
      quote:
        "The Ring of Barahir. So Gandalf Greyhame thinks he has found lsildur's heir. The lost king of Gondor. He is a fool. The line was broken years ago. It matters not. The world of Men shall fall. It will begin at Edoras.",
    },
    {
      name: "Saruman",
      movie: "The Fellowship of the Ring",
      quote: "You know what they woke in the dark of Khazad-d'm",
    },
    {
      name: "Saruman",
      movie: "The Two Towers ",
      quote: "Take back the lands they stole from you. Burn every village!",
    },
    {
      name: "Saruman",
      movie: "The Two Towers ",
      quote:
        "This night......the land will be stainedwith the blood of Rohan!March to Helm's Deep! Leave none alive!",
    },
    {
      name: "Saruman",
      movie: "The Two Towers ",
      quote: "Together, my Lord Sauron...... we shall rule this Middle-earth.",
    },
    {
      name: "Saruman",
      movie: "The Fellowship of the Ring",
      quote:
        "Cuiva nwalca Carnirasse; Nai yarvaxea rasselya; taltuva notto-carinnar!",
    },
    {
      name: "Saruman",
      movie: "The Return of the King",
      quote:
        "You have fought many wars and slain many men Theoden King and made peace afterwards. Can we not take counsel together as we once did, my old friend? Can we not have peace you and I?",
    },
    {
      name: "Saruman",
      movie: "The Fellowship of the Ring",
      quote: "Cuiva nwalca Carnirasse; nai yarvaxea rasselya!",
    },
    {
      name: "Éomer",
      movie: "The Two Towers ",
      quote:
        "Orcs are roaming freely across our lands. Unchecked. Unchallenged. Killing at will. Orcs bearing the White Hand of Saruman",
    },
  ];
  
  // ----------------------- Functions ------------------------- //
  
  const randomQuote = function () {
    const item = fullList[Math.floor(Math.random() * fullList.length)];
    return item;
  };
  
  const createNameList = function (correctName) {
    let nameList = [
      "Aragorn",
      "Legolas",
      "Gimli",
      "Boromir",
      "Frodo",
      "Sam",
      "Merry",
      "Pippin",
      "Gandalf",
      "Faramir",
      "Elrond",
      "Arwen",
      "Bilbo",
      "Galadriel",
      "Gollum",
      "Gríma Wormtongue",
      "Saruman",
      "Sauron",
      "Éomer",
      "Éowyn",
      "Théoden",
      "Denethor II",
      "Treebeard",
      "The Witch-King of Angmar",
    ];
    const choiceList = [];
    choiceList.push(correctName);
    nameList = arrayRemove(nameList, correctName);
    for (i = 1; i < 4; i++) {
      const name = nameList[Math.floor(Math.random() * nameList.length)];
      choiceList.push(name);
      nameList = arrayRemove(nameList, name);
    }
    shuffleArray(choiceList);
    return choiceList;
  };
  
  function arrayRemove(arr, value) {
    return arr.filter(function (ele) {
      return ele != value;
    });
  }
  
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }
  
  function startGame() {
    welcome.classList.add("hidden");
    overlay.classList.add("hidden");
    init(start, 240);
  }
  
  function show(ele) {
    overlay.classList.remove('hidden');
    ele.classList.remove('hidden');
    overlay.addEventListener('click', function(){
      window.location.reload();
    });
  }
  
  function hide(ele) {
    overlay.classList.add('hidden');
    ele.classList.add('hidden');
  }
  
  function nextQuestion() {
    init(start, 240);
    if(score === 21) show(party);
    if(wrongAnswers === 9) show(defeat);
  
    newQuote = randomQuote();
    if (usedQuotes.includes(newQuote)) {
      newQuote = randomQuote();
    }
    usedQuotes.push(newQuote);
    const choiceList = createNameList(newQuote.name);
    const charChoices = document.querySelectorAll(".charChoice");
    const charValues = document.getElementsByName("charList");
  
    document.querySelector(".quoteBody").textContent = newQuote.quote;
    for (let i = 0; i < choiceList.length; i++) {
      charChoices[i].textContent = choiceList[i];
      charValues[i].value = choiceList[i];
    }
    // charList.forEach(ele => {ele.removeAttribute('value')})
    charList.forEach((ele) => {
      if (ele.checked) ele.checked = false;
    });
    movieList.forEach((ele) => {
      if (ele.checked) ele.checked = false;
    });
    document.querySelector(".result").textContent = "";
    document.querySelector(".nextQuestion").setAttribute("hidden", true);
  }
  
  function checkAnswer(quote) {
    const rightChar = quote.name;
    const rightMovie = quote.movie;
    let charGuess = "";
    let movieGuess = "";
  
    for (i = 0; i < charList.length; i++) {
      if (charList[i].checked) {
        charGuess = charList[i].value;
      }
    }
    for (let i = 0; i < movieList.length; i++) {
      if (movieList[i].checked) {
        movieGuess = movieChoices[i].textContent;
      }
    }
    if (charGuess === rightChar && movieGuess === rightMovie) {
      document.querySelector(".result").textContent = "RIGHT! \n😀";
      score++;
      if (score === 7 || score === 14 || score === 21) {
        start = 0;
      } else {
        start += 110;
      }
    } else {
      document.querySelector(".result").textContent = "WRONG! 😥";
      wrongAnswers++;
    }
    document.querySelector(".nextQuestion").removeAttribute("hidden");
    scoreDisplay.textContent = score;
    wrongDisplay.textContent = wrongAnswers;
    console.log(score);
  }
  
  function init(x, y) {
    drawAll(x, y);
  }
  
  function drawAll(x, y) {
    sprite.src = "images/images/samandfrodo3.png";
    layer2 = document.getElementById("layer2");
    ctx2 = layer2.getContext("2d");
    draw1();
    draw2(x, y);
  }
  
  function draw1() {
    let canvas = new Image();
    layer1 = document.getElementById("layer1");
    ctx1 = layer1.getContext("2d");
    if (score < 6) {
      canvas.src = "images/images/waterfall1.jpg";
    } 
    if (score > 6 && score < 13) {
      canvas.src = "images/images/forest1.png";
    } 
    if (score > 13) {
      canvas.src = "images/images/mordor2.png";
    }
    canvas.onload = function(){
      ctx1.drawImage(
        canvas,
        0,
        0,
        canvas.width,
        canvas.height,
        0,
        0,
        layer1.width,
        layer1.height
      );
    }
  }
  
  function draw2(x, y) {
    ctx2.clearRect(0, 0, WIDTH, HEIGHT);
    ctx2.drawImage(sprite, x, y);
  }
  
  
  // ----------------- Variables ------------------- //
  
  const usedQuotes = [];
  let newQuote;
  let score = 0;
  let wrongAnswers = 0;
  let layer2;
  let ctx2;
  let sprite = new Image();
  const WIDTH = 850;
  const HEIGHT = 300;
  let start = 0;
  
  const charList = document.getElementsByName("charList");
  const movieChoices = document.querySelectorAll(".movieChoice");
  const movieList = document.getElementsByName("movieList");
  const scoreDisplay = document.querySelector(".score");
  const wrongDisplay = document.querySelector(".wrong");
  const beginGame = document.getElementById("startGame");
  const welcome = document.querySelector(".welcome");
  const overlay = document.querySelector(".overlay");
  const promise = document.querySelector('.promise');
  const somegood = document.querySelector('.somegood');
  const party = document.querySelector('.party');
  const defeat = document.querySelector('.defeat');
  
  
  
  // ------------------- Execution ----------------- //
  
  
  beginGame.addEventListener("click", startGame);
  
  document.querySelector(".submitGuess").addEventListener("click", function () {
    checkAnswer(newQuote);
  });
  
  document.querySelector(".nextQuestion").addEventListener("click", nextQuestion);
  
  nextQuestion();
  