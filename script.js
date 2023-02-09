const addMovieButton=document.getElementById("add-movie")
addMovieButton.onclick=()=> {
    const imageurl=document.getElementById("image-url");
    const tittle=document.getElementById("tittle");
    const description=document.getElementById("description");
    const imbdlink=document.getElementById("imdb-link");

    createMovieCard(imageurl.value,tittle.value,description.value,imbdlink.value)

    imageurl.value=""
    tittle.value=""
    description.value=""
    imbdlink.value=""

}
const createMovieCard = (imageurl,tittle,description,imbdlink) => {
    const movieCard=document.createElement("div");
    movieCard.className="col";
    movieCard.innerHTML= `
        <div class = "card" style="width: 18rem;">
             <img src="${imageurl}" class="card-img-top" alt="${tittle}"/>
                <div class="card-body">
                    <h5 class="card-title">${tittle}</h5>
                    <p class="card-text">${description}</p>
                    <a href="${imbdlink}" class="btn btn-primary">Go to IMDB</a>
               </div>
        </div>
    `;

    const movieListContainer=document.getElementById("movie-list")
    movieListContainer.appendChild(movieCard)
}