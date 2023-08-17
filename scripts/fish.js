import { getFish } from "./database.js"
const fishes = getFish()

/*export const FishList = () => {
    // Invoke the function that you imported from the database module
    
    
    // Start building a string filled with HTML syntax
    let htmlString = '<article class="fishList">'

    // Create HTNL representations of each fish here
    for (const fish of fishes) {

        // Why is there a backtick used for this string?
        htmlString += `<section class="fish card">
            <div><img  class="fish__image image--card" src="${fish.image}" /></div>
            <div class="fish__name">name: ${fish.name}</div>
            <div class="fish__species">${fish.species}</div>
            <div class="fish__length">length: ${fish.length} inches</div>
            <div class="fish__location">harvested: ${fish.location}</div>
            <div class="fish__diet">favorite food: ${fish.food}</div>
        </section>
`
    }
    htmlString += `</article>`

    return htmlString
}
*/
export const mostHolyFish = () => {

    
    const holyFish = []

    for (const fish of fishes) {
        if (fish.length % 3 === 0) {
            holyFish.push(fish)
        }
    } 
    let htmlString = '<article class="fishList">'

    // Create HTNL representations of each fish here
    for (const fish of holyFish) {

       
        htmlString += `<section class="fish card">
            <div><img  class="fish__image image--card" src="${fish.image}" /></div>
            <div class="fish__name">name: ${fish.name}</div>
            <div class="fish__species">${fish.species}</div>
            <div class="fish__length">length: ${fish.length} inches</div>
            <div class="fish__location">harvested: ${fish.location}</div>
            <div class="fish__diet">favorite food: ${fish.food}</div>
        </section>
`
    }
    htmlString += `</article>`

    return htmlString
    
}

export const soldierFish = () => {
    // 5, 10, 15, 20, 25, etc... fish
    const soldiers = []
    for (const fish of fishes) {
        if (fish.length % 5 === 0) {
            soldiers.push(fish)
        }
    }   
    
    let htmlString = '<article class="fishList">'

    // Create HTNL representations of each fish here
    for (const fish of soldiers) {

       
        htmlString += `<section class="fish card">
            <div><img  class="fish__image image--card" src="${fish.image}" /></div>
            <div class="fish__name">name: ${fish.name}</div>
            <div class="fish__species">${fish.species}</div>
            <div class="fish__length">length: ${fish.length} inches</div>
            <div class="fish__location">harvested: ${fish.location}</div>
            <div class="fish__diet">${fish.food}</div>
        </section>
`
    }
    htmlString += `</article>`

    return htmlString
    
    
}


export const nonHolyFish = () => {
    // Any fish not a multiple of 3 or 5
    const regularFish = []
    for (const fish of fishes) {
        if (fish.length % 3 !== 0 || fish.length %5 !== 0) {
            regularFish.push(fish)
        }
        
    
    }
    
    let htmlString = '<article class="fishList">'
    for (const fish of regularFish) {

       
        htmlString += `<section class="fish card">
            <div><img  class="fish__image image--card" src="${fish.image}" /></div>
            <div class="fish__name">name: ${fish.name}</div>
            <div class="fish__species">${fish.species}</div>
            <div class="fish__length">length: ${fish.length} inches</div>
            <div class="fish__location">harvested: ${fish.location}</div>
            <div class="fish__diet">favorite food: ${fish.food}</div>
        </section>
`
    }
    htmlString += `</article>`

    return htmlString
    
}


