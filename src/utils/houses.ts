interface House{
  symbolURL: string
  names: string[]
}

const houses: House[]=[
  {
    symbolURL: 'https://w7.pngwing.com/pngs/278/95/png-transparent-lion-tyrion-lannister-tywin-lannister-a-game-of-thrones-cersei-lannister-house-lannister-ammunition-miscellaneous-shield-ammunition-thumbnail.png',
    names: ['House Lanister', 'Lannister', 'House Lannister']
  },
  {
    symbolURL: 'https://w7.pngwing.com/pngs/881/84/png-transparent-house-of-targaryen-logo-eddard-stark-daenerys-targaryen-house-targaryen-house-stark-a-game-of-thrones-house-targaryen-s-fictional-character-house-baratheon-circle-thumbnail.png',
    names: ['House Targaryen', 'Targaryan']
  },
  {
    symbolURL: 'https://static.wikia.nocookie.net/gameofthrones/images/4/44/House-Tarly-Main-Shield.PNG.png/revision/latest?cb=20220423165012&path-prefix=pt-br',
    names: ['House Tarly'] 
  },
  {
    symbolURL: 'https://w7.pngwing.com/pngs/693/244/png-transparent-game-of-thrones-house-of-stark-art-game-of-thrones-sandor-clegane-daenerys-targaryen-winter-is-coming-house-stark-game-of-thrones-television-game-dragon-thumbnail.png',
    names: ['House Stark', 'Stark']
  },
  {
    symbolURL: 'https://w7.pngwing.com/pngs/245/611/png-transparent-yellow-and-black-deer-sigil-a-game-of-thrones-stannis-baratheon-house-baratheon-daenerys-targaryen-robert-baratheon-house-baratheon-shield-house-arryn-sandor-clegane-thumbnail.png',
    names: ['House Baratheon', 'Baratheon']
  },
  {
    symbolURL: 'https://w7.pngwing.com/pngs/138/734/png-transparent-theon-greyjoy-euron-greyjoy-aeron-greyjoy-a-game-of-thrones-balon-greyjoy-posters-flowers-background-miscellaneous-logo-sigil-thumbnail.png',
    names: ['House Greyjoy', 'Greyjoy']
  },
  {
    symbolURL: 'https://w7.pngwing.com/pngs/541/200/png-transparent-sandor-clegane-gregor-clegane-symbol-house-stark-coat-of-arms-symbol-miscellaneous-flag-banner-thumbnail.png',
    names: ['House Clegane'],
  },
  {
    symbolURL: 'https://upload.wikimedia.org/wikipedia/commons/c/ca/House-Baelish-Main-Shield.png',
    names: ['House Baelish']
  },
  {
    symbolURL: 'https://awoiaf.westeros.org/images/thumb/6/61/House_Seaworth.svg/1200px-House_Seaworth.svg.png',
    names: ['House Seaworth']
  },
  {
    symbolURL: 'https://w7.pngwing.com/pngs/295/476/png-transparent-brass-colored-ornate-art-margaery-tyrell-a-game-of-thrones-sansa-stark-daenerys-targaryen-house-tyrell-game-of-trones-gold-metal-house-baratheon-thumbnail.png',
    names: ['House Tyrell', 'Tyrell']
  },
  {
    symbolURL: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/89bfc46d-94b0-4f20-95e4-50efec333145/df2ww23-8304568b-0742-45d5-af4d-faaf9c15f362.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzg5YmZjNDZkLTk0YjAtNGYyMC05NWU0LTUwZWZlYzMzMzE0NVwvZGYyd3cyMy04MzA0NTY4Yi0wNzQyLTQ1ZDUtYWY0ZC1mYWFmOWMxNWYzNjIucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.KkYFLB_qNa4XkUATGKHlLU_9Mqs8Di5J4aDyz4XUqAQ',
    names: ['Free Folk']
  },
  {
    symbolURL: 'https://w7.pngwing.com/pngs/148/78/png-transparent-brienne-of-tarth-a-game-of-thrones-world-of-a-song-of-ice-and-fire-house-baratheon-house-text-logo-sigil-thumbnail.png',
    names: ['Tarth']
  },
  {
    symbolURL: 'https://e7.pngegg.com/pngimages/976/461/png-clipart-house-bolton-roose-bolton-game-quiz-others-television-flag.png',
    names: ['Bolton']
  },
  {
    symbolURL: 'https://toppng.com/uploads/preview/house-mormont-sigil-download-house-mormont-11562990397aojbgatnqh.png',
    names: ['Mormont']
  },
  {
    symbolURL: 'https://w7.pngwing.com/pngs/640/966/png-transparent-high-sparrow-religion-world-of-a-song-of-ice-and-fire-symbol-faith-game-of-thrones-stars-miscellaneous-angle-triangle-thumbnail.png',
    names: ['Sparrow']
  },
  {
    symbolURL: 'https://w7.pngwing.com/pngs/460/465/png-transparent-oberyn-martell-house-martell-house-tyrell-world-of-a-song-of-ice-and-fire-house-baratheon-game-of-thrones-leaf-orange-flower-thumbnail.png',
    names: ['Viper']
  }
]

const fallbackSymbolURL = 'https://w7.pngwing.com/pngs/656/206/png-transparent-iron-throne-from-game-of-thrones-daenerys-targaryen-game-of-thrones-iron-throne-7-replica-a-game-of-thrones-throne-miscellaneous-game-monument-thumbnail.png'

export function getHouseSymbolURL(houseName: string): string{
  
  houses.forEach((house) => {
    house.names.forEach((name) => {
      if(name === houseName){
        return house.symbolURL
      }
    })
  })

  return fallbackSymbolURL
}
