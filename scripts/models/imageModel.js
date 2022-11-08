class Image {
  constructor(data) {
    this.type = "image"; // Le mot clé this commence à faire référence au nouvel objet et il devient l'objet d'instance actuel. Le nouvel objet est ensuite renvoyé comme valeur de retour du constructeur.
    this.medium = data.image;
    this.id = data.id;
    this.photographerId = data.id;
    this.title = data.title;
    this.likes = data.likes;
    this.date = data.date;
    this.price = data.price;
  }

  creatHtml() {
    // Création des articles (items des photographes)
    const card = document.createElement("article"); // créer un élément "article"
    card.setAttribute("aria-label", "carte Media"); // la valeur de l'attribut ARIA-LABEL est "carte Media"

    const mediumContainer = document.createElement("div"); // créer un élément "div"
    mediumContainer.classList.add("medium-container"); // "medium-container" est le nom de la classe de la div

    const infosContainer = document.createElement("div"); //créer un élément "div"
    infosContainer.classList.add("infos-container"); // "infos-container" est le nom de la classe de la div

    card.classList.add("photograph-medium"); // "photograph-medium" est le nom de la classe de article
    card.appendChild(mediumContainer); // "medium-container" est l'enfant de "photograph-medium"
    card.appendChild(infosContainer); // "infos-container" est l'enfant de "photograph-medium"

    // Media (images + vidéos)
    const elementMedium = document.createElement("img"); // créer un élément "img"
    elementMedium.setAttribute("src", `assets/media/${this.medium}`); // la valeur de l'attribut SRC est "assets/...."
    elementMedium.setAttribute("tabindex", "0"); // la valeur de TABINDEX est "0"
    elementMedium.setAttribute("aria-label", "medium"); // la valeur de l'attribut "ARIA-LABEL" est "medium"
    elementMedium.setAttribute("alt", `${this.title}`); // la valeur de  de l'attribut ALT est "this.title"
    mediumContainer.appendChild(elementMedium); // "img" est l'enfant de la div "medium-container"

    //Titre
    const titleCard = document.createElement("h3"); // créer un élément "h3"
    titleCard.textContent = this.title; // récupère le contenu de l'élément title (ligne 7)
    infosContainer.appendChild(titleCard); // "h3" est l'enfant de la div "infos-container"

    //Likes
    const elementLikes = document.createElement("div"); // créer un élément "div"
    elementLikes.classList.add("likes"); // "likes" est le nom de la div
    const elementLikesCount = document.createElement("span"); // créer un élément "span"
    elementLikesCount.classList.add("likesCount"); // "likesCount" est le nom de span
    elementLikesCount.textContent = this.likes; // récupère le contenu de l'élément likes (ligne 8)
    const elementLikesBtn = document.createElement("i"); // créer un élément "i"
    elementLikesBtn.classList.add("fa-solid", "fa-heart", "heart-btn"); // "fa-solid", "fa-heart", "heart-btn" sont les classes de "i"
    elementLikesBtn.setAttribute("tabindex", "0"); // la valeur de l'attribut TABINDEX est "0"
    elementLikesBtn.setAttribute("aria-label", "like"); // la valeur de l'attribut de "ARIA-LABEL" est "like"
    elementLikesBtn.setAttribute("role", "button"); // la valeur de l'attribut de "RÔLE" est button
    elementLikes.appendChild(elementLikesCount); // "likesCount" est l'enfant de la div "likes"
    elementLikes.appendChild(elementLikesBtn); // "fa-solid" est l'enfant de la div "likes"
    infosContainer.appendChild(elementLikes); // "likes" est l'enfant de la div "infos-container"

    return card;
  }

  // SLIDER (aller dans slider.js)
  sliderRender() {
    const slide = document.createElement("div"); // créer un élément "div"
    slide.classList.add("slide", "hidden"); // "slider" est le nom de la classe de "div"

    const html = `
		<img class="slide-medium" src="assets/media/${this.medium}" alt=${this.title}> 
		<p class="title">${this.title}</p>
		`; // apparition de l'image et du titre

    slide.innerHTML = html; // faire apparaître html dans la div "slider"

    return slide;
  }
}
