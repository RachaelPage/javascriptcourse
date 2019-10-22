//For background to this project, please see https://www.rachaelpage.com/art-augmented-reality

//Create at least 2 different classes 

cameraview = class {
    constructor(room, distance_from_wall) {
       this.room = room
       this.distance_from_wall = distance_from_wall
    
    }
}

artwork = class {
    constructor(name, width, height, europrice) {
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

blue_lagoon = new artwork('Blue Lagoon', 100,100, 1500)
red_sunset = new artwork('Red Sunset', 120,120, 2000)
pink_drinks = new artwork('Pink Drinks', 150,150, 3000)
bathroom = new cameraview('Bathroom', 2)
bedroom = new cameraview('Bedroom', 3)
kitchen = new cameraview('Kitchen', 2.5)

//create at least 3 different interactions between said classes

artinbathroom = new cameraview('Blue Lagoon in bathroom')
artinbedroom = new cameraview('Red Sunset in bedroom')
artinkitchen = new cameraview('Pink Drinks in kitchen')

blue_lagoon.see_in(artinbathroom)
red_sunset.see_in(artinbedroom)
pink_drinks.see_in(artinkitchen)
