const btnElem = document.getElementById("loadBtn");
const gallerySection = document.getElementById("gallery-box");

async function loadPhotos() {
    gallerySection.innerHTML = "<p class='desc'>Loading...</p>";

    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/photos");
        console.log(response);

        if(!response.ok) {
            throw new Error("Server error:" + response.status);
        }
        const photos = await response.json();
        console.log(photos);

        const galleryCard = photos.map((photos) => {
            return `
                <div class="card">
                    <h3 class="photo-title"> ${photos.id}. ${photos.title}</h3>
                    <img src="${photos.url}" alt="" class="photo-img"
                </div>
            `
        }).join("");
        gallerySection.innerHTML = galleryCard;
    } catch (error) {
        gallerySection.innerHTML = `<p>Something went wrong: ${error.message}</p>`
    }
}

btnElem.addEventListener("click", loadPhotos);