class Video {
  constructor(data) {
    this.type = "video";
    this.medium = data.video;
    this.id = data.id;
    this.photographerId = data.id;
    this.title = data.title;
    this.likes = data.likes;
    this.date = data.date;
    this.price = data.price;
  }

  creatHtml() {
    //même chose que dans imageModel.js
    const card = document.createElement("article");
    card.setAttribute("aria-label", "carte Media");

    const mediumContainer = document.createElement("div");
    mediumContainer.classList.add("medium-container");

    const infosContainer = document.createElement("div");
    infosContainer.classList.add("infos-container");

    card.classList.add("photograph-medium");
    card.appendChild(mediumContainer);
    card.appendChild(infosContainer);

    // Media
    const elementMedium = document.createElement("video"); //créer un élément "video"
    elementMedium.setAttribute("src", `assets/media/${this.medium}`); //la valeur de l'attribut SRC est "assets/media..."
    elementMedium.setAttribute("tabindex", "0"); //la valeur de l'attribut TABINDEX est "0"
    elementMedium.setAttribute("aria-label", "medium"); //la valeur de l'attribut ARIA-LABEL est "medium"
    elementMedium.setAttribute("alt", `${this.title}`); //la valeur de ALT est "this.title" (ligne 7)
    mediumContainer.appendChild(elementMedium);

    //Titre
    //même chose que dans imageModel.js
    const titleCard = document.createElement("h3");
    titleCard.textContent = this.title;
    infosContainer.appendChild(titleCard);

    //Likes
    //même chose que dans imageModel.js
    const elementLikes = document.createElement("div");
    elementLikes.classList.add("likes");
    const elementLikesCount = document.createElement("span");
    elementLikesCount.classList.add("likesCount");
    elementLikesCount.textContent = this.likes;
    const elementLikesBtn = document.createElement("i");
    elementLikesBtn.classList.add("fa-solid", "fa-heart", "heart-btn");
    elementLikesBtn.setAttribute("tabindex", "0");
    elementLikesBtn.setAttribute("aria-label", "like");
    elementLikesBtn.setAttribute("role", "button");
    elementLikes.appendChild(elementLikesCount);
    elementLikes.appendChild(elementLikesBtn);
    infosContainer.appendChild(elementLikes);

    return card;
  }

  sliderRender() {
    //même chose que dans imageModel.js
    const slide = document.createElement("div");
    slide.classList.add("slide", "hidden");

    const html = `
	    <video controls class="slide-medium" src="assets/media/${this.medium}" alt=${this.title}><p>Votre navigateur ne supporte pas les vidéo HTML5 utilisez ce lien pour visionner la vidéoYour browser doesn't support HTML5 video : 
	    <a href="assets/media/${this.medium}">Vidéo</a> instead.</p></video>
	    <p class="title">${this.title}</p>
	  `;
    slide.innerHTML = html;

    return slide;
  }
}
