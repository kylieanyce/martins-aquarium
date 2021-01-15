const fishCollection = [
    {
        image: "../images/Breeding+Nemo.jpg",
        name: "Nemo",
        species: "Amphiprioninae",
        location: "Great Barrier Reef, Australia",
        size: 9,
        food: "Seafood",
    },
    {
        image: "../images/Breeding+Nemo.jpg",
        name: "Nemo",
        species: "Amphiprioninae",
        location: "Great Barrier Reef, Australia",
        size: 5,
        food: "Seafood",
    },
    {
        image: "../images/Breeding+Nemo.jpg",
        name: "Nemo",
        species: "Amphiprioninae",
        location: "Great Barrier Reef, Australia",
        size: 4,
        food: "Seafood",
    },
    {
        image: "../images/Breeding+Nemo.jpg",
        name: "Nemo",
        species: "Amphiprioninae",
        location: "Great Barrier Reef, Australia",
        size: 5,
        food: "Seafood",
    },
    {
        image: "../images/Breeding+Nemo.jpg",
        name: "Nemo",
        species: "Amphiprioninae",
        location: "Great Barrier Reef, Australia",
        size: 3,
        food: "Seafood",
    },
];
export const useFish = () => {
    return fishCollection.slice()
};

export const mostHolyFish = () => {
    // 3, 6, 9, 12, etc... fish
    const fishThreeInches = []

    for (const fish of fishCollection) {
        if (fish.size % 3 === 0){
            fishThreeInches.push(fish)
        }
    }
    console.log("mostHolyFish", fishThreeInches)
    return fishThreeInches;
}


export const semiHolyFish = () => {
    // 5, 10, 15, 20, 25, etc... fish
    const fishFiveInches = []

    for (const fish of fishCollection) {
        if (fish.size % 5 === 0) {
            fishFiveInches.push(fish);
        }
    }
    console.log("semi holy fish", fishFiveInches)
    return fishFiveInches;
}

export const nonHolyFish = () => {
    // Any fish not a multiple of 3 or 5
    const notHolyFish = []

    for (const fish of fishCollection) {
        if (fish.size % 3 !== 0 && fish.size % 5 !== 0) {
            notHolyFish.push(fish);
        }
    }
    return notHolyFish
}