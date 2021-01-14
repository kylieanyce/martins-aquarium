import { locationHTML } from './Locations.js'
import { locationData } from './LocationDataProvider.js'

export const locationList = () => {
    const contentElement = document.querySelector(".containerLeft__travelLocations")
    const locationDataReturn = locationData()

    let locationHTMLrepresentation = ""
    for (const location of locationDataReturn) {
        locationHTMLrepresentation += locationHTML(location)
    }

    contentElement.innerHTML += `
    <article class="locationsList">
    ${locationHTMLrepresentation}
    </article>
    `
}