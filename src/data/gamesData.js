const gamesData = [
  [       
    {
      id: 1,
      name: 'Super Mario Bros',
      species: 'Platformer',
      description: 'A platform game developed and published by Nintendo. The successor to the 1983 arcade game, Mario Bros., and the first in the Super Mario series of platformers, it was released in Japan in 1985 for the Famicom, and in North America and Europe for the NES',
      image: 'https://vgmdownloads.com/soundtracks/super-mario-bros/thumbs/index.png',
      audio: 'https://vgmdownloads.com/soundtracks/super-mario-bros/khbnvkqp/01%20-%20Super%20Mario%20Bros.mp3',
      link: 'https://www.zophar.net/music/nintendo-nes-nsf/super-mario-bros',
    },
    {
      id: 2,
      name: 'Battletoads and Double Dragon',
      species: `Beat 'em up`,
      description: `A 1993 beat 'em up developed by Rare and published by Tradewest. It was originally released for the Nintendo Entertainment System and later ported to the Mega Drive/Genesis, Super NES, and Game Boy.`,
      image: 'https://vgmdownloads.com/soundtracks/battletoads-double-dragon-sega-genesis/thumbs/Battletoads%20-%20Double%20Dragon.png',
      audio: 'https://vgmdownloads.com/soundtracks/battletoads-double-dragon-sega-genesis/kjftstpedb/01%20-%20Title%20Theme.mp3',
      link: 'https://www.zophar.net/music/nintendo-nes-nsf/battletoads-double-dragon-the-ultimate-team'
    },
    {
      id: 3,
      name: 'Contra Force',
      species: `Shoot 'em up`,
      description: 'An action shooting game released by Konami for the Nintendo Entertainment System in 1992 in North America. It is a spinoff of the Contra series, being the third game in the series released for the NES following the original Contra and Super Contra.',
      image: 'https://vgmdownloads.com/soundtracks/contra-force/thumbs/coverart.jpg',
      audio: 'https://vgmdownloads.com/soundtracks/contra-force/aqhhkxqg/01%20-%20Intro.mp3',
      link: 'https://www.zophar.net/music/nintendo-nes-nsf/contra-force',
    },
    {
      id: 4,
      name: 'Battle City',
      species: `Shoot 'em up`,
      description: 'Battle City is a multi-directional shooter video game for the Family Computer produced and published in 1985 by Namco.',
      image: 'https://www.vizzed.com/videogames/nes/screenshot/Battle%20City-1.png',
      audio: 'https://fi.zophar.net/soundfiles/nintendo-nes-nsf/battle-city-1985/1%20-%20Track%201.mp3',
      link: 'https://www.zophar.net/music/nintendo-nes-nsf/battle-city',
    },
    {
      id: 5,
      name: 'Pac-Man',
      species: 'Maze',
      description: 'A maze arcade game developed and released by Namco in 1980. The original Japanese title of Puck Man was changed to Pac-Man for international releases as a preventative measure against defacement of the arcade machines by changing the P to an F.',
      image: 'https://fi.zophar.net/soundcovers/gameboy-gbs/thumbs_large/gb_pacman.jpg',
      audio: 'https://fi.zophar.net/soundfiles/gameboy-gbs/pac-man/01%20Jingle%20%2301.mp3',
      link: 'https://www.zophar.net/music/nintendo-nes-nsf/pac-man',
    },
    {
      id: 6,
      name: 'Teenage Mutant Ninja Turtles',
      species: `Beat'em up`,
      description: 'A quartet of humanoid turtles, trained by their mentor in ninjitsu, must learn to work together to face the menace of Shredder and the Foot Clan.',
      image: 'https://fi.zophar.net/soundcovers/nintendo-nes-nsf/thumbs_large/nes_TMNT.jpg',
      audio: 'https://fi.zophar.net/soundfiles/gameboy-gbs/teenage-mutant-ninja-turtles-ii-back-from-the-sewers-[teenage-mutant-hero-turtles-ii-back-from-the-sewers]/01%20Opening%20-%20Turtles.mp3',
      link: 'https://www.zophar.net/music/nintendo-nes-nsf/teenage-mutant-ninja-turtles',
    }
  ],
  [
    {
      id: 1,
      name: 'Ghostbusters',
      species: 'Action-adventure',
      description: `A 1990 platform shoot 'em up video game developed and published by Sega for the Sega Genesis/Mega Drive. It features an original story based on the Ghostbusters films, and is unrelated to a 1984 Ghostbusters game by Activision.`,
      image: 'https://fi.zophar.net/soundcovers/sega-mega-drive-genesis/thumbs_large/genesis_ghostbusters.jpg',
      audio: 'https://fi.zophar.net/soundfiles/sega-mega-drive-genesis/ghostbusters/01%20-%20Main%20Theme.mp3',
      link: 'https://www.zophar.net/music/sega-mega-drive-genesis/ghostbusters',
    },
    {
      id: 2,
      name: 'Aladdin',
      species: 'Platformer',
      description: `Aladdin, a common thief, falls in love with Princess Jasmine, but cannot marry her as he is not a prince. Jafar, a royal vizier with a hidden agenda, enlists Aladdin's help to retrieve a magical lamp.`,
      image: 'https://fi.zophar.net/soundcovers/sega-mega-drive-genesis/thumbs_large/genesis_aladdin_label.jpg',
      audio: 'https://fi.zophar.net/soundfiles/sega-mega-drive-genesis/aladdin/01%20-%20Storyline.mp3',
      link: 'https://www.zophar.net/music/sega-mega-drive-genesis/aladdin',
    },
    {
      id: 3,
      name: 'Comix Zone',
      species: `Beat 'em up`,
      description: `A 1995 beat 'em up video game developed and published by Sega for the Genesis. It is set within the panels of a comic book with dialogue rendered within talk bubbles and sprites, and backgrounds possessing the bright colors and dynamic drawing style of superhero comics.`,
      image: 'https://fi.zophar.net/soundcovers/sega-mega-drive-genesis/thumbs_large/genesis_comixzone_pal.jpg',
      audio: 'https://fi.zophar.net/soundfiles/sega-mega-drive-genesis/comix-zone/02%20-%20Title%20Screen.mp3',
      link: 'https://www.zophar.net/music/sega-mega-drive-genesis/comix-zone',
    },
    {
      id: 4,
      name: 'Earthworm Jim 2',
      species: 'Platformer',
      description: 'Earthworm Jim 2 is a run and gun platform video game starring an earthworm named Jim in a robotic suit who battles evil. It is a sequel to the original Earthworm Jim, and the second and final game in the Earthworm Jim series.',
      image: 'https://fi.zophar.net/soundcovers/sega-mega-drive-genesis/thumbs_large/genesis_earthwormjim2.jpg',
      audio: 'https://fi.zophar.net/soundfiles/sega-mega-drive-genesis/earthworm-jim-2/05%20-%20Puppy%20Love.mp3',
      link: 'https://www.zophar.net/music/sega-mega-drive-genesis/earthworm-jim-2',
    },
    {
      id: 5,
      name: 'Dune II',
      species: 'Real-time strategy',
      description: `A real-time strategy Dune video game developed by Westwood Studios and released by Virgin Games in December 1992. It is based upon David Lynch's 1984 movie Dune, an adaptation of Frank Herbert's science fiction novel of the same name.`,
      image: 'https://fi.zophar.net/soundcovers/sega-mega-drive-genesis/thumbs_large/genesis_dune2_de.jpg',
      audio: 'https://fi.zophar.net/soundfiles/sega-mega-drive-genesis/dune-ii-the-battle-for-arrakis/01%20-%20Opening.mp3',
      link: 'https://www.zophar.net/music/sega-mega-drive-genesis/dune-ii-the-battle-for-arrakis',
    },
    {
      id: 6,
      name: 'Sonic the Hedgehog',
      species: 'Platformer',
      description: 'The world needed a hero -- it got a hedgehog. Powered with incredible speed, Sonic embraces his new home on Earth -- until he accidentally knocks out the power grid, sparking the attention of uncool evil genius Dr. Robotnik',
      image: 'https://fi.zophar.net/soundcovers/sega-mega-drive-genesis/thumbs_large/genesis_sonicthehedgehog_pal.jpg',
      audio: 'https://fi.zophar.net/soundfiles/sega-mega-drive-genesis/sonic-the-hedgehog/02%20-%20Green%20Hill%20Zone.mp3',
      link: 'https://www.zophar.net/music/sega-mega-drive-genesis/sonic-the-hedgehog',
    }
  ],
  [
    {
      id: 1,
      name: 'Pink Goes to Hollywood',
      species: 'Platformer',
      description: 'Pink Panther in Pink Goes To Hollywood is a Pink Panther themed platform game that was released in 1993 for the Super Nintendo Entertainment System and the Sega Genesis',
      image: 'https://fi.zophar.net/soundcovers/sega-mega-drive-genesis/thumbs_large/genesis_pinkgoestohollywood.jpg',
      audio: 'https://fi.zophar.net/soundfiles/sega-mega-drive-genesis/pink-goes-to-hollywood/01%20-%20Title%20Theme.mp3',
      link: 'https://www.zophar.net/music/sega-mega-drive-genesis/pink-goes-to-hollywood',
    },
    {
      id: 2,
      name: 'Flintstones',
      species: 'Platformer',
      description: 'The Flintstones were the modern Stone Age family. Residing in Bedrock, Fred Flintstone worked an unsatisfying quarry job, but returned home to lovely wife Wilma and eventually daughter Pebbles',
      image: 'https://fi.zophar.net/soundcovers/sega-mega-drive-genesis/thumbs_large/genesis_flintstones.jpg',
      audio: 'https://fi.zophar.net/soundfiles/sega-mega-drive-genesis/flintstones-the/01%20-%20Title%20Theme.mp3',
      link: 'https://www.zophar.net/music/sega-mega-drive-genesis/flintstones-the'
    },
    {
      id: 3,
      name: 'Streets of Rage',
      species: `Beat 'em up`,
      description: `Streets of Rage is a side-scrolling beat 'em up video game developed and published by Sega for the Mega Drive/Genesis in 1991. `,
      image: 'https://fi.zophar.net/soundcovers/sega-mega-drive-genesis/thumbs_large/genesis_streetsofrage.jpg',
      audio: 'https://fi.zophar.net/soundfiles/sega-mega-drive-genesis/streets-of-rage/01%20-%20The%20Street%20of%20Rage.mp3',
      link: 'https://www.zophar.net/music/sega-mega-drive-genesis/streets-of-rage',
    },
    {
      id: 4,
      name: 'Road Rash 2',
      species: 'Action/Racing',
      description: 'Road Rash II is a racing and vehicular combat game developed and published by Electronic Arts for the Sega Genesis in 1992.',
      image: 'https://fi.zophar.net/soundcovers/sega-mega-drive-genesis/thumbs_large/genesis_roadrash2.jpg',
      audio: 'https://fi.zophar.net/soundfiles/sega-mega-drive-genesis/road-rash-2/01%20-%20Main%20Theme.mp3',
      link: 'https://www.zophar.net/music/sega-mega-drive-genesis/road-rash-2'
    },
    {
      id: 5,
      name: 'Lion King',
      species: 'Platformer',
      description: 'Simba, a young lion prince, flees his kingdom after the murder of his father, Mufasa. Years later, a chance encounter with Nala, a lioness, causes him to return and take back what is rightfully his.',
      image: 'https://fi.zophar.net/soundcovers/sega-mega-drive-genesis/thumbs_large/genesis_thelionking.jpg',
      audio: 'https://fi.zophar.net/soundfiles/sega-mega-drive-genesis/lion-king-the/01%20-%20Circle%20of%20Life.mp3',
      link: 'https://www.zophar.net/music/sega-mega-drive-genesis/lion-king-the',
    },
    {
      id: 6,
      name: 'Contra - Hard Corps',
      species: `Shoot 'em up`,
      description: `Contra: Hard Corps is a side-scrolling run and gun-style shoot-'em-up video game released by Konami for the Sega Genesis in North America and South Korea in 1994.`,
      image: 'https://fi.zophar.net/soundcovers/sega-mega-drive-genesis/thumbs_large/genesis_contrahardcorps_eu.jpg',
      audio: 'https://fi.zophar.net/soundfiles/sega-mega-drive-genesis/contra-hard-corps/03%20-%20Charshoe%20X.mp3'
    }
  ],
  [
    {
      id: 1,
      name: 'Twisted Metal 4',
      species: 'Vehicular combat',
      description: 'Twisted Metal 4 is a vehicular combat video game developed by 989 Studios and published by Sony Computer Entertainment for the PlayStation. The game was released in North America on October 31, 1999.',
      image: 'https://fi.zophar.net/soundcovers/playstation-psf/thumbs_large/ps1_twistedmetal4.jpg',
      audio: 'https://fi.zophar.net/soundfiles/playstation-psf/twisted-metal-4/SCUS-94560_02.mp3',
      link: 'https://www.zophar.net/music/playstation-psf/twisted-metal-4',
    },
    {
      id: 2,
      name: 'Need for Speed - Porsche Unleashed',
      species: 'Racing',
      description: 'Need for Speed: Porsche Unleashed, released as Need for Speed: Porsche 2000 in Europe and Need for Speed: Porsche in Latin America, and Germany, is a racing video game released in 2000.',
      image: 'https://fi.zophar.net/soundcovers/playstation-psf/thumbs_large/ps1_needforspeedporscheunleashed.jpg',
      audio: 'https://fi.zophar.net/soundfiles/playstation-psf/need-for-speed-porsche-unleashed/SLUS-01104_02.mp3',
      link: 'https://www.zophar.net/music/playstation-psf/need-for-speed-porsche-unleashed',
    },
    {
      id: 3,
      name: 'WarCraft II - The Dark Saga',
      species: 'Strategy',
      description: `Warcraft II: Tides of Darkness is a fantasy real-time strategy computer game developed by Blizzard Entertainment and released by Blizzard's parent, Davidson & Associates.`,
      image: 'https://fi.zophar.net/soundcovers/playstation-psf/thumbs_large/ps1_warcraftii_3.jpg',
      audio: 'https://fi.zophar.net/soundfiles/playstation-psf/warcraft-ii-the-dark-saga/SLUS-00480_WARCRAFT2_03.mp3',
      link: 'https://www.zophar.net/music/playstation-psf/warcraft-ii-the-dark-saga',
    },
    {
      id: 4,
      name: 'Medal of Honor',
      species: 'FPS',
      description: 'Medal of Honor is a series of first-person shooter video games. The first game was developed by DreamWorks Interactive and published by Electronic Arts for the PlayStation in 1999.',
      image: 'https://fi.zophar.net/soundcovers/playstation-psf/thumbs_large/ps1_medalofhonor_front_de.jpg',
      audio: 'https://fi.zophar.net/soundfiles/playstation-psf/medal-of-honor/%28mov%29%20HONOR.mp3',
      link: 'https://www.zophar.net/music/playstation-psf/medal-of-honor',
    },
    {
      id: 5,
      name: 'Silent Hill',
      species: 'Horror',
      description: 'Silent Hill is a horror media franchise centered on a series of survival horror video games, created by Keiichiro Toyama, developed and published by Konami, and published by its subsidiary Konami Digital Entertainment.',
      image: 'https://fi.zophar.net/soundcovers/playstation2-psf2/thumbs_large/ps2_silenthill2.jpg',
      audio: 'https://fi.zophar.net/soundfiles/gameboy-advance-gsf/play-novel-silent-hill/01%20BGM%20%2301.mp3',
      link: 'https://www.zophar.net/music/gameboy-advance-gsf/play-novel-silent-hill',
    },
    {
      id: 6,
      name: 'Alien Trilogy',
      species: 'FPS',
      description: 'Alien Trilogy is a 1996 first-person shooter video game developed by Probe Entertainment and published by Acclaim Entertainment for the PlayStation, Sega Saturn and Windows platforms. The game is based on the first three movies in the Alien film series.',
      image: 'https://fi.zophar.net/soundcovers/playstation-psf/thumbs_large/ps1_alientrilogy_front_de.jpg',
      audio: 'https://fi.zophar.net/soundfiles/playstation-psf/alien-trilogy/SLUS-00007_02.mp3',
      link: 'https://www.zophar.net/music/playstation-psf/alien-trilogy',
    }
  ],
  [
    {
      id: 1,
      name: '007 - NightFire',
      species: 'Action',
      description: 'James Bond 007: Nightfire is a first-person shooter video game published by Electronic Arts in 2002 for the GameCube, PlayStation 2, Xbox and PC, with additional versions released for the Game Boy Advance in 2003, and the macOS in 2004.',
      image: 'https://fi.zophar.net/soundcovers/xbox/thumbs_large/xbox_007nightfire.jpg',
      audio: 'https://fi.zophar.net/soundfiles/xbox/007-nightfire/nointro.mp3',
      link: 'https://www.zophar.net/music/xbox/007-nightfire',
    },
    {
      id: 2,
      name: 'NFS - Underground 2',
      species: 'Racing',
      description: 'Need for Speed: Underground 2 is a cross-platform racing video game and the eighth installment in the Need for Speed series, the direct sequel to Need for Speed: Underground',
      image: 'https://fi.zophar.net/soundcovers/playstation2-psf2/thumbs_large/ps2_needforspeedunderground2_de.jpg',
      audio: 'https://fi.zophar.net/soundfiles/playstation2-psf2/need-for-speed-underground-2/ZZDATA3_00000417.mp3',
      link: 'https://www.zophar.net/music/playstation2-psf2/need-for-speed-underground-2',
    },
    {
      id: 3,
      name: 'NFS - Most Wanted',
      species: 'Racing',
      description: `The open-world action in Need for Speed Most Wanted gives you the freedom to drive your way. Hit jumps and shortcuts, switch cars, lie low or head for terrain that plays to your vehicle's unique strengths.`,
      image: 'https://fi.zophar.net/soundcovers/nintendo-gamecube-gcn/thumbs_large/gc_needforspeedmostwanted.jpg',
      audio: 'https://fi.zophar.net/soundfiles/nintendo-gamecube-gcn/need-for-speed-most-wanted/ZZDATA3_000bd600.mp3',
      link: 'https://www.zophar.net/music/nintendo-gamecube-gcn/need-for-speed-most-wanted'
    },
    {
      id: 4,
      name: 'FlatOut',
      species: 'Racing/Action',
      description: 'FlatOut is a series of action demolition derby/racing video games created by Finnish independent video game developer Bugbear Entertainment. The FlatOut series has sold a total of almost 3 million units worldwide.',
      image: 'https://fi.zophar.net/soundcovers/xbox/thumbs_large/xbox_flatout.jpg',
      audio: 'https://fi.zophar.net/soundfiles/xbox/flatout/01_Adren.mp3',
      link: 'https://www.zophar.net/music/xbox/flatout',
    },
    {
      id: 5,
      name: 'Reservoir Dogs',
      species: 'Action',
      description: `Six criminals, hired to steal diamonds, do not know each other's true identity. While attempting the heist, the police ambushes them, leading them to believe that one of them is an undercover officer.`,
      image: 'https://fi.zophar.net/soundcovers/xbox/thumbs_large/xbox_reservoirdogs.jpg',
      audio: 'https://fi.zophar.net/soundfiles/xbox/reservoir-dogs/%28mov%29%20attract.mp3',
      link: 'https://www.zophar.net/music/xbox/reservoir-dogs',
    },
    {
      id: 6,
      name: 'UFC Undisputed 3',
      species: 'Fighting',
      description: `UFC Undisputed 3 is a mixed martial arts video game featuring Ultimate Fighting Championship properties and fighters developed by Yuke's and published by THQ. It was released for PlayStation 3 and Xbox 360.`,
      image: 'https://fi.zophar.net/soundcovers/xbox-360/thumbs_large/x360_ufcundisputed3.jpg',
      audio: 'https://fi.zophar.net/soundfiles/xbox-360/ufc-undisputed-3/sfx%20~%200x2609ed0e%20-%20Stemm%20-%20Face%20the%20pain.mp3',
      link: 'https://www.zophar.net/music/xbox-360/ufc-undisputed-3',
    }
  ],
  [
    {
      id: 1,
      name: 'Half-Life',
      species: 'FPS',
      description: `Half-Life is a series of first-person shooter games developed and published by Valve. The games combine shooting combat, puzzles, and storytelling. The original Half-Life, Valve's first product, was released in 1998 for Windows to critical and commercial success.`,
      image: 'https://fi.zophar.net/soundcovers/playstation2-psf2/thumbs_large/ps2_halflife_de.jpg',
      audio: 'https://fi.zophar.net/soundfiles/playstation2-psf2/half-life/FELOOP.mp3',
      link: 'https://www.zophar.net/music/playstation2-psf2/half-life',
    },
    {
      id: 2,
      name: 'Bioshock',
      species: 'FPS',
      description: 'BioShock is a retrofuturistic video game series published by 2K Games and developed by several studios, including Irrational Games and 2K Marin.',
      image: 'https://fi.zophar.net/soundcovers/xbox-360/thumbs_large/x360_bioshock.jpg',
      audio: 'https://fi.zophar.net/soundfiles/xbox-360/bioshock/music_licence_20thcenturyblues.mp3',
      link: 'https://www.zophar.net/music/xbox-360/bioshock',
    },    
    {
      id: 3,
      name: 'Driver - Parallel Lines',
      species: 'Action/Racing',
      description: 'Driver: Parallel Lines is the fourth installment in the Driver video game series. It is a departure from previous titles in the series that focused on multiple cities, as the game takes place in New York City, within the periods of 1978 and 2006.',
      image: 'https://fi.zophar.net/soundcovers/playstation2-psf2/thumbs_large/ps2_driverparallellines.jpg',
      audio: 'https://fi.zophar.net/soundfiles/playstation2-psf2/driver-parallel-lines/241.mp3',
      link: 'https://www.zophar.net/music/playstation2-psf2/driver-parallel-lines'
    },
    {
      id: 4,
      name: 'Futurama',
      species: 'Adventure',
      description: 'Futurama is a 3D platform video game based on the science fiction animated series of the same name. Versions are available for the PlayStation 2 and Xbox, both of which use cel-shading technology.',
      image: 'https://fi.zophar.net/soundcovers/playstation2-psf2/thumbs_large/ps2_futurama.jpg',
      audio: 'https://fi.zophar.net/soundfiles/playstation2-psf2/futurama/01%20-%20front-end-shorted.mp3'
    },
    {
      id: 5,
      name: 'Grand Theft Auto - Vice City',
      species: 'Action',
      description: `Grand Theft Auto: Vice City is a 2002 action-adventure game developed by Rockstar North and published by Rockstar Games. It is the first entry in the Grand Theft Auto series since 2001's Grand Theft Auto III.`,
      image: 'https://fi.zophar.net/soundcovers/playstation2-psf2/thumbs_large/ps2_gtavicecity_de.jpg',
      audio: 'https://fi.zophar.net/soundfiles/playstation2-psf2/grand-theft-auto-vice-city/AMB_BIKR.mp3',
      link: 'https://www.zophar.net/music/playstation2-psf2/grand-theft-auto-vice-city'
    },
    {
      id: 6,
      name: 'Lord of the Rings - The Two Towers',
      species: 'Hack and slash',
      description: 'The Lord of the Rings: The Two Towers is an action hack and slash video game developed by Stormfront Studios for the PlayStation 2 and Xbox. A 2D Game Boy Advance game of the same name was made by Griptonite Games,',
      image: 'https://fi.zophar.net/soundcovers/playstation2-psf2/thumbs_large/ps2_thelordoftheringsthetwotowers_eu.jpg',
      audio: 'https://fi.zophar.net/soundfiles/playstation2-psf2/lord-of-the-rings-the-two-towers/INTCRED.mp3',
      link: 'https://www.zophar.net/music/playstation2-psf2/lord-of-the-rings-the-two-towers',
    }
  ]
];

export default gamesData;