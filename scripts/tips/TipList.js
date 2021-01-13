import { useTips } from "./TipDataProvider.js";
import { Tip } from "./Tip.js";


export const TipList = () => {

    const contentElement = document.querySelector(".containerLeft__fishList");
    const fishes = useTips();

    // Generate all of the HTML for all of the fish
    let tipHTMLRepresentations = ""
    for (const fish of fishes) {
        fishHTMLRepresentations += Fish(fish)
        /*
            Invoke the Fish component function
            and pass the current fish object as an argument.
            Each time, add the return value to the
            fishHTMLRepresentations variable with `+=`
        */
    }
    // Add to the existing HTML in the content element
    contentElement.innerHTML += `
        <article class="fishList">
        ${fishHTMLRepresentations}
        </article>
    `
}