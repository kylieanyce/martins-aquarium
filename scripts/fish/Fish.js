export const Fish = (fish) => {
    return `
        <section class="fishCard">
            <div><img  class="fishCard__image" src="${fish.image}" /></div>
            <div class="fishCard__name">${fish.name}</div>
            <div class="fishCard__species">${fish.species}</div>
            <div class="fishCard__size">${fish.size}</div>
            <div class="fishCard__location">${fish.location}</div>
            <div class="fishCard__diet">${fish.food}</div>
        </section>
    `
};