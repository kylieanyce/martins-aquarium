import { useTips } from "./TipDataProvider.js";
import { Tip } from "./tips.js";


export const TipList = () => {

    const contentElement = document.querySelector(".containerRight__tips");
    const tips = useTips();

    let tipHTMLRepresentations = ""
    for (const tip of tips) {
        tipHTMLRepresentations += Tip(tip)
    }
    contentElement.innerHTML += `
        <article class="containerRight__tipCard">
        ${tipHTMLRepresentations}
        </article>
    `
}