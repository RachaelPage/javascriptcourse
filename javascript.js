//For background to this project, please see https://www.rachaelpage.com/art-augmented-reality

//Create at least 2 different classes 

Cameraview = class {
    constructor(room, distance_from_wall) {
       this.room = room
       this.distance_from_wall = distance
    
    }
}

Artwork = class {
    constructor(name, width, height, price) {
       this.name = name
       this.width = width
       this.height = height
       this.europrice = europrice

    }

     show(artwork) {
         console.log("Show " + artwork.name, artwork.width, "x ", artwork.height, "€", artwork.europrice)
    }
    see_in(cameraview) {
        this.cameraview = cameraview
        cameraview.room.push(this)
    }
}


//create several instances for these classes 

blue_lagoon = new Artwork('Blue Lagoon', 100,100, 1500)
red_sunset = new Artwork('Red Sunset', 120,120, 2000)
pink_drinks = new Artwork('Pink Drinks', 150,150, 3000)
bathroom = new cameraview('Bathroom', 2)
bedroom = new cameraview('Bedroom', 3)
kitchen = new cameraview('Kitchen', 2.5)

//create at least 3 different interactions between said classes

artinbathroom = new cameraview('Blue Lagoon in bathroom')
artinbedroom = new cameraview('Red Sunset in bedroom')
artinkitchen = new cameraview('Pink Drinks in kitchen')

blue_lagoon.cameraview(artinbathroom)
red_sunset.cameraview(artinbedroom)
pink_drinks.cameraview(artinkitchen)















