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
     
	//PAGE ACCUEIL PHOTOGRAPHES
	buildPhotographerCard() {
      
	  const wrapper = document.querySelector(".photographer_section");
	  const article = document.createElement("article");
      
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
      
	  article.innerHTML = html;
	  wrapper.appendChild(article);
	}
      

	//PAGE PHOTOGRAPHE (HEADER)
	buildPhotographerHeader() {
      
	  const $pageWrapper = document.querySelector(".photograph-header");
       
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
      
	  $pageWrapper.innerHTML = html
      
	}
      
	//à compléter
      
}