import { mostHolyFish, soldierFish, nonHolyFish } from './fish.js'

import { tankTipRender } from './tips.js'

import { locationRender } from './locations.js' 

const fishCollection = document.querySelector(".allFish")
fishCollection.innerHTML = mostHolyFish() + soldierFish() + nonHolyFish()

const tankDiv = document.querySelector(".allTips")
tankDiv.innerHTML = tankTipRender()

const locationDiv = document.querySelector('.allLocations')
locationDiv.innerHTML = locationRender()


