export const locationHTML = (location) => {
    return `
    <div class="locationCard">
        <p class="locationCard__city">${location.city}</p>
        <p class="locationCard__country">${location.country}</p>
        <p class="locationCard__waterBody">${location.waterBody}</p>
        <p><img class="locationCard__image" src="${location.image}"></p>
    </div>
    `
}

