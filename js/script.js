// This function apply for fetch data from api
const loadArtists = async () => {
    const inputField = document.getElementById("user-input");
    const userInput = inputField.value;
    const res = await fetch(`https://www.theaudiodb.com/api/v1/json/2/search.php?s=${userInput}`);
    const data = await res.json();
    showArtists(data.artists);
}

// This function apply for show artists on UI

const showArtists = artists => {
    const artistContainer = document.getElementById("artist-container");
    artists?.forEach(artist => {
        console.log(artist);
        const div = document.createElement("div");
        div.innerHTML = `
            ${artist.strArtist}

        `;
        artistContainer.appendChild(div);
    })
}