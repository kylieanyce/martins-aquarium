const fishCollection = [
    {
        name: "Nemo",
        species: "Amphiprioninae",
        location: "Great Barrier Reef, Australia",
        size: "couple inches",
        food: "Seafood"
    }
]
export const useFish = () => {
    return fishCollection.slice()
}