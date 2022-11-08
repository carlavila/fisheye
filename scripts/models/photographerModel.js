class Photographer {
  constructor(data) {
    this.name = data.name;
    this.id = data.id;
    this.city = data.city;
    this.country = data.country;
    this.tagline = data.tagline;
    this.price = data.price;
    this.portrait = data.portrait;
  }

  //PAGE ACCUEIL
  buildPhotographerCard() {
    const wrapper = document.querySelector(".photographer_section"); // on sélectionne la section "photographer_section"
    const article = document.createElement("article"); // on créer un élément "article"

    const html = `
	    <a href="photographer.html?id=${this.id}">
	    <div class="photographer-link">
	      <img src="assets/photographers/${this.portrait}" alt="${this.name}">
	      <h2>${this.name}</h2>
	    </div>
	    </a>
	    <div class="description">
	      <p class="location">${this.city}, ${this.country}</p>
	      <p class="tagline">${this.tagline}</p>
	      <p class="price">${this.price}€/Jour</p>
	    </div>
	  `;

    article.innerHTML = html; // on envoie le html dans l'élément "article"
    wrapper.appendChild(article); // "article" est l'enfant de "wrapper"
  }

  //PAGE PHOTOGRAPHE (HEADER)
  buildPhotographerHeader() {
    const pageWrapper = document.querySelector(".photograph-header"); // on sélectionne le header "photograph-header"

    const html = `
	    <article>
	      <div class="photograph-header-infos">
		<h1>${this.name}</h1>
		<p class="location">${this.city}, ${this.country}</p>
		<p class="tagline">${this.tagline}</p>
	      </div>
	      <button id="header-btn"class="contact_button">Contactez-moi</button>
	      <div class="photograph-header-portrait">
		<img src="assets/photographers/${this.portrait}" alt="portrait ${this.name}">
	      </div>
	    </article>
	  `;

    pageWrapper.innerHTML = html; // on envoie le html dans l'élément "photograph-header"
  }

  addPhotographerNameOnContactForm() {
    const pageWrapper = document.getElementById(
      "modal-header-photographer-name"
    ); //on sélectionne depuis l'id "modal-header-photographer-name"
    pageWrapper.innerHTML = this.name;
  }

  addPriceOnWidget() {
    const pageWrapper = document.getElementById("widget-price"); //on sélectionne depuis l'id "widget-price"
    pageWrapper.innerHTML = this.price;
  }
}
