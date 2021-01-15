import { useFish } from "./FishDataProvider.js";
import { Fish } from "./Fish.js";
import { mostHolyFish, semiHolyFish, nonHolyFish } from './FishDataProvider.js'


const buildFishListHTML = (arrayOfFish, heading) => {
    let fishHTMLRepresentation = `<h3>${heading}</h3>`
    for (const fishobj of arrayOfFish) {
        fishHTMLRepresentation += Fish(fishobj)
    }
    return fishHTMLRepresentation
}

export const FishList = () => {

        const contentElement = document.querySelector(".containerLeft__fishList");

        const holyFishArray = mostHolyFish();
        const holyFishHTMLRepresentations = buildFishListHTML(holyFishArray, "Holy Fish")

        const kindaHolyFishArray = semiHolyFish();
        const semiHolyFishHTMLRepresentations = buildFishListHTML(kindaHolyFishArray, "Semi-Holy Fish")

        const notHolyFishArray = nonHolyFish();
        const nonHolyFishHTMLRepresentations = buildFishListHTML(notHolyFishArray, "Non-Holy Fish")
    
        contentElement.innerHTML += `
            <article class="containerLeft__fishCards">
            ${holyFishHTMLRepresentations}
            ${semiHolyFishHTMLRepresentations}
            ${nonHolyFishHTMLRepresentations}
            </article>
        `
    }






//--------------------------------------------------------------------------
//These are the individual funtions before manipulated to be looped through
//-------------------------------------------------------------------------- 
//export const FishList = () => {

//     const contentElement = document.querySelector(".containerLeft__fishList");
//     const holyFishArray = mostHolyFish();
//     const kindaHolyFishArray = semiHolyFish();
//     const notHolyFishArray = nonHolyFish();

//     let holyFishHTMLRepresentations = ""
//     for (const fishobj of holyFishArray) {
//         holyFishHTMLRepresentations += Fish(fishobj)
//     }
//     let semiHolyFishHTMLRepresentations = ""
//     for (const fishobj of kindaHolyFishArray) {
//         semiHolyFishHTMLRepresentations += Fish(fishobj)
//     }
//     let nonHolyFishHTMLRepresentations = ""
//     for (const fishobj of notHolyFishArray) {
//         nonHolyFishHTMLRepresentations += Fish(fishobj)
//     }

//     contentElement.innerHTML += `
//         <article class="containerLeft__fishCards">
//         ${holyFishHTMLRepresentations}
//         ${semiHolyFishHTMLRepresentations}
//         ${nonHolyFishHTMLRepresentations}
//         </article>
//     `
// }