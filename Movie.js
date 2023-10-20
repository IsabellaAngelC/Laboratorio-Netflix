class Movie {

    constructor(title, description, rating, imgCart, imgBanner) {
        this.title = title;
        this.description = description;
        this.rating = rating;
        this.imgCart = imgCart;
        this.imgBanner = imgBanner
    }

    getTitle () {
        return this.title
    }

    getDescription () {
        return this.description
    }

    getRating () {
        return this.rating
    }

    getCart () {
        return this.imgCart
    }

    getBanner () {
        return this.imgBanner
    }

    showStars (stars) {
        let html = ""
        for (let i = 0; i < stars; i++) {
            html += '<img src="Buttons/baseline_star_outline_white_48dp.png" class="starsImg"/>'
        }
        return html
    }

    toHtmlCart(num) {
        return `
        <div class="card" onclick="changeBanner(${num})">
            <img src="${this.imgCart}" class="imgCart"/>
            <h4 class="titleCart">${this.title}</h4>
            <div class="stars">
                ${this.showStars(this.rating)}
            </div>
        </div>
        `
    }

    toHtmlBanner() {
        return `
        <div class="bannerCard">
            <img src="${this.imgBanner}" class="imgBanner"/>
            <div class="bannerInfo">
                <h1 class="titleBanner">${this.title}</h1>
                <p class="descriptionBanner">${this.description}</p>
                <div class="starsBanner">
                    ${this.showStars(this.rating)}
                </div>
                <div class="button">
                    <div class="playButton">Play</div>
                    <img src="Buttons/baseline_play_arrow_white_48dp.png" class="playImage"/>
                </div>
            </div>
        </div>
        `
    }

}