/**
 *  FishList which renders individual fish objects as HTML
 */

// TODO: Import `useFish` from the data provider module

export const FishList = () => {

    // Get a reference to the `<article class="content">` element
    const contentElement = document.querySelector("insert selector here")
    const fishes = useFish()

    // Add to the existing HTML in the content element
    contentElement.innerHTML += `
        <article class="fishList">
            All the fish go here!
        </article>
    `
}