import { getLocations } from "./database.js"

export const locationRender = () => {
    const locations = getLocations()
    
    
    // Start building a string filled with HTML syntax
    let htmlString = '<aside class="locations"><h3>My favorite travel spots</h3>'

    // Create HTNL representations of each fish here
    for (const location of locations) {

        // Why is there a backtick used for this string?
        htmlString += ` <div class="tip">${location.trips}</div>`
    }
    htmlString += `</aside>`
    
    return htmlString
    
}
