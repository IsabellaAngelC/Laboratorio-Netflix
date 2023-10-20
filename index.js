function renderMoviesRecommended(movies) {
    let container = document.getElementById("recommended")
    container.innerHTML = ""
    for(let i = 0; i < movies.length; i++) {
        const movie = movies[i]
        container.innerHTML += movie.toHtmlCart(i)
    }
}

function renderMoviesTrending(movies) {
    let container = document.getElementById("trending")
    container.innerHTML = ""
    for(let i = 0; i < movies.length; i++) {
        const movie = movies[i]
        container.innerHTML += movie.toHtmlCart(i)
    }
}

function renderBanner (num) {
    let container = document.getElementById("banner")
    container.innerHTML = moviesRecommended[num].toHtmlBanner()
}

function changeBanner (num) {
    renderBanner(num)
}



function movieSelected(num) {
    const movie = movies[num]
    console.log(movie)
}



let moviesRecommended = []
for (let i = 0; i < recommended.length; i++){
    const movieJSON = recommended[i]
    const movie = new Movie(movieJSON.title, movieJSON.description, movieJSON.rating, movieJSON.imgCart, movieJSON.imgBanner)
    moviesRecommended.push(movie)
}

let moviesTrending = []
for (let i = 0; i < trending.length; i++){
    const movieJSON = trending[i]
    const movie = new Movie(movieJSON.title, movieJSON.description, movieJSON.rating, movieJSON.imgCart, movieJSON.imgBanner)
    moviesTrending.push(movie)
}

renderMoviesRecommended(moviesRecommended)
renderMoviesTrending(moviesTrending)
renderBanner(0)