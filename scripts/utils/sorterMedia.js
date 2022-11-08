// afficher les médias + trier par
class SorterMedia {
  constructor(Media) {
    this.media = Media;
    this.sorterFormWrapper = document.querySelector(".sorter-form-wrapper");
    this.mediaWrapper = document.querySelector(".photograph-media");
    this.sliderWrapper = document.querySelector(".slider-media");
  }

  async displayMedia() {
    this.sliderWrapper.innerHTML = "";

    this.media.forEach((media) => {
      const medium = new MediaFactory(media); // création de l'objet (MEDIAFACTORY.JS)
      //appendChild() méthode ajoute un nœud (élément) en tant que dernier enfant d'un élément.
      this.mediaWrapper.appendChild(medium.creatHtml()); //imageModel.js + videoModel.js
      this.sliderWrapper.appendChild(medium.sliderRender()); //imageModel.js + videoModel.js
    });
    countLikes(); //likes.js
    heartManager(); //likes.js
  }

  async sorterMedia(orderBy) {
    this.clearMediaWrapper();

    switch (
      orderBy //ordre
    ) {
      case "likes": // Instructions à exécuter lorsque le résultat de "orderBy" correspond à "likes"
        this.media.sort((a, b) => (a.likes > b.likes ? 1 : -1)).reverse(); // La méthode sort() trie les éléments d'un tableau et renvoie le même tableau trié.
        break;

      case "date":
        this.media.sort((a, b) => (a.date > b.date ? 1 : -1)).reverse();
        break;

      case "title":
        this.media.sort((a, b) => (a.title > b.title ? 1 : -1));
        break;

      default:
        console.log("OrderBy non valide");
    }

    this.displayMedia();
    displaySlider();
  }

  onChangeSorter() {
    this.sorterFormWrapper
      .querySelector("form")
      .addEventListener("change", (e) => {
        console.log(e.target);
        const orderBy = e.target.value;
        this.sorterMedia(orderBy);
      });
  }

  clearMediaWrapper() {
    this.mediaWrapper.innerHTML = "";
  }

  render() {
    const sorterForm = `
		<form action="#" id="dropdown">
	  		<label for="media-select">Trier par</label>
			<select name="media" id="media-select">
				<option value="likes">Popularité</option>
				<option value="date">Date</option>
				<option value="title">Titre</option>
			</select>  
		</form> 
	  `;
    this.sorterFormWrapper.innerHTML = sorterForm;
    this.onChangeSorter();
    this.displayMedia();
    displaySlider();
  }
}
