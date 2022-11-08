const init = async () => {
  // id
  const photographerId = new URLSearchParams(location.search).get("id"); //URL

  // Build Data
  const { photographers, media } = await getData(); //création d'un objet
  const photographerData = photographers.find(
    //find() renvoie la valeur du premier élément trouvé dans le tableau
    (photographer) => photographer.id == photographerId
  );
  const mediaData = media.filter(
    //filter() crée et retourne un nouveau tableau contenant tous les éléments du tableau d'origine qui remplissent une condition déterminée par la fonction callback.
    (media) => media.photographerId == photographerId
  );

  // Build photographer header
  const Template = new Photographer(photographerData); //la méthode constructor Photographer est appelé par "new" --> un nouvel objet est crée : "photographerData"
  Template.buildPhotographerHeader(); //on ajoute le header
  Template.addPhotographerNameOnContactForm(); //on ajoute le formulaire de contact
  Template.addPriceOnWidget(); //on ajoute la widget prix

  // Event Modal Btn
  const modal = document.getElementById("contact_modal"); //on sélectionne depuis l'id "contact_modal"
  const contactBtn = document.getElementById("header-btn"); //on sélectionne depuis l'id "header-btn"
  const modalCloseBtn = document.getElementById("modal-btn-close"); //on sélectionne depuis l'id "modal-btn-close"
  const submitBtn = document.getElementById("form_contact_btn-submit"); //on sélectionne depuis l'id "form_contact_btn-submit"

  contactBtn.addEventListener("click", (e) => {
    //ajout d'un évènement au clic du bouton
    displayModal(); //contactForm.js
  });

  contactBtn.addEventListener("keydown", (e) => {
    if (e.target === document.activeElement && e.key === "Enter") {
      //l'évenement est déclenché clavier "ENTER"
      displayModal();
    }
  });

  modalCloseBtn.addEventListener("click", (e) => {
    //ferme la modal
    closeModal();
  });

  modalCloseBtn.addEventListener("keydown", (e) => {
    if (e.target === document.activeElement && e.key === "Enter") {
      //ferme la modal clavier "ENTER"
      closeModal();
    }
  });

  submitBtn.addEventListener("keydown", (e) => {
    if (e.target === document.activeElement && e.key === "Tab") {
      //ferme la modal clavier "TAB"
      e.preventDefault();
      modalCloseBtn.focus();
    }
  });

  document.addEventListener("keydown", (e) => {
    if (modal.ariaHidden === "false" && e.key === "Escape") {
      //ferme la modal clavier "ESCAPE"
      closeModal();
    }
  });

  submitBtn.addEventListener("click", (e) => {
    //envoie des infos au click du bouton (console.log)
    e.preventDefault();
    new Message();
    closeModal();
  });

  submitBtn.addEventListener("keydown", (e) => {
    //envoie des infos clavier "ENTER" sur bouton (console.log)
    if (e.target === document.activeElement && e.key === "Enter") {
      new Message();
      closeModal();
    }
  });

  // Build Sorter and Media
  const Sorter = new SorterMedia(mediaData); //la méthode constructor SorterMedia est appelé par "new" --> un nouvel objet est crée : "mediaData" (ligne 7)
  //constructor SorterMedia --> sorterMedia.js
  Sorter.render();
};

init();
