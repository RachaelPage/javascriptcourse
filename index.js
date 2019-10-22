//For background to this project, please see https://www.rachaelpage.com/art-augmented-reality 

//Create at least 2 different classes 

cameraview = class {
    constructor(roomimage, distance_from_wall) {
       this.roomimage = roomimage
       this.distance_from_wall = distance_from_wall
    
    }
}

artwork = class {
    constructor(artimage, name, width, height, europrice) {
       this.artimage = artimage
       this.name = name
       this.width = width
       this.height = height
       this.europrice = europrice

    }

     show(artwork) {
         console.log("Show " + artwork.artimage, artwork.name, artwork.width, "x ", artwork.height, "€", artwork.europrice)
    }
    see_art_in(cameraview) {
        this.cameraview = cameraview
        cameraview.roomimage.push(this)
    }
}


//create several instances for these classes 

blue_lagoon = new artwork(image1.jpg, 'Blue Lagoon', 100,100, 1500)
red_sunset = new artwork(image2.jpg, 'Red Sunset', 120,120, 2000)
pink_drinks = new artwork(image3.jpg, 'Pink Drinks', 150,150, 3000)
bathroom = new cameraview('Bathroomimage', 2)
bedroom = new cameraview('Bedroomimage', 3)
kitchen = new cameraview('Kitchenimage', 2.5)

//create at least 3 different interactions between said classes
//a cameraview has infinite different image feeds because it's live-feed
//a User can swipe left or right to see a new artwork in the cameraview
//each artwork can be bought, shared, commented on, added to a virtual collection and the user can follow the artist

bathroom = new cameraview('Blue Lagoon in bathroom')
bedroom = new cameraview('Red Sunset in bedroom')
kitchen = new cameraview('Pink Drinks in kitchen')

blue_lagoon.see_art_in(bathroom)
red_sunset.see_art_in(bedroom)
pink_drinks.see_art_in(kitchen)
















