const database = {
    fish: [
        {
            image: "https://www.aquariumfishsale.com/cdn/shop/products/Bicolor-Angelfish.jpg",
            name: "Bart",
            species: "Fresh Water Angelfish",
            location: "Bahamas",
            length: 13,
            food: "Pete's famous fish food",
        },
        {
            image: "https://www.aquariumfishsale.com/cdn/shop/products/Blonde-Naso-Tang.jpg",
            name: "Bryce",
            species: "King of tropical fish",
            location: "Cayman Islands",
            length: 2,
            food: "peanut butters and jellyfish",
        },
        {
            image: "https://www.aquariumfishsale.com/cdn/shop/products/blue_jaw_trigger_female.jpg",
            name: "Steve",
            species: "Asian arowana",
            location: "Hawaii",
            length: 4,
            food: "spaghetti and sharkmeat",
        },
        {
            image: "https://www.aquariumfishsale.com/cdn/shop/products/Green-Chromis-Damsel.jpg",
            name: "Butters",
            species: "Silver arowana",
            location: "Okinawa",
            length: 12,
            food: "fancy feast (fish edition)",
        },
        {
            image: "https://www.fisheries.noaa.gov/s3/dam-migration/750x500_swordfish_swimming_alone_shuterstock_joe_flynn.jpg",
            name: "Corporal",
            species: "Soldier",
            location: "Sword Country",
            length: 250,
            food: "fancy feast (fish edition)",
        },
    ],

    tankTips: [

        {
            step: 1,
            tip: "Test the Water Quality"
        },
        {
            step: 2,
            tip: "Remove Algae"
        },
        {
            step: 3,
            tip: "Prune the Plants"
        },
        {
            step: 4,
            tip: "Turn off Equipment"
        },
        {
            step: 5,
            tip: "Vacuum the Substrate"
        },
        {
            step: 6,
            tip: "Clean the Filter"

        },
        {
            step: 7,
            tip: "Refill the Water"
        },
        {
            step: 8,
            tip: "Turn on Equipment"
        },
        {
            step: 9,
            tip: "Wipe the Glass"
        },
    ],
    locations: [

        {
            id: 1,
            trips: "Coast of Tropical fish"
        },
        {
            id: 2,
            trips: "Tropical Fish cove"
        },
        {
            id: 3,
            trips: "Kodiak Island"
        },
        {
            id: 4,
            trips: "Sword Fish World"
        },
        {
            id: 5,
            trips: "Sea World (for inspiration)"
        },
        {
            id: 6,
            trips: "Shamu's favorite fish palace"

        },
        {
            id: 7,
            trips: "Swedish Fish Farm"
        },

    ]

}



export const getFish = () => {
    return database.fish.map(fish => ({ ...fish }))
}

export const getTankTips = () => {
    return database.tankTips.map(tankTips => ({ ...tankTips }))
}

export const getLocations = () => {
    return database.locations.map(locations => ({ ...locations }))
}





