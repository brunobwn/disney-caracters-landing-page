interface House{
  imgPath: string
  names: string[]
}

const houses: House[]=[
  {
    imgPath: '/lannister.png',
    names: ['House Lanister', 'Lannister', 'House Lannister']
  },
  {
    imgPath: '/targaryen.png',
    names: ['House Targaryen', 'Targaryan']
  },
  {
    imgPath: '/tarly.png',
    names: ['House Tarly'] 
  },
  {
    imgPath: '/stark.png',
    names: ['House Stark', 'Stark']
  },
  {
    imgPath: '/baratheon.png',
    names: ['House Baratheon', 'Baratheon']
  },
  {
    imgPath: '/greyjoy.png',
    names: ['House Greyjoy', 'Greyjoy']
  },
  {
    imgPath: '/clegane.png',
    names: ['House Clegane'],
  },
  {
    imgPath: '/baelish.png',
    names: ['House Baelish']
  },
  {
    imgPath: '/seaworth.png',
    names: ['House Seaworth']
  },
  {
    imgPath: '/tyrell.png',
    names: ['House Tyrell', 'Tyrell']
  },
  {
    imgPath: '/freefolk.png',
    names: ['Free Folk']
  },
  {
    imgPath: '/tarth.png',
    names: ['Tarth']
  },
  {
    imgPath: '/bolton.png',
    names: ['Bolton']
  },
  {
    imgPath: '/mormont.png',
    names: ['Mormont']
  },
  {
    imgPath: '/sparrow.png',
    names: ['Sparrow']
  },
  {
    imgPath: '/martell.png',
    names: ['Viper']
  }
]

const fallbackImgPath = '/fallback.png'

export function getHouseImgPath(houseName: string | null): string{
  let img = null

  houses.forEach((house) => {

    house.names.forEach((name) => {
      if(name === houseName){
        img = house.imgPath
      }
    })
  })

  if(img){
    return img
  }

  return fallbackImgPath
}
