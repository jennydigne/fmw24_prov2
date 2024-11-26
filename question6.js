// 6. Hämta och visa foton. (3p)
// Ladda ner foton med fetch från denna url: https://jsonplaceholder.typicode.com/photos
// Visa dom första 10 fotona på sidan.
// När man klickar på ett foto ska dess titel visas i en popup med `alert`

async function getPhotos() {
    const response = await fetch("https://jsonplaceholder.typicode.com/photos");
    const data = await response.json();

    data.slice(0, 10).forEach((photo) => {
        const photoEl = document.createElement("img");
        document.body.appendChild(photoEl);
        photoEl.src = photo.thumbnailUrl;
        photoEl.addEventListener("click", function () {
        alert(photo.title);
})
    })
}

getPhotos();