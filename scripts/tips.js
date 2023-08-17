import { getTankTips } from "./database.js"


export const tankTipRender = () => {
    const tips = getTankTips()
    
    
    // Start building a string filled with HTML syntax
    let htmlString = '<aside class="tank-tips"><h3>How to clean your tank</h3>'

    // Create HTNL representations of each fish here
    for (const tip of tips) {

        // Why is there a backtick used for this string?
        htmlString += ` <div class="tip">Step ${tip.step}: ${tip.tip}</div>`
    }
    htmlString += `</aside>`
    
    return htmlString
    
}
